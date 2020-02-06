<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
		    <view>
                <picker mode="date"
            </view>
            <view class="uni-flex uni-column">
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
    
	export default {
		data() {
    		return {
                title: 'map',
                polylines: [
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 117.200983,
                                "longitude": 39.084158
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 114.530235,
                                "longitude": 38.037433
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 112.562678,
                                "longitude": 37.873499
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 111.76629,
                                "longitude": 40.81739
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 123.431382,
                                "longitude": 41.836175
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 125.32568,
                                "longitude": 43.897016
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 126.661665,
                                "longitude": 45.742366
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 121.473662,
                                "longitude": 31.230372
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 118.762765,
                                "longitude": 32.060875
                            }
                        ]
                    },
                    {
                        "points": [
                            {
                                "latitude": 116.407394,
                                "longitude": 39.904211
                            },
                            {
                                "latitude": 120.152585,
                                "longitude": 30.266597
                            }
                        ]
                    }
                ],
                latitude:39.92,
                longitude: 116.46,
                covers:[
                    {
                        id: 1,
                        latitude:39.92,
                        longitude: 116.46,
                        iconPath:'',
                        title: 'test'
                    }
                ]
			}
        },
        methods:{
            evalLines(){
                console.log('eval lines');
                console.log(CityLines.lines);
                return CityLines.lines.map( x => {
                    return {
                        points : x.line.map(point=>{
                            const datas = cur.split(',', 2);
                            return {
                                latitude: datas[0],
                                longitude: datas[1],
                            }
                        }) 
                    }
                });
            }
        }
		
	}
</script>
