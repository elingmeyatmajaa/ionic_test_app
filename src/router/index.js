import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue';
import LoginItem from '@/views/LoginItem.vue';
import SignupPage from '@/views/SignupPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';


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
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
