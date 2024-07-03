import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({ title, movie = [] }) => {
    // console.log({ movie });
      // Ensure movie is an array before mapping
      const moviesToRender = Array.isArray(movie) ? movie : [];
    return (
        <div className='z-10'>
            <h1 className='text-3xl font-bold text-white px-2 py-1'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex items-center gap-2 px-2 py-2'>
                    {
                        moviesToRender.map((item) => {
                            return (
                                <MovieCard key={item.id} item={item} posterpath={item.poster_path} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Movielist
