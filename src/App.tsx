import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { StrictMode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './app/features/auth/login/login.tsx';
import SignUp from './app/features/auth/signup/signUp.tsx';
import {
  Cart,
  Home,
  NotFound,
  Orders,
  Payment,
  ProductDetails,
  Products,
  ResetPassord,
  SuccessPayment,
  VerfyCode,
} from './app/features/index.ts';
import PaymentLayout from './app/features/payment/paymentLayout/paymentLayout.tsx';
import { WisthList } from './app/features/wisthList/wisthList.tsx';
import Layout from './app/shared/layout/layout.tsx';
import { addUserData } from './app/shared/redux/userSlice.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
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
    path: 'EcommericWebSite/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          {
            path: 'productDetails',
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: 'productDetails',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'WishList',
        element: <WisthList />,
      },
      {
        path: 'allorders',
        element: <Orders />,
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
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(localStorage.getItem('UserData'));
    if (localStorage.getItem('UserData') !== null) {
      const userData = JSON.parse(localStorage.getItem('UserData') || '{}');
      dispatch(addUserData(userData));
      console.log(userData);
      // window.location.href = '/Home';
    } else {
      console.warn('no user data');
    }
  }, []);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
