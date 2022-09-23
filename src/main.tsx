import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './components/Navigation'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
// @ts-ignore
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
    <Navigation />
    <Suspense fallback="loading...">
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
