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

    <div class="card flex justify-content-between align-items-center text-m">
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

<style scoped src='./index.page.css'></style>
