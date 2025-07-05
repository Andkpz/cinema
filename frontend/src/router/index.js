import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MovieDetail from '../components/MovieDetail.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Account from '../components/Account.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
