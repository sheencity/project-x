<template>
	<view>
		<!-- <page-head :title="title"></page-head> -->
		<view class="uni-padding-wrap uni-common-mt">
            <view class="uni-flex uni-column">
                <view class="uni-list">
                    <view class="uni-list-cell">
                        <view class="uni-list-cell-left">
                            日期
                        </view>
                        <view class="uni-list-cell-db">
                            <picker mode="date" 
                                :value="date" 
                                :start="startDate" 
                                :end="endDate" 
                                @change="bindDateChange">
                                <view class="uni-input">{{date}}</view>
                            </picker>
                        </view>
                    </view>
                </view>
                <view >
                    <map 
                        style="width: 750rpx; height: 750rpx;" 
                        :latitude="latitude" 
                        :longitude="longitude" 
                        :markers="covers"
                        :polyline="polylines">
                    </map>
                </view>
            </view>
		</view>
	</view>
</template>
<script>
    import MapLoader from 'assets/amap.js'

    function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
            year = year;
            month = 1;
            day = 1;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
    
		return `${year}-${month}-${day}`;
	}

	export default {
		data() {
    		return {
                title: 'map',
                polylines: [],
            　　latitude: 40.013305,
            　　longitude: 118.685713,
                covers:[
                    {
                        id: 1,
                　　latitude: 40.013305,
                　　longitude: 118.685713,
                        iconPath:'',
                        title: 'test'
                    }
                ],
                date: '2020-01-20'
			}
        },
        computed: {
            startDate(){
                return getDate('start');
            },
            endDate() {
                return getDate('end');
            },
            // polylines(){
                
            //     uni.request({
            //         url:'https://service-9nqsnd2b-1301203847.bj.apigw.tencentcs.com/release/js_func',

            //         success: (data, status)=>{
            //             console.log('requrest status ' + status);
            //             // console.log(data);
            //             this.polylines
            //     }});
            // }
        },
        methods: {
            bindDateChange: function(e) {
                this.date = e.target.value;
                let that = this;
                console.log('date changed');

                uni.request({
                    url:'https://service-9nqsnd2b-1301203847.bj.apigw.tencentcs.com/release/js_func',
                    data:{
                        date:that.date
                    }
                }).then(data=>{
                    var [error, res]  = data;
                    that.polylines = res.data.body;
                    console.log(res.data);
                }).catch(error=>{
                    console.log(error);
                });
            },
            
        }
       		
	}
</script>
