import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import netflix from '../assets/netflix.svg'
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.app.user)
  // console.log(user);
  return (
    <div className='flex justify-between px-5 py-3  bg-gradient-to-b from-black'>
      <div>
        <img className='w-28 cursor-pointer' src={netflix} alt="" />
      </div>
      <div className='flex justify-between items-center px-4 gap-4'>
        {
          user && (
            <>
              <div className='flex items-center gap-1 text-white'>
                <IoIosArrowDropdown size={24} />
                <h1 className='font-medium'>Vikash Thakur</h1>
              </div>
              <button className='bg-red-600 p-1 rounded-lg px-3 text-white'>Logout</button>
              <button className='bg-red-600 p-1 rounded-lg px-3 text-white'>Search Movie</button>
            </>
          )
        }
      </div>

    </div >
  )
}

export default Header;
