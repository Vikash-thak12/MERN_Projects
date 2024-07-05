import React from 'react'
import { TMDB_Image_API } from '../utils/contant'
import { useDispatch } from 'react-redux'
import { setId, setOpen } from '../redux/movieSlice';

const MovieCard = ({posterpath, itemId}) => {
  const dispatch = useDispatch();

  // const path = movie.poster_path
  
  const handleOpen =() => {
    dispatch(setId(itemId))
    dispatch(setOpen(true))
  }
  
  if(posterpath === null) return null;

  return (
    <div onClick={handleOpen} className='w-60 cursor-pointer hover:-translate-y-1 transition'>
      <img className='rounded-md' src={`${TMDB_Image_API}/${posterpath}`} alt="avengers" />
    </div>
  )
}

export default MovieCard
