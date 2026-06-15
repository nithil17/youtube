import { API_URL } from "../constants/api";

const API = `${API_URL}/videos`;

// GET ALL VIDEOS

export const getVideos = async () => {

    console.log("Fetching:", API);

    const response = await fetch(API);

    console.log("Response:", response);

    if (!response.ok) {

        throw new Error("Failed to fetch videos");

    }

  const data = await response.json();



return data;

};

// GET SINGLE VIDEO

export const getVideoById = async (id) => {

    const response = await fetch(`${API}/${id}`);

    if (!response.ok) {

        throw new Error("Failed to fetch video");

    }

    return await response.json();

};

// ADD VIDEO

export const addVideo = async (video) => {

    const response = await fetch(API, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(video)

    });

    if (!response.ok) {

        throw new Error("Failed to add video");

    }

    return await response.json();

};

// UPDATE VIDEO

export const updateVideo = async (id, video) => {

    const response = await fetch(`${API}/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(video)

    });

    if (!response.ok) {

        throw new Error("Failed to update video");

    }

    return await response.json();

};

// DELETE VIDEO

export const deleteVideo = async (id) => {

    const response = await fetch(`${API}/${id}`, {

        method: "DELETE"

    });

    if (!response.ok) {

        throw new Error("Failed To Delete Video");

    }

    return await response.json();

};


// get video by channel
export const getVideosByChannel = async (channel) => {
  const response = await fetch(
    `${API}/channel/${encodeURIComponent(channel)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch channel videos");
  }

  return await response.json();
};

