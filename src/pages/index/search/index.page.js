import ApiService from '@/utils/api.js';
import mpSearchbar from '@/components/searchbar';

export default {
  data() {
    return {
      data: [],
      currentPage: 1,
      totalCount: 1,
      limits: 10,
      isLoadedAll: false,
      isLoadingMore: false,

      isSearchLoaded: false,
      searchHistory: wx.getStorageSync('searchHistory') ? JSON.parse(wx.getStorageSync('searchHistory')) : [],
      isFocus: false,
      inputValue: ''
    }
  },
  created() {
    this.api = new ApiService();

  },
  mounted() {
    this.login();
  },

  components: {
    mpSearchbar
  },
  computed: {

  },
  methods: {
    login() {
      this.api.post('auth')({
        username: 'admin',
        password: '123456',
      }).subscribe(res => {
        if (res.id) {
          wx.setStorageSync('token', res.access_token);
        }
      })
    },

    getData(index) {
      this.isSearchLoaded = true;
      index=1?wx.showLoading({
        title: '加载中',
      }):'';
      this.api.get('search')({
        name: this.inputValue,
        page: index,
        limits: this.limits
      }).subscribe(res => {
        console.log(res)
        wx.hideLoading();
        this.data = res.books
      })
    },

    loadMore() {
      if (!this.isLoadedAll && this.currentPage * this.limits < this.totalCount) {
        this.currentPage = this.currentPage + 1;
        this.isLoadingMore = true
        this.getData(this.currentPage)
      }
    },

    confirm(e) {
      let value = e.mp.detail.value.replace(/^\s*|\s*$/g, "");
      if (value != '') {
        this.inputValue = value;
        this.setSearchHistory(value);
        this.getData(value);
      }
    },

    seachByHistory(value) {
      this.inputValue = value;
      this.isFocus = true;
      this.setSearchHistory(value);
      this.getData(value);
    },

    setSearchHistory(value) {
      let searchHistory = wx.getStorageSync('searchHistory') ? JSON.parse(wx.getStorageSync('searchHistory')) : [];
      const data = {
        abridge: value.length > 8 ? `${value.substr(0, 6)}...` : value,
        value: value
      }
      if (searchHistory.length < 8) {
        searchHistory.unshift(data);
      } else {
        searchHistory.splice(searchHistory.length - 1, 1);
        searchHistory.unshift(data)
      }
      wx.setStorageSync('searchHistory', JSON.stringify(searchHistory));
      this.searchHistory = searchHistory;
    },

    clearHistory() {
      wx.clearStorageSync('searchHistory');
      this.searchHistory = [];
    },

    cancel() {
      this.isSearchLoaded = false;
    },

    openScanCode() {
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    }
  },
  /**
   * 用户下拉刷新
   */
  onPullDownRefresh() {
    setTimeout(() => {
      this.data = [
        {

        }
      ];
      wx.stopPullDownRefresh();
    }, 2000)
  },
  /**
   * 用户上拉加载
   */
  onReachBottom() {
    console.log('到底啦')
    this.loadMore();
  },

}