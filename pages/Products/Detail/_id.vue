<template>
  <div style="margin-top: 100px">
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="floatChatIcon">
      <div class="ChatIconStyle" @click="OpenAskModal" @keyup.enter="OpenAskModal" tabindex="2">
        <span class="text-white"> <i class="fas fa-comment-medical mr-1" aria-hidden="true"></i> 歡迎洽詢 </span>
      </div>
    </div>

    <div
      class="fixed2 pointer"
      style="font-size: 1.125rem"
      @click.prevent="OpenAskModal"
      @keyup.enter="OpenAskModal"
      tabindex="0"
    >
      <span class="text-white py-2"> <i class="fas fa-comment-medical mb-1" aria-hidden="true"></i> 歡 迎 諮 詢 </span>
    </div>

    <div class="container DetailContent">
      <div class="mt-5">
        <h2 style="font-size: 1.75rem; font-weight: bold" id="center">產品資訊</h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="padding-left: 0px; font-size: 1rem">
          <li class="breadcrumb-item breadcrumbs_font_upper">
            <nuxt-link to="/">
              <span class="breadcrumbColor">首頁</span>
            </nuxt-link>
          </li>
          <li
            class="breadcrumb-item breadcrumbs_font_upper pointer breadcrumbColor"
            @click="backProAllList"
            @keyup.enter="backProAllList"
            tabindex="0"
          >
            產品資訊
          </li>
          <li
            class="breadcrumb-item active breadcrumbs_font_current pointer breadcrumbColor"
            aria-current="page"
            @click="backProCatList"
            @keyup.enter="backProCatList"
            tabindex="0"
          >
            {{ proCatName }}
          </li>

          <li class="breadcrumb-item active ellipsis1 breadcrumbs_font_current" aria-current="page">
            {{ ProData.proName }}
            <span
              class="PcDevice"
              tabindex="0"
              name="C"
              title="跳到主要區塊"
              accesskey="C"
              style="color: #ffa500; font-size: 1rem; font-weight: 400"
            >
              :::
            </span>
          </li>
        </ol>
      </nav>

      <div class="row justify-content-between">
        <div class="col-sm-4">
          <div class="mb-4" style="min-height: 260px">
            <a :href="ShowPhoto" data-fancybox="images" title="產品大圖">
              <img :src="ShowPhoto" class="img-fluid" alt="產品大圖" />
            </a>
          </div>

          <div class="row align-items-center my-3">
            <div class="col-3 mb-2" v-for="item in photoList">
              <img
                :src="`${item.photoimgM}`"
                class="img-fluid pointerFrame"
                @click="pickPhoto(item.photoid)"
                @mouseover.prevent="HoverPhoto(item.photoid)"
                @mouseout.prevent="CloseHoverPhoto"
                :class="{ TopicActive: photoSelect == item.photoid }"
                alt="產品側拍圖"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-7 TimeAddressFont">
          <h1 class="DetailTitle">
            {{ ProData.proName }}
          </h1>
          <h5 class="text-muted">{{ ProData.eproName }}</h5>

          <div class="d-flex align-items-center mt-3">
            <span class="mr-3" @click="openLineLink" @keyup.enter="openLineLink" tabindex="0" title="另開新視窗">
              <i class="fab fa-line Iconhover LineColor pointer" aria-hidden="true"></i>
            </span>

            <span class="mr-3" @click="openfbLink" @keyup.enter="openfbLink" tabindex="0" title="另開新視窗">
              <i class="fab fa-facebook Iconhover LineFb pointer" aria-hidden="true"></i>
            </span>

            <div>
              <span
                class="btn-coupon pointer"
                title="複製網址"
                @click.prevent="cobycode"
                @keyup.enter="cobycode"
                tabindex="-1"
                :data-clipboard-text="NowPageUrl"
              >
                <i class="fas fa-link Iconhover" style="font-size: 1.375rem" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <p class="category-tag mt-3 mb-0" v-if="ProData.rent == 0">提供租賃服務</p>

          <p class="card-text text-muted mb-4 pre_line">
            {{ ProData.proDesc }}
          </p>

          <div class="alert alert-secondary">
            <a
              class="h5"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
              title="開啟下拉視窗"
            >
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5>詳細規格</h5>
                </div>
                <div>
                  <i class="fas fa-chevron-down" style="font-size: 1.5rem" aria-hidden="true"></i>
                </div>
              </div>
            </a>
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <hr />
              <div class="my-2" v-html="ProData.proSpec"></div>
            </div>
          </div>

          <div class="alert alert-secondary mt-3" v-if="ProData.rent == 0">
            <a
              class="h5"
              data-toggle="collapse"
              href="#multiCollapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
              title="開啟下拉視窗"
            >
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5>租賃注意事項</h5>
                </div>
                <div>
                  <i class="fas fa-chevron-down" style="font-size: 1.5rem" aria-hidden="true"></i>
                </div>
              </div>
            </a>
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <hr />
              <div class="my-2 pre_line">{{ ProData.rentnotice }}</div>
            </div>
          </div>

          <p class="mb-2 pre_line">
            {{ ProData.proLicense }}
          </p>

          <div class="mt-4" v-if="VideoList.length > 0">
            <div
              class="btn btn-primary px-4"
              @click="SpytoVideo"
              @keyup.enter="SpytoVideo"
              tabindex="0"
              style="border-radius: 1.25rem"
            >
              相關使用教學
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-3 text-center"
        v-if="ProData.proDM1 !== 'https://www.ucare-medical.com/uploads/product/default.jpg'"
      >
        <img :src="ProData.proDM1" class="img-fluid" :alt="ProData.proDesc" />
      </div>

      <div
        class="my-4 text-center"
        v-if="ProData.proDM2 !== 'https://www.ucare-medical.com/uploads/product/default.jpg'"
      >
        <img :src="ProData.proDM2" class="img-fluid" :alt="ProData.proModel" />
      </div>

      <div id="Videozoom" class="my-4" style="visibility: hidden">.</div>

      <div>
        <hr />
      </div>

      <div v-if="VideoList.length > 0">
        <h4 class="mb-4 mt-5"><i class="fas fa-caret-right mr-2" aria-hidden="true"></i>相關使用教學</h4>

        <div class="row mb-5">
          <div class="col-sm-6 mb-4" v-for="item in VideoList">
            <a
              :href="`https://www.youtube.com/embed/${item.videolink}`"
              frameborder="0"
              allow="autoplay; encrypted-media"
              data-fancybox
              data-width="1280"
              data-height="720"
              title="教學影片"
            >
              <img
                :src="`https://img.youtube.com/vi/${item.videolink}/hqdefault.jpg`"
                class="BannerHover"
                width="100%"
                alt="教學影片"
              />
            </a>

            <div class="py-3 bg-light text-center">
              <p style="height: 50px; font-size: 1.0625rem; font-weight: bold">
                {{ item.videotopic }}
              </p>
            </div>
          </div>
        </div>

        <hr />
      </div>

      <h4 class="mt-5 mb-4"><i class="fas fa-caret-right mr-2" aria-hidden="true"></i>你可能也需要</h4>

      <carousel
        :margin="40"
        :stagePadding="10"
        :autoplayHoverPause="true"
        :autoplaySpeed="1500"
        :loop="true"
        :autoplay="true"
        :nav="false"
        :responsive="{
          990: { items: 4 },
          770: { items: 3 },
          580: { items: 2 },
          0: { items: 1 },
        }"
      >
        <div v-for="(item, index) in otherProductList" :key="index">
          <div
            class="card pointer bg-light"
            style="min-height: 325px"
            @keyup.enter="visitProDetail(item.proid)"
            tabindex="0"
            @click="visitProDetail(item.proid)"
          >
            <span class="bg-white">
              <span class="Imgtag" v-if="item.rent == 0">可出租</span>

              <div class="mt-2 logImgFrame2">
                <img :src="`${item.proImg}`" class="img-fluid" alt="出租tag" />
              </div>
              <div class="card-body bg-light">
                <h5 class="card-title ellipsis2 ListTitle">
                  {{ item.proName }}
                </h5>

                <div class="d-flex card-text text-muted mt-1 ellipsis2 ListSmContent">
                  <p class="ellipsis2">
                    {{ item.eproName }}
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>
      </carousel>

      <div class="d-flex justify-content-center my-5">
        <div class="a_style" @click="backLastPage" @keyup.enter="backLastPage" tabindex="0">
          <div class="btn btn-secondary Btnstyle py-2">回 前 頁</div>
        </div>
      </div>
    </div>

    <!-- 詢問彈跳視窗 -->
    <div
      class="modal fade"
      id="AskModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body mb-2 px-4">
            <div class="text-right">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click.prevent="clearModal"
                @keyup.enter="clearModal"
                tabindex="0"
                style="font-size: 2.375rem"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="text-center mb-4">
              <h2 class="title_fontStyle mt-4 mb-4 mb-md-5" style="letter-spacing: 10px">歡迎洽詢</h2>
            </div>

            <p class="MbDevice2 mb-2">
              請點擊
              <span @click="LineLink" @keyup.enter="LineLink" tabindex="0">
                <!-- <a href="https://chanchao.tw/bMD5Qs" target="_blank" title="在新視窗打開鏈結"> -->
                <i class="fab fa-line Iconhover lineLinkColor" style="font-size: 1.375rem" aria-hidden="true"></i>
                <!-- </a> -->
              </span>
              洽詢，或填寫以下表格。
            </p>

            <div class="MbDevice2">
              <span @click="LineLink" @keyup.enter="LineLink" tabindex="0">
                <i class="fab fa-line Iconhover lineLinkColor" style="font-size: 132px" aria-hidden="true"></i>
              </span>
            </div>

            <div class="PcDevice2">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-4">
                  <img
                    src="https://www.ucare-medical.com/images/qrcode_ucare.png"
                    class="img-fluid"
                    width="160px"
                    alt="友照醫療-Line圖"
                  />
                </div>
                <div class="col-md-6 ml-3">
                  <p class="mb-2">
                    <i class="fas fa-phone mr-2" aria-hidden="true"></i> (02) 8753-6255, (02) 8753-6254
                  </p>
                  <p class="mb-2"><i class="fas fa-fax mr-2" aria-hidden="true"></i> (02) 8753-6256</p>
                  <p class="mb-2">
                    <i class="fas fa-envelope mr-2" aria-hidden="true"></i>
                    <a class="text-primary" href="mailto:cs@ucare-medical.com" title="發送email連結">
                      cs@ucare-medical.com
                    </a>
                  </p>
                  <p class="mb-2">
                    <i class="fas fa-building mr-2" aria-hidden="true"></i>
                    台北市內湖區港墘路185號3樓之1
                  </p>
                </div>
              </div>
            </div>

            <hr />

            <form class="ml-lg-5 ml-0 mt-4" @submit.prevent="SubmitData()">
              <div class="row text-left">
                <div class="col-md-12">
                  <p class="bg-light px-2 py-3 mb-4 mr-md-5 mr-0" style="font-size: 1.125rem; font-weight: 600">
                    產品名稱 : {{ ProData.proName }}
                  </p>

                  <div class="form-group row">
                    <label for="fullname" class="ml-2 col-lg-2 col-form-label font-weight-bold"
                      >姓名 <span class="requiredFont">(必填)</span></label
                    >
                    <div class="col-lg-8">
                      <div class="d-flex align-items-center">
                        <input
                          type="text"
                          class="form-control"
                          id="fullname"
                          placeholder=""
                          maxlength="30"
                          v-model="ContactName"
                          alt="姓名"
                          title="請輸入姓名"
                          placeholder="請輸入聯絡人姓名"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group row">
                    <label for="phone" class="col-lg-2 ml-2 col-form-label font-weight-bold"
                      >聯絡電話 <span class="requiredFont">(必填)</span></label
                    >
                    <div class="col-lg-8">
                      <div class="d-flex align-items-center">
                        <input
                          type="tel"
                          class="form-control"
                          id="phone"
                          placeholder=""
                          v-model="Contacttel"
                          maxlength="25"
                          alt="電話"
                          title="請輸入電話"
                          placeholder="請輸入可聯繫的手機或市話號碼"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group row">
                    <label for="Email" class="ml-2 col-lg-2 col-form-label font-weight-bold">電子郵件 </label>
                    <div class="col-lg-8">
                      <div class="d-flex align-items-center">
                        <input
                          type="email"
                          class="form-control"
                          id="Email"
                          placeholder=""
                          v-model="Contactemail"
                          alt="email"
                          title="請輸入email"
                          placeholder="請輸入正確的電子郵件格式，需包含「@」"
                          maxlength="50"
                        />
                      </div>
                      <div class="exampleStyle mt-1">範例: ucare@gmail.com.tw</div>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group row">
                    <label for="content" class="col-lg-2 ml-2 col-form-label font-weight-bold"
                      >諮詢內容 <span class="requiredFont">(必填)</span></label
                    >
                    <div class="col-lg-8">
                      <div>
                        <textarea
                          class="form-control"
                          id="content"
                          rows="6"
                          maxlength="500"
                          v-model="Contactdetail"
                          placeholder="請輸入諮詢內容"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group row mb-4">
                    <label for="vcode" class="col-lg-2 ml-2 col-form-label font-weight-bold"
                      >驗證碼 <span class="requiredFont">(必填)</span></label
                    >
                    <div class="col-lg-8">
                      <div class="d-flex align-items-center">
                        <div>
                          <input
                            type="text"
                            class="form-control mr-3"
                            id="vcode"
                            placeholder=""
                            style="width: 100px"
                            alt="驗證碼"
                            title="請輸入驗證碼"
                            maxlength="8"
                            v-model="validcode"
                            required
                          />
                        </div>
                        <div>
                          <img
                            :src="getvalidsrc"
                            class="img-fluid rounded pointer"
                            @click.prevent="resetValidcode"
                            @keyup.enter="resetValidcode"
                            tabindex="0"
                            style="width: 120px; height: 40px"
                            alt="驗證碼"
                          />
                        </div>
                        <div class="PcDevice2">
                          <span
                            @click.prevent="resetValidcode"
                            @keyup.enter="resetValidcode"
                            tabindex="0"
                            style="font-size: 1rem; color: #007bff"
                            class="pointer"
                          >
                            <i class="ml-3 fas fa-redo breadcrumbColor" aria-hidden="true"></i>
                            刷新
                          </span>
                        </div>

                        <div class="PcDevice2">
                          <span
                            @click.prevent="playAudio"
                            @keyup.enter="playAudio"
                            tabindex="0"
                            style="font-size: 1rem; color: #007bff"
                            class="pointer"
                          >
                            <i class="ml-3 fas fa-volume-up" aria-hidden="true"></i>
                            語音播放
                          </span>
                        </div>

                        <div class="row align-items-center MbDevice">
                          <div class="col-md-6">
                            <span
                              @click.prevent="resetValidcode"
                              @keyup.enter="resetValidcode"
                              tabindex="0"
                              style="font-size: 1rem; color: #007bff"
                              class="pointer"
                            >
                              <i class="ml-3 fas fa-redo" aria-hidden="true"></i>
                              刷新
                            </span>
                          </div>

                          <div class="col-md-6">
                            <span
                              @click.prevent="playAudio"
                              @keyup.enter="playAudio"
                              tabindex="0"
                              style="font-size: 1rem; color: #007bff"
                              class="pointer"
                            >
                              <i class="ml-3 fas fa-volume-up" aria-hidden="true"></i>
                              播放
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-center mt-4" style="font-size: 1.0625rem">
                請在發送前確認與同意
                <span class="pointer policyColor" @click="OpenPrivacyModal" @keyup.enter="OpenPrivacyModal" tabindex="0"
                  >「隱私權政策」</span
                >
              </p>

              <div class="d-flex justify-content-center mt-3 mb-5">
                <button
                  class="px-4 text-center btnBlackStyle"
                  type="submit"
                  style="font-size: 1.25rem; letter-spacing: 6px; padding-top: 8px; padding-bottom: 8px"
                >
                  同意並送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- 隱私政策彈跳視窗 -->

    <div
      class="modal fade"
      id="PrivacyModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="text-right">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click.prevent="AgreePrivacy"
                @keyup.enter="AgreePrivacy"
                tabindex="0"
                style="font-size: 2.375rem"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="text-center mt-4 mb-5">
              <p class="title_fontStyle" style="letter-spacing: 10px; font-weight: bold; font-size: 2rem">隱私權條款</p>
            </div>

            <div class="autoy p-3">
              <p class="mt-3">
                非常歡迎您光臨「友照醫療儀器股份有限公司網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
              </p>

              <hr />
              <p class="privacyTitle">一、隱私權保護政策的適用範圍</p>

              <p class="mt-3">
                隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
              </p>

              <hr />

              <p class="privacyTitle mb-3">二、個人資料的蒐集、處理及利用方式</p>

              <ul>
                <li>
                  當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
                </li>

                <li>
                  本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
                </li>

                <li>
                  於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
                </li>

                <li>
                  為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
                </li>
              </ul>

              <hr />

              <p class="privacyTitle mb-3">三、資料之保護</p>

              <ul>
                <li>
                  本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
                </li>

                <li>
                  如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
                </li>
              </ul>

              <hr />

              <p class="privacyTitle">四、網站對外的相關連結</p>

              <p class="mt-3">
                本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
              </p>

              <hr />

              <p class="privacyTitle">五、與第三人共用個人資料之政策</p>

              <p class="mt-3">
                本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
              </p>

              <p class="my-3">前項但書之情形包括不限於：</p>

              <ul>
                <li>經由您書面同意。</li>
                <li>法律明文規定。</li>
                <li>為免除您生命、身體、自由或財產上之危險。</li>
                <li>
                  與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。
                </li>
                <li>
                  當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
                </li>
                <li>有利於您的權益。</li>
                <li>本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</li>
              </ul>
              <hr />

              <p class="privacyTitle">六、Cookie之使用</p>

              <p class="mt-3">
                為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie，若您不願接受 Cookie
                的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie
                的寫入，但可能會導致網站某些功能無法正常執行。
              </p>

              <hr />

              <p class="privacyTitle">七、隱私權保護政策之修正</p>

              <p class="mt-3">本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
            </div>

            <div class="d-flex justify-content-center mt-4 mb-4">
              <button
                class="btn-block btn btn-primary mx-5"
                style="padding-top: 12px; padding-bottom: 12px; letter-spacing: 10px; font-size: 1.25rem"
                @click="AgreePrivacy"
                @keyup.enter="AgreePrivacy"
                tabindex="0"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard'

  export default {
    layout: 'DashboardLayout',

    head() {
      return {
        title: `${this.ProData.proName} - 友照醫療儀器`,

        meta: [
          { charset: 'utf-8' },

          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: `${this.NowPageUrl}` },
          { hid: 'og:title', property: 'og:title', content: `${this.ProData.proName} - 友照醫療儀器` },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${this.ProData.proImg}`,
          },

          {
            hid: 'og:description',
            property: 'og:description',
            content: `${this.ProData.proDesc}`,
          },
        ],
      }
    },

    data() {
      return {
        ProID: '',
        ProData: {},
        lastPage: '',
        photoList: [],
        GetPhotoID: [],
        ShowPhoto: '',
        VideoList: [],
        otherProductList: [],
        photoSelect: '',

        getvalidsrc: '',
        Contactemail: '',
        ContactName: '',
        Contacttel: '',
        Contactdetail: '',
        validcode: '',

        proCatList: [],

        proCatID: '',
        proCatName: '',
        eproCatName: '',
        savePickPhoto: '',
        NowPageUrl: '',
        name: '',

        audio1: '',
        audio2: '',
        audio3: '',
        audio4: '',
        audio5: '',
        audio6: '',
        audio7: '',
        audio8: '',
        getValidcode: '',
        getAudio: '',
        getToday: '',
      }
    },

    methods: {
      playAudio() {
        let vm = this
        let arr = [vm.audio8, vm.audio7, vm.audio6, vm.audio5, vm.audio4, vm.audio3, vm.audio2, vm.audio1] //把需要播放的歌曲从后往前排，这里已添加两首音乐，可继续添加多个音乐
        let myAudio = new Audio()
        myAudio.preload = true
        myAudio.controls = true
        myAudio.src = arr.pop() //每次读数组最后一个元素
        myAudio.addEventListener('ended', playEndedHandler, false)
        myAudio.play()
        // document.getElementById('audioBox').appendChild(myAudio)
        myAudio.loop = false //禁止循环，否则无法触发ended事件
        function playEndedHandler() {
          myAudio.src = arr.pop()
          myAudio.play()
          !arr.length && myAudio.removeEventListener('ended', playEndedHandler, false) //只有一个元素时解除绑定
        }
      },

      toMain() {
        document.querySelector('#center').scrollIntoView(true)
      },
      LineLink() {
        window.open('https://chanchao.tw/bMD5Qs', '_blank')
      },

      openLineLink() {
        const vm = this
        window.open(`https://social-plugins.line.me/lineit/share?url=${vm.NowPageUrl}`, '_blank')
      },

      openfbLink() {
        const vm = this
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${vm.NowPageUrl}`, '_blank')
      },

      backProAllList() {
        const vm = this
        vm.$store.dispatch('UpdateCatID', '')
        this.$router.push(`/Products/`)
      },

      backProCatList() {
        const vm = this

        vm.$store.dispatch('UpdateCatID', vm.proCatID)
        this.$router.push(`/Products/${vm.eproCatName}`)
      },

      clearModal() {
        const vm = this

        vm.validcode = ''
        vm.Contactdetail = ''
        vm.Contacttel = ''
        vm.ContactName = ''
        vm.Contactemail = ''
      },

      cobycode() {
        const clipboard = new Clipboard('.btn-coupon')
        clipboard.on('success', () => {
          clipboard.destroy() // 釋放内存記憶體
          alert('成功複製連結！')
        })
        clipboard.on('error', () => {
          clipboard.destroy()
        })
      },
      OpenAskModal() {
        $('#AskModal').modal('show')
      },

      OpenPrivacyModal() {
        $('#PrivacyModal').modal('show')
        $('#AskModal').modal('hide')
      },

      AgreePrivacy() {
        $('#PrivacyModal').modal('hide')
        $('#AskModal').modal('show')
      },

      resetValidcode() {
        const vm = this
        vm.$axios.get('https://demoucare20231012.azurewebsites.net/validcode').then((response) => {
          vm.getValidcode = response.data
          vm.getvalidsrc = vm.getValidcode.split('\\')[0]
          vm.getAudio = vm.getValidcode.split('\\')[1]

          let video1 = vm.getAudio.split(',')[0]
          let video2 = vm.getAudio.split(',')[1]
          let video3 = vm.getAudio.split(',')[2]
          let video4 = vm.getAudio.split(',')[3]
          let video5 = vm.getAudio.split(',')[4]
          let video6 = vm.getAudio.split(',')[5]

          if (vm.getAudio.split(',')[6]) {
            let video7 = vm.getAudio.split(',')[6]
            vm.audio7 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video7}.mp3`
          } else {
            vm.audio7 = ''
          }

          if (vm.getAudio.split(',')[7]) {
            let video8 = vm.getAudio.split(',')[7]
            vm.audio8 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video8}.mp3`
          } else {
            vm.audio8 = ''
          }

          vm.audio1 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video1}.mp3`
          vm.audio2 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video2}.mp3`
          vm.audio3 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video3}.mp3`
          vm.audio4 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video4}.mp3`
          vm.audio5 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video5}.mp3`
          vm.audio6 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video6}.mp3`
        })
      },

      SubmitData() {
        const vm = this

        const AllData = {
          phoneNumber: vm.Contacttel,
          inquiry: vm.Contactdetail,
          email: vm.Contactemail,
          name: vm.ContactName,
          validcode: vm.validcode,
        }

        vm.$axios
          .$post(`https://demoucare20231012.azurewebsites.net/Inquire?proid=${vm.ProID}`, AllData)
          .then((response) => {
            if (response.Code == 200) {
              alert('已寄信給專員，待專員與您聯繫')
              window.location.reload()
            } else if (response.Code == 251) {
              alert('寄信失敗，系統忙錄中，請稍後再試')
            } else if (response.Code == 252) {
              alert('寄信失敗，產品序號有誤')
            } else if (response.Code == 253) {
              alert('驗證碼錯誤')
            } else if (response.Code == 254) {
              let getErrorArray = response.Errors
              alert(getErrorArray[0].Message)
              // alert("表單內容驗證錯誤");
            } else if (response.Code == 255) {
              alert('電子信箱輸入格式錯誤')
            } else {
              alert('系統忙錄中，請稍後再試')
            }
          })
          .catch((error) => {})
      },

      SpytoVideo() {
        document.querySelector('#Videozoom').scrollIntoView({
          behavior: 'smooth',
        })
      },

      visitProDetail(proid) {
        this.$router.push(`/Products/Detail/${proid}`)
      },

      pickPhoto(PhotoId) {
        const vm = this

        vm.photoSelect = PhotoId

        vm.GetPhotoID = vm.photoList.filter((item) => {
          return item.photoid == PhotoId
        })

        vm.ShowPhoto = vm.GetPhotoID[0].photoimgL
        vm.savePickPhoto = vm.ShowPhoto
      },

      HoverPhoto(PhotoId) {
        const vm = this

        vm.GetPhotoID = vm.photoList.filter((item) => {
          return item.photoid == PhotoId
        })

        vm.ShowPhoto = vm.GetPhotoID[0].photoimgL
      },

      CloseHoverPhoto() {
        const vm = this

        vm.ShowPhoto = vm.savePickPhoto
      },

      backLastPage() {
        const vm = this
        vm.$router.push(`${vm.lastPage}`)
      },
    },

    async asyncData({ $axios, params }) {
      const ProID = params.id

      return await $axios.get(`https://demoucare20231012.azurewebsites.net/product/${ProID}`).then((res) => {
        let getList = {}
        getList = res.data.Data[0]
        return { ProData: getList, ProID }
      })
    },

    mounted() {
      const vm = this

      $nuxt.$emit('OpenNavStatus')

      vm.NowPageUrl = location.href
    },

    created() {
      const vm = this

      // 取得現在時間判斷語音驗證碼的取得網址
      let TodayDate = new Date()
      vm.getToday = `${TodayDate.getFullYear()}${TodayDate.getMonth() + 1}${TodayDate.getDate()}`

      vm.photoList = vm.ProData.productPhotoList
      vm.VideoList = vm.ProData.bindVideoList

      vm.otherProductList = vm.ProData.otherProductList

      if (vm.photoList.length > 0) {
        vm.ShowPhoto = vm.photoList[0].photoimgL
        vm.savePickPhoto = vm.photoList[0].photoimgL
        vm.photoSelect = vm.photoList[0].photoid
      }

      vm.lastPage = '/Products/'

      vm.$axios.get('https://demoucare20231012.azurewebsites.net/validcode').then((response) => {
        vm.getValidcode = response.data
        vm.getvalidsrc = vm.getValidcode.split('\\')[0]
        vm.getAudio = vm.getValidcode.split('\\')[1]

        let video1 = vm.getAudio.split(',')[0]
        let video2 = vm.getAudio.split(',')[1]
        let video3 = vm.getAudio.split(',')[2]
        let video4 = vm.getAudio.split(',')[3]
        let video5 = vm.getAudio.split(',')[4]
        let video6 = vm.getAudio.split(',')[5]

        if (vm.getAudio.split(',')[6]) {
          let video7 = vm.getAudio.split(',')[6]
          vm.audio7 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video7}.mp3`
        } else {
          vm.audio7 = ''
        }

        if (vm.getAudio.split(',')[7]) {
          let video8 = vm.getAudio.split(',')[7]
          vm.audio8 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video8}.mp3`
        } else {
          vm.audio8 = ''
        }
        vm.audio1 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video1}.mp3`
        vm.audio2 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video2}.mp3`
        vm.audio3 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video3}.mp3`
        vm.audio4 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video4}.mp3`
        vm.audio5 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video5}.mp3`
        vm.audio6 = `https://www.ucare-medical.com/uploads/numbers/${vm.getToday}/${video6}.mp3`
      })

      vm.$axios.get('https://demoucare20231012.azurewebsites.net/ProductCategory').then((response) => {
        if (response.data.Code == 200) {
          vm.proCatID = vm.ProData.productCatId
          vm.proCatList = response.data.Data

          let getproCat = []
          getproCat = vm.proCatList.filter((item) => {
            return item.productCatId == vm.proCatID
          })

          vm.proCatName = getproCat[0].proCatName
          vm.eproCatName = getproCat[0].eproCatName
        } else if (response.data.Code == 404) {
        } else if (response.data.Code == 500) {
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 991px) {
    .DetailTitle {
      font-size: 1.5625rem;
      font-weight: bold;
    }

    .TimeAddressFont {
      font-size: 0.875rem;
    }

    .DetailContent {
      font-size: 1rem;
    }
    .otherDetailTitle {
      font-size: 1.25rem;
    }

    .fixed2 {
      display: block;
      position: fixed;
      top: 30%;
      right: 0%;
      background-color: #003c71ab;
      writing-mode: vertical-lr;
      border-radius: 5px 0 0 5px;
      padding: 5px;
      color: white;
      z-index: 100;
      font-size: 0.8125rem;
    }

    .ChatIconStyle {
      display: none;
    }
  }

  @media (min-width: 992px) {
    .col-lg-2 {
      flex: 0 0 19%;
      max-width: 19%;
    }

    .modal-lg {
      max-width: 870px;
    }

    .DetailTitle {
      font-size: 1.375rem;
      font-weight: bold;
    }
    .col-sm-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 35.333333%;
      max-width: 10.333333%;
    }

    .fixed2 {
      display: none;
    }

    .ChatIconStyle {
      display: block;
      background-color: #003c71de;
      border-radius: 10px 10px 0px 0px;
      padding: 10px 25px 5px 25px;
    }
  }

  .alert {
    position: relative;
    padding: 0.35rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0px;
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

  .alert-secondary {
    color: #383d41;
    background-color: #f3f3f354;
  }

  .alert {
    margin-bottom: 0rem;
  }

  .logImgFrame2 {
    // position: relative;
    width: 160px;
    min-height: 182px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ListTitle {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .ListSmContent {
    font-size: 0.9375rem;
  }

  .TopicActive {
    border: 2px solid #b1acac;
  }

  .pointerFrame:hover {
    cursor: pointer;
  }

  .floatChatIcon {
    position: fixed;
    bottom: 0px;
    right: 35px;
    width: 210px;
    z-index: 800;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
  }

  .modal-body {
    height: 90vh;
    overflow-y: auto;
  }

  a {
    color: #676a6c;
    text-decoration: none;
    background-color: transparent;
  }

  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #e8e8e8d6;
    border-color: #6c757d;
  }

  .Iconhover:hover {
    filter: brightness(1.15);
  }

  .btn-primary {
    color: #fff;
    background-color: #003c71de;
    border-color: #003c71de;
  }

  // //輪播圖片

  // @media (min-width: 768px) and (max-width: 991px) {
  //   /* Show 4th slide on md if col-md-4*/
  //   .carousel-inner .active.col-md-4.carousel-item + .carousel-item + .carousel-item + .carousel-item {
  //     position: absolute;
  //     top: 0;
  //     right: -33.3333%; /*change this with javascript in the future*/
  //     z-index: -1;
  //     display: block;
  //     visibility: visible;
  //   }
  // }
  // @media (min-width: 576px) and (max-width: 768px) {
  //   /* Show 3rd slide on sm if col-sm-6*/
  //   .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {
  //     position: absolute;
  //     top: 0;
  //     right: -50%; /*change this with javascript in the future*/
  //     z-index: -1;
  //     display: block;
  //     visibility: visible;
  //   }
  // }
  // @media (min-width: 576px) {
  //   .carousel-item {
  //     margin-right: 0;
  //   }
  //   /* show 2 items */
  //   .carousel-inner .active + .carousel-item {
  //     display: block;
  //   }
  //   .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
  //   .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item {
  //     transition: none;
  //   }
  //   .carousel-inner .carousel-item-next {
  //     position: relative;
  //     transform: translate3d(0, 0, 0);
  //   }
  //   /* left or forward direction */
  //   .active.carousel-item-left + .carousel-item-next.carousel-item-left,
  //   .carousel-item-next.carousel-item-left + .carousel-item,
  //   .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item {
  //     position: relative;
  //     transform: translate3d(-100%, 0, 0);
  //     visibility: visible;
  //   }
  //   /* farthest right hidden item must be also positioned for animations */
  //   .carousel-inner .carousel-item-prev.carousel-item-right {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     z-index: -1;
  //     display: block;
  //     visibility: visible;
  //   }
  //   /* right or prev direction */
  //   .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
  //   .carousel-item-prev.carousel-item-right + .carousel-item,
  //   .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item {
  //     position: relative;
  //     transform: translate3d(100%, 0, 0);
  //     visibility: visible;
  //     display: block;
  //     visibility: visible;
  //   }
  // }
  // /* MD */
  // @media (min-width: 768px) {
  //   /* show 3rd of 3 item slide */
  //   .carousel-inner .active + .carousel-item + .carousel-item {
  //     display: block;
  //   }
  //   .carousel-inner
  //     .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
  //     + .carousel-item
  //     + .carousel-item {
  //     transition: none;
  //   }
  //   .carousel-inner .carousel-item-next {
  //     position: relative;
  //     transform: translate3d(0, 0, 0);
  //   }
  //   /* left or forward direction */
  //   .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {
  //     position: relative;
  //     transform: translate3d(-100%, 0, 0);
  //     visibility: visible;
  //   }
  //   /* right or prev direction */
  //   .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {
  //     position: relative;
  //     transform: translate3d(100%, 0, 0);
  //     visibility: visible;
  //     display: block;
  //     visibility: visible;
  //   }
  // }
  // /* LG */
  // @media (min-width: 991px) {
  //   /* show 4th item */
  //   .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
  //     display: block;
  //   }
  //   .carousel-inner
  //     .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
  //     + .carousel-item
  //     + .carousel-item
  //     + .carousel-item {
  //     transition: none;
  //   }
  //   /* Show 5th slide on lg if col-lg-3 */
  //   .carousel-inner .active.col-lg-3.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
  //     position: absolute;
  //     top: 0;
  //     right: -25%; /*change this with javascript in the future*/
  //     z-index: -1;
  //     display: block;
  //     visibility: visible;
  //   }
  //   /* left or forward direction */
  //   .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
  //     position: relative;
  //     transform: translate3d(-100%, 0, 0);
  //     visibility: visible;
  //   }
  //   /* right or prev direction //t - previous slide direction last item animation fix */
  //   .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
  //     position: relative;
  //     transform: translate3d(100%, 0, 0);
  //     visibility: visible;
  //     display: block;
  //     visibility: visible;
  //   }
  // }

  // .carousel-control-next,
  // .carousel-control-prev {
  //   position: absolute;
  //   top: -34px;
  //   bottom: 0;
  //   z-index: 1;
  //   display: -ms-flexbox;
  //   display: flex;
  //   -ms-flex-align: center;
  //   align-items: center;
  //   -ms-flex-pack: center;
  //   justify-content: center;
  //   width: 6%;
  //   text-align: center;
  //   opacity: 0.5;
  //   transition: opacity 0.15s ease;
  // }

  // .carousel-control-next:focus,
  // .carousel-control-next:hover,
  // .carousel-control-prev:focus,
  // .carousel-control-prev:hover {
  //   color: rgb(50, 50, 50);
  //   text-decoration: none;
  //   outline: 0;
  //   opacity: 0.9;
  // }

  .btn {
    border-radius: 0px;
  }

  .autoy {
    height: 500px;
    overflow-y: auto;
    border: #b6b6b6 solid 2px;
  }

  .privacyTitle {
    font-weight: 550;
    font-size: 1.25rem;
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

  .category-tag {
    display: inline-block;
    padding: 5px 12px;
    background-color: #e1ebfdd4;
    color: #454545;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px 0 5px 0;
    margin-bottom: 10px;
  }

  .Imgtag {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 7px 7px;
    background-color: #ff751db0;
    // border-radius: 6%;
    color: #fff;
  }

  .breadcrumbColor {
    color: #007bff;
  }

  .LineColor {
    color: #00b900;
    font-size: 1.75rem;
  }

  .LineFb {
    color: #1877f2;
    font-size: 1.75rem;
  }

  .lineLinkColor {
    color: #00b900;
  }

  .policyColor {
    color: #0084ff;
  }
</style>
