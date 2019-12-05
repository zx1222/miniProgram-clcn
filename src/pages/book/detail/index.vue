<template>
  <div class="book-page-wrap">
    <div class="book-list-wrap">
      <div
        class="item flex"
        v-for="(item,index) in data"
        :key="index"
        @click="navigateDetail(item.id)"
      >
        <img :src="item.image" class="book-cover" mode="widthFix" />
        <div class="book-info flex-c">
          <h4 class="title">{{item.title}}</h4>
          <p class="text-s text-darkgray">{{item.author}}</p>
          <p class="text-s text-darkgray">{{item.publisher}}</p>
          <p class="text-s text-darkgray text-overflow2">{{item.simple_intro}}</p>
        </div>
      </div>
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
  