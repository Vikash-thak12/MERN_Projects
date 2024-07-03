import React from 'react'

const SearchMovies = () => {
  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form action="submit" className='border-2 rounded-lg p-2 w-[50%] flex justify-between gap-2'>
        <input className='outline-none w-full' type="text" name="search" placeholder="Search Movies" />
        <button className='bg-red-800 hover:bg-red-700 px-2 py-1 rounded-md text-white'>Search</button>
      </form>
    </div>
  )
}

export default SearchMovies
