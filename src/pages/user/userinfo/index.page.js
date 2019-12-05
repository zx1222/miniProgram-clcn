import ApiService from '@/utils/api.js';
import { getParams } from '@/utils/index'
import $WeValidator from 'we-validator'
import mpPicker from 'mpvue-weui/src/picker';


export default {
  data() {
    return {
      userinfo: {
        username: 'zx',
        gender: 'FEMALE',
        region: ['北京市', '北京市', '朝阳区'],
        mobile: '15506656802',
        email: '165566358@qq.com',
        birthday: '1994-7-22',
        sign: '懒一些也是哲学'
      },
      isValid: false,
      genderData: [
        {
          label: '女',
          value: 'FEMALE'
        },
        {
          label: '男',
          value: 'MALE'
        }
      ],
      genderIndex: 0
    }

  },
  created() {
    this.api = new ApiService();
  },
  mounted() {
    this.id = getParams().id;
    this.initValidator();
    this.isValid = this.validatorInstance.isValid(this.userinfo, ['username:required', 'mobile:required']);
    this.$store.commit("setAvatar", 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3157353141,3119034262&fm=11&gp=0.jpg');
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
    avatar() {
      return this.$store.state.avatar 
    }
  },
  components: {
    mpPicker
  },
  methods: {
    initValidator() {
      this.validatorInstance = new $WeValidator({
        rules: {
          username: {
            required: true,
          },
          gender: {
            required: true,
          },
          region: {
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
          gender: {
            required: "请选择性别"
          },
          region: {
            required: "请选择地区"
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

    genderChange: function (e) {
      this.genderIndex = e.mp.detail.value
      this.userinfo.gender = this.genderData[this.genderIndex].value;
    },
    regionChange(e) {
      this.userinfo.region = e.mp.detail.value
    },
    dateChange(e) {
      this.userinfo.birthday = e.mp.detail.value
    },

    navigateCropper() {
      wx.navigateTo({
        url: '/pages/user/cropper/main'
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