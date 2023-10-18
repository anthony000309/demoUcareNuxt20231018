<template>
  <div style="margin-top: 100px">
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="container DetailContent">
      <div class="mt-5">
        <h2 style="font-size: 1.75rem; font-weight: bold" id="center">團隊實績</h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/Cases/"> 團隊實績 </nuxt-link>
          </li>
          <li class="breadcrumb-item active ellipsis1 breadcrumbs_font_upper" aria-current="page">
            {{ EventData.eventname }}
            <span
              tabindex="0"
              name="C"
              title="跳到主要區塊"
              accesskey="C"
              style="color: #ffa500; font-size: 1rem; font-weight: 400"
              class="PcDevice"
            >
              :::
            </span>
          </li>
        </ol>
      </nav>

      <div class="mt-4 bg-light p-4">
        <h1 class="DetailTitle">
          {{ EventData.eventname }}
        </h1>

        <div class="d-flex text-muted ListSmContent mt-1 mb-3" style="font-size: 1rem">
          <div>
            <i class="fas fa-clock mr-2" aria-hidden="true"></i>
          </div>
          <div>
            {{ EventData.eventdate }}
          </div>
        </div>

        <p class="pre_line">{{ EventData.eventdesc }}</p>
      </div>

      <div v-if="hasPhotoList">
        <div class="row mt-4">
          <div class="col-md-3 col-sm-4 col-6 my-3" v-for="(item, index) in GetAllExh" :key="index">
            <div>
              <div v-if="index == 0">
                <a :href="item.photoimgL" data-fancybox="images" :title="EventData.eventdesc">
                  <img :src="item.photoimgM" class="img-fluid" :alt="item.photoid" />
                </a>
              </div>

              <div v-else>
                <a :href="item.photoimgL" data-fancybox="images">
                  <img :src="item.photoimgM" class="img-fluid" :alt="item.photoid" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <div
            class="btn btn-dark Btnstyle2"
            @click="AddMorePic"
            @keyup.enter="AddMorePic"
            tabindex="0"
            v-if="totalPage > currentPage"
          >
            查看更多
          </div>
        </div>
      </div>

      <div v-else class="my-5"></div>

      <div v-if="getAdviceExh.length == 0">
        <hr />
      </div>

      <div class="border p-4 my-sm-5 my-3" v-if="getAdviceExh.length > 0">
        <p class="text-center mt-3 mb-sm-5 mb-3 otherDetailTitle">更多團隊實績</p>

        <div v-for="item in getAdviceExh">
          <hr />

          <div
            class="row align-items-center pointer"
            @click="visitEvnetDetail(item.eventid)"
            @keyup.enter="visitEvnetDetail(item.eventid)"
            tabindex="0"
          >
            <div class="col-sm-2 text-center">
              <img :src="`${item.eventimg}`" class="img-fluid" width="180px" alt="友照醫療-團隊實績照片" />
            </div>
            <div class="col-sm-10">
              <h5 class="otherDetailTitleName mt-sm-0 mt-3 ellipsis3">
                {{ item.eventname }}
              </h5>
              <p class="card-text text-muted mt-sm-3 mt-2 TimeAddressFont">
                <i class="fas fa-clock mr-1" aria-hidden="true"></i>
                {{ item.eventdate }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center my-3">
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

    head() {
      return {
        title: `${this.getTitle} - 友照醫療儀器`,

        meta: [
          { charset: 'utf-8' },
          { hid: 'og:title', property: 'og:title', content: `${this.getTitle} - 友照醫療儀器` },
          { hid: 'og:description', property: 'og:description', content: `${this.EventData.eventdesc}` },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${this.EventData.eventimg}`,
          },
        ],
      }
    },

    data() {
      return {
        EventID: '',
        currentPage: 1,
        totalPage: '',
        EventData: {},
        getAdviceExh: [],
        hasPhotoList: false,
        GetAllExh: [],
        lastPage: '',
        getTitle: '',
      }
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView({
          behavior: 'smooth',
        })
      },
      backLastPage() {
        const vm = this
        vm.$router.push(`${vm.lastPage}`)
      },
      AddMorePic() {
        const vm = this

        if (vm.totalPage > vm.currentPage) {
          vm.currentPage = vm.currentPage + 1

          vm.$axios
            .get(`https://www.ucare-medical.com/api/eventphoto/${vm.EventID}?page=${vm.currentPage}`)
            .then((response) => {
              if (response.data.Code == '200') {
                let getNewExhPhoto = []
                getNewExhPhoto = response.data.Data

                vm.GetAllExh = vm.GetAllExh.concat(getNewExhPhoto)

                vm.hasPhotoList = true
              } else if (response.data.Code == 404) {
                vm.hasPhotoList = false
              }
            })
        }
      },

      visitEvnetDetail(EventID) {
        this.$router.push(`/Cases/Detail/${EventID}`)
      },
    },

    async asyncData({ $axios, params }) {
      const EventID = params.id

      return await $axios.get(`https://www.ucare-medical.com/api/event/${EventID}`).then((res) => {
        let getList = {}
        getList = res.data.Data[0]
        return { EventData: getList, EventID }
      })
    },

    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this

      // if (this.$nuxt.context.from.path !== this.$nuxt.context.route.path) {
      //   vm.lastPage = this.$nuxt.context.from.path;
      // } else {
      vm.lastPage = '/Cases/'
      // }

      vm.getAdviceExh = vm.EventData.otherEventList

      vm.$axios.get(`https://www.ucare-medical.com/api/eventphoto/${vm.EventID}?page=1`).then((response) => {
        if (response.data.Code == '200') {
          vm.ShowtotalNum = response.data.Datatotal

          vm.totalPage = response.data.pagetotal
          vm.GetAllExh = response.data.Data

          vm.hasPhotoList = true
        } else if (response.data.Code == 404) {
          vm.hasPhotoList = false
        }
      })

      vm.getTitle = vm.EventData.eventname
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

  .btn {
    border-radius: 0px;
  }

  .Btnstyle2 {
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 1.125rem;
  }

  .btn-dark {
    color: #fff;
    background-color: #5c6a77;
    border-color: #5c6a77;
  }
</style>
