import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import PortalVendedor from './pages/PortalVendedor';
import HomePage from './pages/HomePage';
import TesteAxios from './components/teste-axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: '/portal-vendedor',
    element: <PortalVendedor />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/teste-axios',
    element: <TesteAxios/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
