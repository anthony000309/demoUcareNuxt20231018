<template>
  <div>
    <nav class="navbar container">
      <a href="https://www.ucare-medical.com/" title="首頁連結">
        <img src="../assets/images/Newlogo.svg" class="img-fluid" width="200px" alt="友照醫療Logo" />
      </a>
    </nav>
    <div class="navbarListBG py-4"></div>

    <div v-if="isfourError">
      <div class="container text-center mt-4">
        <img src="../assets/images/404_5.png" class="img-fluid" width="350px" alt="友照醫療404" />

        <h2 style="font-size: 2.125rem" class="mt-3">Page not Found</h2>

        <p class="mt-5 mb-3" style="font-size: 1.25rem">
          很抱歉您搜尋的網頁不存在
          <a href="https://www.ucare-medical.com/" style="text-decoration: underline" title="首頁連結"> 回首頁 </a>
        </p>
        <p style="font-size: 1.25rem">
          Sorry, the page you are looking for does not exist.
          <a href="https://www.ucare-medical.com/" style="text-decoration: underline" title="首頁連結"> Home page </a>
        </p>
      </div>
    </div>

    <div v-else>
      <div class="container text-center mt-4">
        <h1 class="errorColor" style="line-height: 90%; font-size: 9.375rem">500</h1>

        <h2 style="font-size: 2.125rem" class="mt-4">Internal Server Error</h2>

        <p class="mt-5 mb-3" style="font-size: 1.375rem">
          伺服器內部錯誤
          <a href="https://www.ucare-medical.com/" title="首頁連結" style="text-decoration: underline"> 回首頁 </a>
        </p>
        <p style="font-size: 1.375rem">
          Sorry, Server-side error occurred.
          <a href="https://www.ucare-medical.com/" title="首頁連結" style="text-decoration: underline"> Home page </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],

    data() {
      return {
        getErrorCode: {},
        isfourError: false,
      }
    },

    created() {
      const vm = this

      vm.getErrorCode = vm.error

      if (vm.getErrorCode.statusCode === 500) {
        if (vm.getErrorCode.message.indexOf('undefined') !== -1) {
          vm.isfourError = true
        } else {
          vm.isfourError = false
        }
      } else {
        vm.isfourError = true
      }
    },
  }
</script>

<style>
  .navbarListBG {
    background-color: #85bac4;
  }

  body {
    padding-top: 0px;
  }

  .errorColor {
    color: #71a4cf;
  }
</style>
