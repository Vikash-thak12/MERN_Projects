import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_API } from '../utils/contant';
import Movielist from './Movielist';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMoviesDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';

const SearchMovies = () => {

  const [searchMovie, setSearchMovie] = useState("")

  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading)

  // handler function 
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const res = await axios.get(`${SEARCH_MOVIE_API}${searchMovie}&include_adult=false&language=en-US&page=1`, options)
      console.log(res.data.results);
      const movies = res.data.results;
      dispatch(setSearchMoviesDetails({ searchMovie, movies }))
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false))
    }
    setSearchMovie("")
  }

  const {movieName, searchedMovies} = useSelector(store => store.search)

  return (
    <div className='h-screen'>
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} action="submit" className='border-2 rounded-lg p-2 w-[50%] flex justify-between gap-2'>
          <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='bg-transparent outline-none w-full' type="text" name="search" placeholder="Search Movies" />
          <button className='bg-red-800 hover:bg-red-700 px-2 py-1 rounded-md text-white'>{isLoading ? "Loading..." : "Search"}</button>

        </form>
      </div>
      <div className='bg-transparent'>
        {
          searchedMovies?.length > 0 ? <Movielist title={movieName} searchMovie={true} movie={searchedMovies} /> : <h1 className='px-4 text-3xl mt-32 flex justify-center'>Oops... Movie not found!!</h1>
        }
      </div>  
    </div>
  )
}

export default SearchMovies
