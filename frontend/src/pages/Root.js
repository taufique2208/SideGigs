import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Routers from '../router/Routes'

function Root() {
  return (
    <>
    <Navbar>
    </Navbar>
    <Routers></Routers>
    {/* <Login></Login> */}
    <Footer></Footer>
    </>
  )
}

export default Root