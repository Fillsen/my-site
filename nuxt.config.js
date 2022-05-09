import { resolve } from 'path';

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fillsen site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/reset/normalize.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  styleResources: {
    /* Do not import actual styles. Use this module only to import variables,
		mixins, functions (et cetera) as they won't exist in the actual build.
		Importing actual styles will include them in every component and
		will also make your build/HMR magnitudes slower. Do not do this!
     */
    scss: [
      '~/assets/styles/vars/*.scss',
      // '~/assets/styles/vars/_fonts.scss',
      // '~/assets/styles/vars/_screens.scss',
      // '~/assets/styles/vars/_text.scss',
    ],
    hoistUseStatements: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix',
        locales: [
          {
            code: 'ru',
            iso: 'ru-RU',
            file: 'en-US.json',
          },
          {
            code: 'en',
            iso: 'en-US',
            file: 'ru-RU.json',
          },
        ],
        defaultLocale: 'ru',
        vueI18n: {
          fallbackLocale: 'ru',
        },
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || '',
  },

  privateRuntimeConfig: {
    apiSecretKey: process.env.API_SECRET_KEY,
  },

  // Creating aliases for fast access (https://nuxtjs.org/docs/configuration-glossary/configuration-alias)
  alias: {
    'assets': resolve(__dirname, './assets'),
    'components': resolve(__dirname, './components'),
    'helpers': resolve(__dirname, './helpers'),
    'mixins': resolve(__dirname, './mixins'),
    'pages': resolve(__dirname, './pages'),
    'store': resolve(__dirname, './store'),
    'api': resolve(__dirname, './api'),
  },

  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: process.env.PUBLIC_PATH,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[name].js?h=[contenthash]'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].js?h=[contenthash]'),
      font: '[name].[ext]',
    },
  },
};
