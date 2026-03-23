import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements, Navigate} from "react-router-dom"
import SignUp from './Pages/Signup'
import SignIn from "./Pages/Signin"
import Home from './Pages/Home'
import DashBoard from './Pages/DashBoard'
import FetchApiGet from './Hooks/FetchApiGet'
import {redirect } from 'react-router-dom'



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
      loader:async function () {
        let responseJsonData=await FetchApiGet(`http://localhost:4002/api/v1/dashboard/me`)
        if(responseJsonData["response"]["status"]>=400)
        {
          return redirect("/fun2read/login")
        }
        if(responseJsonData["response"]["status"]===201)
        {
          return responseJsonData
        }
      },
      element:<DashBoard/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
