<template>
  <div>
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div v-if="ShowSlogan" style="margin-bottom: 1000px">
      <div
        class="PcDevice2"
        style="position: absolute; top: 50%; left: 50%; margin-top: -40px; margin-left: -300px"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="d-flex">
          <div class="mr-4">
            <img src="../assets/images/logo.png" height="50px" alt="" />
          </div>

          <div class="mt-2 welcomeh1">友照醫療，歡迎您的來訪</div>
        </div>
      </div>

      <div
        class="MbDevice2"
        style="position: absolute; top: 50%; left: 50%; margin-left: -140px; margin-top: -40px"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="text-center">
          <img src="../assets/images/logo.png" height="40px" alt="" />
        </div>

        <div class="mt-3 welcomeh1">友照醫療，歡迎您的來訪</div>
      </div>
    </div>

    <div class="visibleHidden">
      <div v-if="!ShowSlogan">
        <div class="PcDevice2">
          <img
            src="https://www.ucare-medical.com/images/kv.jpg"
            width="100%"
            alt=""
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1600"
            data-aos-delay="6000"
            data-aos-once="true"
          />
        </div>

        <div
          class="MbDevice px-1"
          style="margin-top: 45px"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1600"
          data-aos-delay="6000"
          data-aos-once="true"
        >
          <img src="../assets/images/img_kv_mob.jpg" width="100%" alt="" />
        </div>

        <div class="container">
          <div class="row align-items-start mt-5">
            <div
              class="col-md-2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <div class="d-flex">
                <div class="mr-2 PcDevice2">
                  <span
                    tabindex="0"
                    name="C"
                    title="跳到主要區塊"
                    accesskey="C"
                    style="color: #ffa500; font-size: 1.3rem"
                  >
                    :::
                  </span>
                </div>
                <div>
                  <h3>最新消息</h3>
                  <p style="font-size: 1.5rem; font-weight: 600" class="text-muted pointer">News</p>
                </div>
              </div>
            </div>

            <div
              class="col-md-9 PcDevice2 mt-4"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <table class="table" style="margin-bottom: -5px">
                <tbody>
                  <tr
                    v-for="item in AllNewsList"
                    tabindex="0"
                    class="text-center pointer"
                    @keyup.enter="visitNewsDetail(item.newsid)"
                    @click="visitNewsDetail(item.newsid)"
                  >
                    <th scope="row" width="100" style="border-top: 1px solid #dee2e6">
                      {{ item.newsdate }}
                    </th>
                    <td width="110" style="font-size: 1.0625rem; border-top: 1px solid #dee2e6">
                      <div v-show="item.newscat == 'topnews'">
                        <p class="alert alert-info">友照公告</p>
                      </div>

                      <div v-show="item.newscat == 'column'">
                        <p class="alert alert-primary">專欄報導</p>
                      </div>

                      <div v-show="item.newscat == 'media'">
                        <p class="alert alert-success">媒體資訊</p>
                      </div>
                    </td>
                    <td class="text-left" style="border-top: 1px solid #dee2e6">
                      {{ item.newstopic }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right mt-3" style="margin-right: 20px">
                <p class="text-muted moreNewsHover" tabindex="0" @keyup.enter="VisitNews" @click="VisitNews">
                  >> 更多消息
                </p>
              </div>
            </div>

            <div
              class="col-md-9 MbDevice"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div
                v-for="(item, index) in AllNewsList"
                :key="index"
                class="pointer"
                @click="visitNewsDetail(item.newsid)"
              >
                <div v-if="item.no < 4">
                  <hr />
                  <div class="d-flex">
                    <div>
                      <div style="font-size: 0.9375rem">
                        <div v-if="item.newscat == 'topnews'">
                          <p class="alert alert-info text-center">友照公告</p>
                        </div>

                        <div v-else-if="item.newscat == 'column'">
                          <p class="alert alert-primary text-center">專欄報導</p>
                        </div>

                        <div v-else-if="item.newscat == 'media'">
                          <p class="alert alert-success text-center">媒體資訊</p>
                        </div>
                      </div>

                      <p class="mt-1 text-muted" style="font-size: 0.9375rem">
                        {{ item.newsdate }}
                      </p>
                    </div>

                    <p class="ml-3">
                      {{ item.newstopic }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="text-right mr-2 mt-3" style="font-size: 1rem">
                <p class="text-muted pointer" @click="VisitNews">>> 更多消息</p>
              </div>
            </div>
          </div>

          <div class="widthMarginX">
            <div
              class="text-center mt-4 mb-5"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 class="toMainTopic_relative">
                關於我們

                <div class="toMainTopic_absolute" id="center"></div>
              </h1>

              <p class="MainEnTitle text-muted">ABOUT US</p>
            </div>

            <div class="picLogo mb-5 PcDevice2">
              <img
                src="../assets/images/img_about.jpg"
                width="680px"
                style="border-radius: 10px"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-once="true"
                alt="雙手擁抱著愛心"
              />

              <div
                class="rightContent p-5"
                style="letter-spacing: 5px"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <p class="mb-3" style="font-size: 2.125rem; font-weight: 500">提供您最符合需求的產品建議</p>
                <p style="line-height: 1.6">
                  我們深刻了解到一般民眾對於醫療器材的陌生感與害怕，收集許多使用者的經驗後，更能因應客戶不同的需求提供最合適的建議。並深信即使患者都應該享受好的生活品質，透過與客戶合作，創造優質的使用者體驗。
                </p>

                <div class="my-4">
                  <span
                    tabindex="0"
                    class="border border-dark px-5 py-2 text-center btnHoverStyle"
                    @click="VisitAbout"
                    @keyup.enter="VisitAbout"
                    >了解更多</span
                  >
                </div>
              </div>
            </div>

            <div class="picLogo mb-4 MbDevice">
              <img
                src="../assets/images/img_about.jpg"
                style="border-radius: 10px"
                class="img-fluid"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-once="true"
                alt="雙手擁抱著愛心"
              />

              <div
                style="letter-spacing: 2px"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p class="my-2" style="font-size: 1.375rem; font-weight: 550">提供您最符合需求的產品建議</p>
                <p style="line-height: 1.4">
                  我們深刻了解到一般民眾對於醫療器材的陌生感與害怕，收集許多使用者的經驗後，更能因應客戶不同的需求提供最合適的建議。並深信即使患者都應該享受好的生活品質，透過與客戶合作，創造優質的使用者體驗。
                </p>

                <div class="my-4 text-center">
                  <span
                    class="border border-dark px-5 py-2 btnHoverStyle"
                    tabindex="0"
                    @click="VisitAbout"
                    @keyup.enter="VisitAbout"
                    >了解更多</span
                  >
                </div>
              </div>
            </div>

            <!-- <div id="center" class="my-4"></div> -->

            <div
              class="row align-items-start my-md-5 my-3"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div class="col-lg-2 text-center">
                <h3 class="secondTitle">企業理念</h3>
                <p class="text-muted secondEnTitle">PHILOSOPHY</p>
              </div>

              <div class="col-lg-9 PcDevice2">
                <hr />
              </div>
            </div>

            <div
              class="PcDevice2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img
                src="../assets/images/img_philosophy2.jpg"
                width="100%"
                height="250px"
                style="border-radius: 0.5rem"
                alt=""
              />
            </div>

            <div
              class="MbDevice2 text-center"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <img
                src="../assets/images/img_philosophy2.jpg"
                width="100%"
                height="110px"
                style="border-radius: 0.5rem"
                alt=""
              />
            </div>

            <div
              class="my-4 row"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div class="col-md-4 px-4 mb-md-0 mb-4">
                <div class="recommend-title">
                  <span class="recommend-content"
                    ><span style="font-size: 1.5rem; font-weight: 500"
                      >誠信&nbsp;&nbsp;&nbsp;&nbsp;<br />
                      <span class="text-muted" style="font-size: 1.125rem">INTEGRITY</span>
                    </span></span
                  >
                </div>

                <p style="line-height: 2">
                  我們最基本的經營理念，誠實說真話，對客戶不輕易做出承諾，一旦做出承諾，必是全力以赴，提供誠懇實在的服務。
                </p>
              </div>
              <div class="col-md-4 px-4 mb-md-0 mb-4">
                <div class="recommend-title">
                  <span class="recommend-content"
                    ><span style="font-size: 1.5rem; font-weight: 500"
                      >承諾&nbsp;&nbsp;&nbsp;&nbsp;<br />
                      <span class="text-muted" style="font-size: 1.125rem">COMMITMENT</span>
                    </span></span
                  >
                </div>

                <p style="line-height: 2">
                  信守對客戶、供應商、員工及股東的承諾。每個角色都很重要，努力茁壯公司發展，盡心照顧每個角色，共創卓越發展。
                </p>
              </div>
              <div class="col-md-4 px-4 mb-md-0 mb-3">
                <div class="recommend-title">
                  <span class="recommend-content"
                    ><span style="font-size: 1.5rem; font-weight: 500"
                      >創新&nbsp;&nbsp;&nbsp;&nbsp;<br />
                      <span class="text-muted" style="font-size: 1.125rem">INNOVATION</span>
                    </span></span
                  >
                </div>

                <p style="line-height: 2">
                  創新是成長的能量，從策略、行銷、管理，激盪出新的工作思維與方法，注入活力與創造力，為客戶提高附加價值。
                </p>
              </div>
            </div>

            <div
              class="text-center my-5"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <h2>產品資訊</h2>
              <p class="text-muted MainEnTitle">PRODUCTS</p>
            </div>

            <div class="picLogo mb-5 PcDevice2">
              <div class="text-right">
                <img
                  src="../assets/images/img_product_OC.jpg"
                  width="680px"
                  style="border-radius: 10px"
                  alt="人員向老奶奶溫柔的解說製氧機"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1200"
                  data-aos-once="true"
                />
              </div>

              <div
                class="leftContent2 px-5 py-3"
                style="letter-spacing: 5px"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <p style="font-size: 2.25rem; font-weight: 500">製氧機</p>
                <p style="font-size: 1.125rem; font-weight: 600" class="mb-2 text-muted">OXYGEN CONCENTRATOR</p>
                <p style="line-height: 1.5">
                  Invacare
                  呼吸照護產品屢獲殊榮的創新，具突破性設計而贏得了許多行業獎項，氧氣機功能全面升級，可提使用者生活品質。
                </p>

                <div class="my-4">
                  <span
                    class="border border-dark px-5 py-2 text-center btnHoverStyle"
                    @click="VisitProducts('Oxygen-Concentrator')"
                    @keyup.enter="VisitProducts('Oxygen-Concentrator')"
                    tabindex="0"
                  >
                    了解更多
                  </span>
                </div>
              </div>
            </div>

            <div class="picLogo mb-5 MbDevice">
              <div class="text-right">
                <img
                  src="../assets/images/img_product_OC.jpg"
                  style="border-radius: 10px"
                  class="img-fluid"
                  alt="人員向老奶奶溫柔的解說製氧機"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="900"
                  data-aos-once="true"
                />
              </div>

              <div
                class="pt-3"
                style="letter-spacing: 2px"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <p style="font-size: 2.25rem; font-weight: 500">製氧機</p>
                <p style="font-size: 1.125rem; font-weight: 600" class="mb-2 text-muted">OXYGEN CONCENTRATOR</p>
                <p style="line-height: 1.4">
                  Invacare
                  呼吸照護產品屢獲殊榮的創新，具突破性設計而贏得了許多行業獎項，氧氣機功能全面升級，可提使用者生活品質。
                </p>

                <div class="my-4">
                  <span
                    class="border border-dark px-5 py-2 btnHoverStyle"
                    @click="VisitProducts('Oxygen-Concentrator')"
                    @keyup.enter="VisitProducts('Oxygen-Concentrator')"
                    tabindex="0"
                  >
                    了解更多
                  </span>
                </div>
              </div>
            </div>

            <div class="picLogo MtStyle PcDevice2">
              <img
                src="../assets/images/img_product_PO.jpg"
                width="680px"
                style="border-radius: 10px"
                alt="顧客正在測量血氧機"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-once="true"
              />

              <div
                class="rightContent2 p-5"
                style="letter-spacing: 5px"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <p style="font-size: 2.25rem; font-weight: 500">血氧機</p>
                <p style="font-size: 1.125rem; font-weight: 600" class="mb-2 text-muted">PULSE OXIMETER</p>
                <p style="line-height: 2; margin-bottom: 0px; font-weight: bold; font-size: 1.125rem">
                  精準量測，一指到位
                </p>
                <p style="line-height: 1.4">
                  血氧機透過光學技術，透過輕觸指尖，快速進行精準的血氧飽和度(SpO2)
                  及脈搏數率量測。適用於居家護理監測之外，更可用於外出隨身量測血氧飽和度是否足夠。
                </p>

                <div class="my-4">
                  <span
                    class="border border-dark px-5 py-2 text-center btnHoverStyle"
                    @click="VisitProducts('Pulse-Oximeter')"
                    @keyup.enter="VisitProducts('Pulse-Oximeter')"
                    tabindex="0"
                  >
                    了解更多
                  </span>
                </div>
              </div>
            </div>

            <div
              class="picLogo mb-5 MbDevice2"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <img
                src="../assets/images/img_product_PO.jpg"
                class="img-fluid"
                style="border-radius: 10px"
                alt="顧客正在測量血氧機"
              />

              <div
                style="letter-spacing: 2px"
                class="pt-3"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <p style="font-size: 2.25rem; font-weight: 500">血氧機</p>
                <p style="font-size: 1.125rem; font-weight: 600" class="mb-2 text-muted">PULSE OXIMETER</p>
                <p style="line-height: 2; margin-bottom: 0px; font-weight: bold; font-size: 1.125rem">
                  精準量測，一指到位
                </p>
                <p style="line-height: 1.4">
                  血氧機透過光學技術，透過輕觸指尖，快速進行精準的血氧飽和度(SpO2)
                  及脈搏數率量測。適用於居家護理監測之外，更可用於外出隨身量測血氧飽和度是否足夠。
                </p>

                <div class="my-4">
                  <span
                    class="border border-dark px-5 py-2 btnHoverStyle"
                    tabindex="0"
                    @click="VisitProducts('Pulse-Oximeter')"
                    @keyup.enter="VisitProducts('Pulse-Oximeter')"
                  >
                    了解更多
                  </span>
                </div>
              </div>
            </div>

            <div class="picLogo MtStyle PcDevice2">
              <div class="text-right">
                <img
                  src="../assets/images/img_product_CB.jpg"
                  width="680px"
                  style="border-radius: 10px"
                  alt="顧客滿意並慵懶的躺在沙發"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1200"
                  data-aos-once="true"
                />
              </div>

              <div
                class="leftContent px-5"
                style="letter-spacing: 5px"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <p style="font-size: 2.25rem; font-weight: 500">呼吸器</p>
                <p style="font-size: 1.125rem; font-weight: 600" class="text-muted mb-2">CPAP / BIPAP</p>
                <p style="line-height: 1.4">
                  面罩是持續正壓呼吸器 (CPAP)
                  設備最重要的組成部分之一。由3個部件組成：框架、襯墊和頭帶。找到合適的口罩可以使您的治療更舒適、更成功。這些裝置透過導管將空氣輸送到面罩中，以在您睡覺時保持呼吸道開放。此過程稱為睡眠治療法，幫助您獲得一夜安眠。
                </p>

                <div class="my-4">
                  <span
                    class="border border-dark px-5 py-2 text-center btnHoverStyle"
                    @click="VisitProducts('CPAP-BiPAP')"
                    @keyup.enter="VisitProducts('CPAP-BiPAP')"
                    tabindex="0"
                  >
                    了解更多
                  </span>
                </div>
              </div>
            </div>

            <div class="picLogo MbDevice">
              <div class="text-right">
                <img
                  src="../assets/images/img_product_CB.jpg"
                  class="img-fluid"
                  style="border-radius: 10px"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="900"
                  data-aos-once="true"
                  alt="顧客滿意並慵懶的躺在沙發"
                />
              </div>

              <div
                style="letter-spacing: 2px"
                class="pt-3"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <p style="font-size: 2.25rem; font-weight: 500">呼吸器</p>
                <p style="font-size: 1.125rem; font-weight: 600" class="text-muted mb-2">CPAP / BIPAP</p>
                <p style="line-height: 1.4">
                  面罩是持續正壓呼吸器 (CPAP)
                  設備最重要的組成部分之一。由3個部件組成：框架、襯墊和頭帶。找到合適的口罩可以使您的治療更舒適、更成功。這些裝置透過導管將空氣輸送到面罩中，以在您睡覺時保持呼吸道開放。此過程稱為睡眠治療法，幫助您獲得一夜安眠。
                </p>

                <div class="my-4">
                  <span
                    class="border border-dark px-5 py-2 btnHoverStyle"
                    tabindex="0"
                    @click="VisitProducts('CPAP-BiPAP')"
                    @keyup.enter="VisitProducts('CPAP-BiPAP')"
                  >
                    了解更多
                  </span>
                </div>
              </div>
            </div>

            <div
              class="MtStyle mb-5 PcDevice2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
              data-aos-once="true"
            >
              <nuxt-link to="/Contact/">
                <div
                  class="text-center btnBlackStyle"
                  style="
                    letter-spacing: 15px;
                    margin-right: 300px;
                    margin-left: 300px;
                    font-size: 1.5rem;
                    font-weight: 500;
                    padding-bottom: 10px;
                    padding-top: 10px;
                  "
                >
                  歡迎洽詢
                </div>
              </nuxt-link>
            </div>

            <div
              class="my-5 MbDevice2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="true"
            >
              <nuxt-link to="/Contact/">
                <div
                  class="mx-4 py-2 text-center btnBlackStyle"
                  style="letter-spacing: 15px; font-size: 1.375rem; font-weight: 500"
                >
                  歡迎洽詢
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'

  export default {
    layout: 'DashboardLayout',

    head: {
      title: '首頁 - 友照醫療儀器',
    },

    data() {
      return {
        showscreen: false,
        mountains: [],
        BannerList: [],
        NewsEventList: [],
        NewsBulletinList: [],
        NewsIndustryList: [],
        EventList: [],
        CourseList: [],
        ExhList: [],
        EmpList: [],
        BannerXL: [],
        BannerS: [],

        AllNewsList: [],
        AllNewsList1: [],
        // GetShowNews: [],
        ShowSlogan: false,
        ShowSlogan2: true,
      }
    },

    methods: {
      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      VisitAbout() {
        this.$router.push(`/About/`)
      },
      VisitProducts(proLink) {
        this.$router.push(`/Products/${proLink}`)
      },

      visitNewsDetail(newsid) {
        this.$router.push(`/News/Detail/${newsid}`)
      },

      VisitNews() {
        this.$router.push(`/News/`)
      },

      showLoading() {
        this.$nuxt.$loading.start()
      },
    },

    async asyncData({ $axios }) {
      let getAllNews = await $axios.get(`https://ucarebackend20231109.azurewebsites.net/news?keyword=&newscat=&page=`)

      return {
        AllNewsList1: getAllNews.data.Data,
      }
    },
    mounted() {
      const vm = this

      let FirstEntry2 = this.$sessionStorage.get('ucare')

      if (FirstEntry2 == 'visited') {
        $('.visibleHidden').addClass('visibleShow')

        $nuxt.$emit('OpenNavStatus')
      } else {
        this.$sessionStorage.set('ucare', 'visited')
        vm.ShowSlogan = true

        setTimeout(function () {
          $nuxt.$emit('OpenNavStatus')
          vm.ShowSlogan = false
          $('.visibleHidden').addClass('visibleShow')
        }, 2800)
      }
    },

    created() {
      const vm = this

      vm.AllNewsList = vm.AllNewsList1.filter((word, index) => index < 3)
    },
  }
</script>

<style lang="scss" scoped>
  .el-tooltip__popper {
    font-size: 1.125rem;
  }

  @media (max-width: 991px) {
    .welcomeh1 {
      letter-spacing: 3px;
      font-size: 1.45rem;
      font-weight: 600;
    }

    h1 {
      font-size: 2.8125rem;
      font-weight: 500;
    }

    h2 {
      font-size: 2.8125rem;
      font-weight: 500;
    }

    h3 {
      font-size: 1.625rem;
      font-weight: 500;
    }

    .secondTitle {
      font-size: 2.18rem;
      font-weight: 500;
    }

    .secondEnTitle {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .MainEnTitle {
      font-size: 1.375rem;
      font-weight: 600;
    }

    .MtStyle {
      margin-top: 30px;
    }

    .widthMarginX {
      margin-right: 0px;
      margin-left: 0px;
    }

    .hrStyle {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 0;
      border-top: 1px solid rgb(0 0 0 / 12%);
    }
  }

  @media (min-width: 992px) {
    .welcomeh1 {
      letter-spacing: 10px;
      font-size: 2.3rem;
      font-weight: 550;
    }

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
    }
    h3 {
      font-size: 2.25rem;
      font-weight: 500;
    }

    .secondTitle {
      font-size: 2.25rem;
      font-weight: 500;
    }

    .secondEnTitle {
      font-size: 1.4375rem;
      font-weight: 500;
    }

    .el-drawer {
      width: 50%;
    }

    .MainEnTitle {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .MtStyle {
      margin-top: 100px;
    }

    .widthMarginX {
      margin-right: 50px;
      margin-left: 50px;
    }

    .hrStyle {
      margin-top: 0rem;
      margin-bottom: 0rem;
      border: 0;
      border-top: 1px solid rgb(0 0 0 / 12%);
    }
  }

  .recommend-title {
    position: relative;
    padding: 1rem 0;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 38%;
      border-top: 2px solid #dadada;
      width: 100%;
      z-index: -1;
    }
    .recommend-content {
      z-index: 1;
      background-color: #ffffff;

      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }

  .alert {
    margin-bottom: 0rem;
    padding: 0.15rem 0.25rem;
  }

  .picLogo {
    position: relative;
  }
  .rightContent {
    position: absolute;
    width: 617px;

    top: 168px;
    right: -39px;
    background-color: white;
    border-radius: 10px;
  }

  .toMainTopic_relative {
    position: relative;
  }
  .toMainTopic_absolute {
    position: absolute;
    width: 10px;
    top: -80px;
    color: rgb(255, 255, 255);
  }

  .rightContent2 {
    position: absolute;
    width: 617px;

    top: 150px;
    right: -39px;
    background-color: white;
    border-radius: 10px;
  }

  .leftContent {
    position: absolute;
    width: 617px;

    top: 177px;
    left: -39px;
    background-color: white;
    border-radius: 10px;
  }

  .leftContent2 {
    position: absolute;
    width: 617px;

    top: 184px;
    left: -39px;
    background-color: white;
    border-radius: 10px;
  }

  .btnHoverStyle {
    transition-duration: 0.5s;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: black;
    }
  }

  .btnBlackStyle {
    color: white;
    background-color: #003c71de;
    border-radius: 5px;
    border: 1px solid #215583;
    transition-duration: 0.5s;

    &:hover {
      cursor: pointer;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
    }
  }

  .moreNewsHover {
    transition-duration: 0.5s;

    &:hover {
      cursor: pointer;
      color: rgb(66, 66, 66);
      margin-right: 4px;
    }
  }

  .visibleHidden {
    visibility: hidden;
  }
  .visibleShow {
    visibility: visible;
  }
</style>
