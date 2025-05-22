import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import router mới tạo

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router) // Yêu cầu Vue sử dụng router
app.use(ElementPlus) // Đăng ký Element Plus
app.mount('#app')