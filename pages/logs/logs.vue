<template>
	<!--logs.wxml-->
	<view class="container log-list">
	  <block v-for="(log,index) in logs" >
	    <text class="log-item">{{index + 1}}. {{log}}</text>
	  </block>
	</view>

</template>

<script>
	var util = require('../../utils/util.js')

	export default {
		data() {
			return {
				   logs: []
			};
		},
		  onLoad: function () {
			this.logs = (uni.getStorageSync('logs') || []).map(function (log) {
		        return util.formatTime(new Date(log))
		      })
		  }
	}
</script>

<style lang="stylus">
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx; }

.log-item {
  margin: 10rpx; }

</style>
