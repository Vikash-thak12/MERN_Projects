import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({ title, movie, searchMovie=false }) => {
    // console.log({ movie });
      // Ensure movie is an array before mapping
    //   const moviesToRender = Array.isArray(movie) ? movie : [];
    return (
        <div className='z-10'>
            <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl font-bold px-2 py-1`}>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex items-center gap-2 px-2 py-2'>
                    {
                        movie && movie.map((item) => {
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
