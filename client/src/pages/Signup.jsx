import React from 'react'

const Signup = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-purple-600 h-screen flex flex-col items-center py-15 dark:from-gray-800 dark:to-gray-900'>
        <div className=' max-w-md w-full bg-white p-5 rounded-lg dark:bg-gray-800'>
            <h1 className='text-center font-bold text-3xl text-gray-800 dark:text-gray-100'>Sign UP</h1>
            <p className='text-center text-gray-600 dark:text-gray-400'>Create your Account</p>
            <form>
                <div>
                    <label htmlFor='userName' className='block text-sm font-medium mt-5  dark:text-gray-300'>Username</label>
                    <input type='text' id='text' placeholder='Enter your username'
                    className='apperance-none block  border border-gray-600 w-full px-2 py-1 rounded-lg dark:border-gray-600 dark:placeholder-gray-400  dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500' 
                    />
                    <label htmlFor='password' className='text-sm font-medium mt-3 block dark:text-gray-300'>Password</label>
                    <input type='password' id='text' placeholder='Enter your password'
                    className='apperance-none block  border border-gray-600 w-full px-2 py-1 rounded-lg dark:border-gray-600 dark:placeholder-gray-400  dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 '
                    />
                    <label htmlFor='cfmassword'className='text-sm font-medium mt-3 block dark:text-gray-300'>Confirm Password</label>
                    <input type='cfmpassword' id='cfmpassword' placeholder='Enter your password' 
                    className='apperance-none block  border border-gray-600 w-full px-2 py-1 rounded-lg focus:outline-none dark:border-gray-600 dark:placeholder-gray-400  dark:text-gray-100 dark:bg-gray-700 focus:ring focus:ring-purple-500 focus:border-purple-500 '
                    />
                    <button className='block bg-purple-600 w-full text-white mt-6 py-2 rounded-lg font-medium dark:focus:ring-offset-gray-800'>Sign Up</button>
                     <p className='text-center mt-4 dark:text-gray-400'>Already have a account?<span className='text-purple-600 dark:text-purple-400'>Sign in here</span> </p>
                    
                </div>
            </form>
           
        </div>
    </div>
  )
}

export default Signup