import React from 'react'
import Header from './Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
const Body = () => {
    const approuter = createBrowserRouter([
        {
            path:'/',
            element:<Login />
        }
    ])
  return (
    <div>
    <Header />
    <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body