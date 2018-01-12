// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 挂载axios */
import axios from './api/config'
Vue.prototype.$axios = axios

/* 生产环境 */
if(process.env.NODE_ENV === 'production'){
  Vue.config.productionTip = false  //关闭警告
  Vue.config.devtools = false  //vue-devtools
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
