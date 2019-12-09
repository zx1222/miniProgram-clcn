import ApiService from '@/utils/api.js';
// var QQMapWX = require('@/utils/qqmap-wx-jssdk.min.js');
// let key = 'OJFBZ-AQR6I-PRXGP-5BFHX-SE566-ZVBJX';//使用在腾讯位置服务申请的key;

export default {
  data() {
    return {
      mapHeight: wx.getSystemInfoSync().windowHeight,
      mapWidth: wx.getSystemInfoSync().windowWidth,
      latitude: 39.92855,
      longitude: 116.41637,
      markers: [
        {
          iconPath: "/static/images/location-fill.png",
          id: 0,
          latitude: 39.92855,
          longitude: 116.41637,
          width: 30,
          height: 30,
          title: 'place1'
        },
        {
          iconPath: "/static/images/location-fill.png",
          id: 1,
          latitude: 39.92455,
          longitude: 116.4163,
          width: 30,
          height: 30,
          title: 'place2'
        },
        {
          iconPath: "/static/images/location-fill.png",
          id: 1,
          latitude: 39.92355,
          longitude: 116.42627,
          width: 30,
          height: 30,
          title: 'place2'
        }],
      markerId: null
    }
  },
  created() {
    // qqmapsdk = new QQMapWX({
    //   key: 'OJFBZ-AQR6I-PRXGP-5BFHX-SE566-ZVBJX'
    // });
  },
  mounted() {
    // this.mapCtx = wx.createMapContext('map');
    // this.openLocation()
    // this.getLocation()
  },

  components: {

  },
  computed: {

  },
  methods: {
    markerChange(e) {
      this.markerId = e.mp.markerId;
      let markers = this.markers;
      let location = markers.filter(item => item.id == this.markerId);
      this.openLocation(location[0].latitude, location[0].longitude)
    },

    openLocation(lat, long) {
      console.log(lat, long)
      wx.openLocation({
        latitude: lat,
        longitude: long
      })
    },

    getLocation() {
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log(res)
          // 如果打开地图没有选择地址则跳转到原H5页面，否则选择地址后再进行跳转
          this.latitude = res.latitude;
          this.longitude = res.longitude
        },

        // fail: function (res) {
        //   wx.getSetting({
        //     success: (res) => {
        //       if (res.authSetting['scope.userLocation'] != true) { //非初始化进入该页面,且未授权,按钮显示
        //         that.setData({
        //           isLocationAuthorize: false,
        //         })
        //       } else {
        //         wx.showModal({ // 手机定位未开启状态
        //           title: '手机定位未开启',
        //           content: '请在手机设置中打开定位，我们需要知道您的位置才能提供更好的服务~',
        //           showCancel: false,
        //           success: function (res) {
        //             wx.navigateBack({
        //               delta: 1
        //             })
        //           }
        //         })
        //       }
        //     }
        //   })
        // }
      })
    }

  },

}