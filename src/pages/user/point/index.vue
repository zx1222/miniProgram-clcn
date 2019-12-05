<template>
  <div class="user-point-page-wrap">
    <div class="current-wrap flex justify-content-between align-items-center line">
      <div>当前积分</div>
      <div>{{currentPoint}}分</div>
    </div>
    <div
      class="item flex justify-content-between align-items-center line"
      v-for="(item,index) in data"
      :key="index"
    >
      <div>
        <p>{{item.name}}</p>
        <p class="text-s text-gray">{{item.time}}</p>
      </div>
      <div>
        <span v-if="item.type=='INCREASE'" class="icon-increase">+</span>
        <span v-if="item.type=='REDUCE'" class="icon-reduce">-</span>
        {{item.point}}分
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

<style scoped>
.icon-increase,
.icon-reduce {
  font-size: 38rpx;
  font-weight: 600;
}
.icon-increase {
  color: #e34e55;
}
.icon-reduce {
  color: #07c160;
}
.line {
  padding: 14rpx 40rpx;
  border-bottom: 1px solid #e1e1e1;
}
.current-wrap {
  padding: 40rpx;
}
</style>
