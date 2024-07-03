import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({ id }) => {

    const trailer = useSelector(store => store.movie.trailer)
    useMovieById(id);

    // Check if trailer is defined and has the key property
    if (!trailer || !trailer.key) {
        return <div>Loading...</div>
    }

    return (
        <div className='w-full h-full'>
            <div className='w-full h-full'>
                <iframe
                    className='w-full aspect-video'
                    src={`https://www.youtube.com/embed/${trailer.key}?si=z2UC3YuF7FDTDc_q&autoplay=1&loop=1&playlist=AVHozwCteL4 `}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullScreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default VideoBackground
