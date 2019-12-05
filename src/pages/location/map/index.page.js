import ApiService from '@/utils/api.js';
// var QQMapWX = require('@/utils/qqmap-wx-jssdk.min.js');
// let key = 'OJFBZ-AQR6I-PRXGP-5BFHX-SE566-ZVBJX';//使用在腾讯位置服务申请的key;

export default {
  data() {
    return {
      mapHeight: wx.getSystemInfoSync().windowHeight,
      mapWidth: wx.getSystemInfoSync().windowWidth,
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [
        {
          iconPath: "/static/images/location-fill.png",
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 30,
          height: 30,
          title: 'place1'
        },
        {
          iconPath: "/static/images/location-fill.png",
          id: 1,
          latitude: 23.199994,
          longitude: 113.304520,
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
    }

  },

}