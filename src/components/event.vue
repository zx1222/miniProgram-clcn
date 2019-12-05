<template>
  <div>
    <div class="item flex" @click="navigateDetail(data.id)">
      <img :src="data.represent_image" class="event-cover" mode="widthFix" />
      <div class="event-info flex-c justify-content-center">
        <h4 class="title">{{data.subject}}</h4>
        <p class="text-s text-darkgray">时间：{{data.start_date}}-{{data.end_date}}</p>
        <p class="text-s text-darkgray">类别：{{data.category_name}}</p>
        <p class="text-s text-darkgray">地点：{{data.address}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.value
    };
  },
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    navigateDetail(id) {
      wx.navigateTo({
        url: `/pages/event/detail/main?id=${id}`
      });
    }
  }
};
</script>

<style scoped>
.item {
  padding: 24rpx 40rpx;
  background: #ffffff;
  margin-bottom: 20rpx;
}


.item .event-cover {
  width: 25%;
  margin-right: 30rpx;
  border-radius: 4px;
  overflow: hidden;
}

.item .event-info {
  width: calc(75% - 30rpx);
}

.item .title {
  padding-bottom: 14rpx;
}
</style>
