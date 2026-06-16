import api from "./api";

// Get all channels
export const getChannels=async()=>{

  const response=await api.get("/channels");

  return response.data;

};

// Get single channel
export const getChannelById=async(id)=>{

  const response=await api.get(`/channels/${id}`);

  return response.data;

};

// Create channel
export const createChannel=async(channelData)=>{

  const response=await api.post("/channels",channelData);

  return response.data;

};

// Update channel
export const updateChannel=async(id,channelData)=>{

  const response=await api.put(`/channels/${id}`,channelData);

  return response.data;

};

// Delete channel
export const deleteChannel=async(id)=>{

  const response=await api.delete(`/channels/${id}`);

  return response.data;

};