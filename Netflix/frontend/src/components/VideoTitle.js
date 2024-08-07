import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
    return (
        <div className='absolute mt-80 mx-4 px-4 py-2 text-white rounded-md'>
            <h1 className='text-3xl font-medium'>{title}</h1>
            <p className='w-1/2 mt-4'>{overview}</p>
            <div className='flex gap-3 mt-4'>
                <button className='flex items-center gap-1 px-2 py-1 bg-gray-500 bg-opacity-50 rounded-lg hover:bg-opacity-80'>
                    <FaRegCirclePlay />
                    Play</button>
                <button className='flex items-center gap-1 px-2 py-1 bg-gray-500 bg-opacity-50 rounded-lg hover:bg-opacity-80'>
                    <IoMdInformationCircleOutline className='text-xl' />
                    Watch More</button>
            </div>
        </div>
    )
}

export default VideoTitle
