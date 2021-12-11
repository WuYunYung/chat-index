import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/'
  }, {
    path: '/register',
    component: () => import('../views/Register')
  }, {
    path: '/login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = sessionStorage.getItem('AUTH')
  if (!['/login', '/register'].includes(to.path) && !auth) next({ path: '/login' })
  else next()
})

export default router
