import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import netflix from '../assets/netflix.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_END_POINT } from '../utils/contant';
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
  const user = useSelector((store) => store.app.user)
  const toggle = useSelector((store) => store.movie.toggle)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user);


  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      // console.log(res);
      if (res.data.success) {
        toast.success(res.data.Message)
      }
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      dispatch(setUser(null))
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  const toggleHandler = () => {
    dispatch(setToggle())
  }



  return (
    <div className='flex absolute z-20 w-full justify-between px-5 py-3  bg-gradient-to-b from-black'>
      <div>
        <img className='w-28 cursor-pointer' src={netflix} alt="" />
      </div>
      <div className='flex justify-between items-center px-4 gap-4'>
        {
          user && (
            <>
              <div className='flex items-center gap-1 text-white'>
                <IoIosArrowDropdown size={24} />
                <h1 className='font-medium'>{user.fullname}</h1>
              </div>
              <button onClick={logoutHandler} className='bg-red-600 p-1 rounded-lg px-3 text-white'>Logout</button>
              <button onClick={toggleHandler} className='bg-red-600 p-1 rounded-lg px-3 text-white'>{toggle ? "Home" : "Search Movie"}</button>
            </>
          )
        }
      </div>

    </div >
  )
}

export default Header;
