import ApiService from '@/utils/api.js';
import { getParams } from '@/utils/index'
import $WeValidator from 'we-validator'


export default {
  data() {
    return {
      cardinfo: {
        cardno: null,
        password: null,
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
    this.isValid = this.validatorInstance.isValid(this.cardinfo, ['cardno:required', 'password:required']);
  },
  watch: {
    cardinfo: {
      handler(val, oldVal) {
        console.log(val, oldVal)
        this.isValid = this.validatorInstance.isValid(val, ['cardno:required', 'password:required']);
      },
      deep: true
    }
  },

  computed: {
   
  },
  components: {
  },
  methods: {
    initValidator() {
      this.validatorInstance = new $WeValidator({
        rules: {
          cardno: {
            required: true,
          },
          password: {
            required: true,
          },
        },
        messages: {
          cardno: {
            required: '请填写读者卡号',
          },
          password: {
            required: '请填写密码',
          },
        },
      })
    },

    submit(e) {
      console.log(this.cardinfo)
      let { value } = e.target;
      console.log(value)
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