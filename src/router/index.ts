import { createRouter, createWebHistory } from 'vue-router'
import SideBar from '@/layouts/SideBar.vue'
import Login from '@/layouts/Login.vue'
import Cookies from 'js-cookie';
import { routes } from './home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: SideBar,
      redirect: { name: 'faq' },
      children: routes,
      meta: { requiresAuth: true }
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    }
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth) {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve(user); // Si el usuario está autenticado, resuelve la promesa
          } else {
            reject('No user'); // Si no hay usuario, rechaza la promesa
          }
        });
      });

      // Si la promesa se resuelve, el usuario está autenticado
      next();
    } catch (error) {
      // Si no hay usuario, redirige a la página de login
      next('/login');
    }
  } else {
    next(); // Si la ruta no requiere autenticación, continua
  }
});


export default router
