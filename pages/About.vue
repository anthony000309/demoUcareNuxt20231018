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
      <h1 class="TopBanner_Cn container">關於我們</h1>
    </div>

    <div class="container">
      <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
        <div class="toMainTopic_absolute_inside" id="center"></div>
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/"> 首頁 </nuxt-link>
          </li>
          <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">關於我們1</li>
        </ol>
      </nav>

      <div style="font-size: 1.3rem" class="letterspacing">
        <p>
          友照醫療是一群在醫療業界已服務多年的團隊所創立，我們的團隊成員有在醫療界多年的研發人員與生產人員，也有在業界的資深銷售人員，對於產品給予終端客戶使用的品質上有絕對的要求，我們注重產品的穩定性與功能性，也特別注重終端使用者對我們的信任感，因此我們只推薦優良的產品給予大眾使用，公司所代理的產品都是全球知名品牌企業。
        </p>
        <p class="mt-3">
          我們深刻了解到一般民眾對於醫療器材的陌生感與害怕，收集許多使用者的經驗後，更能因應客戶不同的需求提供最合適的建議。並深信即使患者都應該享受好的生活品質，透過與客戶合作，創造優質的使用者體驗。並深信每個人都應該享受美好生活，透過與客戶合作，進而打造優質的服務體驗。
        </p>
      </div>

      <img src="../assets/images/About_img3.jpg" alt="友照團隊照" class="img-fluid mt-3" />

      <div class="my-5">
        <h2>代理品牌</h2>
        <p style="font-size: 1.125rem; font-weight: 600" class="text-muted">AGENCY BRAND</p>
      </div>

      <div class="row justify-content-start mt-4 mb-5">
        <div class="col-lg-3 text-center mb-4">
          <img src="../assets/images/about_logo1.jpg" width="280px" class="border" alt="英維康Logo圖" />
        </div>
        <div class="col-lg-9 letterspacing">
          <p>
            英維康成立於1885年，至今已超過135年，是全球最大的家用醫療器械研發製造廠商，為美國輔具設備製造商和經銷商，這些輔具設備包括輪椅，機動踏板車，助行器，壓力護理和定位以及呼吸產品。總部位於美國俄亥俄州，全球員工超過5,000名，為美國上市公司。現今，英維康已成為家庭照護和長期護理市場的全球領導品牌。
          </p>
          <p class="my-3">
            英維康核心價值「正直、創新、領導、優秀、責任」，是全球康復醫療器械的製造商。目前專注於兩大領域：
          </p>

          <ul>
            <li>
              <p style="font-size: 1.25rem; font-weight: 550" class="mb-2">家用醫療 Homecare</p>
              英維康的家用醫療產品可以讓更多人在家裡或者社區，使用康復類產品(助行器、手動輪椅、代步車)，
              呼吸類產品(氧氣機、灌氧機)， 衛生輔助類產品(衛浴安全)進行康復複健，獲得高效優質的護理效果。
            </li>

            <li class="mt-3">
              <p style="font-size: 1.25rem; font-weight: 550" class="mb-2">長期看護領域 Long-term care</p>
              英維康為長期看護領域提供全產品線的產品，包括病床，
              長期看護家居產品、電動輪椅、老人沙發椅、病患看護傳送位移設備，同時為社區、專業機構提供創新性產品、服務和醫療解決方案。
            </li>
          </ul>

          <div class="d-flex mt-4 ml-4">
            <div
              class="btn btn-primary px-md-4 px-3"
              title="另開新視窗"
              @click="Authorization"
              @keyup.enter="Authorization"
              tabindex="0"
            >
              原廠授權書
            </div>
            <div
              class="btn btn-primary ml-4 px-md-4 px-3"
              title="另開新視窗"
              @click="training"
              @keyup.enter="training"
              tabindex="0"
            >
              教育訓練證書
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="row justify-content-start my-5">
        <div class="col-lg-3 mt-3 text-center mb-4">
          <img src="../assets/images/about_logo2.jpg" width="280px" class="border" alt="麗台科技Logo圖" />
        </div>
        <div class="col-lg-9 mt-3 letterspacing">
          <p style="line-height: 1.7">
            麗臺科技創立於1986年，總公司位於台灣，並在中國大陸及日本設有分公司。創立初期主要為設計與製造電腦周邊相關產品，特別是在電腦顯示卡與遠距通訊相關設備，麗臺自2000年投資威今基因科技起，開始投入智慧醫療及健康照護領域，已是全球知名的電腦及智慧醫療研發製造商，主要產品有自律神經分析儀，遠距醫療產品與血氧機。
          </p>
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
        title: '關於我們 - 友照醫療儀器',
      }
    },

    data() {
      return {}
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      Authorization() {
        window.open('https://www.ucare-medical.com/downloads/LoA_UCare.pdf', '_blank')
      },

      training() {
        window.open('https://www.ucare-medical.com/downloads/CoT_UCare_2022-04.pdf', '_blank')
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
