// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4,
  },
  
  nitro: {
    inlineDynamicImports: true,
    preset: 'aws-lambda',
    serveStatic: true,
    output: {
      publicDir: '.output/server',
    }
  },
  
  modules: [
    '@sidebase/nuxt-auth'
  ],
  
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    cognito: {
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER, // https://cognito-idp.{region}.amazonaws.com/{userPoolId}
    },
    public: {
      auth: {
        baseURL: process.env.AUTH_ORIGIN || 'http://localhost:3000',
        provider: {
          type: 'authjs'
        },
        sessionRefresh: {
          enablePeriodically: true,
          enableOnWindowFocus: true,
        }
      },
      authOrigin: process.env.AUTH_ORIGIN || 'http://localhost:3000',
    }
  },
})
