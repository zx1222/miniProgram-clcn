<template>
  <div class="event-form-page-wrap">
    <form @submit="submit">
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">姓名</div>
          </div>
          <div class="weui-cell__bd">
            <input type="text" v-model="userinfo.username" class="weui-input" name="username" placeholder="请输入姓名" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">手机</div>
          </div>
          <div class="weui-cell__bd">
            <input v-model="userinfo.mobile" class="weui-input" type="number" name="mobile" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">邮箱</div>
          </div>
          <div class="weui-cell__bd">
            <input v-model="userinfo.email" class="weui-input" type="text" name="email" placeholder="请输入邮箱"/>
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button class="weui-btn btn-submit bg-green text-white" :disabled='!isValid' form-type="submit">提交</button>
      </div>
    </form>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped>
.btn-submit {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 86rpx;
  line-height: 86rpx;
  border-radius: 0;
}

</style>
