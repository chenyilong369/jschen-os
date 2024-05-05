import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/reset.scss'

const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = (context: __WebpackModuleApi.RequireContext) => context.keys().map(context)
requireAll(req)

createApp(App).use(router).mount('#app')
