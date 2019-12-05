import ApiService from '@/utils/api.js';
import mpSearchbar from '@/components/searchbar';
import calendar from '@/components/calendar';
import event from '@/components/event';
import { formatTime } from '@/utils/index'

export default {
  data() {
    return {
      // searchbar
      isFocus: false,
      placeholder: "搜索精彩活动",
      inputValue: '',

      // swiper
      swiperItems: ['https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=banner&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=2963395590,2977846676&os=2973919559,1932331043&simid=4292092023,851656399&pn=46&rn=1&di=101310&ln=1521&fr=&fmq=1574937278596_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0177fa5afe7f44a801209a85c3afa1.jpg%401280w_1l_2o_100sh.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined', 'https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=banner&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=2963395590,2977846676&os=2973919559,1932331043&simid=4292092023,851656399&pn=46&rn=1&di=101310&ln=1521&fr=&fmq=1574937278596_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0177fa5afe7f44a801209a85c3afa1.jpg%401280w_1l_2o_100sh.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 1000,
      duration: 500,

      isCategorieVisible: false,
      isCalendarVisible: false,

      eventCategories: [],
      category_id: null,

      data: [],
      limits: 10,
      currentPage: 1,
      totalCount: 1,
      isLoadedAll: false,
      isLoadingMore: false,
    }
  },
  created() {
    this.api = new ApiService();
  },
  mounted() {
    this.getData();
    this.getEventCategorie();
  },

  components: {
    mpSearchbar,
    calendar,
    event
  },
  computed: {

  },
  methods: {
    getEventCategorie() {
      this.api.get('clcn/event-categories')({}).subscribe(res => {
        this.eventCategories = res
      })
    },

    search() { },

    openCategorie() {
      this.isCalendarVisible = false;
      this.isCategorieVisible = !this.isCategorieVisible;
    },
    openCalendar() {
      this.isCategorieVisible = false;
      this.isCalendarVisible = !this.isCalendarVisible;
    },

    categorieChange(id) {
      this.category_id = id;
      this.data = [];
      this.isLoadedAll = false;
      this.getData(1);
      setTimeout(() => {
        this.isCategorieVisible = false;
      }, 200)
    },

    dateChange(e) {
      console.log(e);
      this.data = [];
      this.isLoadedAll = false;
      setTimeout(() => {
        this.isCalendarVisible = false;
      }, 200)
    },

    dateRangeChange(e) {
      this.data = [];
      this.isLoadedAll = false;
      console.log(e)
    },

    getData(index) {
      index == 1 ? wx.showLoading({
        title: '加载中',
      }) : '';
      this.api.get('clcn/events')({
        cat_id: this.category_id ? this.category_id : '',
        keywords: this.inputValue,
        'per-page': this.limits,
        page: index,
      }).subscribe(res => {
        this.isLoadingMore = false;
        wx.hideLoading();
        let resData = res.items;
        resData.map((item) => {
          item.start_date = formatTime(new Date(item.start_date * 1000));
          item.end_date = formatTime(new Date(item.end_date * 1000)).split(' ')[1];
        })
        let data = this.data;
        data = data.concat(resData)
        this.data = data;
        this.totalCount = res._meta.totalCount;
        if (this.currentPage * this.limits >= this.totalCount) {
          this.isLoadedAll = true
        }
        console.log(this.data)
      })
    },

    search(e) {
      let value = e.mp.detail.value.replace(/^\s*|\s*$/g, "");
      if (value != '') {
        this.inputValue = value;
        this.data = [];
        this.getData(1);
      }
    },

    loadMore() {
      console.log(this.isLoadedAll)
      if (!this.isLoadedAll) {
        this.currentPage = this.currentPage + 1;
        this.isLoadingMore = true
        this.getData(this.currentPage)
      }
    },

    navigateDetail(id) {
      wx.navigateTo({
        url: `/pages/event/detail/main?id=${id}`
      })
    }
  },

  onReachBottom() {
    console.log('到底啦')
    this.loadMore();
  },

}