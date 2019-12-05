import ApiService from '@/utils/api.js';

export default {
  data() {
    return {
      data: [],
      limits: 10,
      currentPage: 1,
      totalCount: 1,
      isLoadedAll: false,
      isLoadingMore: false,
    }
  },
  created() {
    this.api=new ApiService();

  },
  mounted() {
    this.getData(1)
  },

  components: {

  },
  computed: {

  },
  methods: {
    getData(index) {
      index == 1 ? wx.showLoading({
        title: '加载中',
      }) : '';
      this.api.get('bplisn/books')({
        'per-page': this.limits,
        page: index,
      }).subscribe(res => {
        this.isLoadingMore = false;
        wx.hideLoading();
        let resData = res.items;
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

    loadMore() {
      if (!this.isLoadedAll) {
        this.currentPage = this.currentPage + 1;
        this.isLoadingMore = true
        this.getData(this.currentPage)
      }
    },

    navigateDetail(id) {
      console.log(id)
      wx.navigateTo({
        url: `/pages/book/detail/main?id=${id}`
      })
    }
  },

  onReachBottom() {
    console.log('到底啦')
    this.loadMore();
  },
}