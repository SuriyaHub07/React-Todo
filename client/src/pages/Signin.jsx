import React from 'react'

const Signin = () => {
  return (
    
    <div className='h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center justify-center'>
        <div className='max-w-md w-full bg-white p-8'>
         <h1>Sign In</h1>
         <p>Welcome back! Please login to your account</p>
            <form>
                <div> 
                    <label htmlFor="Username">Username</label><br />
                    <input type='text' id='username' placeholder='Enter your username'/><br />
                    <label htmlFor='Password'>Password</label><br/>
                    <input type='password' id='password' placeholder='Enter your password' /><br/>
                    <button>Sign In</button><br/>
                    <p>Do not have an account?Sign up here</p>
                </div>
            </form>
            </div>
        
    </div>
  )
}

export default Signin