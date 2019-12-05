<template>
  <div class="event-cart-page-wrap">
    <div class="event-cover flex align-items-center justify-content-center">
      <img mode="widthFix" class="represent-img" :src="data.represent_image" />
    </div>

    <!-- 活动主题信息 -->
    <div class="event-subject-wrap">
      <h5>{{data.subject}}</h5>
      <div class="text-s text-darkgray w100 flex align-items-center date">
        <div class="flex align-items-center">
          <van-icon name="clock-o" size="16" color="#007dff" class="icon-clock" />
          {{data.start_date}} - {{data.end_date}}
        </div>
      </div>
      <div
        class="text-s text-darkgray w100 flex justify-content-between align-items-center address"
      >
        <div class="flex align-items-center">
          <van-icon name="location-o" size="18" color="#007dff" class="icon-clock" />
          {{data.address}}
        </div>
      </div>
    </div>
    <div class="cart-wrap flex align-items-center justify-content-between">
      <div>
        <h4 class='text-blue'>免费票</h4>
        <p class="text-s">剩余名额：{{maxnum}}</p>
      </div>
      <input-number @blur='blur' @reduce='reduce' @add='add' :maxnum='maxnum'></input-number>
    </div>

    <div class="next-step bg-green text-center text-white" @click="navigateForm">下一步</div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
