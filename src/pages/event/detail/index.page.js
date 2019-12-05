import ApiService from '@/utils/api.js';
import wxParse from 'mpvue-wxparse'
import { getParams, formatTime } from '@/utils/index'
import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';
var qqmapsdk;

export default {
  data() {
    return {
      id: null,
      data: {}
    }
  },
  created() {
    this.api = new ApiService();
  },
  mounted() {
    this.id = getParams().id;
    this.getData(this.id);
    qqmapsdk = new QQMapWX({
      key: 'OJFBZ-AQR6I-PRXGP-5BFHX-SE566-ZVBJX'
    });
  },

  components: {
    wxParse
  },
  computed: {

  },
  methods: {
    getData(id) {
      this.api.get(`clcn/events/${id}`)({}).subscribe(res => {
        let data = res;
        data.start_date = formatTime(new Date(data.start_date * 1000));
        data.end_date = formatTime(new Date(data.end_date * 1000)).split(' ')[1];
        data.collection = 0;
        this.data = data;
      })
    },
    
    collection() {
      let data = this.data;
      data.collection == 0 ? data.collection = 1 : data.collection = 0;
      this.data = data;
    },

    openLocation() {
      let _this = this;
      qqmapsdk.geocoder({
        address: `北京市朝阳区东三环南路88号`,
        success: function (res) {
          wx.openLocation({
            name: `${_this.data.address}`,
            address: `${res.result.address_components.province}${res.result.address_components.district}${res.result.address_components.street}${res.result.address_components.street_number}`,
            latitude: res.result.location.lat,
            longitude: res.result.location.lng
          })
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        }
      })
    },

    navigateCart(){
      wx.navigateTo({
        url:`/pages/event/cart/main?id=${this.id}`
      })
    }
  },
  onShareAppMessage(res) {
    return {
      imageUrl: '',
      title: '快来参加首图的活动鸭',
      path: `/pages/event/detail?id=${this.id}`
    }
  }
}