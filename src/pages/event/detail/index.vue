<template>
  <div class="event-detail-page-wrap">
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
        @click="openLocation"
      >
        <div class="flex align-items-center">
          <van-icon name="location-o" size="18" color="#007dff" class="icon-clock" />
          {{data.address}}
        </div>
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 活动详细信息 -->
    <div class="event-info-wrap">
      <h5>活动详情</h5>
      <!-- <p class="text-darkgray text-s line">{{data.subject}}</p> -->
      <!-- <p class="text-darkgray text-s line" v-if="data.compere">主讲人：{{data.compere}}</p>
      <p class="text-darkgray text-s line">时间： {{data.start_date}} - {{data.end_date}}</p>
      <p class="text-darkgray text-s line">地点： {{data.address}}</p>-->
      <wxParse :content="data.summary" />
    </div>

    <!-- fix bar -->
    <div class="fixed-bar flex align-items-center justify-content-between">
      <div class="l">
        <ul>
          <li class="flex btn-collection" v-if="data.collection==0" @click="collection">
            <van-icon name="star-o" size="20" />收藏
          </li>
          <li class="flex btn-collection" v-if="data.collection==1" @click="collection">
            <van-icon name="star" size="20" color="#007dff"/>已收藏
          </li>
          <li class="flex btn-share">
            <van-icon name="share" size="21" />分享
            <button open-type="share"></button>
          </li>
        </ul>
      </div>
      <div class="btn-apply text-s" @click="navigateCart()">立即报名</div>
    </div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
