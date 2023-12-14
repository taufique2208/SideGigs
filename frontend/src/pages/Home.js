import React from 'react'
import { Row,Col,Container, Card } from 'reactstrap'
import './Home.css'
import SearchBar from '../shared/SearchBar'
import Serve from '../shared/Serve'
import ValueBox from '../components/ValueBox'

import CardBox from '../components/CardBox'
import ChatIcon from '../components/ChatIcon'
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
    <ChatIcon/>
<section className="mb-40">


  <div className=" px-6 py-12 text-center  md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mt-12 lg:mt-0">
          <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-7xl">
            UNLEASH YOUR<span className="text-primary primary"> POTENTIAL </span><br />FUEL YOUR <span className="text-primary primary">PASSION</span>
          </h1>
          <NavLink className="comic-button" to='/newjob'
            data-te-ripple-init data-te-ripple-color="light"  role="button">Get Freelancers</NavLink>
          <NavLink to='/projects' className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
            data-te-ripple-init data-te-ripple-color="light"  role="button">Browse Projects</NavLink>
            <div className='search-wrapper'><SearchBar></SearchBar></div>
        </div>
        <div className='brand-bubbles' style={{top:'100px',right:'20px'}}><img src={require('../assets/google.png')} alt="" /></div>
        <div className='brand-bubbles' style={{top:'400px',right:'550px'}}><img src={require('../assets/spotify.png')} alt="" /></div>
        <div className='brand-bubbles' style={{top:'710px',right:'100px',zIndex:'1',padding:'20px'}}><img src={require('../assets/accenture.png')} alt="" /></div>
        <div className=" image-background">
          <img src={require('../assets/homepage-man.png')}
            className="w-full image" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
{/* <ValueBox/> */}
<section>
</section>
    </>
  )
}

export default Home