import { videos } from "../utils/videos"

export const getVideos = ()=>{
    return new Promise( (resolve) ={
        setTimeout(() => {
            resolve(videos)
        }, 2000);
    });
}