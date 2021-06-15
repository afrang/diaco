
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: '/animate.min.css' },
      {rel: 'icon', type: 'image/x-icon', href: '/icon/32.png'},

      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "57x57", href: `/icon/apple-icon-57x57.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "60x60", href: `/icon/apple-icon-60x60.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "72x72", href: `/icon/apple-icon-72x72.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "76x76", href: `/icon/apple-icon-76x76.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "114x114", href: `/icon/apple-icon-114x114.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "120x120", href: `/icon/apple-icon-120x120.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "144x144", href: `/icon/apple-icon-144x144.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "152x152", href: `/icon/apple-icon-152x152.png`},
      {rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "180x180", href: `/icon/apple-icon-180x180.png`},

      {rel: 'icon', type: 'image/png', sizes: "196x196", href: `/icon/196.png`},
      {rel: 'icon', type: 'image/png', sizes: "32x32", href: `/icon/32.png`},
      {rel: 'icon', type: 'image/png', sizes: "16x16", href: `/icon/16.png`},

    ],

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/other.js',
    '~/plugins/other.js',
    { src: '~/plugins/nossr.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    'nuxt-icon-font',

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
  ,
    server: {
    port: 2004, // default: 3000
    host: '0.0.0.0' // default: localhost
  }

}
