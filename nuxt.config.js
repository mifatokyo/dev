export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs:{
      lang: 'ja'
    },
    title: 'mifa.tokyo | 東京を中心に活動するフリーランスWebデザイナー',
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
        content: process.env.npm_package_description || ''
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
    '@aceforth/nuxt-optimized-images',
    // 'nuxt-microcms-module',
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
  ],
  // microcms: {
  //   options: {
  //     serviceDomain: process.env.SERVICE_DOMAIN,
  //     apiKey: process.env.API_KEY,
  //   },
  //   mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  // },
  styleResources: {
    scss: [
      '~/assets/scss/style.scss'
    ]
  },
  optimizedImages: {
    optimizeImages: true
  },
  // googleAnalytics: {
  //   id: 'G-XTSN9TESN4'
  // },
  'google-gtag': {
    id: 'G-XTSN9TESN4',
    debug: true
  },
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
    // transpile: [
    //   'vee-validate/dist/rules'
    //   ],
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
}
