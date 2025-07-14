import api from  '../services/api.js'


export const signupUser = async(cred) =>{
return await api.post("/auth/register",cred);
}

export const signInUser = async(cred)=>{
    return await api.post("/auth/register",cred);
}
    

