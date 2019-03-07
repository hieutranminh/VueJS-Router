// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes.js'

Vue.use(VueRouter)
const router = new VueRouter({
  // Chế độ hash mode : https://router.vuejs.org/guide/essentials/history-mode.html
  // mode: 'history',
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
