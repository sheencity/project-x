'use strict';
/**************************************************
Nodejs8.9-Apigateway
***************************************************/
// const got = require('got')
// const ky = require('ky-universal');
const pLimit = require('p-limit');
const _ = require('lodash');
const https = require('https');
const { parse } = require('url');

const key = '<your amap app key>';

const limit = pLimit(4);

function got(url) {
  const parsedUrl = parse(url);
  // console.log(parsedUrl);
  const options = {
    method: 'GET',
    hostname: parsedUrl.hostname,
    path: parsedUrl.path
  }
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks);
        // console.log(body.toString());
        resolve(JSON.parse(body.toString()));
      });
      res.once('error', err => reject(err));
    });

    req.end();
  });
}

exports.main_handler = async (event, context, callback) => {
  const start = new Date().getTime();

  // console.log(evenc t.queryString) // {date:'xxxx-xx-xx'}
  const date = event.queryString.date;
  const vehicleNo = (event.queryString.no ? event.queryString.no : '').toLowerCase();
  console.log(`date= ${date}, no=`);

  // 获取同程数据
  const response = await got(encodeURI(`http://2019ncov.nosugartech.com/data.json`))
  // c`onsole.log(JSON.parse(response.body).data.length);
  const matchedTravels = response.data.filter(travel => {
    return travel.t_date == date && 
      (vehicleNo == ''? true : travel.t_no.toLowerCase().indexOf(vehicleNo) > 0);
  });
  console.log(`matched travels= ${matchedTravels.length}`);
  console.log(matchedTravels);

  const addresses = [];
  matchedTravels.forEach(element => {
    addresses.push(element.t_pos_start);
    addresses.push(element.t_pos_end);
  });
  console.log(`address count= ${addresses.length}`);

  // 查询坐标
  const chunkedAddr = _.chunk(addresses, 10); // 将地址每10个分组，[[x,x,x],[x,x,x],...]
  const base = `https://restapi.amap.com/v3/geocode/geo?key=${key}`;//AMap location API
  const tasks = chunkedAddr.map(chunk => limit(async () => {
    const response = await got(encodeURI(`${base}&address=${chunk.join('|')}&batch=true`));
    // console.log(response);
    return response.geocodes.map(code => code.location);
  }));

  const tmpLocations = await Promise.all(tasks);
  // locations 经纬度的二维坐标
  const locations = _.flattenDeep(tmpLocations).map(_ => _.split(','));

  const addressToLocation = new Map();
  addresses.forEach((ele, index) => {
    // locations[index].length = 0 说明获取坐标失败
    if (!addressToLocation.has(ele)
      && (locations[index] && locations[index].length >= 2
        &&(locations[index][0] != null && locations[index][1] != null))) {

      addressToLocation.set(ele, {
        longitude: parseFloat(locations[index][0]),
        latitude: parseFloat(locations[index][1])
      })
    }
  });

  const body = matchedTravels.filter(travel => {
    return addressToLocation.has(travel.t_pos_start) && addressToLocation.get(travel.t_pos_end);
  }).map(travel => {
    return {
      points: [
        addressToLocation.get(travel.t_pos_start),
        addressToLocation.get(travel.t_pos_end)
      ]
    };
  });
  console.log(`lines count= ${body.length}`)

  const end = new Date().getTime();
  const cost = end - start;
  console.log('func total cost:', cost, 'ms');
  return {
    isBase64: false,
    statusCode: 200,
    headers: { 'Content-Type': 'text', 'Access-Control-Allow-Origin': '*' },
    body,
  };
}
