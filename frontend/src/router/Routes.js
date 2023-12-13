import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { Navigate } from 'react-router-dom'
import Register from '../pages/Register'
import ResumeBuilder from '../pages/ResumeBuilder'
import AskAi from '../pages/AskAi'
import Courses from '../pages/Courses'


const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
      <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/resume-builder' element={<ResumeBuilder/>}></Route>
        <Route path='/ask-ai' element={<AskAi/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        
    </Routes>
  )
}

export default Routers