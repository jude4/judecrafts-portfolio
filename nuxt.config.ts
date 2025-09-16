// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'JudeCrafts — Full‑Stack Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Jude — Full‑Stack Developer specializing in Vue/Nuxt, React, and scalable backends. View selected works, services, and contact details.' },
        { name: 'theme-color', content: '#4f46e5' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'JudeCrafts — Full‑Stack Developer' },
        { property: 'og:description', content: 'Selected works, services, and contact details.' },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },
});
