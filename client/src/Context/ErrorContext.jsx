import  { createContext,useContext, useState} from "react"


const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export function ErrorProvider({children}){
  const [error,setError]=useState(null);

  const handleError = (message)=>{
    setError(message)
  }
  
  const clearError = () => setError(null);
    return(
   <ErrorContext.Provider value = {{error,handleError,clearError}}>
       {error && (
      <div className="font-bold bg-red-400 text-white text-center p-2 rounded" role="alert">
        {typeof error === "string"
          ? error
          : error?.message ?? "An unexpected error occurred."}
      </div>
    )}
       {children}
   </ErrorContext.Provider>
    )
}