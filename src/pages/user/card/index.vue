<template>
  <div class="user-card-page-wrap">
    <div class="no-card-wrap">
      <p>您还没有读者卡 ，您可以选择</p>
      <button class="weui-btn weui-btn_primary bg-blue text-white" @click="navigateBindCard">绑定已有读者卡</button>
      <button
        class="weui-btn weui-btn_primary bg-blue text-white"
        @click="navigateApplyCard"
      >申请电子读者卡</button>
    </div>
    <div class="card-wrap">
      <img src="/static/images/card.jpg" class="card" mode='widthFix'/>
      <div class="current line flex justify-content-between align-items-center text-m">
        <div class="flex align-items-center">
          <van-icon name="idcard" class="icon" size="20px" />当前借阅
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="hitory line flex justify-content-between align-items-center text-m">
        <div class="flex align-items-center">
          <van-icon name="certificate" class="icon" size="21px" />借阅历史
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="fiance line flex justify-content-between align-items-center text-m">
        <div class="flex align-items-center">
          <van-icon name="certificate" class="icon" size="21px" />逾期款缴费
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped>
.no-card-wrap {
  padding: 80rpx 40rpx;
}
.no-card-wrap p {
  margin-bottom: 50rpx;
}
.card-wrap {
  padding: 40rpx 0;
}
.card-wrap .card {
  padding: 40rpx;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
}
.card-wrap .line {
  background: #ffffff;
  padding: 20rpx 40rpx;
  margin-bottom: 20rpx;
}
.card-wrap .line .icon {
  padding-right: 18rpx;
}
</style>
