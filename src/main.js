// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes.js'

Vue.use(VueRouter)
const router = new VueRouter({
  // Keyword : Vue-element-admin : hiệu ứng chuyển router trong vue js
  // Chế độ mode history : https://router.vuejs.org/guide/essentials/history-mode.html
  mode: 'history',
  routes,
  // Scroll Behavior , ket hop voi Hash Fragments
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 700 }
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})
// Làm 1 cái gì đó mỗi lần trước khi chạy
router.beforeEach((to, from, next) => {
  console.log('Load Global Guard')
  next()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
