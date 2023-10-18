<template>
  <div>
    <div class="wrapper">
      <div>
        <DashboardNav />
        <div style="min-height: 700px">
          <Nuxt />
        </div>
        <Footer class="sticky-bottom" />
      </div>

      <div id="SliderTop">
        <span class="PcDevice2">
          <i class="fas fa-2x fa-chevron-up toTop-arrow-PC" aria-hidden="true"></i>
        </span>

        <span class="MbDevice2">
          <i class="fas fa-2x fa-chevron-up toTop-arrow-Mb" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import DashboardNav from '../components/Dashboard_Navbar.vue'
  import Footer from '../components/Footer.vue'
  import $ from 'jquery'

  export default {
    components: {
      DashboardNav,
      Footer,
    },

    data() {
      return {
        showScreen: false,
      }
    },

    mounted() {
      let vm = this
      //置頂
      $(() => {
        $('#SliderTop').click(() => {
          $('html,body').animate({ scrollTop: 0 }, 'slow')
          return false
        })
        $(window)
          .scroll(function () {
            if ($(this).scrollTop() > 300) {
              $('#SliderTop').fadeIn(222)
            } else {
              $('#SliderTop').stop().fadeOut(222)
            }
          })
          .scroll()
      })
    },

    created() {},
  }
</script>

<style lang="scss">
  html {
    font-family: 'Amirfsadfi';
  }
  .MbDevice {
    display: none;
  }

  .PcDevice {
    display: inline-block;
  }

  .PcDevice2 {
    display: block;
  }

  .MbDevice2 {
    display: none;
  }

  @media (max-width: 991px) {
    body {
      font-size: 18px;
    }

    .topBannerHeight {
      height: 100px;
    }

    //主題頁topbanner

    .TopicBG {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 62px;
    }

    .MbDevice {
      display: inline-block;
    }

    .MbDevice2 {
      display: block;
    }

    .PcDevice {
      display: none;
    }

    .PcDevice2 {
      display: none;
    }

    .TopBanner_Cn {
      position: absolute;

      font-weight: bold;
      font-size: 1.875rem;
      color: #ffffff;
      letter-spacing: 8px;
    }

    .TopBanner_En {
      font-weight: bold;
      font-size: 1.75rem;
      color: #7685b73b;
    }

    .SearchWidth {
      width: 290px !important;
    }

    .page-link {
      position: relative;
      display: block;
      padding: 0.5rem 0.75rem;
      margin-left: -1px;
      line-height: 1.25;
      color: #3d8bc2;
      background-color: #fff;
      border: 1px solid #dee2e6;
    }

    .DetailContent {
      font-size: 1rem;
    }

    .pagination .page-link {
      padding: 7px;
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    .topBannerHeight {
      height: auto;
    }

    .TopBanner_Cn {
      position: absolute;

      font-weight: bold;
      font-size: 4rem;
      color: #ffffff;
      letter-spacing: 8px;
    }

    .TopBanner_En {
      font-weight: bold;
      font-size: 4rem;
      color: #7685b73b;
    }

    //主題頁topbanner

    .TopicBG {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 75px;
    }

    .AccesskeyIcon {
      position: absolute;
      top: 5px;
      left: 10px;
    }

    .SearchWidth {
      width: 300px !important;
    }

    .page-link {
      position: relative;
      display: block;
      padding: 0.5rem 0.75rem;
      margin-left: 8px;
      margin-right: 8px;
      line-height: 1.25;
      color: #3d8bc2;
      background-color: #fff;
      border: 1px solid #dee2e6;
    }
  }

  .Btnstyle {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.125rem;
  }

  .btn-secondary {
    color: #fff;
    background-color: #003c71de;
    border-color: #215583;
  }

  .ListContent {
    font-size: 1.125rem;
  }

  .container {
    max-width: 1280px;
  }

  .formMessage {
    color: rgb(243, 58, 58);
    font-size: 0.8125rem;
  }

  .red {
    color: #f00;
  }

  .NumberStyle {
    width: 30px;
    height: 30px;
    border-radius: 999em;
    background-color: #e6e5e5;
    font-size: 0.875rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 0px;
  }

  .checktag {
    background-color: #cdd9e2;
    margin-right: 3px;
    padding: 6px;
    font-size: 1rem;
  }

  .pointer {
    cursor: pointer;
    // transition-duration: 0.2s;
    &:hover {
      color: #8d8a8a;
    }
  }

  .vdpComponent.vdpWithInput > input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-size: 1.0625rem;
    padding: 0.35rem 18px 0.45rem 1.6rem;
    padding-right: 16px;
  }

  .el-date-editor .el-range-input,
  .el-date-editor .el-range-separator {
    font-size: 1rem;
  }

  body {
    font-size: 18px;
  }

  .text-muted {
    color: #a0a2a4;
  }

  .blueBG {
    background: #e1f5fe;
    color: #01579b;
    padding: 2px 5px;
    display: inline-block;
    word-break: break-all;
    font-size: 0.875rem;
  }

  .redBG {
    background: #fdf7f7;
    color: #e73a3a;
    padding: 2px 5px;
    display: inline-block;
    word-break: break-all;
    font-size: 0.875rem;
  }

  .ellipsis1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  .ellipsis2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  .ellipsis3 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  a:hover {
    text-decoration: none;
  }

  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    font-weight: bold;
    line-height: 1.2;
    color: inherit;
  }

  .NumberStyle {
    width: 30px;
    height: 30px;
    border-radius: 999em;
    background-color: #e6e5e5;
    font-size: 0.875rem;
    font-weight: 700;
  }

  .breadcrumb {
    background-color: white;
  }

  .dropdown-menu {
    background-color: #ffffff;
    margin: 0px;
    padding: 0.7rem 0;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 1.5rem 2rem;
    clear: both;
    color: #ffffff;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0px;
    transition: all 0.3s ease;
    font-size: 1.0625rem;

    &:hover {
      background-color: #e0e0e0;
      color: #ffffff;
    }
  }

  .toTop-arrow-PC {
    position: fixed;
    bottom: 50px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-style: solid;
    border-color: #003c7145;
    padding-left: 9px;
    padding-top: 5px;
    font-size: 1.9375rem;
    z-index: 3000;
    cursor: pointer;
    opacity: 0.7;
    border-radius: 30px;
    color: #003c71;
    transition-duration: 0.5s;

    background-image: linear-gradient(270deg, #f9f9f9, #f1f4ff);

    &:hover {
      transform: scale(1.1);
    }
  }

  .toTop-arrow-Mb {
    position: fixed;
    bottom: 50px;
    right: 4px;
    width: 35px;
    height: 35px;
    border-style: solid;
    border-color: #003c7145;
    padding-left: 8px;
    padding-top: 6px;
    font-size: 1rem;
    z-index: 3000;
    cursor: pointer;
    opacity: 0.7;
    border-radius: 30px;
    color: #003c71;
    background-image: linear-gradient(270deg, #f9f9f9, #f1f4ff);
    transition-duration: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #4175a4;
    border-color: #3d8bc2;
  }

  .ListTitle {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .ListSmContent {
    font-size: 1rem;
  }

  .DetailTitle {
    font-size: 1.375rem;
    font-weight: bold;
  }

  .DetailContent {
    font-size: 1.125rem;
  }

  .DetailTitleContent {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .TimeAddressFont {
    font-size: 1rem;
  }

  .otherDetailTitle {
    font-size: 1.375rem;
    font-weight: bold;
  }

  .otherDetailTitleName {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .MbListGray {
    color: rgb(89, 89, 89);
  }

  .MbListBlue {
    color: #66b1ff;
    background-color: #ecf5ff;
  }

  .modal-header {
    background-color: #ecf0f8;
    color: #575757;
  }

  .close {
    color: #575757;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .sticky-bottom {
    margin-top: auto;
  }

  .a_style {
    color: white;
  }

  .pre_line {
    white-space: pre-line;
  }

  //字體區

  .Menu_font {
    font-size: 1.125rem;
    color: #2e2f30;
    font-weight: 400;
  }

  .breadcrumbs_font_upper {
    font-size: 1.125rem;
    color: #1a1c1e;
  }

  .breadcrumbs_font_current {
    font-size: 1.125rem;
    color: #2e2f30;
  }

  .footer_font {
    font-size: 1rem;
    color: #ffffff;
  }

  .footer_copyright_font {
    font-size: 1rem;
    color: #a0a2a4;
  }

  .topbanner_font {
    font-size: 4rem;
    color: #2e2f30;
    font-weight: 500;
  }

  .btn_font {
    font-size: 1.125rem;
    color: #2e2f30;
  }

  .btn {
    font-size: 1.125rem;
  }

  .topic_font {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 500;
  }
  .label_font {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 500;
  }
  .title_font {
    font-size: 1.125rem;
    color: #ffffff;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .goCenter {
    position: absolute;
    top: -2.2em;
    left: 10px;
    // margin-left: -480px;
    padding: 0 0.5em;
    height: 2em;
    line-height: 2em;
    background: #cce5ff;
    text-decoration: none;
    z-index: 999999999999;
    opacity: 0;
    transition: 0.5s;
    border-radius: 0px 0px 4px 4px;
    color: #004085;
  }

  .goCenter:focus {
    outline: none;
    top: 20px;
    opacity: 1;
    box-shadow: 0 0px 0px 2px #b8daff inset;
  }

  .requiredFont {
    color: red;
    font-size: 0.85rem;
  }

  .toMainTopic_relative_inside {
    position: relative;
  }
  .toMainTopic_absolute_inside {
    position: absolute;
    width: 10px;
    top: -75px;
    color: rgb(255, 255, 255);
  }

  .exampleStyle {
    font-size: 0.9375rem;
    color: #a0a2a4;
    margin-left: 13px;
  }
</style>
