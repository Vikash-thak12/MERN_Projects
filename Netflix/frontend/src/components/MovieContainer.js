import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const data = useSelector((store) => store.movie)
  return (
    <div className='bg-black -mt-2'>
      <Movielist title={"Popular Movies"} movie={data.popularMovies} />
      <Movielist title={"Now Playing Movies"} movie={data.nowPlayingMovies} />
      <Movielist title={"Top Rated Movies"} movie={data.topRatedMovies} />
      <Movielist title={"Upcoming Movies"} movie={data.upcomingMovies} />
    </div>
  )
}

export default MovieContainer
