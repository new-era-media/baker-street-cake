export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Торты на заказ в Краснодаре - Baker Street Cake",
    meta: [
      { name: "yandex-verification", content: "f198bb6fdbb5001b" },
      {
        name: "google-site-verification",
        content: "l-SBpVsuk-NjHKKeV_XKdQSV3Me--SAuX06nr1ERtl8",
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "В нашей кондитерской можно купить различные торты на заказ - свадебный торт, детский торт, капкейки и макарон.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "@/theme/scss/css.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", "@/plugins/vuelidate", "@/plugins/aos"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
