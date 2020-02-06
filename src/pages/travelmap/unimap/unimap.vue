<template>
	<view class="content">
		<view class="uni-common-mt">
            
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
                <view class="slice">
                </view>
                <view >
                    <map 
                        style="width: 750rpx; height: 1000rpx;" 
                        :markers="covers"
                        :polyline="polylines">
                    </map>
                </view>
            </view>
		</view>
	</view>
</template>
<script>    
	export default {
		data() {
    		return {
                title: 'map',
                polylines: [],
                // location:{
                // 　　latitude: 0,
                // 　　longitude: 0,
                // },
                covers:[
                    // {
                    //     id: 1,
                    // 　　latitude: 40.013305,
                    // 　　longitude: 118.685713,
                    //     iconPath:'',
                    //     title: 'test'
                    // }
                ],
                date: '2020-01-30'
			}
        },
        computed: {
            startDate(){
                return this.getDate('start');
            },
            endDate() {
                return this.getDate('end');
            },

        },
        onLoad() {
            let that = this;
            uni.getLocation({
                type: 'gcj02',
                success: function (res) {
                    console.log('当前位置的经度：' + res.longitude);
                    console.log('当前位置的纬度：' + res.latitude);
                }
            });
            console.log('onload');
            this.refreshMapCovers();
        },
        methods: {
            bindDateChange: function(e) {
                console.log('date changed');
                this.date = e.target.value;
                this.refreshMapCovers();
            },
            refreshMapCovers(date){
                let that = this;
                uni.request({
                    url:'https://service-9nqsnd2b-1301203847.bj.apigw.tencentcs.com/release/js_func',
                    data:{
                        date:that.date
                    }
                }).then(data=>{
                    var [error, res]  = data;
                    // console.log(res.data.body);
                    that.polylines = res.data.body.map(line => {
                        return {
                            points: line.points,
                            color: "#FF4500",
                            width: 1,
                            arrowLine: true
                        }
                    });
                    console.log(res.data);
                }).catch(error=>{
                    console.log(error);
                });
            },
            getDate(type) {
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
        }
       		
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
    }
    .slice {
        height: 100upx;
    }
</style>
