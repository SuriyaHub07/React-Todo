import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:5001",
      header:{
        'content-type':'application/json'
    }
})


export default api;