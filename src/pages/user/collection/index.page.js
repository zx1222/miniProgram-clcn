import ApiService from '@/utils/api.js';
import book from '@/components/book.vue';
import event from '@/components/event.vue';

export default {
  data() {
    return {
      currentIndex: 0,
      data: [],
      limits: 10,
      currentPage: 1,
      totalCount: 1,
      isLoadedAll: false,
      isLoadingMore: false,
    }
  },
  created() {
    this.api = new ApiService()
  },
  mounted() {
    this.getEventsData(1);
  },

  components: {
    book,
    event
  },
  computed: {

  },
  methods: {
    tabChange(e) {
      console.log(e);
      this.data = [];
      this.currentPage = 1;
      this.isLoadedAll = false;
      this.currentIndex = e.mp.detail.index;
      this.currentIndex == 0 ? this.getEventsData(1) : this.getBooksData(1)
    },

    getEventsData(index) {
      index == 1 ? wx.showLoading({
        title: '加载中',
      }) : '';
      this.api.get('clcn/events')({
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

    getBooksData(index) {
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
      console.log(this.isLoadedAll)
      if (!this.isLoadedAll) {
        this.currentPage = this.currentPage + 1;
        this.isLoadingMore = true
        this.currentIndex == 0 ? this.getEventsData(this.currentPage) : this.getBooksData(this.currentPage)
      }
    },
  },

  onReachBottom() {
    console.log('到底啦')
    this.loadMore();
  },

}