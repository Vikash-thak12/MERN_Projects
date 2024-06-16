import './App.css'
import Course from './components/Course/Course'
import Home from './components/Home/Home'
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup/Signup'

function App() {

  return (
    <>
    {/* <Home />
    <Course /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>

    </>
  )
}

export default App
