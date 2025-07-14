import {createContext,useContext ,useState,useEffect, Children} from 'react'

//Create Context
const ThemeContext = createContext();

//Use Context

export const useTheme = () => useContext(ThemeContext);

//Provider

export function UseProvider({children}){

    const[darkmode,setDarkMode]=useState(false);

    useEffect(()=>{
        if(darkmode){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[darkmode])

    // toggle function 

    const toggleTheme = ()=>setDarkMode(!darkmode);
      
    return(
        <ThemeContext.Provider value={{darkmode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}







