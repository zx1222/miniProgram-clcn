<template>
  <div class="user-userinfo-page-wrap">
    <form @submit="submit">
      <div class="weui-cells weui-cells_after-title" @click='navigateCropper'>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">姓名</div>
          </div>
          <div class="weui-cell__bd">
            <img :src="avatar" class="avatar" />
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">姓名</div>
          </div>
          <div class="weui-cell__bd">
            <input
              type="text"
              v-model="userinfo.username"
              class="weui-input"
              name="username"
              placeholder="请输入姓名"
            />
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">性别</div>
          </div>
          <div class="weui-cell__bd">
            <picker
              mode="selector"
              :value="genderIndex"
              :range="genderData"
              @change="genderChange"
              range-key="label"
            >
              <view class="picker">{{genderData[genderIndex].label}}</view>
            </picker>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">地区</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="region" :value="userinfo.region" @change="regionChange">
              <view
                class="picker"
              >{{userinfo.region[0]}}，{{userinfo.region[1]}}，{{userinfo.region[2]}}</view>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">手机</div>
          </div>
          <div class="weui-cell__bd">
            <input
              v-model="userinfo.mobile"
              class="weui-input"
              type="number"
              name="mobile"
              placeholder="请输入手机号"
            />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">个人邮箱</div>
          </div>
          <div class="weui-cell__bd">
            <input
              v-model="userinfo.email"
              class="weui-input"
              type="text"
              name="email"
              placeholder="请输入邮箱"
            />
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">出生年月</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="date" :value="userinfo.birthday" @change="dateChange">
              <view class="picker">{{userinfo.birthday}}</view>
            </picker>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">个人签名</div>
          </div>
          <div class="weui-cell__bd">
            <textarea placeholder="个人签名" v-model="userinfo.sign" name="sign" style="height: 3.3em" />
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button
          class="weui-btn btn-submit bg-green text-white"
          :disabled="!isValid"
          form-type="submit"
        >提交</button>
      </div>
    </form>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped>
textarea {
  width: 240px;
}
.btn-submit {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 86rpx;
  line-height: 86rpx;
  border-radius: 0;
}
.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 16rpx;
}
.weui-cell__bd {
  text-align: right
}
</style>
