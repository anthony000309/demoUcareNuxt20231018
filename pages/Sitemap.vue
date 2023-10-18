<template>
  <div>
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="TopicBG">
      <div class="AccesskeyIcon PcDevice2">
        <span tabindex="0" name="C" title="跳到主要區塊" accesskey="C" style="color: #ffa500; font-size: 1.3rem">
          :::
        </span>
      </div>
      <img src="../assets/images/top_about.jpg" class="topBannerHeight" width="100%" alt="友照醫療-背景圖" />
      <h1 class="TopBanner_Cn container">網站導覽</h1>
    </div>

    <div class="container">
      <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
        <div class="toMainTopic_absolute_inside" id="center"></div>
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">網站導覽</li>
        </ol>
      </nav>

      <h3 class="mb-4">本站提供無障礙設計</h3>

      <div style="font-size: 1.1rem" class="letterspacing bg-light p-3">
        <p>本網站遵循無障礙網站設計之規範，網站主要內容分為三大區塊：</p>
        <div class="mt-2" style="font-size: 1rem">
          <p>1. 上方導覽區塊</p>
          <p>2. 主要內容區塊</p>
          <p>3. 下方聯絡資訊區塊</p>
        </div>

        <p class="mt-4">本網站使用的鍵盤快速鍵(Accesskey)操作方式如下：</p>

        <div class="mt-3" style="font-weight: 550; font-size: 1rem">
          <div>
            <span class="alert alert-primary p-1" role="alert"> • Alt+U：移動至上方導覽連結區塊。 </span>
          </div>
          <div class="my-3">
            <span class="alert alert-primary p-1" role="alert"> • Alt+C：移動至主要內容區塊。 </span>
          </div>
          <div>
            <span class="alert alert-primary p-1" role="alert"> • Alt+B：移動至下方聯絡資訊區塊。 </span>
          </div>
        </div>

        <div class="mt-3">
          若您使用Firefox瀏覽器，請將快捷鍵
          <span class="alert alert-primary p-1" role="alert" style="font-weight: 550; font-size: 1rem"> Alt </span>
          改為<span class="alert alert-primary p-1" role="alert" style="font-weight: 550; font-size: 1rem">
            Shift+Alt </span
          >，再按下快速鍵字母，例如:
          <span style="font-weight: 550; font-size: 1rem"> Shift+Alt+U </span>
          會移動至上方導覽連結區塊。
        </div>
      </div>
      <div class="my-4">
        <h3>網站地圖</h3>
      </div>

      <div class="bg-light p-3 mb-5 PcDevice2">
        <div class="d-flex align-items-center">
          <div class="mr-4">
            <nuxt-link to="/About/">
              <p style="color: #003c71; text-decoration: underline">關於我們</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/Products/">
              <p style="color: #003c71; text-decoration: underline">產品資訊</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/Guides/">
              <p style="color: #003c71; text-decoration: underline">使用教學</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/News/">
              <p style="color: #003c71; text-decoration: underline">最新消息</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/Cases/">
              <p style="color: #003c71; text-decoration: underline">團隊實績</p>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Sitemap/">
              <p style="color: #003c71; text-decoration: underline">網站導覽</p>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="bg-light p-3 mb-5 MbDevice2">
        <div class="d-flex align-items-center mb-3">
          <div class="mr-4">
            <nuxt-link to="/About/">
              <p style="color: #003c71; text-decoration: underline">關於我們</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/Products/">
              <p style="color: #003c71; text-decoration: underline">產品資訊</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/Guides/">
              <p style="color: #003c71; text-decoration: underline">使用教學</p>
            </nuxt-link>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <div class="mr-4">
            <nuxt-link to="/News/">
              <p style="color: #003c71; text-decoration: underline">最新消息</p>
            </nuxt-link>
          </div>

          <div class="mr-4">
            <nuxt-link to="/Cases/">
              <p style="color: #003c71; text-decoration: underline">團隊實績</p>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Sitemap/">
              <p style="color: #003c71; text-decoration: underline">網站導覽</p>
            </nuxt-link>
          </div>
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
        title: '網站導覽 - 友照醫療儀器',
      }
    },

    data() {
      return {}
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
    },
    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },
  }
</script>

<style lang="scss" scoped>
  .btn {
    border-radius: 1.25rem;
  }

  .btn-primary {
    color: #fff;
    background-color: #003c71de;
    border-color: #003c71de;
  }

  @media (min-width: 992px) {
    .TopBanner_Cn {
      position: absolute;
      font-weight: bold;
      color: #ffffff;
      letter-spacing: 8px;
    }

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 500;
    }
  }

  @media (max-width: 991px) {
    .TopBanner_Cn {
      position: absolute;
      font-weight: bold;
      color: #ffffff;
      letter-spacing: 8px;
    }
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .letterspacing {
    letter-spacing: 1px;
  }
</style>
