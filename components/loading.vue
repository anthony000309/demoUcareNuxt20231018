<template>
  <div v-if="loading">
    <div class="loading-page">
      <div>
        <div class="spinner"></div>
        <!-- <div class="mt-4 h4 text-muted">LOADING...</div> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f630;
    text-align: center;
    font-size: 1.875rem;
    font-family: sans-serif;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 220px;
    height: 220px;
    animation: sweep 1s infinite linear;
    border-radius: 220px;
    border-bottom: 5px solid #5f5f5f;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes sweep {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  // -------------------------------
  // .spinner {
  //   height: 60px;
  //   width: 60px;
  //   //margin: 94px auto 0 auto;
  //   position: relative;
  //   animation: rotation 1s infinite linear;
  //   border-left: 6px solid rgba(0, 174, 239, 0.15);
  //   border-right: 6px solid rgba(0, 174, 239, 0.15);
  //   border-bottom: 6px solid rgba(0, 174, 239, 0.15);
  //   border-top: 6px solid rgba(0, 174, 239, 0.8);
  //   border-radius: 100%;
  // }

  // @keyframes rotation {
  //   from {
  //     transform: rotate(0deg);
  //   }
  //   to {
  //     transform: rotate(359deg);
  //   }
  // }

  // // --------------------------

  // .loading {
  //   border-bottom: 6px solid rgba(0, 0, 0, 0.1);
  //   border-left: 6px solid rgba(0, 0, 0, 0.1);
  //   border-right: 6px solid rgba(0, 0, 0, 0.1);
  //   border-top: 6px solid rgba(0, 0, 0, 0.4);
  //   border-radius: 100%;
  //   height: 50px;
  //   width: 50px;
  //   animation: rot 0.6s infinite linear;
  // }
  // @keyframes rot {
  //   from {
  //     transform: rotate(0deg);
  //   }
  //   to {
  //     transform: rotate(359deg);
  //   }
  // }
</style>
