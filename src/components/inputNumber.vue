<template>
  <div class="input-number-wrap flex align-items-center justify-content-center">
    <img src="/static/images/offline.png" class="reduce icon" mode="widthFix" @click="reduce" />
    <input type="number" v-model="inputValue" @input="oninput" @blur="blur" />
    <img src="/static/images/addition.png" class="add icon" mode="widthFix" @click="add" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 1,
      maxData: this.maxnum
    };
  },
  props: {
    maxnum: {
      type: Number
    }
  },
  watch: {
    maxnum(val) {
      this.maxData = val;
    }
  },
  methods: {
    oninput(e) {
      console.log(e);
      this.$emit("oninput", e);
    },
    blur(e) {
      this.inputValue = e.mp.detail.value;
      this.$emit("blur", e);
    },
    reduce() {
      this.inputValue > 1 ? this.inputValue-- : wx.showToast({icon:'none',title:'至少数量为1'});
      this.$emit("reduce", this.inputValue);
    },
    add() {
      this.inputValue < this.maxData ? this.inputValue++ :wx.showToast({icon:'none',title:'数量超出库存'});
      this.$emit("add", this.inputValue);
    }
  }
};
</script>

<style scoped>
input {
  width: 80rpx;
  border: 1px solid #e1e1e1;
  height: 50rpx;
  padding: 0 14rpx;
  text-align: center;
}
.icon {
  width: 44rpx;
  height: 44rpx;
  padding: 6rpx 16rpx;
}
</style>
