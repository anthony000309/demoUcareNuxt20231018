<template>
  <div>
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="TopicBG">
      <div class="AccesskeyIcon PcDevice2">
        <span tabindex="0" name="C" title="跳到主要區塊" accesskey="C" style="color: #ffa500; font-size: 1.3rem">
          :::
        </span>
      </div>
      <img src="../../assets/images/top_video.jpg" class="topBannerHeight" width="100%" alt="友照醫療-背景圖" />
      <h1 class="TopBanner_Cn container">使用教學</h1>
    </div>

    <div class="container">
      <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
        <div class="toMainTopic_absolute_inside" id="center"></div>

        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">使用教學</li>
        </ol>
      </nav>

      <div class="row my-4">
        <div class="col-lg-4 col-sm-6 mb-4" v-for="item in VideoList">
          <a
            :href="`https://www.youtube.com/embed/${item.videolink}`"
            frameborder="0"
            allow="autoplay; encrypted-media"
            data-fancybox
            data-width="1280"
            data-height="720"
            title="教學影片視窗"
          >
            <img
              :src="`https://img.youtube.com/vi/${item.videolink}/hqdefault.jpg`"
              class="BannerHover"
              width="100%"
              alt="教學影片視窗"
            />
          </a>

          <div class="py-3 bg-light text-center">
            <h2 class="ellipsis2 mx-1" style="height: 50px; font-size: 1.0625rem; font-weight: bold">
              {{ item.videotopic }}
            </h2>
          </div>
        </div>
      </div>

      <div v-if="totalPage > 1" class="d-flex justify-content-center">
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
      title: '使用教學 - 友照醫療儀器',
    },

    data() {
      return {
        VideoList: [],
        VideoRawData: [],
        totaltenPageNum: 0,
        currentPage: 1,
        tenPageNum: 0,
        showpage: [],
        totalPage: '',
      }
    },

    methods: {
      //分頁
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },

      getPage(page) {
        const vm = this
        vm.currentPage = page

        if (page == 1) {
          vm.$router.push({ path: `/Guides` })
        } else {
          vm.$router.push({ path: `/Guides/index?page=${vm.currentPage}` })
        }
      },

      nextPage() {
        const vm = this
        let nextP = Number(vm.currentPage) + 1
        vm.currentPage = nextP

        if (vm.currentPage % 10 == 1) {
          vm.tenPageNum = vm.tenPageNum + 1
          vm.showpage = vm.VideoRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[0]
        }

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Guides`,
          })
        } else {
          vm.$router.push({
            path: `/Guides/index?page=${vm.currentPage}`,
          })
        }
      },

      lastPage() {
        const vm = this
        let lastP = Number(vm.currentPage) - 1
        vm.currentPage = lastP

        if (vm.currentPage % 10 == 0) {
          vm.tenPageNum = vm.tenPageNum - 1
          vm.showpage = vm.VideoRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[9]
        }

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Guides`,
          })
        } else {
          vm.$router.push({
            path: `/Guides/index?page=${vm.currentPage}`,
          })
        }
      },

      nexttenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum + 1
        vm.showpage = vm.VideoRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Guides`,
          })
        } else {
          vm.$router.push({
            path: `/Guides/index?page=${vm.currentPage}`,
          })
        }
      },

      returntenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum - 1
        vm.showpage = vm.VideoRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Guides`,
          })
        } else {
          vm.$router.push({
            path: `/Guides/index?page=${vm.currentPage}`,
          })
        }
      },
    },

    async asyncData({ $axios, params, route }) {
      if (route.query.page) {
        let currentPage = route.query.page

        let getVideo = await $axios.get(`https://ucarebackend20231109.azurewebsites.net/video?keyword=&page=${currentPage}`)
        return {
          currentPage,
          VideoList: getVideo.data.Data,
          totalPage: getVideo.data.pagetotal,
        }
      } else {
        let currentPage = 1

        let getVideo = await $axios.get(`https://ucarebackend20231109.azurewebsites.net/video?keyword=&page=1`)

        return {
          currentPage,
          VideoList: getVideo.data.Data,
          totalPage: getVideo.data.pagetotal,
        }
      }
    },

    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this

      if (!vm.VideoList) {
        vm.$router.push({ path: `/Guides/` })
      }

      //頁數公式

      if (vm.totalPage > 0) {
        for (let i = 0; i < vm.totalPage; i++) {
          if (i % 10 === 0) {
            vm.VideoRawData.push([])
          }

          const page = parseInt(i / 10)
          vm.VideoRawData[page].push(i + 1)
        }

        vm.totaltenPageNum = vm.VideoRawData.length
        let anaNowPage = vm.currentPage - 1
        vm.tenPageNum = parseInt(anaNowPage / 10)
        vm.showpage = vm.VideoRawData[vm.tenPageNum]
      }
    },
  }
</script>

<style lang="scss" scoped></style>
