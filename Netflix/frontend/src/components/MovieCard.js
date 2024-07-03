import React from 'react'
import { TMDB_Image_API } from '../utils/contant'

const MovieCard = ({posterpath}) => {
  // const path = movie.poster_path
  return (
    <div className='w-36 cursor-pointer hover:-translate-y-1 transition'>
      <img className='rounded-md' src={`${TMDB_Image_API}/${posterpath}`} alt="avengers" />
    </div>
  )
}

export default MovieCard
