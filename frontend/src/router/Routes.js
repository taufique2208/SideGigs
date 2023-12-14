import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { Navigate } from 'react-router-dom'
import Register from '../pages/Register'
import ResumeBuilder from '../pages/ResumeBuilder'
import AskAi from '../pages/AskAi'
import Courses from '../pages/Courses'
import NewJob from '../pages/NewJob'
import Projects from '../pages/Projects'
import ProjectSummary from '../pages/ProjectSummary'
import Dashboard from '../pages/Dashboard'
import Applicants from '../pages/Applicants'
import ChatPage from '../pages/Message'


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
        <Route path='/newjob' element={<NewJob/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/projects/:id' element={<ProjectSummary/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/inbox' element={<ChatPage/>}></Route>
        <Route path='/dashboard/:jobId' element={<Applicants/>}></Route>
        
    </Routes>
  )
}

export default Routers