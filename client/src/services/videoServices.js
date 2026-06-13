// import { videos } from "../utils/videos"

const API = "http://localhost:5000/api/videos";

export const getVideos = async () => {
    const response = await fetch(API);

    if (!response.ok) {
        throw new Error("Failed to fetch videos");
    }

    const data = await response.json();

    return data;
}

export const getVideoById = async (id) => {
    const response = await fetch(`${API}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch videos");
    }
    const data = await response.json();
    return data;
}