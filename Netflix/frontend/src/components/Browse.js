import React, { useEffect } from 'react'
import Header from './Header'
import MovieContainer from './MovieContainer.js'
import MainContainer from './MainContainer.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const navigate = useNavigate();


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
