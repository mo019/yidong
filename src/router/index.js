import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入挂载到路由的页面文件
import Login from '@/views'

// 注册路由到全局
Vue.use(VueRouter)

const routes = [
  {
    path: '/'
  },
  {
    path: '/login',
    component: Login
  }

  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
