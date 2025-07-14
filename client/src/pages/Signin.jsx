import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate();
     const[cred,setCred]=useState({userName:"",password:""});
  return (
    <div className='h-screen bg-gradient-to-r from-blue-400 to-purple-600 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center'>
        <div className='max-w-md w-full bg-white p-5 rounded-lg  dark:bg-gray-800'>
         <h1 className='text-center font-bold text-3xl text-gray-800 dark:text-gray-100'>Sign In</h1>
         <p className='text-center text-gray-600 dark:text-gray-400 mb-8'>Welcome back! Please login to your account</p>
            <form >
                <div> 
                    <label 
                        htmlFor="Username"
                        className=' block text-sm font-medium text-gray-700 mt-4 dark:text-gray-300'
                    >
                        Username
                    </label>
                    <input type='text' className='appearance-none rounded-lg relative w-full px-2 py-2 border border-gray-300 text-gray-900 bg-white dark:border-gray-600  dark:placeholder-gray-400  dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500  text-sm' id='username' 
                    placeholder='Enter your username'  onChange={(e)=>{setCred({...cred,userName:e.target.value})}}
                    />
                    </div>
                    <div>
                    <label 
                    htmlFor='Password'
                    className='block text-sm font-medium text-gray-700 mt-4 dark:text-gray-300'
                    >
                        Password
                    </label>
                    <input type='password' className='appearance-none rounded-lg relative w-full px-2 py-2 border border-gray-300 text-gray-900 bg-white  dark:border-gray-600  dark:placeholder-gray-400  dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm' id='password' 
                    placeholder='Enter your password'    onChange={(e)=>{setCred({...cred,userName:e.target.value})}}
                    />
                    <button className='block bg-purple-600  w-full py-2 text-white mt-3 cursor-pointer rounded-lg'>Sign In</button><br/>
                    <p className='text-center px-10 dark:text-gray-400'>Do not have an account?<span className='text-purple-600 cursor-pointer dark:text-purple-400' onClick={()=>navigate("/register")}>Sign up here</span></p>
                </div>
            </form>
            </div>
        
    </div>
  )
}

export default Signin