import './assets/base.css'
import './assets/index.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false
    }
  }
})
app.use(head)
app.use(router)

app.mount('#app')
