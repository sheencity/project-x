<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="page-section page-section-gap">
				<map style="width: 750rpx; height: 750rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
				<!-- <view id='map' style='width:800px; height:600px;'></div> -->
			</view>
		</view>
	</view>
</template>
<script>
	import MapLoader from 'assets/amap.js'
	export default {
		data() {
			return {
				title: 'map'
			}
		}
		,mounted () {
			let that = this;
			MapLoader().then(AMap => {
				console.log('地图加载成功')
				that.map = new AMap.Map('map', {
					center: [117.000923, 36.675807],
					zoom: 11
				})
			})
			.catch(e => {
				console.log('地图加载失败' ,e)
			});
		}
	}
</script>
