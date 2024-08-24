import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './app/features/auth/login/login.tsx';
import SignUp from './app/features/auth/signup/signUp';
import { Home } from './app/features/index.ts';
import Layout from './app/shared/layout/layout.tsx';
import { store } from './app/shared/redux/store.ts';
import './index.css';

const router = createBrowserRouter([
  // {
  //   index: true,
  //   element: <Login />,
  // },
  // {
  //   path: '/SignUp',
  //   element: <SignUp />,
  // },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
