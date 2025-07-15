import {FaSun,FaMoon} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useTheme } from "../Context/ThemeContext";
import { useAuth} from "../Context/AuthContext"
import { useState } from "react";

const Navbar = () => {
const navigate=useNavigate();
const{darkmode,toggleTheme} = useTheme()
const {user,logout} =useAuth();
console.log(user);

  return (
    <div className="bg-blue-400 dark:bg-blue-600">
        <div className="flex justify-between items-center h-14 px-15">
        <h1 className="text-xl font-bold cursor-pointer  dark:text-white" onClick={()=>navigate ("/")}>Todo</h1> 
        <div className="flex items-center space-x-6 ">
            <button className=" dark:hover:bg-gray-700" onClick={toggleTheme}>
            {darkmode?<FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-400" />}
            </button>
            {user?(<button className="px-3 py-2 text-md font-medium text-white
                             bg-red-500 rounded-lg hover:bg-red-700" onClick={() => logout()}>
                                Logout
                            </button>):(
                              <>
            <button className="bg-blue-500 text-white hover:bg-blue-700 px-2 py-2 rounded-lg cursor-pointer"  onClick={()=>navigate("/register")} >
                Signup
            </button>
            <button className="bg-green-500 text-white hover:bg-green-700 px-2 py-2 rounded-lg cursor-pointer" onClick={()=>navigate("/login")}> 
                Login
            </button>
            </>)
}
            
        </div>
        </div>
    </div>
  )
}

export default Navbar;