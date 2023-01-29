<template>
	<view>
<button open-type="getUserInfo" @click="getUserProfile">授权信息</button>
</view>
</template>

<script>
import { getUserInfo } from '../../utils/api/api';
	var app = getApp();
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			getUserProfile(e) {
			    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
			    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
			    wx.getUserProfile({
			      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			      success: (res) => {
			        // this.setData({
			        //   userInfo: res.userInfo,
			        //   hasUserInfo: true
			        // })
					app.globalData.userInfo = res.userInfo
			        console.log(res.userInfo)
				// console.log(app.globalData)
					uni.setStorage({
						key:"avatar",
						data: res.userInfo.avatarUrl
					})
					uni.setStorage({
						key:"id",
						data: res.userInfo.avatarUrl
					})
			      }
			    })
			  }
		}
	}
</script>

<style lang="stylus">

</style>
