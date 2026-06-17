// Imports
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./VideoPlayer.css";

import { getVideoById } from "../../services/videoService";

import VideoAction from "../../components/VideoActions/VideoActions";
import CommentSection from "../../components/CommentSection/CommentSection";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const VideoPlayer = () => {

    const { id } = useParams();

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchVideo = async () => {

            try {

                const data = await getVideoById(id);

                setSelectedVideo(data);

            } catch (error) {

                setError(error.message);

            }

            finally {

                setLoading(false);

            }

        };

        fetchVideo();

    }, [id]);

    if (loading) {

        return <Loading />;

    }

    if (error) {

        return <Error message={error} />;

    }

    if (!selectedVideo) {

        return <h2>Video Not Found</h2>;

    }

    return (

        <div className="video-player-page">

            <div className="main-video">

                {

                    selectedVideo.videoUrl ?

                        <video
                            className="player-video"
                            key={selectedVideo._id}
                            controls
                            width="100%"
                            poster={selectedVideo.thumbnail}
                        >

                            <source
                                src={selectedVideo.videoUrl}
                                type="video/mp4"
                            />

                            Your browser does not support video playback.

                        </video>

                        :

                        <img
                            className="player-thumbnail"
                            src={selectedVideo.thumbnail}
                            alt={selectedVideo.title}
                        />

                }

                <div className="video-info">

                    <h2>{selectedVideo.title}</h2>

                    <div className="video-meta">

                        <Link
                            to={`/channel/${selectedVideo.channelId}`}
                        >

                            {selectedVideo.channel}

                        </Link>

                        <span>|</span>

                        <span>

                            {selectedVideo.views} Views

                        </span>

                        <span>|</span>

                        <span>

                            {

                                selectedVideo.uploadDate ?

                                    new Date(

                                        selectedVideo.uploadDate

                                    ).toLocaleDateString()

                                    :

                                    "Today"

                            }

                        </span>

                    </div>

                    {

                        selectedVideo.description &&

                        <p className="video-description">

                            {selectedVideo.description}

                        </p>

                    }

                </div>

                <VideoAction
                    videoId={selectedVideo._id}
                    likes={selectedVideo.likes}
                    dislikes={selectedVideo.dislikes}
                />

                <CommentSection

                    videoId={selectedVideo._id}

                />

            </div>

            <RelatedVideos />

        </div>

    );

};

export default VideoPlayer;
