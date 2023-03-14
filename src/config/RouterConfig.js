import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Login/Signup';
import PageNotFound from '../pages/PageNotFound';
import Cart from '../pages/Cart';


export const RouterConfig = [
  {
    title: 'Home',
    path: '/',
    component: Home,    
  },
  {
    title: 'Login',
    path: '/login',
    component: Login,
    default: 'beforeAuth',
  },
  {
    title: 'Signup',
    path: '/signup',
    component: Signup,
    default: 'beforeAuth',
  },
  {
    title: 'Cart',
    path: '/my-cart',
    component: Cart,
    default: 'beforeAuth',
  },
  {
    title: 'PageNotFound',
    path: '/',
    component: PageNotFound,
    errorpage: true,
  },
];