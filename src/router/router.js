import Vue from 'vue';
import VueRouter from 'vue-router';
import Wallet from '../views/Wallet.vue';
import Login from '../views/Login.vue';
import Send from '../views/Send.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Wallet,
    meta: { requiresAuth: true },
  },
  {
    path: '/send',
    name: 'Send',
    component: Send,
    meta: { requiresAuth: true },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideAppBar: true },
  },
  {
    path: '*',
    redirect: '/',
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = !!localStorage.getItem('token');
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
  if (!requiresAuth && token) {
    next('/');
  }
});

export default router;
