import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Router from './router/index'

createApp(App)
    .use(ElementPlus)
    .use(Router)
    .mount('#app')
