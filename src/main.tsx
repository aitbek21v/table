import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Add from './pages/Add.tsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/add',
    element:<Add/>
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
