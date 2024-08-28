import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    path: '/EcommericWebSite',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
