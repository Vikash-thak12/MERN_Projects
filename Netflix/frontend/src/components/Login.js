import React, { useState } from 'react'
import Header from './Header'
import bg from '../assets/bg.jpg'
import { API_END_POINT } from '../utils/contant.js'
import axios from 'axios'

const Login = () => {

  const [islogin, setIslogin] = useState(false)
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginHandler = () => {
    setIslogin(!islogin)
  }

  const getInputData = async (e) => {
    e.preventDefault();
    // console.log(fullname, email, password);
    if(islogin) {
      //Login
      const user = {email, password};
      try {
        const res = await axios.get(`${API_END_POINT}`, user);
        console.log(res);
      } catch (error) {
        console.log("Error", error);
      }

    } else {
      // Signup
      const user = {fullname, email, password};
      try {
        const res = await axios.post(`${API_END_POINT}`, user);
        console.log(res);
      } catch (error) {
        console.log("Error", error);
      }
    }
    setFullname("")
    setEmail("")
    setPassword("")
  }
  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <div>
        <form onSubmit={getInputData} action="submit" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 rounded-lg'>
          <div className='flex flex-col gap-4 w-80 px-4 rounded-lg outline-none py-4 mx-auto'>
            <h1 className='text-white text-center font-bold'>{islogin ? "Login" : "Signup"}</h1>
            {
              islogin ? "" :
                <div className='flex flex-col gap-1'>
                  <label className='text-white' htmlFor="">Enter your Full Name</label>
                  <input value={fullname} onChange={(e) => setFullname(e.target.value)} className='px-2 py-1 rounded-lg outline-none text-white bg-gray-800' type="text" placeholder='Enter your Name' />
                </div>
            }

            <div className='flex flex-col gap-1'>
              <label className='text-white' htmlFor="">Enter your Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-2 py-1 rounded-lg outline-none text-white bg-gray-800' type="email" placeholder='Enter your Email' />
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='text-white' htmlFor="">Enter your Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='px-2 py-1 rounded-lg outline-none text-white bg-gray-800' type="password" placeholder='Enter your password' />
            </div>


          </div>
          <div className='text-center px-4 mt-2'>
            <button className='bg-white text-black px-24 rounded-lg py-1 w-full'>{islogin ? "Login" : "Signup"}</button>
          </div>
          <div className='flex justify-center my-3 gap-1 text-center mx-auto'>
            <p className='text-white'>{islogin ? "Didn't have an Account?" : "Already Have an account?"}</p>
            <span onClick={loginHandler} className='text-blue-600 cursor-pointer'>{islogin ? "Register" : "Login"}</span>
          </div>
        </form>
      </div >
    </div >
  )
}

export default Login
