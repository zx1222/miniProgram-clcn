<template>
  <div class="event-page-wrap">
    <mp-searchbar
      :isFocus="isFocus"
      :value="inputValue"
      :placeholder="placeholder"
      :confirmType="'search'"
      @input="input"
      @blur="blur"
      @focus="focus"
      @confirm="search"
      @cancel="cancel"
    ></mp-searchbar>

    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="(item ,index) in swiperItems" :key="index">
        <swiper-item>
          <div class="swiper-item">
            <img :src="item" class="w100" mode="aspectFill" />
          </div>
        </swiper-item>
      </block>
    </swiper>

    <div class="filter-bar flex align-items-center justify-content-center">
      <div class="categories item" @click="openCategorie">
        全部类型
        <van-icon name="arrow-down" size="16px" :class="{'show':isCategorieVisible}"/>
      </div>
      <div class="date item" @click="openCalendar" >
        全部时间
        <van-icon name="arrow-down" size="16px" :class="{'show':isCalendarVisible}"/>
      </div>
      <div class="price item">
        全部联网点
        <van-icon name="arrow-down" size="16px" />
      </div>
    </div>

    <!-- 分类 -->
    <div class="categorie-wrap" :class="{'show':isCategorieVisible,'hide':!isCategorieVisible}">
      <ul>
        <li @click="categorieChange('')">全部</li>
        <li
          v-for="(item,index) in eventCategories"
          :key="index"
          @click="categorieChange(item.cat_id)"
        >{{item.cat_name}}</li>
      </ul>
    </div>
    <!-- 日历 -->
    <div class="calendar-wrap" :class="{'show':isCalendarVisible,'hide':!isCalendarVisible}">
      <calendar @dateChange="dateChange" @dateRangeChange="dateRangeChange"></calendar>
    </div>

    <div class="event-list-wrap">
      <!-- <div class="item flex" v-for="(item,index) in data" :key="index" @click="navigateDetail(item.id)">
        <img :src="item.represent_image" class="event-cover" mode="widthFix" />
        <div class="event-info flex-c justify-content-center">
          <h4 class="title">{{item.subject}}</h4>
          <p class="text-s text-darkgray">时间：{{item.start_date}}-{{item.end_date}}</p>
          <p class="text-s text-darkgray">类别：{{item.category_name}}</p>
          <p class="text-s text-darkgray">地点：{{item.address}}</p>
        </div>
      </div> -->
      <event v-for="(item,index) in data" :key="index" :value='item'></event>
    </div>

    <div
      class="w100 loading-tips flex-c align-items-center justify-content-center text-gray text-s"
      v-if="isLoadingMore"
    >
      <img src="/static/images/paging-loading.gif" class="paging-loading" />
      加载中
    </div>

    <div class="w100 loading-tips text-center loading-wrap" v-if="isLoadedAll&&data.length==0">暂无数据</div>
    <div
      class="w100 loading-tips text-center loading-wrap"
      v-if="isLoadedAll&&data.length!=0"
    >已无更多数据</div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
