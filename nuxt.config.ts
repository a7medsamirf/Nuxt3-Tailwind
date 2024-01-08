// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
/*       htmlAttrs: { dir: 'rtl', lang: 'ar' }, */
      title: 'Superdao',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: "/public/Logo-Full.ico" }],

      meta: [
        // <meta name="description" content="My amazing site">
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'description', content: 'Nuxt 3 Starter'},
        { name: 'format-detection', content: 'telephone=no' },
        { name : 'theme-color', content: '#07AEAF'},
    ],
/*       link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        }
      ] */
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
  
  plugins: [
      "~/plugins/i18n.config.js",
      "~/plugins/preline.client.ts"
],

/*   build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },
 */
  modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
        '@vueuse/motion/nuxt'
    ],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  },
    i18n: {
      /* module options */
/*       seo: true, */
      lazy: true,
      langDir: "locales",
      strategy: "prefix_except_default",
      locales: [
        {
          code: "en",
          iso: "en-US",
          name: "English(US)",
          file: "en-US.json",
          dir: 'ltr',
          icon: 'flag-en.svg'
        },
        {
          code: 'ar',
          iso: 'ar-AR',
          name: 'Arabic(EG)',
          file: 'ar-EG.json',
          dir: 'rtl',
          icon: 'flag-ar.svg'
        },
      ],
      defaultLocale: "en",
/*       vueI18n: "./i18n.config.ts", */
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: true
      },
    },


    
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
