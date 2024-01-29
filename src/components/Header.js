import React from 'react'
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signout = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
  <div className='flex justify-between'>
    <div>
        <img className='absolute w-32 mx-2 z-10' src='https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png'
        alt='logo'/>
    </div>
    <div>
      {auth && <button className='bg-red-300 text-black' onClick={signout}>Logout</button>}
    </div>
  </div>  
  )
}

export default Header