<template name="err_tips">
  <view :hidden="!err_tips_data.err_tips_show" class="err_tips">
      <div class="weui-mask_transparent"></div>
      <div class="weui-err_tips">
          <p class="weui-err_tips__content" >{{err_tips_data.err_tips_text}}</p>
      </div>
  </view>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus">

</style>
