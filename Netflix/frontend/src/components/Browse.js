import React, { useEffect } from 'react'
import Header from './Header'
import MovieContainer from './MovieContainer.js'
import MainContainer from './MainContainer.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Now_Playing_API, options } from '../utils/contant.js'

const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const navigate = useNavigate();


  const nowPlayingMovies = async () => {
    try {
      const res = await axios.get(Now_Playing_API, options)
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!user){
      navigate("/")
    }
    nowPlayingMovies();
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
