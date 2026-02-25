import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/pages/Home.vue'
import AboutView from './components/pages/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import Books from './components/pages/Books.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/hello', component: HelloWorld },
  { path: '/books', component: Books },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
