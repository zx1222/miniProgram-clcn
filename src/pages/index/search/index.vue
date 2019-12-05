<template>
  <div class="search-page-wrap">
    <div class="search-bar-wrap flex justify-content-between align-items-center">
      <div class="search-bar-left">
        <mp-searchbar
          :isFocus="isFocus"
          :value="inputValue"
          :placeholder="'书名/分类/作者/ISBN'"
          :confirmType="'search'"
          @input="input"
          @blur="blur"
          @focus="focus"
          @confirm="confirm"
          @cancel="cancel"
        ></mp-searchbar>
      </div>
      <img class="btn-scan" @click="openScanCode" src="../../../../static/images/scan.png" />
    </div>

    <div class="search-history-wrap" v-if="!isSearchLoaded">
      <span
        class="history-tag"
        @click="seachByHistory(item.value)"
        v-for="item in searchHistory"
        :key="item"
      >{{item.abridge}}</span>
      <div
        v-if="searchHistory.length!=0"
        class="clear-history text-gray text-s flex justify-content-center"
      >
        <div class="flex align-items-center" @click="clearHistory">
          <img src="../../../../static/images/delete.png" />清空搜索历史
        </div>
      </div>
    </div>

    <div class="search-content-wrap" v-if="isSearchLoaded">
      <div class="book-wrap flex justify-content-between" v-for="item in data" :key="item">
        <div class="book-cover">
          <img class="w100" :src="item.cover_url" mode="widthFix"/>
        </div>
        <div class="book-content">
          <h4 class='title'>{{item.name}}</h4>
          <p class="text-gray text-s">{{item.press}}</p>
          <p class="text-gray text-s">{{item.identical_number}}</p>
          <p class="text-gray text-s text-overflow2"></p>
        </div>
      </div>
      <div
        class="w100 loading-tips flex-c align-items-center justify-content-center text-gray text-s"
        v-if="isLoadingMore"
      >
        <img src="/static/images/paging-loading.gif" class="paging-loading" />
        加载中
      </div>

      <div
        class="w100 loading-tips text-center loading-wrap"
        v-if="isLoadedAll&&data.length==0"
      >暂无数据</div>
      <div
        class="w100 loading-tips text-center loading-wrap"
        v-if="isLoadedAll&&data.length!=0"
      >已无更多数据</div>
    </div>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
