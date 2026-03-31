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
import SectionPage from './Pages/Section'
import Copyright from './components/Copyright'
import TagLine from './components/TagLine'
import FinalDashBoard from './Pages/FinalDashBoard'
import MyLibrary from './Pages/MyLibrary'
import ReadingSession from './Pages/ReadingSession'
import { pdfjs } from 'react-pdf';
import QuizPage from './Pages/QuizPage'
import ErrorPage from './components/Errorpage'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

// This points to a CDN version of the worker so it matches your library version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const queryclient=new QueryClient()


const router=createBrowserRouter(
  [ {
    path:"/",
    errorElement:<ErrorPage/>,
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
      errorElement:<ErrorPage/>,
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
    },
    {
      path:"/section",
      errorElement:<ErrorPage/>,
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
      element:<SectionPage/>,
      children:[
        {
          path:"/section/d",
          element:<FinalDashBoard/>
        },
        {
          path:"/section/b",
          element:<MyLibrary/>
        },
        {
          path:"/section/c",
          element:<ReadingSession/>
        },
        {
          path:"/section/quiz",
          element:<QuizPage/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
   <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
