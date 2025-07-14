import { createContext,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser,signInUser } from "../services/authService";

const AuthContext  = createContext();

// Custom hook

export const useAuth = () => useContext(AuthContext);


export function AuthProvider ({children}){
 const navigate =useNavigate()
  
 //Sign in
   async function signin(cred){
    try{
      await signInUser(cred);
      navigate("/tasks");
    }
    catch(err){
     console.log(err)
    }
   }


 //Sign Up
  async function signup(cred){
    try{
    await signupUser (cred);
    navigate("/login");
  }
  catch(err){
    console.log("autherror")
  }
}
    return(
        <AuthContext.Provider value={{signup,signin}}>
            {children}
        </AuthContext.Provider>
    )
}