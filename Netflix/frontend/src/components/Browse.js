import React, { useEffect } from 'react'
import Header from './Header'
import MovieContainer from './MovieContainer.js'
import MainContainer from './MainContainer.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import usePopularMovies from '../hooks/usePopularMovies.js'
import useTopRatedMovies from '../hooks/useTopRatedMovies.js'
import useUpcomingMovies from '../hooks/useUpcomingMovies.js'

const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const navigate = useNavigate();



  // Custom hook for current playing movies 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if(!user){
      navigate("/")
    }
  },[])


  return (
    <>
      <Header />
      <div>
        <MainContainer />
        <MovieContainer />
      </div>

    </>
  )
}

export default Browse
