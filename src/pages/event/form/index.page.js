import ApiService from '@/utils/api.js';
import { getParams } from '@/utils/index'
import $WeValidator from 'we-validator'


export default {
  data() {
    return {
      userinfo: {
        username: null,
        mobile: null,
        email: null
      },
      isValid: false,
    }
  },
  created() {
    this.api = new ApiService();
  },
  mounted() {
    this.id = getParams().id;
    this.initValidator();
  },
  watch: {
    userinfo: {
      handler(val, oldVal) {
        console.log(val, oldVal)
        this.isValid = this.validatorInstance.isValid(val, ['username:required', 'mobile:required']);
      },
      deep: true
    }
  },

  computed: {

  },
  methods: {
    initValidator() {
      this.validatorInstance = new $WeValidator({
        rules: {
          username: {
            required: true,
          },
          mobile: {
            required: true,
            mobile: true
          },
          email: {
            email: true
          },
        },
        messages: {
          username: {
            required: "请输入姓名",
          },
          mobile: {
            required: "请输入手机号",
            mobile: "手机号无效"
          },
          email: {
            email: "邮箱无效"
          },
        },
      })
    },
    submit(e) {
      console.log(this.userinfo)
      let { value } = e.target;
      console.log(value)
      console.log(this.validatorInstance.checkData(value))
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