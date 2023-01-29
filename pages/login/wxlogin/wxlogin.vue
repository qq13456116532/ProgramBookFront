<template>
	<view class="wxlogin-container">
	    <view class="notice">
	        <image src="https://file.lantingshucheng.com/myapp/wxlogin/wechat_save.png" bindtap="uploadAvatar"></image>
	        <view class="des">还差一点就完成注册拉~</view>
	    </view>
	    <view class="needInfo">
	        <view class="tips">请设置完善个人信息</view>
	        <form bindsubmit="formSubmit" bindreset="formReset">
	            <!-- <view class="section avatar">
	                <image src="{{userInfoFromApp.avatar}}" bindtap="uploadAvatar"></image>
	                <icon class="upload-icon"></icon>
	            </view> -->
	            <view class="section">
	                <label for="username">用户名<input type="text" v-model="username" placeholder="username" data-type="username" maxlength="16" /></label>
	            </view>
	            <view class="section">
	                <label for="username">邮箱<input type="text" v-model="email" placeholder="email" data-type="email" /></label>
	            </view>
	            <view class="section">
	                <label for="passowrd">密码<input type="text" password="true" v-model="password" placeholder="password" data-type="password" /></label>
	            </view>
	            <view class="section">
	                <!-- <label for="gender">昵称<input type="text" value="{{nickName}}" placeholder="nickname" value="{{userInfoFromApp.nickName}}" bindinput="userInput" data-type="nickname" /></label> -->
					<label for="gender">昵称<input type="text"  placeholder="nickname" v-model="userInfoFromApp.nickName" data-type="nickname" /></label>
					
				</view>
	            <view class="section sex">
	                <text>性别</text>
	                <radio :checked="getGender" @click="genderChange('male')" gender="male"></radio>
	                <label class="label-2__text"><text>男</text></label>
	                <radio :checked="!getGender" @click="genderChange('female')" gender="female"></radio>
	                <label class="label-2__text"><text>女</text></label>
	            </view>
	            <view class="section">
	                <label for="city">城市<input type="text" placeholder="city" v-model="city" data-type="city" /></label>
	            </view>
	        </form>
	        <button type="primary" @click="confirmRegiste" :loading="isShowLoading">确认注册</button>
	    </view>
	    <!-- 出错打印 -->
	    <import src="../../component/err_tips/err_tips.wxml" />
	    <template is="err_tips" :data="err_tips_data" />
	
	    <!-- 成功的提示 -->
	    <import src="../../component/toast/toast.wxml" />
	    <template is="toast" :data="toast_data" />
	</view>

</template>

<script>
	export default {
		data() {
			return {
				rankData: [],
				currentIndex: 0,
				isShowLoading: false,
				userInfoFromApp: null,
				err_tips_data: { err_tips_show: false, err_tips_text: '' },
				username: '',
				email: '',
				password: '',
				nickName: '',
				city: '',
				address: '',
				genderSelect:0
			  }
		},
	  computed: {
		  getGender(){
			  return  this.userInfoFromApp.gender == 'male' ? 1 : 0;
		  }
	  },
		methods: {
			 //用户改变性别
		 genderChange(gender){
			  var self = this;
			this.genderSelect = gender == 'male' ? 1 : 0;
			this.userInfoFromApp.gender = gender
			},
			//去注册
			confirmRegiste: function (event) {
			    var self = this;
			    //校验
			    var usernameReg = /^[0-9a-zA-Z]{4,16}$/; // 4-16位
			    var emailReg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
			    var passwordReg = /^[a-zA-Z\d_]{8,}$/; //最少8位
			    var nickNameReg = /^[\u4e00-\u9fa5\w]{2,8}$/; //2-8位数字或者字母或者中文
			    var cityReg = /^[\u4e00-\u9fa5\w]{2,10}$/; //2-10位数字或者字母或者中文
			    if (this.username!="") {
			      if (this.email!="") {
			        if (this.password!="") {
			          if (this.nickName!="") {
			            if (this.city!="") {
			              //校验成功，开始注册
			              var registeData = {
			                nickName: this.nickName,
			                realm: '',
			                signature: '',
			                age: -1,
			                avatar: this.userInfoFromApp.avatar + '?imageView2/1/w/60/h/60/format/jpg/interlace/1/q/75|imageslim', // 调用七牛的图片处理api
			                gender: this.userInfoFromApp.gender,
			                myBooks: [],
			                setting: [],
			                hasReadTime: 0,
			                continueReadDay: 0,
			                address: this.address,
			                auth: '{"type": "wechat", "wxOpenId": "' + this.userInfoFromApp.openid + '"}',
			                username: this.username,
			                email: this.email,
			                password: this.password,
			                emailVerified: true
			              };
			              //设置button的loading显示
			              this.isShowLoading=true
			              // uni.request({
			              //   url: Api.registe(),
			              //   method: 'POST',
			              //   data: registeData,
			              //   success: function (res) {
			              //     var tmpData = res.data;
			              //     //注册成功，缓存userid和openid
			              //     if (tmpData.id) {
			              //       var idStr = JSON.stringify({ userid: tmpData.id, openid: self.data.userInfoFromApp.openid });
			              //       uni.setStorageSync('id', idStr);
			              //       //登录,  uni.navigateTo 和 uni.redirectTo 不允许跳转到 tabbar 页面，只能用 uni.switchTab 跳转到 tabbar 页面
			              //       app.doLogin(function () {
			              //         uni.switchTab({ url: '../../booklist/booklist' });
			              //       });
			              //     } else {
			              //       // 提示错误
			              //       var msg = tmpData.error.details.messages;
			              //       var msgArr = [];
			              //       for (var i in msg) {
			              //         msgArr.push(msg[i][0]);
			              //       }
			              //       Util.showErrMsg(self, msgArr.join(' ,'), 1500);
			              //     }
			              //   },
			              //   fail: function (err) {
			              //     console.log('注册失败， ' + err);
			              //   },
			              //   complete: function () {
			              //     //关掉提示
			              //     self.setData({ isShowLoading: false });
			              //   }
			              // });
			            } else {
			              Util.showErrMsg(self, '请输入所在城市', 1500);
			            }
			          } else {
			            Util.showErrMsg(self, '请输入2-8位的昵称', 1500);
			          }
			        } else {
			          Util.showErrMsg(self, '请输入至少8位数字或者字母组成的密码', 1500);
			        }
			      } else {
			        Util.showErrMsg(self, '请输入有效邮箱', 1500);
			      }
			    } else {
			      Util.showErrMsg(self, '请输入4-16字母或者数字组成的用户名', 1500);
			    }
			  },
			
		},
		created() {
			this.userInfoFromApp= {
			  openid: "1",
			  nickName: "",
			  gender: "male"
			}
			}
			}
</script>

<style>
.wxlogin-container{
  background-color: #efeff4;
}
.wxlogin-container .notice{
  background-color: #09BB07;
  text-align: center;
  padding-top: 30rpx;
  padding-bottom: 40rpx;
}
.wxlogin-container .notice image{
  width: 200rpx;
  height: 200rpx;
  display: block;
  margin: 0 auto;
}
.wxlogin-container .notice .des{
  color: #fff;
  display: block;
  font-size: 30rpx;
  margin: 20rpx 80rpx;
}
.wxlogin-container .needInfo{
  padding: 30rpx 20rpx;
}
.wxlogin-container .needInfo checkbox-group{
  padding-bottom: 30rpx;
}
.wxlogin-container .needInfo .checkbox{
  font-size: 26rpx;
  color: #a6a6a6;
}
.wxlogin-container .needInfo .checkbox > checkbox{
  vertical-align: middle;
}
.wxlogin-container .needInfo button{
  margin-bottom: 30rpx;
}
.wxlogin-container .tips{
  text-align: left;
  font-size: 30rpx;
  margin-bottom: 20rpx;
}
.wxlogin-container .avatar{
  text-align: center;
  position: relative
}
.wxlogin-container .avatar > image{
  width: 150rpx;
  height: 150rpx;
  border-radius: 75rpx;
  margin-left: 30rpx;
}
.wxlogin-container .avatar .upload-icon{
  position: relative;
  left: -54rpx;
  top: -14rpx;
  display: inline-block;
  width: 56rpx;
  height: 48rpx;
  background-size: 300rpx 300rpx;
  background-position: -58rpx -188rpx;
}
.wxlogin-container .section{
  margin-bottom: 40rpx;
  font-size: 28rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
}

.wxlogin-container .section  input{
  display: inline-block;
  width: 80%;
  height: 40rpx;
  border: 1px solid #ccc;
  vertical-align: middle;
  float: right;
  padding-left: 20rpx;
  position: relative;
  top: -10rpx;
  border-radius: 6rpx;
  /*margin-right: 100rpx;*/
}
.wxlogin-container .sex text{
  margin-right: 46rpx;
}
</style>
