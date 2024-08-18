import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/shared/redux/store.ts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./app/features/index.ts";
import Login from "./app/features/auth/login/login.tsx";
import SignUp from './app/features/auth/signup/signUp';

const router = createBrowserRouter([
  {
    index: true,
    element: <Login/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
