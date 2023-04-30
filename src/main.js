import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ElementUI导入
import ElementUI from 'element-ui';
import './plugins/element.js'

//导入路由守卫
import './router/permisson' 
Vue.config.productionTip = false

// 导入仓库
import store from './store/index.js'

//导入样式初始化
import 'normalize.css'
import './assets/css/base.css'

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);         

//导入全局请求方法
import api from '@/api/index'
Vue.prototype.$api = api

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
