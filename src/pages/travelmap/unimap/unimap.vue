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
                    <view class="uni-list-cell">
                        <view class="uni-list-cell-left">
                            车次
                        </view>
                        <view class="uni-list-cell-db">
                            <uni-search-bar 
                                placeholder="车次(选填)"
                                @confirm="search">
                            </uni-search-bar>
                        </view>
                    </view>
                </view>
                <view class="slice">
                </view>
                <view >
                    <map 
                        style="width: 750rpx; height: 1000rpx;" 
                        scale="6"
                        :markers="covers"
                        :polyline="polylines">
                    </map>
                </view>
            </view>
		</view>
	</view>
</template>
<script>    
    import uniSearchBar from "@/components/uni-search-bar/uni-search-bar.vue"
	export default {
        components: {  
            uniSearchBar  
        },
		data() {
    		return {
                title: 'map',
                polylines: [],
                covers:[
                    // {
                    //     id: 1,
                    // 　　latitude: 40.013305,
                    // 　　longitude: 118.685713,
                    //     iconPath:'',
                    //     title: 'test'
                    // }
                ],
                date: '2020-01-19',
				searchInput: ''
				
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
            bindDateChange(e) {
                console.log('date changed');
                this.date = e.target.value;
                this.refreshMapCovers();
            },
            refreshMapCovers(){
                let that = this;
                uni.request({
                    url:'https://service-9nqsnd2b-1301203847.bj.apigw.tencentcs.com/release/js_func',
                    data:{
                        date:that.date,
						no: that.searchInput
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
            },
			search(e){
				console.log('onSearch');
				console.log(e);
				this.searchInput = e.value;
				this.refreshMapCovers();
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
        height: 20upx;
    }
</style>
