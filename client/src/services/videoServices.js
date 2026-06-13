const API = "http://localhost:5000/api/videos";

// GET ALL VIDEOS

export const getVideos = async () => {

    const response = await fetch(API);

    if (!response.ok) {

        throw new Error("Failed to fetch videos");

    }

    return await response.json();

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