import React from 'react'
import Header from './Header'
import MovieContainer from './MovieContainer.js'
import MainContainer from './MainContainer.js'

const Browse = () => {
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
