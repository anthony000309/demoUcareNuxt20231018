import axios from 'axios'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  // mode: "universal",
  // target: "static",
  // ssr: false,

  // googleAnalytics: {
  //   id: "UA-10420085-1",
  // },
  generate: {
    routes(callback) {
      axios
        .all([
          // 首頁
          axios.get('https://demoucare20231012.azurewebsites.net/news?keyword=&newscat=&page='),
          // blog 列表頁
          axios.get('https://demoucare20231012.azurewebsites.net/product?keyword=&page='),
          // blog 內容頁
          axios.get('https://demoucare20231012.azurewebsites.net/event?keyword=&page='),
          // blog 內容頁
          axios.get('https://demoucare20231012.azurewebsites.net/ProductCategory'),
        ])
        .then(
          axios.spread(function (NewsList, ProList, EventList, ProCatList) {
            let GetNewCat = ['/News/bulletin', '/News/media', '/News/article']

            let GetNews = NewsList.data.Data.map((data) => {
              return '/News/Detail/' + data.newsid
            })
            let GetPros = ProList.data.Data.map((data) => {
              return '/Products/Detail/' + data.proid
            })
            let GetEvents = EventList.data.Data.map((data) => {
              return '/Cases/Detail/' + data.eventid
            })

            let GetProCat = ProCatList.data.Data.map((data) => {
              return '/Products/' + data.eproCatName
            })

            // 用 concat 進行合併
            callback(null, GetNewCat.concat(GetNews, GetPros, GetEvents, GetProCat))
          }),
          function (err) {
            return next(err)
          }
        )
    }
  },
  head: {
    title: '友照醫療儀器',
    htmlAttrs: {
      lang: 'zh-TW',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'og:title',
        property: 'og:title',
        content: '友照醫療儀器 - 您的健康 友我照護 U care We care',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.ucare-medical.com/images/kv.jpg',
      },

      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '氧氣機、製氧機、血氧機、氧氣製造機、氧氣、氧氣鋼瓶、攜帶氧、攜帶式製氧機、外出用氧氣機、氧氣濃縮器、呼吸中止症、肺癌、肺部疾病、心臟病、COPD、COPD、慢性肺阻塞、家用型氧氣機、呼吸器、肺高壓、英維康、INVACARE、oxygen concentrator、5公升製氧機、5公升氧氣機、1010公升製氧機、10公升氧氣機、輕巧攜帶氧',
      },

      {
        hid: 'description',
        name: 'description',
        content:
          '友照醫療主要為醫療產品代理商，團隊在製氧機研發/製造/國內外銷售有多年經驗，深得原廠信任。現為美國Invacare台灣代理及維修商，維修人員經過原廠專業訓練，以及麗臺科技血氧機代理商。本公司提供到府專業試機、消費者諮詢服務，為您提供最合適的產品提案。本公司產品均附保固證書及品質保證，產品均可宅配或專人送到府衛教。『品質至上、誠信服務』是我們堅持的理念。服務客戶講求誠信，帶給消費者優質產品，給您信任又安心的服務體驗。',
      },
    ],

    noscript: [{ children: `您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態` }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.ucare-medical.com/images/favicon.ico' },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://bootstrap.hexschool.com/docs/4.2/dist/css/bootstrap.css',
      },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://bootstrap5.hexschool.com/docs/5.1/examples/sidebars/sidebars.css',
      },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
      },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.css',
      },

      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://bootstrap.hexschool.com/docs/4.2/examples/offcanvas/offcanvas.css',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
      },

      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js',
      },

      {
        src: 'https://bootstrap.hexschool.com/docs/4.2/dist/js/bootstrap.bundle.js',
      },

      {
        src: 'https://bootstrap.hexschool.com/docs/4.2/examples/offcanvas/offcanvas.js',
      },

      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-KQG3592GV7',
        async: true,
      },

      { src: '/js/analytics.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  loading: '~/components/loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/sessionStorage.js",
    '~/plugins/cookie.js',
    '~/plugins/bus.js',
    '~/plugins/clipboard.js',

    { src: '~/plugins/visible', ssr: false },
    { src: '~/plugins/sessionStorage.js', ssr: false },

    {
      src: '~/plugins/aos',
      ssr: false,
    },

    { src: 'plugins/owl.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/google-gtag',
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-TQDDDJB' }],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    path: '/sitemap.xml', // sitemap名稱，不用改
    hostname: 'https://proud-water-01bf50400.4.azurestaticapps.net/', // 網址
    // cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 檔的 sitemap
    generate: false, // 允許使用 nuxt generate 生成
    // 排除不要的頁面路由
    exclude: ['/test', '/Contact', '/Products', '/News', '/', '/Sitemap', '/Guides', '/Cases', '/About'],
    // 靜態頁面路徑

    routes(callback) {
      axios
        .all([
          // 首頁
          axios.get('https://demoucare20231012.azurewebsites.net/news?keyword=&newscat=&page='),
          // blog 列表頁
          axios.get('https://demoucare20231012.azurewebsites.net/product?keyword=&page='),
          // blog 內容頁
          axios.get('https://demoucare20231012.azurewebsites.net/event?keyword=&page='),
          // blog 內容頁
          axios.get('https://demoucare20231012.azurewebsites.net/ProductCategory'),
        ])
        .then(
          axios.spread(function (NewsList, ProList, EventList, ProCatList) {
            let getALL = [
              {
                url: '/',
                priority: 1, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
              {
                url: '/About',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },

              {
                url: '/Products',
                priority: 1, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },

              {
                url: '/Guides',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
              {
                url: '/News',
                priority: 1, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },

              {
                url: '/Cases',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
              {
                url: '/Contact',
                priority: 1, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
              {
                url: '/Sitemap',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
            ]

            let GetNews = NewsList.data.Data.map((data) => {
              return {
                url: `/News/Detail/${data.newsid}`,
                changefreq: 'daily',
                priority: 0.8,
                lastmodISO: '2023-01-11T13:30:00.000Z',
              }
            })
            let GetPros = ProList.data.Data.map((data) => {
              return {
                url: `/Products/Detail/${data.proid}`,
                changefreq: 'daily',
                priority: 1,
                lastmodISO: '2023-01-11T13:30:00.000Z',
              }
            })
            let GetEvents = EventList.data.Data.map((data) => {
              return {
                url: `/Cases/Detail/${data.eventid}`,
                changefreq: 'daily',
                priority: 0.8,
                lastmodISO: '2023-01-11T13:30:00.000Z',
              }
            })

            let GetProCat = ProCatList.data.Data.map((data) => {
              return {
                url: `/Products/${data.eproCatName}`,
                changefreq: 'daily',
                priority: 1,
                lastmodISO: '2023-01-11T13:30:00.000Z',
              }
            })

            let GetNewsCat = [
              {
                url: '/News/bulletin',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
              {
                url: '/News/media',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
              {
                url: '/News/article',
                priority: 0.8, // 網頁的重要程度，0.1 - 1
                lastmodISO: '2023-01-11T13:30:00.000Z',
              },
            ]

            // 用 concat 進行合併
            callback(null, getALL.concat(GetNews, GetPros, GetEvents, GetProCat, GetNewsCat))
          }),
          function (err) {
            return next(err)
          }
        )
    },

    // routes: [
    //   {
    //     url: '/',
    //     priority: 1, // 網頁的重要程度，0.1 - 1
    //     lastmodISO: '2023-01-11T13:30:00.000Z',
    //   },
    //   {
    //     url: '/Content',
    //     priority: 0.5, // 網頁的重要程度，0.1 - 1
    //     lastmodISO: '2023-01-11T13:30:00.000Z',
    //   },
    // ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { loadingScreen: false },

  router: {
    base: '/',
    // scrollBehavior(to, from, savePostition) {
    //   return { x: 0, y: 0 }
    // },
  },
}
