import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movie = useSelector(store => store.movie?.nowPlayingMovies)
  // const moviesToRender = Array.isArray(movie) ? movie : [];
  // const {title, overview, id} = moviesToRender[5];
  console.log(movie);

  if (!Array.isArray(movie)) {
    return <div>Loading...</div>
  }
  const {title, overview, id} = movie[5];

  return (
    <div className='w-full h-screen'>
      <VideoTitle title={title} overview={overview} />
      <div className='w-full h-full'>
        <VideoBackground id={id} />
      </div>
    </div>
  )
}

export default MainContainer
