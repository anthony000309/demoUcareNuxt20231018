<template>
  <div v-if="show">
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="TopicBG">
      <div class="AccesskeyIcon PcDevice2">
        <span tabindex="0" name="C" title="跳到主要區塊" accesskey="C" style="color: #ffffff; font-size: 1.3rem">
          :::
        </span>
      </div>
      <img
        src="../../assets/images/top_news.jpg"
        class="topBannerHeight PcDevice2"
        width="100%"
        alt="友照醫療-背景圖"
      />

      <img
        src="../../assets/images/top_news.jpg"
        class="topBannerHeight MbDevice"
        style="filter: brightness(75%)"
        width="100%"
        alt="友照醫療-背景圖"
      />

      <h1 class="TopBanner_Cn container">最新消息</h1>
    </div>

    <div class="container mb-5">
      <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
        <div class="toMainTopic_absolute_inside" id="center"></div>
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">最新消息</li>
        </ol>
      </nav>

      <div class="PcDevice2">
        <div class="d-flex align-items-center mt-4 mb-5 filterTitle">
          <p
            class="btn btn-light py-1 px-5 mr-3 proCatStyle"
            @click="filterTopic('all')"
            @keyup.enter="filterTopic('all')"
            tabindex="0"
            :class="{ TopicActive: newsTopic == 1 }"
          >
            ALL
          </p>

          <p
            class="btn btn-light py-1 px-4 mr-3 proCatStyle"
            @click="filterTopic('topnews')"
            @keyup.enter="filterTopic('topnews')"
            tabindex="0"
            :class="{ TopicActive: newsTopic == 2 }"
          >
            友照公告
          </p>

          <p
            class="btn btn-light py-1 px-4 mr-3 proCatStyle"
            @click="filterTopic('media')"
            @keyup.enter="filterTopic('media')"
            tabindex="0"
            :class="{ TopicActive: newsTopic == 4 }"
          >
            媒體資訊
          </p>

          <p
            class="btn btn-light py-1 px-4 mr-3 proCatStyle"
            @click="filterTopic('column')"
            @keyup.enter="filterTopic('column')"
            tabindex="0"
            :class="{ TopicActive: newsTopic == 3 }"
          >
            專欄報導
          </p>
        </div>
      </div>

      <div class="MbDevice2">
        <div class="row align-items-center filterTitle">
          <div class="col-6 text-center mb-2">
            <p
              class="btn btn-light py-1 proCatStyle"
              @click="filterTopic('all')"
              @keyup.enter="filterTopic('all')"
              tabindex="0"
              :class="{ TopicActive: newsTopic == 1 }"
              style="padding-right: 60px; padding-left: 60px"
            >
              ALL
            </p>
          </div>
          <div class="col-6 text-center mb-2">
            <p
              class="btn btn-light py-1 proCatStyle"
              @click="filterTopic('topnews')"
              @keyup.enter="filterTopic('topnews')"
              tabindex="0"
              :class="{ TopicActive: newsTopic == 2 }"
              style="padding-right: 40px; padding-left: 40px"
            >
              友照公告
            </p>
          </div>
          <div class="col-6 text-center mb-2">
            <p
              class="btn btn-light py-1 proCatStyle"
              style="padding-right: 40px; padding-left: 40px"
              @click="filterTopic('media')"
              @keyup.enter="filterTopic('media')"
              tabindex="0"
              :class="{ TopicActive: newsTopic == 4 }"
            >
              媒體資訊
            </p>
          </div>
          <div class="col-6 text-center mb-2">
            <p
              class="btn btn-light py-1 proCatStyle"
              style="padding-right: 40px; padding-left: 40px"
              @click="filterTopic('column')"
              @keyup.enter="filterTopic('column')"
              tabindex="0"
              :class="{ TopicActive: newsTopic == 3 }"
            >
              專欄報導
            </p>
          </div>
        </div>
      </div>

      <div class="row my-4 PcDevice2">
        <table class="table">
          <tbody>
            <tr
              v-for="(item, index) in NewsList"
              :key="index"
              class="text-center pointer"
              @click="visitNewsDetail(item.newsid)"
              @keyup.enter="visitNewsDetail(item.newsid)"
              tabindex="0"
            >
              <th scope="row" width="100">{{ item.newsdate }}</th>
              <td width="130" style="font-size: 1.0625rem">
                <div v-if="item.newscat == 'topnews'">
                  <p class="alert alert-info">友照公告</p>
                </div>

                <div v-else-if="item.newscat == 'column'">
                  <p class="alert alert-primary">專欄報導</p>
                </div>

                <div v-else-if="item.newscat == 'media'">
                  <p class="alert alert-success">媒體資訊</p>
                </div>
              </td>
              <td class="text-left">{{ item.newstopic }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row MbDevice2 mt-3">
        <div
          v-for="(item, key) in NewsList"
          :key="key"
          class="pointer px-3 mb-1"
          @click="visitNewsDetail(item.newsid)"
          @keyup.enter="visitNewsDetail(item.newsid)"
          tabindex="0"
        >
          <hr />

          <div class="d-flex align-items-center">
            <div style="font-size: 0.9375rem">
              <div v-if="item.newscat == 'topnews'">
                <p class="alert alert-info text-center px-1">友照公告</p>
              </div>

              <div v-else-if="item.newscat == 'column'">
                <p class="alert alert-primary text-center px-1">專欄報導</p>
              </div>

              <div v-else-if="item.newscat == 'media'">
                <p class="alert alert-success text-center px-1">媒體資訊</p>
              </div>
            </div>

            <p class="ml-2 text-muted" style="font-size: 0.875rem">
              {{ item.newsdate }}
            </p>
          </div>

          <h2 class="mt-2" style="font-size: 1.1875rem; font-weight: 400" id="center">
            {{ item.newstopic }}
          </h2>
        </div>
      </div>

      <div v-if="totalPage > 1" class="pt-sm-4 pt-5 d-flex justify-content-center">
        <nav>
          <ul class="pagination pointer">
            <li v-if="totaltenPageNum > 1" class="page-item" :class="{ disabled: tenPageNum == 0 }">
              <span class="page-link" title="Last ten pages" aria-label="Previous" @click="returntenPage()">
                <span aria-hidden="true"><i class="fas fa-angle-double-left" aria-hidden="true"></i></span>
              </span>
            </li>
            <li class="page-item" :class="{ disabled: currentPage == 1 }">
              <span class="page-link" title="Last page" aria-label="Previous" @click="lastPage()">
                <span aria-hidden="true">
                  <i class="fas fa-angle-left" aria-hidden="true"></i>
                </span>
              </span>
            </li>
            <li
              class="page-item"
              v-for="(page, index) in showpage"
              :key="index"
              :class="{ active: currentPage == page }"
            >
              <span class="page-link" @click="getPage(page)">{{ page }}</span>
            </li>

            <li class="page-item" :class="{ disabled: currentPage == totalPage }">
              <span class="page-link" title="Next page" aria-label="Next" @click="nextPage()">
                <span aria-hidden="true"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
              </span>
            </li>
            <li v-if="totaltenPageNum > 1" class="page-item" :class="{ disabled: tenPageNum == totaltenPageNum - 1 }">
              <span class="page-link" title="Next ten pages" aria-label="Next" @click="nexttenPage()">
                <span aria-hidden="true"><i class="fas fa-angle-double-right" aria-hidden="true"></i></span>
              </span>
            </li>
          </ul>
          <p class="text-center mt-2">{{ currentPage }} of {{ totalPage }}</p>
          <p>&zwnj;</p>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'DashboardLayout',

    head: {
      title: '最新消息 - 友照醫療儀器',
    },

    data() {
      return {
        NewsList: [],
        NewsRawData: [],
        totaltenPageNum: 0,
        currentPage: 2,
        tenPageNum: 0,
        showpage: [],
        totalPage: '',

        getAllNews: [],
        getTopnews: [],
        getColumn: [],
        getMedia: [],
        newsTopic: 1,
        show: false,
      }
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      visitNewsDetail(newsid) {
        this.$router.push(`/News/Detail/${newsid}`)
      },

      filterTopic(topic) {
        if (topic == 'all') {
          this.$router.push(`/News/`)
        } else if (topic == 'topnews') {
          this.$router.push(`/News/bulletin`)
        } else if (topic == 'column') {
          this.$router.push(`/News/article`)
        } else if (topic == 'media') {
          this.$router.push(`/News/media`)
        }
      },

      //分頁

      getPage(page) {
        const vm = this

        if (page == 1) {
          window.location.replace(`https://www.ucare-medical.com/News`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/News/index?page=${page}`)
        }
      },

      nextPage() {
        const vm = this
        let nextP = Number(vm.currentPage) + 1
        vm.currentPage = nextP

        if (vm.currentPage % 10 == 1) {
          vm.tenPageNum = vm.tenPageNum + 1
          vm.showpage = vm.NewsRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[0]
        }

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/News`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/News/index?page=${vm.currentPage}`)
        }
      },

      lastPage() {
        const vm = this
        let lastP = Number(vm.currentPage) - 1
        vm.currentPage = lastP

        if (vm.currentPage % 10 == 0) {
          vm.tenPageNum = vm.tenPageNum - 1
          vm.showpage = vm.NewsRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[9]
        }

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/News`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/News/index?page=${vm.currentPage}`)
        }
      },

      nexttenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum + 1
        vm.showpage = vm.NewsRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/News`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/News/index?page=${vm.currentPage}`)
        }
      },

      returntenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum - 1
        vm.showpage = vm.NewsRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/News`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/News/index?page=${vm.currentPage}`)
        }
      },
    },

    async asyncData({ $axios, route, params }) {
      let currentPage = 1
      let GetnewsTopic = 1

      let getAllNews = await $axios.get(`https://ucarebackend20231109.azurewebsites.net/news?keyword=&newscat=&page=${currentPage}`)

      return {
        currentPage,
        NewsList: getAllNews.data.Data,
        totalPage: getAllNews.data.pagetotal,
        newsTopic: GetnewsTopic,
      }
    },

    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this

      if (!vm.NewsList) {
        vm.$router.push({ path: `/News/` })
      }

      // 頁數公式

      if (vm.totalPage > 0) {
        for (let i = 0; i < vm.totalPage; i++) {
          if (i % 10 === 0) {
            vm.NewsRawData.push([])
          }

          const page = parseInt(i / 10)
          vm.NewsRawData[page].push(i + 1)
        }

        vm.show = true

        vm.totaltenPageNum = vm.NewsRawData.length
        let anaNowPage = vm.currentPage - 1
        vm.tenPageNum = parseInt(anaNowPage / 10)
        vm.showpage = vm.NewsRawData[vm.tenPageNum]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .alert {
    position: relative;
    padding: 0.1rem 0rem;
    margin-bottom: 0rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .btn-light {
    color: #212529;
    background-color: white;
    border-color: #f8f9fa;
    border: solid 1px #d4d4d4;
  }

  .btn-light:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }

  .filterTitle {
    font-size: 1.125rem;
  }

  .TopicActive {
    font-weight: bold;
    border: 2px solid #616161;
  }

  .proCatStyle {
    border-radius: 20px;
  }

  .btn-light:focus,
  .btn-light.focus {
    box-shadow: 0 0 0 0.2rem rgb(33 85 131);
  }
</style>
