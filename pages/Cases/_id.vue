<template>
  <div>
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="TopicBG">
      <div class="AccesskeyIcon PcDevice2">
        <span tabindex="0" name="C" title="跳到主要區塊" accesskey="C" style="color: #ffffff; font-size: 1.3rem">
          :::
        </span>
      </div>
      <img src="../../assets/images/top_events.jpg" class="topBannerHeight" width="100%" alt="友照醫療-背景圖" />
      <h1 class="TopBanner_Cn container">團隊實績</h1>
    </div>

    <div class="container">
      <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
        <div class="toMainTopic_absolute_inside" id="center"></div>
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">團隊實績</li>
        </ol>
      </nav>

      <div class="row my-4">
        <div class="col-sm-6 col-lg-4 mb-4" v-for="(item, index) in EventList" :key="index">
          <div
            class="card pointer bg-light"
            style="min-height: 360px"
            @click="visitEventDetail(item.eventid)"
            @keyup.enter="visitEventDetail(item.eventid)"
            tabindex="0"
          >
            <span class="bg-white">
              <div class="logImgFrame my-2">
                <img :src="`${item.eventimg}`" class="img-fluid" alt="友照醫療-團隊實績圖" />
              </div>
              <div class="card-body bg-light">
                <h2 class="card-title ellipsis2 ListTitle">
                  {{ item.eventname }}
                </h2>

                <div class="d-flex card-text text-muted ListSmContent">
                  <div>
                    <i class="fas fa-clock mr-2" aria-hidden="true"></i>
                  </div>
                  <p class="ellipsis1">
                    {{ item.eventdate }}
                  </p>
                </div>
              </div>
            </span>
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
      title: '團隊實績 - 友照醫療儀器',
    },

    data() {
      return {
        EventList: [],
        EventRawData: [],
        totaltenPageNum: 0,
        currentPage: 2,
        tenPageNum: 0,
        showpage: [],
        totalPage: '',
      }
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      visitEventDetail(Eventid) {
        this.$router.push(`/Cases/Detail/${Eventid}`)
      },

      //分頁

      getPage(page) {
        const vm = this
        vm.currentPage = page

        if (page == 1) {
          vm.$router.push({ path: `/Cases` })
        } else {
          vm.$router.push({ path: `/Cases/index?page=${vm.currentPage}` })
        }
      },

      nextPage() {
        const vm = this
        let nextP = Number(vm.currentPage) + 1
        vm.currentPage = nextP

        if (vm.currentPage % 10 == 1) {
          vm.tenPageNum = vm.tenPageNum + 1
          vm.showpage = vm.EventRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[0]
        }

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Cases`,
          })
        } else {
          vm.$router.push({
            path: `/Cases/index?page=${vm.currentPage}`,
          })
        }
      },

      lastPage() {
        const vm = this
        let lastP = Number(vm.currentPage) - 1
        vm.currentPage = lastP

        if (vm.currentPage % 10 == 0) {
          vm.tenPageNum = vm.tenPageNum - 1
          vm.showpage = vm.EventRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[9]
        }

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Cases`,
          })
        } else {
          vm.$router.push({
            path: `/Cases/index?page=${vm.currentPage}`,
          })
        }
      },

      nexttenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum + 1
        vm.showpage = vm.EventRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Cases`,
          })
        } else {
          vm.$router.push({
            path: `/Cases/index?page=${vm.currentPage}`,
          })
        }
      },

      returntenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum - 1
        vm.showpage = vm.EventRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          vm.$router.push({
            path: `/Cases`,
          })
        } else {
          vm.$router.push({
            path: `/Cases/index?page=${vm.currentPage}`,
          })
        }
      },
    },

    async asyncData({ $axios, route }) {
      if (route.query.page) {
        let currentPage = route.query.page

        let getEvent = await $axios.get(`https://demoucare20231012.azurewebsites.net/event?keyword=&page=${currentPage}`)

        return {
          currentPage,
          EventList: getEvent.data.Data,
          totalPage: getEvent.data.pagetotal,
        }
      } else {
        let currentPage = 1

        let getEvent = await $axios.get(`https://demoucare20231012.azurewebsites.net/event?keyword=&page=${currentPage}`)

        return {
          currentPage,
          EventList: getEvent.data.Data,
          totalPage: getEvent.data.pagetotal,
        }
      }
    },

    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this

      if (!vm.EventList) {
        vm.$router.push({ path: `/Cases/` })
      }

      //頁數公式

      if (vm.totalPage > 0) {
        for (let i = 0; i < vm.totalPage; i++) {
          if (i % 10 === 0) {
            vm.EventRawData.push([])
          }

          const page = parseInt(i / 10)
          vm.EventRawData[page].push(i + 1)
        }

        vm.totaltenPageNum = vm.EventRawData.length
        let anaNowPage = vm.currentPage - 1
        vm.tenPageNum = parseInt(anaNowPage / 10)
        vm.showpage = vm.EventRawData[vm.tenPageNum]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .logImgFrame {
    width: 215px;
    min-height: 215px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    transition-duration: 0.4s;

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
