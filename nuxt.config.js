import axios from 'axios';
// require("dotenv").config();
const { API_KEY, SERVICE_ID } = process.env;
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs:{
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate:  '%s | ' + 'mifa.tokyo',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'mifa.tokyoは、東京を拠点として活動するウェブデザイナーです。ホームページ制作やデザイン、幅広くお手伝いさせていただきます。' || ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'ウェブ, web , デザイン , ホームページ , 制作 , サイト , 東京 , フリーランス,フロントエンド ,frontend,freelance, コーディング,構築 '
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/style.css',

  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vee-validate',
    // { src: '~/plugins/swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    'nuxt-microcms-module',
    '@nuxtjs/router',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    '@nuxtjs/google-gtag',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt',
      [
        'vue-scrollto/nuxt', { duration: 300 }
      ],
  ],
  microcms: {
    options: {
      serviceDomain: SERVICE_ID,
      apiKey: API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },
  styleResources: {
    scss: [
      '~/assets/scss/style.scss'
    ]
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },
  googleAnalytics: {
    id: 'UA-196409832-1'
  },
  // 'google-gtag': {
  //   id: 'G-XTSN9TESN4',
  //   debug: true
  // },
  webfontloader: {
    google: {
      families: [
        'Sacramento:400', 'Nunito Sans:600,700,800'
      ]
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.performance.maxAssetSize = 400000;
    }
  },
  // hooks: {
  //   generate: {
  //     routeCreated({ errors }) {
  //       if (errors.length > 0 && errors[0].error) {
  //         // console.log(errors)
  //         const error = errors[0].error
  //         throw new Error(`Failed generate ${error.path} -- ${error.message}`)
  //       }
  //     },
  //   },
  // },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://mifa.tokyo',
    trailingSlash: true,
    // サイトマップの更新頻度を設定する
    // cacheTime: 1000 * 60 * 15,
    // gzip形式のsitemapを生成するかどうか
    gzip: true,
    // generate時に静的サイトマップを生成するかどうか
    generate: false,
    // // 除外
    // exclude: [
    //   '/terms',
    //   '/contact/complete',
    //   '/register/complete',
    //   '/privacy-policy',
    //   '/mypage',
    //   '/admin',
    //   '/mypage/**',
    //   '/admin/**'
    // ],
    // // API取得のコンテンツ分を自動で取得する記述
    routes(callback) {
      axios.get(`https://mifatokyo.microcms.io/api/v1/post?limit=100`,
        {
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
        }
      )
        .then((res) => {
          const routes = res.data.contents.map((blog) => {
            return '/blog/' + blog.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  },
  generate: {
    fallback: true,
  },
  router: {
    trailingSlash: true,
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/errors/404.vue')
      })
    }
  }
}
