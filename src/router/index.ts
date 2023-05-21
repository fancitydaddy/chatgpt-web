import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import LoginPage from '@/views/LoginPage.vue'
import ChatRoom from '@/views/ChatRoom.vue'

Vue.use(VueRouter)

const routes = [
  // 登录页面路由
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  // 聊天室页面路由
  {
    path: '/chat',
    name: 'ChatRoom',
    component: ChatRoom,
    meta: { requiresAuth: true }, // 设置需要登录才能访问
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 设置全局导航守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isLoggedIn === 'true') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
