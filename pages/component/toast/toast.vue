<template name="toast">
	<view :hidden="!toast_data.toast_show" class="toast">
	  <div class="weui-mask_transparent"></div>
	  <div class="weui-toast">
	  	  <i :class="toast_data.toast_icon_type"></i>
	      <p class="weui-toast__content" >{{toast_data.toast_text}}</p>
	  </div>
	</view>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus">

</style>
