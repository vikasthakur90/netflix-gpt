import React, { useState } from 'react'

const Login = () => {
    const [signIn,setSignIn] = useState(true);
    const handle = ()=>{
        setSignIn(!signIn);
    }
  return (
    <div>
        <img src='https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg'
        alt='bg'/>
        <form className='absolute bg-black bg-opacity-85 h-auto top-[10rem] left-[39%] w-[25%] p-2 text-white rounded-lg'>
            {signIn ?<h1 className='p-2 mx-2 py-6 text-2xl'>Sign In</h1>:<h1 className='p-2 mx-2 py-6 text-2xl'>Sign Up</h1>}
            {!signIn && <input className='p-2 mx-4 my-2 bg-gray-500 w-[90%]' type='text' placeholder='Enter FullName'/>}
            <input className='p-2 mx-4 my-2 bg-gray-500 w-[90%]' type='text' placeholder='Enter Email'/>
            <input className='p-2 mx-4 my-2 w-[90%] bg-gray-500' type='password' placeholder='Enter Password'/>
            <button className='p-2 mx-4 my-6 w-[90%] bg-red-700 cursor-pointer rounded-lg' type='submit'>{signIn? "Sign In":"Sign Up"}</button>

            <p className='p-2 text-xs my-2 mx-4 cursor-pointer hover:text-blue-400' onClick={()=>handle()}>{signIn? "Don't have a account? click here to Sign Up":"Have a account? click here to Sign In"}</p>
        </form>
    </div>
  )
}

export default Login