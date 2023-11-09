<template>
  <div>
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="TopicBG">
      <div class="AccesskeyIcon PcDevice2">
        <span tabindex="0" name="C" title="跳到主要區塊" accesskey="C" style="color: #ffa500; font-size: 1.3rem">
          :::
        </span>
      </div>
      <img src="../../assets/images/top_product.jpg" class="topBannerHeight" width="100%" alt="友照醫療-背景圖" />
      <h1 class="TopBanner_Cn container">產品資訊</h1>
    </div>

    <div class="container">
      <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
        <div class="toMainTopic_absolute_inside" id="center"></div>

        <ol class="breadcrumb" style="background-color: white; padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">產品資訊</li>
        </ol>
      </nav>

      <div class="PcDevice2">
        <div class="d-flex align-items-center mt-4 mb-5">
          <p
            class="btn btn-light py-1 px-5 mr-3 proCatStyle"
            @click="filterTopic('index')"
            @keyup.enter="filterTopic('index')"
            tabindex="0"
            :class="{ TopicActive: prosTopic == 0 }"
          >
            ALL
          </p>

          <div v-for="(item, index) in proCatList" :key="index">
            <p
              class="btn btn-light py-1 px-5 mr-3 proCatStyle"
              @click="filterTopic(item.eproCatName)"
              @keyup.enter="filterTopic(item.eproCatName)"
              tabindex="0"
              :class="{ TopicActive: prosTopic == item.productCatId }"
            >
              {{ item.proCatName }}
            </p>
          </div>
        </div>
      </div>

      <div class="MbDevice">
        <div class="row align-items-center">
          <div class="col-6 text-center mb-2">
            <p
              class="btn btn-light py-1 proCatStyle"
              @click="filterTopic('index')"
              @keyup.enter="filterTopic('index')"
              tabindex="0"
              :class="{ TopicActive: prosTopic == 0 }"
              style="padding-right: 60px; padding-left: 60px"
            >
              ALL
            </p>
          </div>

          <div v-for="(item, index) in proCatList" :key="index" class="col-6 text-center mb-2">
            <p
              class="btn btn-light py-1 px-5 proCatStyle"
              @click="filterTopic(item.eproCatName)"
              @keyup.enter="filterTopic(item.eproCatName)"
              tabindex="0"
              :class="{ TopicActive: prosTopic == item.productCatId }"
            >
              {{ item.proCatName }}
            </p>
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col-md-6 col-lg-4 mb-4" v-for="(item, index) in ProList" :key="index">
          <div
            class="card pointer bg-light"
            style="min-height: 360px"
            @click="visitProDetail(item.proid)"
            @keyup.enter="visitProDetail(item.proid)"
            tabindex="0"
          >
            <span class="bg-white">
              <span class="Imgtag" v-if="item.rent == 0">可出租123</span>

              <div class="logImgFrame mt-2">
                <img :src="`${item.proImg}`" width="85%" alt="產品圖" />
              </div>
              <div class="card-body bg-light">
                <h2 class="card-title ellipsis2 ListTitle">
                  {{ item.proName }}
                </h2>

                <div class="d-flex card-text text-muted mt-1 ellipsis2 ListSmContent">
                  <p class="ellipsis2">
                    {{ item.eproName }}
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
      title: '產品資訊 - 友照醫療儀器',
    },

    data() {
      return {
        ProList: [],

        ExhRawData: [],
        totaltenPageNum: 0,
        currentPage: 2,
        tenPageNum: 0,
        showpage: [],
        totalPage: '',
        prosTopic: 0,
        proCatList: [],
      }
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      filterTopic(CatName) {
        this.$router.push(`/Products/${CatName}`)
      },

      visitProDetail(proid) {
        this.$router.push(`/Products/Detail/${proid}`)
      },

      //分頁

      getPage(page) {
        const vm = this

        if (page == 1) {
          window.location.replace(`https://www.ucare-medical.com/Products`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/Products/index?page=${page}`)
        }
      },

      nextPage() {
        const vm = this
        let nextP = Number(vm.currentPage) + 1
        vm.currentPage = nextP

        if (vm.currentPage % 10 == 1) {
          vm.tenPageNum = vm.tenPageNum + 1
          vm.showpage = vm.ExhRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[0]
        }

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/Products`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/Products/index?page=${vm.currentPage}`)
        }
      },

      lastPage() {
        const vm = this
        let lastP = Number(vm.currentPage) - 1
        vm.currentPage = lastP

        if (vm.currentPage % 10 == 0) {
          vm.tenPageNum = vm.tenPageNum - 1
          vm.showpage = vm.ExhRawData[vm.tenPageNum]
          vm.currentPage = vm.showpage[9]
        }

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/Products`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/Products/index?page=${vm.currentPage}`)
        }
      },

      nexttenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum + 1
        vm.showpage = vm.ExhRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/Products`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/Products/index?page=${vm.currentPage}`)
        }
      },

      returntenPage() {
        const vm = this
        vm.tenPageNum = vm.tenPageNum - 1
        vm.showpage = vm.ExhRawData[vm.tenPageNum]
        vm.currentPage = vm.showpage[0]

        if (vm.currentPage == 1) {
          window.location.replace(`https://www.ucare-medical.com/Products`)
        } else {
          window.location.replace(`https://www.ucare-medical.com/Products/index?page=${vm.currentPage}`)
        }
      },
    },

    async asyncData({ $axios, params }) {
      let currentPage = 1
      let getPro = await $axios.get(`https://ucarebackend20231109.azurewebsites.net/product?keyword=&page=${currentPage}`)

      return {
        currentPage,
        ProList: getPro.data.Data,
        totalPage: getPro.data.pagetotal,
      }
    },

    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this

      if (!vm.ProList) {
        vm.$router.push({ path: `/Products/` })
      }

      //頁數公式

      if (vm.totalPage > 0) {
        for (let i = 0; i < vm.totalPage; i++) {
          if (i % 10 === 0) {
            vm.ExhRawData.push([])
          }

          const page = parseInt(i / 10)
          vm.ExhRawData[page].push(i + 1)
        }

        vm.totaltenPageNum = vm.ExhRawData.length
        let anaNowPage = vm.currentPage - 1
        vm.tenPageNum = parseInt(anaNowPage / 10)
        vm.showpage = vm.ExhRawData[vm.tenPageNum]
      }

      vm.$axios.get('https://ucarebackend20231109.azurewebsites.net/ProductCategory').then((response) => {
        if (response.data.Code == 200) {
          vm.proCatList = response.data.Data
        } else if (response.data.Code == 404) {
        } else if (response.data.Code == 500) {
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  .logImgFrame {
    // position: relative;
    width: 200px;
    min-height: 225px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.4s;

    &:hover {
      transform: scale(1.05);
    }
  }

  .btn-light {
    color: #212529;
    background-color: white;
    border-color: #f8f9fa;
    border: solid 1px #d4d4d4;
  }

  .TopicActive {
    font-weight: bold;
    border: 2px solid #616161;
  }

  .proCatStyle {
    border-radius: 20px;
  }

  .Imgtag {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 7px 7px;
    background-color: #ff751db0;
    color: #fff;
  }

  .btn-light:focus,
  .btn-light.focus {
    box-shadow: 0 0 0 0.2rem rgb(33 85 131);
  }
</style>
