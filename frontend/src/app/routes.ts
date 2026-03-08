import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'shop', Component: Shop },
      { path: 'cart', Component: Cart },
      { path: 'auth', Component: Auth },
      { path: 'profile', Component: Profile },
      { path: 'about', Component: About },
      { path: '*', Component: NotFound },
    ],
  },
]);
