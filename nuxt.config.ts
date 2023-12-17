// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
/*       htmlAttrs: { dir: 'rtl', lang: 'ar' }, */
      title: 'EduTech',
      titleTemplate: '%s - Nuxt',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // <meta name="description" content="My amazing site">
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'description', content: 'Nuxt 3 Starter'},
        { name: 'format-detection', content: 'telephone=no' },
        { name : 'theme-color', content: '#07AEAF'},
    ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        }
      ]
    },
  // global transition
  pageTransition: { name: 'page', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },

    
  },
  components: [{ path: '~/components', pathPrefix: false,},],

  css: [
    '~/assets/css/tailwind.css',
   '~/assets/scss/app.scss',
 
  ],

/*   build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },
 */
  modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],

 // module::color-mode
 colorMode: {
  classSuffix: '',
},

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
