// Axios Instance

import axios from "axios";
import { API_URL } from "../constants/api";

const api=axios.create({

baseURL:API_URL,

headers:{

"Content-Type":"application/json"

}

});

// Attach JWT Automatically

api.interceptors.request.use(

(config)=>{

const token=localStorage.getItem("token");

if(token){

config.headers.Authorization=`Bearer ${token}`;

}

return config;

},

(error)=>Promise.reject(error)

);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong";

    return Promise.reject(new Error(message));
  }
);

export default api;
