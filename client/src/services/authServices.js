// Auth Service

import api from "./api";

// Register

export const registerUser=async(userData)=>{

const response=await api.post(

"/auth/register",

userData

);

return response.data;

};

// Login

export const loginUser=async(userData)=>{

const response=await api.post(

"/auth/login",

userData

);

return response.data;

};

// Reset Password

export const resetPassword=async(userData)=>{

const response=await api.put(

"/auth/reset-password",

userData

);

return response.data;

};