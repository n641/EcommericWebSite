import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart, Home, Payment, ProductDetails, Products, ResetPassord, SuccessPayment, VerfyCode } from './app/features/index.ts';
import Layout from './app/shared/layout/layout.tsx';
import { store } from './app/shared/redux/store.ts';
import './index.css';
import PaymentLayout from './app/features/payment/paymentLayout/paymentLayout.tsx';
import Login from './app/features/auth/login/login.tsx';
import SignUp from './app/features/auth/signup/signUp.tsx';

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/ForgetPassword',
    element: <VerfyCode />,
  },
  {
    path: '/ResetPassword',
    element: <ResetPassord />,
  },
  {
    path: '/EcommericWebSite',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/productDetails',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'Payment',
        element: <PaymentLayout />,
        children: [
          {
            index: true,
            element: <Payment />,
          },
          {
            path: 'SuccessPayment',
            element: <SuccessPayment />,
          },
        ],
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
