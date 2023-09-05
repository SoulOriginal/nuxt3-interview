export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  dev: false,
  debug: false,
  modules: ["@pinia/nuxt"],
  srcDir: "./",
  components: {
    global: true,
    dirs: ["~/components"],
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        strict: true,
        // types: ["@pinia/nuxt"],
      },
    },
  },
  vite: {
    logLevel: "info",
  },
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  css: ["@/assets/scss/app.scss"],
});
