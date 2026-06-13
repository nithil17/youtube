// import { videos } from "../utils/videos"

const API  =  "http://localhost:5000/api/videos";

export const getVideos = async () => {
 const response = await fetch(API);
const data = await data.json();

return data;
}