import React, { useState } from 'react'

const SearchMovies = () => {

  const [searchMovie, setSearchMovie] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form onSubmit={submitHandler} action="submit" className='border-2 rounded-lg p-2 w-[50%] flex justify-between gap-2'>
        <input value={searchMovie} onChange={(e) => {setSearchMovie(e.target.value)}} className='outline-none w-full' type="text" name="search" placeholder="Search Movies" />
        <button className='bg-red-800 hover:bg-red-700 px-2 py-1 rounded-md text-white'>Search</button>
      </form>
    </div>
  )
}

export default SearchMovies
