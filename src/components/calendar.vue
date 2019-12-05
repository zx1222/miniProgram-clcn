<template>
  <div class="calendar-wrap">
    <div class="block2_dateBox">
      <div class="date-range-wrap flex justify-content-between align-items-center">
        <div :class="[{'selected':selectedRangeIndex==0},'item']" @click="dateRangeChange(0)">全部时间</div>
        <div :class="[{'selected':selectedRangeIndex==1},'item']" @click="dateRangeChange(1)">一周内</div>
        <div :class="[{'selected':selectedRangeIndex==2},'item']" @click="dateRangeChange(2)">一个月内</div>
        <div :class="[{'selected':selectedRangeIndex==3},'item']" @click="dateRangeChange(3)">周末场</div>
      </div>
      <div class="head-yam flex justify-content-between align-items-center">
        <div class="prev flex">
          <div class="prev-year" @click="getPrevYear">
            <img src="/static/images/left-double.png" class="icon-year-change" mode="widthFix" />
          </div>
          <div class="prev-month" @click="getPrevMonth">
            <img src="/static/images/left.png" class="icon-month-change" mode="widthFix" />
          </div>
        </div>
        <div class="current-yam">{{date[2][0]}}/{{date[2][1]}}</div>
        <div class="next flex">
          <div class="next-month" @click="getNextMonth">
            <img
              src="/static/images/left.png"
              class="icon-month-change"
              mode="widthFix"
              style="transform:rotate(180deg)"
            />
          </div>
          <div class="next-year" @click="getNextYear">
            <img
              src="/static/images/left-double.png"
              class="icon-year-change"
              style="transform:rotate(180deg)"
              mode="widthFix"
            />
          </div>
        </div>
      </div>

      <div style="border:2rpx solid #f5f5f9;margin-top:20rpx;margin:0 30rpx;"></div>
      <div class="head-week">
        <div class="head-week-item" style="color:#007dff">日</div>
        <div class="head-week-item">一</div>
        <div class="head-week-item">二</div>
        <div class="head-week-item">三</div>
        <div class="head-week-item">四</div>
        <div class="head-week-item">五</div>
        <div class="head-week-item" style="color:#007dff">六</div>
      </div>

      <!-- <div class="mouth-wrap" v-for="(items,index) in date" :key="index"> -->
      <div class="mouth-wrap">
        <div class="day-box">
          <div
            :class="[{'today':item.today,'selected':item.selected },'day-item']"
            v-for="(item,index) in date[0]"
            :key="index"
            :style="{height: dayHeight+'px',lineHeight:dayHeight+'px'}"
            @click="changeDate(item,date[2][0],date[2][1],index)"
          >
            <text>{{item.date}}</text>
          </div>
        </div>
        <div style="border-bottom: 1rpx solid #ededed;margin:24rpx 0rpx 0 0rpx;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
      selected: 0,
      dayHeight: wx.getSystemInfoSync().windowWidth * 0.1,
      showYear: null,
      showMonth: null,
      selectedIndex: -1,
      selectedRangeIndex: -1,
    };
  },
  props: {
   
  },
  watch: {
   
  },
  created() {
    this.getFullYears();
  },
  methods: {
    //日历显示 最关键方法：
    dateData: function(showYear, showMonth, days) {
      let dataAll = []; //总日历数据 当前月份数据
      let date = new Date(); //当前日期
      let year = date.getFullYear(); //当前年
      let month = date.getMonth() + 1; //当前月份
      let day = "";
      if (days == "" || days == null || days == undefined) {
        day = date.getDate(); //当天
      } else {
        day = days;
      }
      let thisDate = [year, month, day]; //当天日期信息

      let week = date.getDay(); //当天星期几

      if (showYear) {
        year = showYear; //显示年
      }
      if (showMonth) {
        month = showMonth; //显示月
      }

      let showDate = [year, month]; //当前显示月份信息

      //获取显示月的天数
      let monthDays = new Date(year, month, 0).getDate();
      let firstWeek = new Date(year + "-" + month + "-" + "1").getDay();
      // console.log(monthDays)
      //console.log('本月1号星期：' + firstWeek)
      let daysCount = monthDays; //一共显示多少天
      let dayscNow = 0; //计数器

      for (let i = 0; i < firstWeek; i++) {
        dataAll.push("");
      }

      //把当月的天数转为数组
      var selected = 0;
      for (let i = 1; i <= daysCount; i++) {
        if (
          thisDate[0] == showDate[0] &&
          thisDate[1] == showDate[1] &&
          i == day
        ) {
          console.log(thisDate[2], day);
          selected = 1;
        } else {
          selected = 0;
        }
        dataAll.push({
          date: i,
          today: selected
        });
      }

      var arr = {};
      console.log(dataAll, thisDate, showDate);
      return [dataAll, thisDate, showDate];
    },
    //全年
    getFullYears: function() {
      var arr = [];
      let date = new Date(); //当前日期
      let year = date.getFullYear(); //当前年
      let month = date.getMonth() + 1; //当前月份
      let day = date.getDate(); //当天
      var selected = 0;
      this.showYear = year;
      this.showMonth = month;
      // 这种写法是本年到12月 剩余的月份都展示 date就是数组 但是我是只想展示一个月 剩余的 切换 date就是对象
      // for (var i = month; i <= 12; i++) {
      // arr.push({
      //   data: this.dateData(year, month)
      // });
      // }
      this.date = this.dateData(this.showYear, this.showMonth);
      // this.date = arr;
      console.log("date:", this.date);
    },
    getPrevYear() {
      this.showYear = this.showYear - 1;
      this.date = this.dateData(this.showYear, this.showMonth);
    },
    getNextYear() {
      this.showYear = this.showYear + 1;
      this.date = this.dateData(this.showYear, this.showMonth);
    },
    getPrevMonth() {
      this.showMonth = this.showMonth - 1;
      this.date = this.dateData(this.showYear, this.showMonth);
    },
    getNextMonth() {
      this.showMonth = this.showMonth + 1;
      this.date = this.dateData(this.showYear, this.showMonth);
    },

    getLatestWeek() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      const date = [this.formatDate(start), this.formatDate(end)];
      return date;
    },
    getLatestMonth() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      const date = [this.formatDate(start), this.formatDate(end)];
      return date;
    },

    formatDate(date) {
      let year = date.getFullYear(); //当前年
      let month = date.getMonth() + 1; //当前月份
      let day = date.getDate();
      return `${year}-${month}-${day}`;
    },

    changeDate: function(day, year, month, index) {
      let days = this.date[0];
      if (this.selectedIndex == -1 || index != this.selectedIndex) {
        days[index]["selected"] = true;
        this.selectedIndex != -1
          ? (days[this.selectedIndex]["selected"] = false)
          : "";
      }
      this.selectedIndex = index;
      this.date[0] = days;

      console.log("jinlail", day.date, year, month, this.date);
      let date = `${year}-${month}-${day.date}`;
      this.$emit("dateChange", date);
    },

    dateRangeChange(index) {
      let range=['all','week','month','weekend']
      this.selectedRangeIndex = index;
      this.$emit('dateRangeChange',range[this.selectedRangeIndex]);
      console.log(this.getLatestWeek());
      console.log(this.getLatestMonth());
    }
  }
};
</script>

<style scoped>
.calendar-wrap {
  background-color: #fff;
  /* transform: translate3d(0, -100%, 0); */
  /* height: 0; */
  overflow: hidden;
}
.date-range-wrap {
  padding: 0 3%;
  height: 72rpx;
  font-size: 24rpx;
}
.date-range-wrap .item {
  width: 20%;
  margin: 0 2.125%;
  background: #f5f5f9;
  border-radius: 15px/50%;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
}
.date-range-wrap .item.selected {
  background-color: #07c160;
  color: #ffffff;
}

.head-yam {
  font-size: 28rpx;
  font-weight: bold;
  height: 76rpx;
  padding: 0 3%;
}
.icon-year-change {
  width: 18px;
  padding: 3px;
}
.icon-month-change {
  width: 16px;
  padding: 3px;
  margin: 0 8px;
}
.head-week-item {
  height: 30px;
  background-color: white;
  width: 14%;
  text-align: center;
  line-height: 30px;
}
.head-week {
  font-size: 28rpx;
  width: 100%;
  /* margin: 1vh 0; */
  padding: 1vh 0;
  /* border-bottom: 1px solid #e5e5e5; */
  display: flex;
}

.day-box {
  background-color: white;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
}
.day {
  width: 14%;
  height: 107rpx;
  line-height: 107rpx;
  text-align: center;
  display: inline-block;
  position: relative;
  top: 0;
  margin-top: -10rpx;
  overflow: hidden;
  color: #353535;
  font-size: 34rpx;
}

.today {
  background-color: #007dff;
  color: white !important;
  border-radius: 100%;
}
.day-item.selected {
  background-color: #07c160;
  color: white !important;
  border-radius: 100%;
}
.weui-text {
  margin-top: -40rpx;
  position: relative;
  bottom: -30rpx;
  margin-left: -50rpx;
  font-size: 22rpx;
  font-weight: none;
}

.day-item {
  margin: 0 2%;
  width: 10%;
  /* line-height: 78rpx; */
  text-align: center;
  display: inline-block;
  position: relative;
  top: 0;
  margin-top: -10rpx;
  overflow: hidden;
  color: #353535;
  font-size: 32rpx;
}

@keyframes slideInDown {
  0% {
    height: 0;
    /* -webkit-transform: translateY(-100%); */
  }

  100% {
    height: 100%;
    /* -webkit-transform: translateY(0%); */
  }
}

.calendar-wrap.slideInDown {
  height: 100%;
  /* animation: slideInDown .5s linear 1;
  animation-fill-mode: forwards; */
}

@keyframes slideInUp {
  0% {
    height: 100%;
    /* -webkit-transform: translateY(0%); */
  }

  100% {
    height: 0;
    /* -webkit-transform: translateY(-100%); */
  }
}

.calendar-wrap.slideInUp {
  height: 0;
  /* animation: slideInUp .5s linear 1;
  animation-fill-mode: forwards; */
}
</style>
