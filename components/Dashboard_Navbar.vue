<template>
  <div>
    <div class="visibleHidden">
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-white px-3 py-lg-0 py-3 shadow">
        <div class="container">
          <NuxtLink to="/">
            <img src="../assets/images/Newlogo.svg" class="img-fluid" width="200px" alt="友照醫療-Logo" />
          </NuxtLink>
          <div class="navbar-toggler p-0 border-0" data-toggle="offcanvas">
            <i
              class="fas fa-bars barColor"
              aria-hidden="true"
              style="font-size: 1.625rem"
              @click.prevent="openMbNavbar"
            ></i>
          </div>

          <div class="navbar-collapse offcanvas-collapse Menu_font" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto text-center mt-lg-0 mt-3">
              <li class="PcDevice">
                <span
                  class="nav-link TopicActive2 pointer"
                  title="跳到上方區塊"
                  style="color: #ffa500; font-size: 1.1rem"
                >
                  <span accesskey="U" tabindex="0"> ::: </span>
                </span>
              </li>
              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2">
                <span
                  class="nav-link MbTopicTitle TopicActive2 pointer"
                  :class="{ TopicActive3: getUrltopic == 'About' }"
                  @click.prevent="toTopicLink('About')"
                  @keyup.enter="toTopicLink('About')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'About' }"> 關於我們 </span>
                </span>
              </li>
              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2">
                <span
                  class="nav-link MbTopicTitle TopicActive2 pointer"
                  :class="{ TopicActive3: getUrltopic == 'Products' }"
                  @click.prevent="toTopicLink('Products')"
                  @keyup.enter="toTopicLink('Products')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'Products' }"> 產品資訊 </span>
                </span>
              </li>
              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2">
                <span
                  class="nav-link MbTopicTitle TopicActive2 pointer"
                  :class="{ TopicActive3: getUrltopic == 'Guides' }"
                  @click.prevent="toTopicLink('Guides')"
                  @keyup.enter="toTopicLink('Guides')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'Guides' }"> 使用教學 </span>
                </span>
              </li>
              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2 pointer">
                <span
                  class="nav-link MbTopicTitle TopicActive2"
                  :class="{ TopicActive3: getUrltopic == 'News' }"
                  @click.prevent="toTopicLink('News')"
                  @keyup.enter="toTopicLink('News')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'News' }"> 最新消息 </span>
                </span>
              </li>

              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2">
                <span
                  class="nav-link MbTopicTitle TopicActive2 pointer"
                  :class="{ TopicActive3: getUrltopic == 'Cases' }"
                  @click.prevent="toTopicLink('Cases')"
                  @keyup.enter="toTopicLink('Cases')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'Cases' }"> 團隊實績 </span>
                </span>
              </li>

              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2">
                <span
                  class="nav-link MbTopicTitle TopicActive2 pointer"
                  :class="{ TopicActive3: getUrltopic == 'Contact' }"
                  @click.prevent="toTopicLink('Contact')"
                  @keyup.enter="toTopicLink('Contact')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'Contact' }"> 聯絡我們 </span>
                </span>
              </li>

              <li class="nav-item active mr-0 mr-md-2 mb-lg-0 mb-2">
                <span
                  class="nav-link MbTopicTitle TopicActive2 pointer"
                  :class="{ TopicActive3: getUrltopic == 'Sitemap' }"
                  @click.prevent="toTopicLink('Sitemap')"
                  @keyup.enter="toTopicLink('Sitemap')"
                  tabindex="0"
                >
                  <span data-toggle="offcanvas" :class="{ TopicActive: getUrltopic == 'Sitemap' }"> 網站導覽 </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <li class="nav-item mr-4" style="display: none">
      <nuxt-link to="/Products/"> 產品資訊 </nuxt-link>
      <nuxt-link to="/Cases/"> 產品資訊 </nuxt-link>
      <nuxt-link to="/News/"> 產品資訊 </nuxt-link>
    </li>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        getUrltopic: '',
      }
    },

    methods: {
      toTopicLink(topic) {
        // $('.offcanvas-collapse').toggleClass('open')

        this.$nuxt.$loading.start()

        this.openMbNavbar()

        this.$router.push({
          path: `/${topic}/`,
        })
      },

      getUrl() {
        const vm = this
        vm.getUrltopic = vm.$route.path.split('/')[1].split('/')[0]
      },

      openMbNavbar() {
        $('.offcanvas-collapse').toggleClass('open')
      },
    },

    watch: {
      $route() {
        this.getUrl()
      },
    },
    mounted() {
      $(function () {
        $('[data-toggle="offcanvas"]').on('click', function () {
          $('.offcanvas-collapse').toggleClass('open')
        })
      })

      // const vm = this
      // vm.getUrl()

      // this.$nuxt.$on('NavStatus', () => {
      //   if (this.ShowNav) {
      //     this.ShowNav = false
      //   } else {
      //     this.ShowNav = true
      //   }
      // })

      this.$nuxt.$on('OpenNavStatus', () => {
        $('.visibleHidden').addClass('visibleShow')
      })

      this.$nuxt.$on('HideNavStatus', () => {
        $('.visibleShow').addClass('visibleHidden')
      })
    },

    created() {
      const vm = this
      vm.getUrl()

      // this.$nuxt.$on("NavStatus", () => {
      //   if (this.ShowNav) {
      //     this.ShowNav = false;
      //   } else {
      //     this.ShowNav = true;
      //   }
      // });
    },
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: #406d95;
    }
  }

  .modal-body-record {
    height: 80vh;
    overflow-y: auto;
  }

  .input-icons i {
    position: absolute;
  }

  .input-icons {
    width: 100%;
  }
  .icon {
    padding: 10px;
    min-width: 50px;
    text-align: center;
  }

  .input-field {
    width: 100%;
    text-align: center;
  }

  .navbarListBG {
    background-color: #3d8bc2;
  }

  .PcDevice2 {
    display: inline-block;
  }

  @media (min-width: 991px) {
    .navbar {
      padding: 0px;
    }

    a {
      text-decoration: none;
      color: #313131;
      &:hover {
        color: #406d95;
      }
    }

    .TopicActive {
      color: #ffffff;
      &:hover {
        color: #ffffff;
      }
    }

    .TopicActive2 {
      padding: 26px 20px;
    }

    .TopicActive3 {
      background: #215583;
      // transition-duration: 0.5s;
    }
  }

  @media (max-width: 991px) {
    .PcDevice2 {
      visibility: visible;
    }

    .TopicActive {
      background: #343a4000;
      border-bottom: 2px solid #1186ee;
      font-size: 1.375rem;
      color: #ffffff;
    }

    .TopicActive2 {
      padding: 0px;
    }

    .TopicActive3 {
      background: #21558300;
      color: #ffffff;
    }

    .MbTopicTitle {
      font-size: 1.25rem;
    }

    .nav-link {
      letter-spacing: 3px;
    }

    .offcanvas-collapse {
      top: 62px;
    }

    a {
      text-decoration: none;
      color: #ffffff;
      &:hover {
        color: #406d95;
      }
    }
  }

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 568px) {
    .navbar-dark .navbar-nav .nav-link {
      color: rgb(0 0 0 / 67%);
      // font-weight: 600;
    }
  }

  .visibleHidden {
    visibility: hidden;
  }
  .visibleShow {
    visibility: visible;
  }

  @media (max-width: 991.98px) {
    .offcanvas-collapse.open {
      left: 0;
      visibility: visible;
    }
  }

  .barColor {
    color: #5f656b;
  }

  /*# sourceMappingURL=bootstrap.css.map */
</style>
