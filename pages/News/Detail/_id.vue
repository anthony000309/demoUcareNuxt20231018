<template>
  <div style="margin-top: 100px">
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="container DetailContent">
      <div class="mt-5">
        <h2 style="font-size: 1.75rem; font-weight: bold" id="center">最新消息</h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/News/"> 最新消息 </nuxt-link>
          </li>
          <li class="breadcrumb-item active ellipsis1 breadcrumbs_font_upper" aria-current="page">
            {{ NewsInfo.newstopic }}
            <span
              class="PcDevice"
              tabindex="0"
              name="C"
              title="跳到主要區塊"
              accesskey="C"
              style="color: #ffa500; font-size: 1rem; font-weight: 400"
            >
              :::
            </span>
          </li>
        </ol>
      </nav>

      <div class="my-2 row align-items-center">
        <div class="col-lg-1 my-2">
          <div v-if="NewsInfo.newscat == 'topnews'">
            <p class="alert alert-info">友照公告</p>
          </div>
          <div v-else-if="NewsInfo.newscat == 'column'">
            <p class="alert alert-primary">專欄報導</p>
          </div>
          <div v-else-if="NewsInfo.newscat == 'media'">
            <p class="alert alert-success">媒體資訊</p>
          </div>
        </div>

        <div class="col-lg-10">
          <h1 class="topicStyle">
            {{ NewsInfo.newstopic }}
          </h1>
        </div>
      </div>

      <div class="card-text text-muted">
        <i class="fas fa-clock mr-1 mb-1" aria-hidden="true"></i>
        {{ NewsInfo.newsdate }}
      </div>

      <div class="border-bottom my-4" style="border-bottom: 3px solid #4189d3 !important"></div>

      <div class="DefaultStyleSheet" style="line-height: 1.7" v-html="NewsInfo.newsdesc"></div>

      <div class="border p-4 my-5" v-if="getAdviceNews.length > 0">
        <p class="text-center mt-3 mb-sm-5 mb-3 otherDetailTitle">
          更多<span v-if="NewsInfo.newscat == 'topnews'">友照公告</span>
          <span v-else-if="NewsInfo.newscat == 'column'">專欄報導</span>
          <span v-else-if="NewsInfo.newscat == 'media'">媒體資訊</span>
        </p>

        <div v-for="item in getAdviceNews">
          <hr />

          <div
            class="row justify-content-between align-items-center mb-4 pointer"
            @click="visitNewsDetail(item.newsid)"
            @keyup.enter="visitNewsDetail(item.newsid)"
            tabindex="0"
          >
            <div class="col-lg-9">
              <p class="otherDetailTitleName" style="word-break: break-all">
                {{ item.newstopic }}
              </p>

              <p class="text-muted mt-1 TimeAddressFont">
                <i class="fas fa-clock mr-1" aria-hidden="true"></i>
                {{ item.newsdate }}
              </p>
            </div>

            <div class="col-lg-2 mt-lg-0 mt-3 text-right">
              <div v-if="item.newscat == 'topnews'">
                <span class="alert alert-info">友照公告</span>
              </div>

              <div v-else-if="item.newscat == 'column'">
                <span class="alert alert-primary">專欄報導</span>
              </div>

              <div v-else-if="item.newscat == 'media'">
                <span class="alert alert-success">媒體資訊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center my-5">
        <div class="a_style" @click="backLastPage" @keyup.enter="backLastPage" tabindex="0">
          <div class="btn btn-secondary Btnstyle py-2">回 前 頁</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'DashboardLayout',

    data() {
      return {
        NewsID: '',
        NewsInfo: {},
        getAdviceNews: [],
        getTitle: '',
        lastPage: '',
      }
    },

    head() {
      return {
        title: `${this.getTitle} - 友照醫療儀器`,

        meta: [
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:title', property: 'og:title', content: `${this.NewsInfo.newstopic} - 友照醫療儀器` },
        ],
      }
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      backLastPage() {
        const vm = this
        vm.$router.push(`${vm.lastPage}`)
      },

      visitNewsDetail(newsid) {
        this.$router.push(`/News/Detail/${newsid}`)
      },
    },

    async asyncData({ $axios, params }) {
      const NewsID = params.id

      return await $axios.get(`https://www.ucare-medical.com/api/news/${NewsID}`).then((res) => {
        let getNews = {}
        getNews = res.data.Data[0]
        return { NewsInfo: getNews, NewsID }
      })
    },

    mounted() {
      this.$nextTick(() => {
        $('.DefaultStyleSheet, .DefaultStyleSheet p').css({
          'padding-bottom': '24px',
        })
      })

      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this
      // if (this.$nuxt.context.from.path !== this.$nuxt.context.route.path) {
      //   vm.lastPage = this.$nuxt.context.from.path;
      // } else {
      vm.lastPage = '/News/'
      // }

      vm.getTitle = vm.NewsInfo.newstopic
      vm.getAdviceNews = vm.NewsInfo.otherNewsList
    },
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 991px) {
    .TimeAddressFont {
      font-size: 0.875rem;
    }

    .DetailContent {
      font-size: 1rem;
    }
    .otherDetailTitle {
      font-size: 1.25rem;
    }

    .otherDetailTitleName {
      font-size: 1.125rem;
      margin-top: 12px;
    }

    .alert {
      position: relative;
      padding: 0.1rem 0.35rem;
      margin-bottom: 0rem;
      border: 1px solid transparent;
      border-radius: 0px;
      width: 80px;
    }

    .topicStyle {
      font-size: 1.5625rem;
      font-weight: 600;
    }
  }

  @media (min-width: 992px) {
    .modal-lg {
      max-width: 715px;
    }

    .alert {
      position: relative;
      padding: 0.35rem 1.25rem;
      margin-bottom: 0rem;
      border: 1px solid transparent;
      border-radius: 0px;
      width: 120px;
    }

    .topicStyle {
      font-size: 1.75rem;
      font-weight: 600;
    }
  }

  .vdpComponent.vdpWithInput > input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-size: 1.0625rem;
    padding: 0.25rem 1.1rem;
    padding-right: 16px;
  }

  .el-input__inner {
    border: 1px solid #ced4da;
  }

  .el-date-editor .el-range-input {
    font-size: 1.0625rem;
  }

  .col-lg-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 10.333333%;
  }

  .btn {
    border-radius: 0px;
  }
</style>
