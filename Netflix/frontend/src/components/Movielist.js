import React from 'react'
import MovieCard from './MovieCard'

const Movielist = () => {
    return (
        <div className='z-10'>
            <h1 className='text-3xl font-bold text-white px-2 py-1'>Popular Movies</h1>
            <div className='flex gap-2 px-2 py-1'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}

export default Movielist
