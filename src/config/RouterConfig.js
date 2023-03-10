import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Login/Signup';
import PageNotFound from '../pages/PageNotFound';


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
    title: 'PageNotFound',
    path: '/',
    component: PageNotFound,
    errorpage: true,
  },
];