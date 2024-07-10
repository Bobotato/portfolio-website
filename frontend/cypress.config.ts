import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000
  },

  e2e: {
    baseUrl: 'http://localhost:5173'
  }
})
