import ApiService from '@/utils/api.js';

export default {
  data() {
    return {
      currentPoint: 2300,
      data: [
        {
          type: 'REDUCE',
          point: 100,
          name: '兑换奖品',
          time: '2019年06月17日  13：00'
        },
        {
          type: 'INCREASE',
          point: 200,
          name: '激活送积分',
          time: '2019年06月16日  13：00'
        }
      ],
      limits: 10,
      currentPage: 1,
      totalCount: 1,
      isLoadedAll: false,
      isLoadingMore: false,
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

  },

}