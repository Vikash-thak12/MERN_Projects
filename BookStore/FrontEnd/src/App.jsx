import './App.css'
import Course from './components/Course/Course'
import Home from './components/Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup/Signup'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {

  const [authUser, setAuthUser] = useAuth()
  // console.log(authUser)

  return (
    <>
      {/* <Home />
    <Course /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/course' element={authUser ? <Course /> : <Navigate to="/signup" />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Toaster />

    </>
  )
}

export default App
