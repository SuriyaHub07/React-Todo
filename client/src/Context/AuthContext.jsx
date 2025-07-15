import { createContext,useContext, useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { signupUser,signInUser } from "../services/authService";
import { getStoredToken, removeStoredToken, setStoredToken } from "../../utils/storage";

const AuthContext  = createContext();

// Custom hook

export const useAuth = () => useContext(AuthContext);


export function AuthProvider ({children}){
 const navigate =useNavigate()
 const[user,setuser] = useState(null);
 const[loading,setLoading] = useState(true);


 useEffect(()=>{
  const token = getStoredToken();
  console.log("AuthContext",token);
  if(token){
    setuser({token})
  }else{
    setuser(null);
  }
  setLoading(false);
 },[])
  
 //Sign in
   async function signin(cred){
      const data = await signInUser(cred);
      const token = data.data.token;
      console.log("Api returned",data);
      setStoredToken(token);
      setuser({token: token})
      navigate("/tasks");
    }

    //logout

    function logout(){
      removeStoredToken();
      setuser(null);
      navigate("/login")
    }


 //Sign Up
  async function signup(cred){
    
    await signupUser (cred);
    navigate("/login");
  }

  if(loading){
    return(<div>Loading...</div>)
  }
    return(
        <AuthContext.Provider value={{user,signup,signin,logout}}>
            {children}
        </AuthContext.Provider>
    )
}