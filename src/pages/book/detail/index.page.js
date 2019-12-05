import ApiService from '@/utils/api.js';

export default {
  data() {
    return {
      currentIndex: 0,
      detail: {
        images: 'http://primo.clcn.net.cn:8991/cgi-bin/isbn_cover.cgi?isbn=978-7-111-61272-8',
        title: 'java xxxx',
        publisher: "出版社: 北京;机械工业出版社;2019",
        author: '(日)河合俊雄著 ; 冯莹莹译',
        category_name: '中文',
        simple_intro: '本书是一本由村上式写作谈故事中的心理学。日本作家村上春树的小说《1Q84》上市12天狂销百万册，刷新日本纪录。他本人更是屡次问鼎诺贝尔文学奖，书迷遍及全球。为什么村上的小说如此迷人？他到底写中了现代人心中的什么？身为村上书迷的荣格心理学者河合俊雄，尝试以心理学来探究这个问题。河合俊雄说：“荣格心理疗法的世界重视梦与意象，许多时候与现实或常识是不相同的。这和村上春树所描绘的事物非常呼应。”而做为村上春树的读者，往往能经由流畅易读的小说进入与现实不同的次元，触碰到人们共同的基底而转化自己，这或许就是其作品魅力所在'
      },
      locations: [
        {
          id:1,
          location: '朝阳区图书馆',
          status: '在架上',
          location_detail: '朝阳区图书馆自主图书馆02',
          category_name: '中文图书',
          identical_number: '1552.45/23',
          codebar: '0524565585655'
        },
        {
          id:2,
          location: '朝阳区图书馆',
          status: '在架上',
          location_detail: '朝阳区图书馆自主图书馆02',
          category_name: '中文图书',
          identical_number: '1552.45/23',
          codebar: '0524565585655'
        }
      ],
      activeCollapse: []

    }
  },
  created() {
    this.api = new ApiService();

  },
  mounted() {
    this.getData()
  },

  components: {

  },
  computed: {

  },
  methods: {
    tabChange(e) {
      this.data = [];
      this.currentPage = 1;
      this.isLoadedAll = false;
      this.currentIndex = e.mp.detail.index;
      // this.currentIndex == 0 ? this.getEventsData(1) : this.getBooksData(1)
    },

    collapseChange(e) {
      console.log(e)
      this.activeCollapse = e.mp.detail
    },

    getData() {

    }
  },
}