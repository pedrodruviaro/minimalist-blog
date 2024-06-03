export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
    families: {
      "Hanken Grotesk": [400, 700],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/reset.scss", "~/assets/scss/main.scss"],
});
