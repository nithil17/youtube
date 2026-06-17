// Video Service
import api from "./api";

// Get All Videos
export const getVideos=async()=>{
const response=await api.get("/videos");
return response.data;
};

// Get Single Video
export const getVideoById=async(id)=>{
const response=await api.get(`/videos/${id}`);
return response.data;
};

// Add Video
export const addVideo=async(video)=>{
const response=await api.post("/videos",video);
return response.data;
};

// Update Video
export const updateVideo=async(id,video)=>{
const response=await api.put(`/videos/${id}`,video);
return response.data;
};

// Delete Video
export const deleteVideo=async(id)=>{
const response=await api.delete(`/videos/${id}`);
return response.data;
};

// Like Video
export const likeVideo=async(id)=>{
const response=await api.put(`/videos/like/${id}`);
return response.data;
};

// Dislike Video
export const dislikeVideo=async(id)=>{
const response=await api.put(`/videos/dislike/${id}`);
return response.data;
};

// Get Channel Videos
export const getVideosByChannel=async(channel)=>{
const response=await api.get(`/videos/channel/${encodeURIComponent(channel)}`);
return response.data;
};
