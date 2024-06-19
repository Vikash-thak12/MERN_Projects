import './App.css'
import Course from './components/Course/Course'
import Home from './components/Home/Home'
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup/Signup'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    {/* <Home />
    <Course /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Toaster />

    </>
  )
}

export default App
