import ApiService from '@/utils/api.js';

export default {
  data() {
    return {
      data:{
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
    navigateBindCard(){
      wx.navigateTo({
        url:'/pages/user/bindCard/main'
      })
    },
    navigateApplyCard(){
      wx.navigateTo({
        url:'/pages/user/applyCard/main'
      })
    }
  },

}