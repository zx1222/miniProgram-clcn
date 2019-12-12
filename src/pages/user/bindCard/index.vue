<template>
  <div class="user-bindCard-page-wrap">
    <form @submit="submit">
      <div class="weui-cells weui-cells_after-title" @click="navigateCropper">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">读者证号</div>
          </div>
          <div class="weui-cell__bd">
            <input
              type="number"
              v-model="cardinfo.cardno"
              class="weui-input"
              name="cardno"
              placeholder="请输入读者证号"
            />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">密码</div>
          </div>
          <div class="weui-cell__bd">
            <input
              type="password"
              v-model="cardinfo.password"
              class="weui-input"
              name="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button
          class="weui-btn btn-submit bg-green text-white"
          :disabled="!isValid"
          form-type="submit"
        >提交</button>
      </div>
    </form>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped>
textarea {
  width: 240px;
}
.btn-submit {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 86rpx;
  line-height: 86rpx;
  border-radius: 0;
}
.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 16rpx;
}
.weui-cell__bd {
  text-align: right;
}
</style>
