import './assets/base.css'
import './assets/index.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(PrimeVue, { unstyled: true })
app.use(head)
app.use(router)

app.mount('#app')
