import './App.css';
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider, useDispatch } from 'react-redux';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
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
import Layout from './app/shared/layout/layout.tsx';
import { store } from './app/shared/redux/store.ts';
import './index.css';
import PaymentLayout from './app/features/payment/paymentLayout/paymentLayout.tsx';
import Login from './app/features/auth/login/login.tsx';
import SignUp from './app/features/auth/signup/signUp.tsx';
import { addUserData } from './app/shared/redux/userSlice.tsx';
import { ScrollToTop } from './app/shared/components/index.ts';
import { WisthList } from './app/features/wisthList/wisthList.tsx';

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
    path: '/Home',
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
        element: <NotFound/>,
      }
    ],
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
    }else{
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
