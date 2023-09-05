// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  dev: false,
  debug: false,
  typescript: {
    strict: true,
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  css: ["@/assets/scss/app.scss"],

})
