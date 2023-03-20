import React from 'react';
import ReactDOM from 'react-dom/client';
import Basket from './pages/basket/basket';
import Products from './pages/products/products';
import Product from './pages/product/product';
import Login from './pages/login/login'
import Register from './pages/register/register'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product/:id",
    element: <Product />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
