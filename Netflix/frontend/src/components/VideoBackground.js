import React from 'react'
import VideoTitle from './VideoTitle'

const VideoBackground = () => {
    return (
        <div className='w-full h-full'>
            <VideoTitle />
            <div className='w-full h-full'>
            <iframe
                className='w-full aspect-video'
                src="https://www.youtube.com/embed/AVHozwCteL4?si=z2UC3YuF7FDTDc_q&autoplay=1&loop=1&playlist=AVHozwCteL4" 
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
