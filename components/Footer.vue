<template>
  <footer id="FixedFooter">
    <div class="border-top bg-dark footer_font">
      <div class="container">
        <div class="PcDevice2">
          <div class="row justify-content-center align-items-center py-4">
            <div class="col-sm-3 text-md-left text-center">
              <div class="d-flex">
                <div class="mr-2">
                  <span
                    tabindex="0"
                    name="B"
                    title="跳到底部區塊"
                    accesskey="B"
                    style="color: #ffa500; font-size: 1rem"
                  >
                    :::
                  </span>
                </div>

                <div>
                  <p class="mb-2">友照醫療儀器股份有限公司</p>
                  <p style="font-size: 0.875rem">
                    <i class="fas fa-phone mr-1 text-white" aria-hidden="true"></i> (02) 8753-6255, (02) 8753-6254
                  </p>
                  <p style="font-size: 0.875rem" class="mb-4">
                    <i class="fas fa-envelope mr-1 text-white" aria-hidden="true"></i>
                    cs@ucare-medical.com
                  </p>
                  <nuxt-link to="/Contact/" class="border border-white px-5 py-2 text-center btnBlackStyle2">
                    聯絡我們 &nbsp;&nbsp;
                    <i class="fas fa-angle-right" aria-hidden="true" style="font-size: 0.875rem"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <div class="col-sm-5 text-md-left text-center">
              <div class="d-flex mb-3 justify-content-around align-items-center">
                <div>
                  <img
                    src="https://www.ucare-medical.com/images/qrcode_ucare.png"
                    width="110px"
                    alt="友照醫療-Lineqrcode"
                  />
                </div>
                <div>
                  <img src="../assets/images/fb_qr-code.png" width="110px" alt="友照醫療-Fbqrcode" />
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://accessibility.moda.gov.tw/Applications/Detail?category=20230630102317"
                    title="無障礙網站(另開新視窗)"
                  >
                    <img src="../assets/images/accessibility.png" border="0" width="120" alt="通過A無障礙網頁檢測" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-2 text-md-left text-center">
              <div class="d-flex justify-content-center">
                <div>
                  <div class="d-flex justify-content-center mr-5">
                    <div class="rightline"></div>
                  </div>
                </div>

                <div>
                  <nuxt-link to="/About/">
                    <p>- 關於我們</p>
                  </nuxt-link>
                  <nuxt-link to="/Products/">
                    <p>- 產品資訊</p>
                  </nuxt-link>
                  <nuxt-link to="/Guides/">
                    <p>- 使用教學</p>
                  </nuxt-link>
                  <nuxt-link to="/News/">
                    <p>- 最新消息</p>
                  </nuxt-link>
                  <nuxt-link to="/Cases/">
                    <p>- 團隊實績</p>
                  </nuxt-link>
                  <nuxt-link to="/Sitemap/">
                    <p>- 網站導覽</p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <div class="py-3 text-center footer_copyright_font" style="font-size: 0.875rem">
            Copyright © 2022 UCARE MEDICAL all rights reserved.
          </div>
        </div>

        <div class="MbDevice container">
          <div>
            <p class="mt-4 mb-2" style="letter-spacing: 3px">友照醫療儀器股份有限公司</p>
            <p style="font-size: 0.8125rem; letter-spacing: 1px">
              <i class="fas fa-phone mr-1 text-white" aria-hidden="true"></i> (02) 8753-6255, (02) 8753-6254
            </p>
            <p style="font-size: 0.8125rem; letter-spacing: 1px" class="mb-4">
              <i class="fas fa-envelope mr-1 text-white" aria-hidden="true"></i>
              cs@ucare-medical.com
            </p>

            <div class="d-flex align-items-center">
              <div>
                <nuxt-link to="/Contact/">
                  <span class="border border-white px-3 py-2 text-center btnBlackStyle2" style="letter-spacing: 1px">
                    聯絡我們 &nbsp;&nbsp; <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </nuxt-link>
              </div>

              <div class="mx-2">
                <span @click="LineLink" title="另開新視窗">
                  <i class="fab fa-line Iconhover text-white" aria-hidden="true" style="font-size: 1.75rem"></i>
                </span>
              </div>

              <div class="mr-2">
                <span @click="FbLink" title="另開新視窗">
                  <i class="fab fa-facebook Iconhover text-white" aria-hidden="true" style="font-size: 1.75rem"></i>
                </span>
              </div>

              <div>
                <a
                  target="_blank"
                  href="https://accessibility.moda.gov.tw/Applications/Detail?category=20230630102317"
                  title="無障礙網站(另開新視窗)"
                >
                  <img src="../assets/images/accessibility.png" border="0" width="70px" alt="通過A無障礙網頁檢測" />
                </a>
              </div>
            </div>
          </div>

          <div class="py-3 footer_copyright_font" style="font-size: 0.875rem">
            Copyright © 2023 UCARE MEDICAL all rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {}
    },

    methods: {
      LineLink() {
        window.open('https://chanchao.tw/bMD5Qs', '_blank')
      },

      fbLink() {
        window.open('https://www.facebook.com/profile.php?id=100083125607198', '_blank')
      },
    },
  }
</script>

<style scoped lang="scss">
  .footer {
    margin: 0rem;
    padding: 2rem 2rem 0;
    line-height: 1.5rem;
    > li {
      flex: 1 1 0;
      margin-bottom: 2rem;
      text-align: center;
      list-style: none;
    }
  }
  .footer-title {
    margin-bottom: 1.25rem;
    font-weight: bold;
  }
  .copyright {
    text-align: center;
    padding: 2rem 0;
  }

  .rightline {
    border-right: rgb(223, 220, 220) 1px solid;
    height: 120px;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: #afafaf;
    }
  }

  .btnBlackStyle2 {
    color: white;
    background-color: #343a40;
    transition-duration: 0.5s;

    &:hover {
      cursor: pointer;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
      font-weight: 700;
    }
  }
</style>
