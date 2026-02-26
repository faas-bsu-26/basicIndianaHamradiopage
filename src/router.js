import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/pages/Home.vue'
import AboutView from './components/pages/About.vue'
import Books from './components/pages/Books.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/books', name: 'books', component: Books },
]

const router = createRouter({
  history: createWebHistory('/s26earlyExample/'), 
  routes,
})

export default router

