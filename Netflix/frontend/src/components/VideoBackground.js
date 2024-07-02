import React from 'react'
import VideoTitle from './VideoTitle'

const VideoBackground = () => {
    return (
        <div className='w-screen absolute'>
            <VideoTitle />
            <iframe
                className='w-screen aspect-video'
                src="https://www.youtube.com/embed/CHSnz0bCaUk?si=tF5SjEQU5PmWuBhb&autoplay-1&loop=1&playlist=CHSnz0bCaUk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullS  creen>
            </iframe>
        </div>
    )
}

export default VideoBackground
