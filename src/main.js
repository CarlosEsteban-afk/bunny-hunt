import App from './App.vue'
import { createApp } from 'vue'
import router from './routes'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')

