import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home} from "./Home.jsx";
import {User} from "./User.jsx";
import './index.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/user/:id", // TODO we want to specify a user on this page
        element: <User />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
