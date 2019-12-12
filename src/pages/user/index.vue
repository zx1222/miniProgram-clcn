<template>
  <div class="user-page-wrap">
    <div class="user-top-bar">
      <div class="row flex align-items-center justify-content-between" @click="navigateUserinfo">
        <div class="flex">
          <img :src="data.avatar" mode="widthFix" class="avatar" />
          <div class="userinfo">
            <h4>{{data.username}}</h4>
            <p class="text-gray">{{data.mobile}}</p>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>

      <div class="row pac flex align-items-center justify-content-between">
        <div class="text-center" @click="navigatePoint">
          <p class="text-l">{{data.point}}</p>
          <p class="text-m">积分</p>
        </div>
        <div class="text-center" @click="navigateCollection">
          <p class="text-l">{{data.collection}}</p>
          <p class="text-m">收藏</p>
        </div>
      </div>
    </div>

    <div class="card flex justify-content-between align-items-center text-m" @click="navigateCard">
      <div class="flex align-items-center">
        <van-icon name="idcard" class="icon" size="20px" />我的读者卡
      </div>
      <van-icon name="arrow" />
    </div>
    <div class="apply flex justify-content-between align-items-center text-m">
      <div class="flex align-items-center">
        <van-icon name="certificate" class="icon" size="21px" />我的报名
      </div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped>
.user-top-bar {
  padding: 50rpx 40rpx;
  background: #ffffff;
  margin-bottom: 20rpx;
}

.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}

.userinfo {
  padding-left: 40rpx;
}

.pac {
  padding: 50rpx 190rpx 0 190rpx;
}
.card,
.apply {
  background: #ffffff;
  padding: 20rpx 40rpx;
  margin-bottom: 20rpx;
}
.card .icon,
.apply .icon {
  padding-right: 18rpx;
}
</style>
