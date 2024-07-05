import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({ title, movie, searchMovie=false }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return (
        <div className='z-10'>
            <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl font-bold px-2 py-1`}>{capitalizeFirstLetter(title)}</h1>

            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex items-center gap-2 px-2 py-2'>
                    {
                        movie && movie.map((item) => {
                            return (
                                <MovieCard key={item.id} itemId={item.id} posterpath={item.poster_path} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Movielist
