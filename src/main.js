import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // vuex
import 'normalize.css' // 统一默认样式 无需加载vue默认加载
import 'amfe-flexible' // 统一距离单位
import '@/utils/register-vant'
import '@/styles/index.less' // 引入公共样式less

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
