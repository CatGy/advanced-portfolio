
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  typescript: {
    shim: false
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: process.env.STRAPI_API_TOKEN,
    apiUrl: process.env.STRAPI_URL,
    apiArticlesEndpoint: process.env.STRAPI_API_ARTICLES_ENDPOINT,
    inMaintenance: process.env.IN_MAINTENANCE,
  },
  modules: [
    'nuxt-security',
    '@nuxtjs/strapi',
    '@dargmuesli/nuxt-cookie-control'
  ],
  
  build : {
    transpile: ['vue-toastification']
 },
 css: [
  'vue-toastification/dist/index.css',
  '~/assets/css/styles.css',
 ],
 app:{
  
  head:{
    title: 'CatGy portfolio',
    meta:[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link:[
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://unpkg.com/typer-dot-js@0.1.0/typer.js",
        defer: true,
        crossorigin: "anonymous"
      }
    ]
  }
 },
 strapi:{
  url: process.env.STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
  devtools: true,
  version: 'v4',
  cookie: {},
  cookieName: 'strapi_jwt'
 },
 security: {
  csrf: true,
  headers: {
    
    crossOriginEmbedderPolicy: "require-corp",
    crossOriginOpenerPolicy: "same-origin",
    crossOriginResourcePolicy: "cross-origin",
    referrerPolicy: "no-referrer-when-downgrade",
    contentSecurityPolicy: {
        // 'script-src': [
        //   "'strict-dynamic'", // Modify with your custom CSP sources
        //   "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        // ],
        "script-src": ["'self'", 'https://*', "http://localhost:3000", 'http://localhost:1337', "'unsafe-inline'", "'unsafe-eval'"],
        'img-src': '* data:',
        'default-src': ["'self'", 'http://localhost:3000', 'ws://localhost:3000', "https://*"],
        'frame-ancestors': ["'self'", 'http://localhost:3000', 'ws://localhost:3000', "https://*", 'https://youtu.be', 'https://www.youtube.com', 'https://www.youtube.com/embed/']
      }
  },
  sri: false,
  corsHandler:  {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
  },
 }
})
