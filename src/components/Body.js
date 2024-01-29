import React, { useEffect } from 'react'
import Header from './Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Browse from './Browse'
const Body = () => {
    const dispatch = useDispatch();
    const approuter = createBrowserRouter([
        {
            path:'/',
            element:<Login />
        },
        {
          path:'/browse',
          element:<Browse />
      }
    ]);
    useEffect(
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,profileURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,profileURL:profileURL}));
          console.log(auth);
        } else {
        }
      })
    ,[])
  return (
    <div>
    <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body