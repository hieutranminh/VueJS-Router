import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
// import Header from './components/layouts/Header.vue'
import Error from './components/404.vue'

export const routes = [
  // Dùng multi router-view, chỉ muốn hiện component ở 1 trang
  // {
  //   path: '/',
  //   name: 'homepage',
  //   components: {
  //     default: Home,
  //     'header': Header
  //   }
  // },
  {path: '/', name: 'homepage', component: Home},
  {
    path: '/user',
    component: User,
    children: [
      {path: '', name: 'userstart', component: UserStart},
      {path: ':id',
        name: 'userdetail',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('Action route guard')
          next()
        }},
      {path: ':id/edit', name: 'useredit', component: UserEdit}
    ]
  },
  // Không nên dùng /user/:id như vậy , nên dùng trong children
  // {path: '/user/:id', name: 'userdetails', component: UserDetail}
  // ------------Redirect------------
  {path: '/auth-redirect', redirect: {name: 'homepage'}},
  // Khi đường dẫn khác đường dẫn quy định thì chạy trang 404
  {path: '/404', name: 'errorpage', component: Error},
  {path: '*', redirect: '/404'}
]
