<template>
  <div class="index-page-wrap">
    <van-notice-bar backgroundColor="#007dff" color="#ffffff" :text="notice">
      <img
        slot="left-icon"
        class="notice-left-icon"
        src="../../../static/images/notice-left-icon.png"
      />
      <span slot="right-icon text-gray notice-right">更多</span>
    </van-notice-bar>

    <!-- 搜索栏 -->
    <div
      class="search-bar-wrap flex justify-content-between align-items-center"
      @click="navigateSearch"
    >
      <div class="search-bar-left">
        <mp-searchbar
          :isFocus="false"
          :inputValue="inputValue"
          :placeholder="placeholder"
          @input="input"
          @blur="blur"
          @focus="focus"
          @confirm="confirm"
        ></mp-searchbar>
      </div>
      <img class="btn-scan" src="../../../static/images/scan.png" />
    </div>
    <div class="content-wrap">
      <!-- 新书推荐 -->
      <div class="book-header w100 flex justify-content-between align-items-center">
        <span class="header-name">新书推荐</span>
        <span class="header-name text-gray text-xs  btn-more" @click="navigateBookList">查看更多</span>
      </div>
      <div class="latest-book-wrap flex">
        <div class="book-wrap" v-for="item in books" :key="item" :style="{width: bookWidth+ 'px'}" @click="navigateBook(item.id)">
          <img :src="item.image" mode="widthFix" class="w100" />
          <div class="book-info flex-c justify-content-center text-m">
            <p class="text-overflow1">{{item.title}}</p>
            <p class="text-overflow1">{{item.publisher}}</p>
          </div>
        </div>
      </div>
      <!-- 精彩活动 -->
      <div class="event-header w100 flex justify-content-between align-items-center">
        <span class="header-name">精彩活动</span>
        <span class="header-name text-gray text-xs btn-more" @click="navigateEventList">查看更多</span>
      </div>
      <div class="recommend-event-wrap flex">
        <div
          class="event-wrap"
          v-for="item in events"
          :key="item"
          :style="{width: eventWidth+'px'}"
          @click="navigateEvent(item.id)"
        >
          <img :src="item.represent_image" mode="widthFix" class="w100" />
          <div class="event-info flex-c justify-content-center">
            <p class="text-overflow1 subject">{{item.subject}}</p>
            <p class="text-overflow2">{{item.summary}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
  