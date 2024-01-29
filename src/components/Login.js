import React, { useRef, useState } from 'react'
import { checkValidate } from '../utils/validation';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signIn,setSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const handle = ()=>{
        setSignIn(!signIn);
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const checkValidation = ()=>{
        setErrorMessage(checkValidate(email.current.value,password.current.value));
        if(errorMessage!==null) return;
        if(!signIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              const {uid,displayName,email,profileURL} = auth;
              dispatch(addUser({uid:uid,displayName:displayName,email:email,profileURl:profileURL}));
              navigate('/browse');
            }).catch((error) => {
              // An error occurred
              // ...
            });
            // ...
            }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
             // ..
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              const {uid,displayName,email,profileURL} = auth;
              dispatch(addUser({uid:uid,displayName:displayName,email:email,profileURl:profileURL}));
              navigate('/browse');
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " + errorMessage);
            });
        }
    }
  return (
    <div>
      <Header />
    <div>
        <img className='bg-cover fixed' src='https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg'
        alt='bg'/>
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute bg-black bg-opacity-85 h-auto top-[10rem] left-[39%] w-[25%] p-2 text-white rounded-lg'>
            {signIn ?<h1 className='p-2 mx-2 py-6 text-2xl'>Sign In</h1>:<h1 className='p-2 mx-2 py-6 text-2xl'>Sign Up</h1>}
            {!signIn && <input ref={name} className='p-2 mx-4 my-2 bg-gray-500 w-[90%]' type='text' placeholder='Enter FullName'/>}
            <input ref={email} className='p-2 mx-4 my-2 bg-gray-500 w-[90%]' type='text' placeholder='Enter Email'/>
            <input ref={password} className='p-2 mx-4 my-2 w-[90%] bg-gray-500' type='password' placeholder='Enter Password'/>
            <p className='text-sm px-2 mx-2 text-red-400'>{errorMessage}</p>
            <button className='p-2 mx-4 my-6 w-[90%] bg-red-700 cursor-pointer rounded-lg' type='submit' onClick={checkValidation}>{signIn? "Sign In":"Sign Up"}</button>

            <p className='p-2 text-xs my-2 mx-4 cursor-pointer hover:text-blue-400' onClick={()=>handle()}>{signIn? "Don't have a account? click here to Sign Up":"Have a account? click here to Sign In"}</p>
        </form>
    </div>
    </div>
  )
}

export default Login