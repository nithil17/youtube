import React from 'react'
import { videos } from '../../utils/videos';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./RelatedVideos.css"

function RelatedVideos() {

      const { id } = useParams()

    const relatedVideos = videos.filter((video) => {
        return video.id !== Number(id);
    })
    return (
        <div className="related-videos">
            <h3>Related Videos</h3>
            {
                relatedVideos.map((video) => {
                    return (

                        <Link
                            to={`/watch/${video.id}`}
                            className='related-link'
                            key={video.id}
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