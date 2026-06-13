import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./RelatedVideos.css"

import { getVideos } from '../../services/videoServices';

function RelatedVideos() {

    const { id } = useParams()
    const [relatedVideos, setRelatedVideos] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const relatedVideos = videos.filter((video) => {
        return video._id !== Number(id);
    })

    useEffect(() => {

        const fetchRelatedVideos = async () => {

            try {

                const data = await getVideos();

                const filteredVideos = data.filter((video) => {

                    return video._id !== id;

                });

                setRelatedVideos(filteredVideos);

            }

            catch (error) {

                setError(error.message);

            }

            finally {

                setLoading(false);

            }

        };

        fetchRelatedVideos();

    }, [id]);

    if (loading) {

        return <h3>Loading...</h3>;

    }

    if (error) {

        return <h3>{error}</h3>;

    }

    return (
        <div className="related-videos">
            <h3>Related Videos</h3>
            {
                relatedVideos.map((video) => {
                    return (

                        <Link
                            to={`/watch/${video._id}`}
                            className='related-link'
                            key={video._id}
                        >
                            <div
                                className='related-card'
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                />
                                <div
                                    className='related-info'
                                >
                                    <h4>{video.title}</h4>
                                    <p>{video.channel}</p>
                                </div>
                            </div>
                        </Link>


                    )
                })
            }
        </div>
    )
}

export default RelatedVideos