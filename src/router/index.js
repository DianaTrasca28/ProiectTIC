// Composables
import { createRouter, createWebHistory } from 'vue-router'

// import store from '@/store';
const routes = [
  {
    path: '/',
    children: [
      {
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/wishlist',
        name: 'WishList',
        component: () => import('@/views/WishList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/parfume',
        name: 'Parfume',
        component: () => import('@/views/Parfume.vue'),
        meta: { requiresAuth: true }
      },   {
        path: '/myaccount',
        name: 'MyAccount',
        component: () => import('@/views/MyAccount.vue'),
        meta: { requiresAuth: true }
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.authModule.currentUser) {
    next('/login');
  } else {
    next();
  }
});
export default router
