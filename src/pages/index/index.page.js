import ApiService from '@/utils/api.js';
import mpSearchbar from '@/components/searchbar';

export default {
  data() {
    return {
      notice: '',
      events: [],
      books: [],
      bookWidth: (wx.getSystemInfoSync().windowWidth - 20 - 10) / 3,
      eventWidth: (wx.getSystemInfoSync().windowWidth - 20 - 10) / 2,
    }
  },
  created() {
    this.api = new ApiService();
  },
  mounted() {
    this.getNotices();
    this.getBooks();
    this.getEvents();
  },

  components: {
    mpSearchbar
  },
  computed: {

  },
  methods: {
    openScanCode() {
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    },
    navigateSearch() {
      wx.navigateTo({
        url: '/pages/index/search/main'
      })
    },

    getNotices() {
      this.api.get('bplisn/announces?per-page=1')({
        'per-page': 3
      }).subscribe(res => {
        let notice = res.items;
        this.notices = notice.map(item => item.title);
        this.notice = this.notices.join(',')
      })
    },

    getEvents() {
      this.api.get('events/recommend')({
        'per-page': 5,
        page: 1
      }).subscribe(res => {
        this.events = res.items;
      })
    },
    getBooks() {
      this.api.get('bplisn/books')({
        'per-page': 5,
        page: 1
      }).subscribe(res => {
        this.books = res.items;
      })
    },

    getEvents() {
      this.api.get('clcn/events/recommend')({
        'per-page': 5,
        page: 1
      }).subscribe(res => {
        let data = res.items;
        data.map(item => { item.summary = item.summary.replace(/<\/?.+?>/g, "") });
        this.events = data;
      })
    },

    navigateEventList() {
      wx.switchTab({
        url: `/pages/event/main`
      })
    },

    navigateBookList() {
      wx.navigateTo({
        url: `/pages/book/main`
      })
    },

    navigateEvent(id) {
      wx.navigateTo({
        url: `/pages/event/detail/main?id=${id}`
      })
    },

    navigateBook(id) {
      wx.navigateTo({
        url: `/pages/book/detail/main?id=${id}`
      })
    }
  },
}