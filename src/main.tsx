import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'

import { About } from 'remoteApp/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
    <RouterProvider router={router} />
  </React.StrictMode>
)
