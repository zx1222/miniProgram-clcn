import ApiService from '@/utils/api.js';
import { getParams, formatTime } from '@/utils/index'
import inputNumber from '@/components/inputNumber'

export default {
  data() {
    return {
      id: null,
      data: {},
      inputNumber: 1,
      maxnum:10
    }
  },
  created() {
    this.api = new ApiService();
  },
  mounted() {
    this.id = getParams().id;
    this.getData(this.id);
  },

  components: {
    inputNumber
  },
  computed: {

  },
  methods: {
    getData(id) {
      this.api.get(`clcn/events/${id}`)({}).subscribe(res => {
        let data = res;
        data.start_date = formatTime(new Date(data.start_date * 1000));
        data.end_date = formatTime(new Date(data.end_date * 1000)).split(' ')[1];
        this.data = data;
      })
    },

    blur(e) {
      this.inputNumber = e.mp.detail.value;
    },
    reduce(val) {
      this.inputNumber = val;
    },
    add(val) {
      this.inputNumber = val;
    },
    navigateForm() {
      wx.navigateTo({
        url: `/pages/event/form/main?id=${this.id}`
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