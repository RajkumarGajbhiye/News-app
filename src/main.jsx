import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/reset.css';
import Routes from "./route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(Routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
  
)
