import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import router from './router'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Button', Button)
app.component('Dropdown', Dropdown)

app.mount('#app')
