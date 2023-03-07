import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';


export const RouterConfig = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    default: 'beforeAuth',
  },
  {
    title: 'Login',
    path: '/login',
    component: Login,
  },
  {
    title: 'PageNotFound',
    path: '/',
    component: PageNotFound,
    errorpage: true,
  },
];