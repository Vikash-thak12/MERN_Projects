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
import Register from './Register.js'
// import Movielist from './Movielist.js'
// import VideoTitle from './VideoTitle.js'
// import Register from './Register.js'

const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const navigate = useNavigate();



  // Custom hook for current playing movies 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])


  return (
    <>
      <div>
        <Header />
        <MainContainer />
        <MovieContainer />
        {/* <Header /> */}
        {/* <Register />   */}
      </div>
    </>
  )
}

export default Browse
