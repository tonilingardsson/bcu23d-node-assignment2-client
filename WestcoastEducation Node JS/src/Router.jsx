import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Explorer from './pages/Explorer';
import Home from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Transaction from './pages/Transaction';
import User from './pages/User';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/explorer',
        element: <Explorer />,
      },
      {
        path: '/send',
        element: <Transaction />,
      },
      {
        path: '/me',
        element: <User />,
      },
    ],
  },
]);
