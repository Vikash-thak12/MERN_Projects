import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_API } from '../utils/contant';
import Movielist from './Movielist';

const SearchMovies = () => {

  const [searchMovie, setSearchMovie] = useState("")
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${SEARCH_MOVIE_API}${searchMovie}&include_adult=false&language=en-US&page=1`, options)
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} action="submit" className='border-2 rounded-lg p-2 w-[50%] flex justify-between gap-2'>
          <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='outline-none w-full' type="text" name="search" placeholder="Search Movies" />
          <button className='bg-red-800 hover:bg-red-700 px-2 py-1 rounded-md text-white'>Search</button>
        </form>
      </div>
      <div>
      {/* <Movielist title={searchMovie} movie={data.popularMovies} /> */}
      </div>
    </>
  )
}

export default SearchMovies
