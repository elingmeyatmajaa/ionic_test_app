import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue';
import LoginItem from '@/views/LoginItem.vue';
import DashboardPage from '@/views/DashboardPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LoginItem',
    component: LoginItem,
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
