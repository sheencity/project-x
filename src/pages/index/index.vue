<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<viwe>
			<navigator url="/pages/travelmap/amap/amap">
				<button type="default">同程地图高德</button>
			</navigator>
			<navigator url="/pages/travelmap/unimap/unimap">
				<button type="default">同程地图uni</button>
			</navigator>
		</viwe>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				latitude: 39.909,
				longitude: 116.39742,
				polyline: [{
					points: [{latitude: 0, longitude: 0},{latitude: 39, longitude: 116}]
				}],
				covers: [{
					latitude: 39.909,
					longitude: 116.39742
				}, {
					latitude: 39.90,
					longitude: 116.39
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
