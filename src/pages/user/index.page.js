import ApiService from '@/utils/api.js';

export default {
  data() {
    return {
      data:{
        avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3157353141,3119034262&fm=11&gp=0.jpg',
        mobile:'15506656802',
        username:'美图雅',
        point:100,
        collection:3
      }
    }
  },
  created() {

  },
  mounted() {

  },

  components: {

  },
  computed: {

  },
  methods: {
    navigateUserinfo(){
      wx.navigateTo({
        url:'/pages/user/userinfo/main'
      })
    },
    navigatePoint(){
      wx.navigateTo({
        url:'/pages/user/point/main'
      })
    },
    navigateCollection(){
      wx.navigateTo({
        url:'/pages/user/collection/main'
      })
    }
  },

}