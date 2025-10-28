// import { createRouter, createWebHistory } from 'vue-router'
// import Landing from '../pages/Landing.vue'
// import Login from '../pages/Login.vue'
// import Signup from '../pages/Signup.vue'
// import Dashboard from '../pages/Dashboard.vue'
// import Tickets from '../pages/Tickets.vue'
// import { supabase } from '../services/supabase'

// const routes = [
//   { path: '/', name: 'Landing', component: Landing },
//   { path: '/auth/login', name: 'Login', component: Login },
//   { path: '/auth/signup', name: 'Signup', component: Signup },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: Dashboard,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/tickets',
//     name: 'Tickets',
//     component: Tickets,
//     meta: { requiresAuth: true },
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// // Protect routes
// router.beforeEach(async (to, from, next) => {
//   const { data } = await supabase.auth.getSession()
//   const session = data.session
//   if (to.meta.requiresAuth && !session) next('/auth/login')
//   else next()
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Tickets from '../pages/Tickets.vue'
import Landing from '../pages/Landing.vue'
import Signup from '../pages/Signup.vue'
import { supabase } from '../services/supabase'

const routes = [
  { path: '/auth/login', name: 'Login', component: Login },
  { path: '/', name: 'Landing', component: Landing },
  { path: '/auth/signup', name: 'Signup', component: Signup },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const { isAuthenticated } = useAuth()

  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { path: '/login' }
  }

  if (to.path === '/login' && isAuthenticated()) {
    return { path: '/dashboard' }
  }
})

router.beforeEach((to, from, next) => {
  const { session } = useAuth()
  if (to.meta.requiresAuth && !session.value) {
    return next('/login')
  }
  next()
})

export default router
