<template>
  <div class="book-page-wrap">
    <div class="book-list-wrap">
      <book v-for="(item,index) in data" :key="index" :value="item"></book>
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

<style scoped >
</style>
  