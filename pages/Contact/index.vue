<template>
  <div>
    <div class="goCenter pointer" @click="toMain" @keyup.enter="toMain" tabindex="1">跳到主要內容</div>

    <div class="TopicBG">
      <div class="AccesskeyIcon PcDevice2">
        <span tabindex="0" name="C" title="跳到主要區塊" accesskey="C" style="color: #ffa500; font-size: 1.3rem">
          :::
        </span>
      </div>
      <img src="../../assets/images/top_contact.jpg" class="topBannerHeight" width="100%" alt="友照醫療-背景圖" />
      <h1 class="TopBanner_Cn container">聯絡我們</h1>
    </div>

    <div class="container DetailContent mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <nav aria-label="breadcrumb" class="toMainTopic_relative_inside">
            <div class="toMainTopic_absolute_inside" id="center"></div>
            <ol
              class="breadcrumb"
              style="background-color: white; padding-left: 0px; font-size: 1rem; margin-bottom: 0px"
            >
              <li class="breadcrumb-item breadcrumbs_font_upper">
                <nuxt-link to="/"> 首頁 </nuxt-link>
              </li>

              <li class="breadcrumb-item active breadcrumbs_font_current" aria-current="page">聯絡我們</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-lg-7">
          <form class="ml-sm-4 ml-0" @submit.prevent="SubmitData()">
            <h4 class="mb-4 MbDevice2">歡迎洽詢</h4>

            <p class="MbDevice2 my-2">
              請點擊
              <span @click="LineLink" @keyup.enter="LineLink" tabindex="0" title="另開新視窗">
                <i class="fab fa-line Iconhover lineColor" aria-hidden="true" style="font-size: 1.375rem"></i>
              </span>
              洽詢，或填寫以下表格，謝謝。
            </p>

            <div class="MbDevice2 mb-2">
              <span @click="LineLink" @keyup.enter="LineLink" tabindex="0" title="另開新視窗">
                <i class="fab fa-line Iconhover lineColor" aria-hidden="true" style="font-size: 132px"></i>
              </span>
            </div>

            <div class="PcDevice">
              <h2 class="mb-4 clickSize">
                請點擊
                <span @click="QrCodeModal" @keyup.enter="QrCodeModal" tabindex="0">
                  <i class="fab fa-line Iconhover pointer lineColor" aria-hidden="true"></i>
                </span>
                洽詢，或填寫以下表格，謝謝。
              </h2>
            </div>

            <div class="row text-left">
              <div class="col-md-12 mt-sm-0 mt-1">
                <div class="form-group row">
                  <label for="fullname" class="col-md-2 col-form-label font-weight-bold"
                    >姓名 <span class="requiredFont">(必填)</span></label
                  >
                  <div class="col-lg-8">
                    <div class="d-flex align-items-center">
                      <input
                        type="text"
                        class="form-control"
                        id="fullname"
                        placeholder="請輸入聯絡人姓名"
                        maxlength="30"
                        v-model="ContactName"
                        alt="姓名"
                        title="請輸入姓名"
                        required
                      />
                    </div>
                  </div>
                </div>
                <hr />

                <div class="form-group row">
                  <label for="tel" class="col-md-2 col-form-label font-weight-bold"
                    >聯絡電話 <span class="requiredFont">(必填)</span></label
                  >
                  <div class="col-lg-8">
                    <div class="d-flex align-items-center">
                      <input
                        type="tel"
                        class="form-control"
                        id="tel"
                        placeholder="請輸入可聯繫的手機或市話號碼"
                        v-model="Contacttel"
                        maxlength="25"
                        alt="電話"
                        title="請輸入電話"
                        required
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="form-group row">
                  <label for="email" class="col-md-2 col-form-label font-weight-bold">電子郵件 </label>
                  <div class="col-lg-8">
                    <div class="d-flex align-items-center">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="請輸入正確的電子郵件格式，需包含「@」"
                        v-model="Contactemail"
                        alt="email"
                        title="請輸入email"
                        maxlength="50"
                      />
                    </div>
                    <div class="exampleStyle mt-1">範例: ucare@gmail.com.tw</div>
                  </div>
                </div>
                <hr />

                <div class="form-group row">
                  <label for="content" class="col-md-2 col-form-label font-weight-bold"
                    >諮詢內容 <span class="requiredFont">(必填)</span></label
                  >
                  <div class="col-lg-8">
                    <div>
                      <textarea
                        class="form-control"
                        id="content"
                        rows="6"
                        placeholder="請輸入諮詢內容"
                        maxlength="500"
                        v-model="Contactdetail"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <hr />

                <div class="form-group row mb-5">
                  <label for="vcode" class="col-md-2 col-form-label font-weight-bold"
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
                          maxlength="8"
                          v-model="validcode"
                          title="請輸入驗證碼"
                          alt="驗證碼"
                          required
                        />
                      </div>
                      <div>
                        <img
                          :src="getvalidsrc"
                          class="img-fluid rounded pointer validateStyle"
                          @click.prevent="resetValidcode"
                          @keyup.enter="resetValidcode"
                          tabindex="0"
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
                          <i class="ml-3 fas fa-redo" aria-hidden="true"></i>
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
                            語音播放
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-center">
              請在發送前確認與同意
              <span class="pointer policyColor" @click="PrivacyModal" @keyup.enter="PrivacyModal" tabindex="0"
                >「隱私權政策」</span
              >
            </p>

            <div class="d-flex justify-content-center mt-4 mb-2 mb-sm-5">
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

        <div class="col-lg-1 d-none d-lg-block PcDevice">
          <div class="d-flex justify-content-center">
            <div class="rightline"></div>
          </div>
        </div>

        <div class="col-lg-4 PcDevice">
          <div class="mb-4 mt-lg-5 mt-0">
            <p class="mb-2"><i class="fas fa-phone mr-2" aria-hidden="true"></i> (02) 8753-6255, (02) 8753-6254</p>
            <p class="mb-2"><i class="fas fa-fax mr-2" aria-hidden="true"></i> (02) 8753-6256</p>
            <p class="mb-2">
              <i class="fas fa-envelope mr-2" aria-hidden="true"></i>
              <a class="text-primary" href="mailto:cs@ucare-medical.com" title="發送Email連結">
                cs@ucare-medical.com
              </a>
            </p>
            <p class="mb-2">
              <i class="fas fa-building mr-2" aria-hidden="true"></i>
              台北市內湖區港墘路185號3樓之1
            </p>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7662532991767!2d121.57285795082504!3d25.07591048387402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad461c45bdc9%3A0xfa44a2257b8bd2c0!2z5Y-L54Wn6Yar55mC5YSA5Zmo6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1669708058780!5m2!1szh-TW!2stw"
              width="100%"
              height="350"
              class="border rounded"
              frameborder="0"
              style="border: 0"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
              title="友照醫療地圖位置"
              alt="友照醫療地圖位置"
            ></iframe>
          </div>
        </div>

        <div class="MbDevice container ml-sm-4 ml-0">
          <hr />
          <p class="mb-2 mt-4"><i class="fas fa-phone mr-2" aria-hidden="true"></i> (02) 8753-6255, (02) 8753-6254</p>
          <p class="mb-2"><i class="fas fa-fax mr-2" aria-hidden="true"></i> (02) 8753-6256</p>
          <p class="mb-2">
            <i class="fas fa-envelope mr-2" aria-hidden="true"></i>
            <a class="text-primary" href="mailto:cs@ucare-medical.com" title="發送Email連結"> cs@ucare-medical.com </a>
          </p>
          <p class="mb-2">
            <i class="fas fa-building mr-2" aria-hidden="true"></i>
            台北市內湖區港墘路185號3樓之1
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7662532991767!2d121.57285795082504!3d25.07591048387402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad461c45bdc9%3A0xfa44a2257b8bd2c0!2z5Y-L54Wn6Yar55mC5YSA5Zmo6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1669708058780!5m2!1szh-TW!2stw"
            width="100%"
            height="350"
            class="border rounded"
            frameborder="0"
            style="border: 0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            alt="友照醫療地圖位置"
            title="友照醫療地圖位置"
          ></iframe>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="PrivacyModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
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
              <h2 class="title_fontStyle" style="letter-spacing: 10px">隱私權條款</h2>
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

    <div
      class="modal fade"
      id="QrCodeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">友照 LINE QR Code</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="https://www.ucare-medical.com/images/qrcode_ucare.png" class="img-fluid" alt="友照醫療-Line圖" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'DashboardLayout',

    head: {
      title: '聯絡我們 - 友照醫療儀器',
    },

    data() {
      return {
        getvalidsrc: '',
        Contactemail: '',
        ContactName: '',
        Contacttel: '',
        Contactdetail: '',
        validcode: '',

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
      AgreePrivacy() {
        $('#PrivacyModal').modal('hide')
      },

      PrivacyModal() {
        $('#PrivacyModal').modal('show')
      },

      QrCodeModal() {
        $('#QrCodeModal').modal('show')
      },

      resetValidcode() {
        const vm = this
        vm.$axios.get('https://ucarebackend20231109.azurewebsites.net/validcode').then((response) => {
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
          .$post('https://ucarebackend20231109.azurewebsites.net/Inquire?proid=', AllData)
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
            } else if (response.Code == 255) {
              alert('電子信箱輸入格式錯誤')
            } else {
              alert('系統忙錄中，請稍後再試')
            }
          })
          .catch((error) => {})
      },
    },

    mounted() {
      $nuxt.$emit('OpenNavStatus')
    },

    created() {
      const vm = this

      // 取得現在時間判斷語音驗證碼的取得網址
      let TodayDate = new Date()
      vm.getToday = `${TodayDate.getFullYear()}${TodayDate.getMonth() + 1}${TodayDate.getDate()}`

      vm.$axios.get('https://ucarebackend20231109.azurewebsites.net/validcode').then((response) => {
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
  }
</script>

<style lang="scss" scoped>
  @media (min-width: 992px) {
    .col-md-2 {
      flex: 0 0 20.666667%;
      max-width: 20.666667%;
    }
  }

  .validateStyle {
    width: 120px;
    height: 40px;
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

  .autoy {
    height: 500px;
    overflow-y: auto;
    border: #b6b6b6 solid 2px;
  }

  .privacyTitle {
    font-weight: 550;
    font-size: 1.25rem;
  }

  .rightline {
    border-right: rgb(223, 220, 220) 1px solid;
    height: 505px;
  }

  .btn-primary {
    color: #fff;
    background-color: #003c71de;
    border-color: #003c71de;
  }

  .lineColor {
    color: #00b900;
    font-size: 1.375rem;
  }

  .lineColor {
    color: #00b900;
  }

  .policyColor {
    color: #0084ff;
  }

  .clickSize {
    font-size: 1.125rem;
    font-weight: 400;
  }
</style>
