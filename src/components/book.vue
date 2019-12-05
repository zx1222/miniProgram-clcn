<template>
  <div>
    <div class="item flex" @click="navigateDetail(data.id)">
      <img :src="data.image" class="book-cover" mode="widthFix" />
      <div class="book-info flex-c">
        <h4 class="title">{{data.title}}</h4>
        <p class="text-s text-darkgray">{{data.author}}</p>
        <p class="text-s text-darkgray">{{data.publisher}}</p>
        <p class="text-s text-darkgray text-overflow2">{{data.simple_intro}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        data:this.value
    };
  },
  props: {
    value: {
      type: Object
    }
  },
  methods: {
      navigateDetail(id){
          wx.navigateTo({
              url:`/pages/book/detail/main?id=${id}`
          })
      }
  },
};
</script>

<style scoped>
.item {
  padding: 24rpx 40rpx;
  background: #ffffff;
  margin-bottom: 20rpx;
}

.item .book-cover {
  width: 25%;
  margin-right: 30rpx;
  border-radius: 4px;
  overflow: hidden;
}

.item .book-info {
  width: calc(75% - 30rpx);
}

.item .title {
  padding-bottom: 14rpx;
}
.book-info p {
  margin-bottom: 5px;
}
</style>
