// Comment Service
import api from "./api";

// Get Comments
export const getComments=async(videoId)=>{
const response=await api.get(`/comments/${videoId}`);
return response.data;
};

// Add Comment
export const addComment=async(comment)=>{
const response=await api.post("/comments",comment);
return response.data;
};

// Update Comment
export const updateComment=async(id,comment)=>{
const response=await api.put(`/comments/${id}`,comment);
return response.data;
};

// Delete Comment
export const deleteComment=async(id)=>{
const response=await api.delete(`/comments/${id}`);
return response.data;
};