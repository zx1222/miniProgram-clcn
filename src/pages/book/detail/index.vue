<template>
  <div class="book-detail-page-wrap">
    <div class="book-cover flex align-items-center justify-content-center">
      <img mode="widthFix" class="represent-img" :src="detail.images" />
    </div>

    <van-tabs color="#007dff" active="currentIndex" @change="tabChange">
      <van-tab title="详细信息">
        <div class="bookinfo-wrap">
          <p class="text-blue blod title">{{detail.title}}</p>
          <div class="row flex justify-content-between">
            <div class="row-label">作者：</div>
            <div class="row-content">{{detail.author}}</div>
          </div>
          <div class="row flex justify-content-between">
            <div class="row-label">出版社：</div>
            <div class="row-content">{{detail.publisher}}</div>
          </div>
          <div class="row flex justify-content-between">
            <div class="row-label">语种：</div>
            <div class="row-content">{{detail.category_name}}</div>
          </div>
          <div class="row flex justify-content-between">
            <div class="row-label">标识符：</div>
            <div class="row-content">ISBN7-5057-2246-8</div>
          </div>
          <div class="row flex justify-content-between">
            <div class="row-label">主题：</div>
            <div class="row-content">明代</div>
          </div>
          <div class="row flex justify-content-between">
            <div class="row-label">载体形式：</div>
            <div class="row-content">143 页；彩图；21cm</div>
          </div>
          <div class="row flex justify-content-between">
            <div class="row-label">摘要：</div>
            <div class="row-content">{{detail.simple_intro}}</div>
          </div>
        </div>
      </van-tab>

      <van-tab title="馆藏地">
        <div class="locations-wrap">
          <van-collapse :value="activeCollapse" @change="collapseChange">
            <van-collapse-item
              v-for="(item,index) in locations"
              :title="item.location"
              :key="index"
              :name="item.id"
            >
              <div class="row flex justify-content-between">
                <div class="row-label">馆藏地：</div>
                <div class="row-content">{{item.location_detail}}</div>
              </div>
              <div class="row flex justify-content-between">
                <div class="row-label">索书号：</div>
                <div class="row-content">{{item.identical_number}}</div>
              </div>
              <div class="row flex justify-content-between">
                <div class="row-label">状态：</div>
                <div class="row-content">{{item.status}}</div>
              </div>
              <div class="row flex justify-content-between">
                <div class="row-label">条码：</div>
                <div class="row-content">{{item.codebar}}</div>
              </div>
              <div class="row flex justify-content-between">
                <div class="row-label">资料类型：</div>
                <div class="row-content">{{item.category_name}}</div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
