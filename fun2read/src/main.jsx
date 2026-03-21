import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom"
import SignUp from './Pages/Signup'
import SignIn from "./Pages/Signin"
import Home from './Pages/Home'
import DashBoard from './Pages/DashBoard'

const router=createBrowserRouter(
  [ {
    path:"/",
    element:<Home/>
  }
    ,
    {
      path:"/fun2read/register",
      element:<SignUp/>
    },
    {
      path:"/fun2read/login",
      element:<SignIn/>
    },
    {
      path:"/dashboard",
      element:<DashBoard/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
