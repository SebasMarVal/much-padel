import { createRouter, createWebHashHistory } from 'vue-router';
import MiComponente from '../components/MiComponente.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import AdminView from '../views/AdminView.vue';
import ProductsView from '../views/ProductsView.vue'; 
const routes = [
  {
    path: '/',
    name: 'home',
    component: MiComponente
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    //con esto me aseguro que no se pueda acceder directamente desde el navegador sin pasar por login
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Logica de autenticación y roles
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

console.log(user);  // Para depurar
console.log('Ruta solicitada:', to.name);
console.log('Usuario autenticado:', user);

if (to.matched.some(record => record.meta.requiresAuth)) {
  if (!isAuthenticated) {
    next({ name: 'login' });
  } else if (to.matched.some(record => record.meta.requiresAdmin) && user.roles_id !== 1) {
    next({ name: 'products' }); // Redirige a products si no es admin
  } else {
    next();
  }
} else {
  next();
}
});
export default router;

