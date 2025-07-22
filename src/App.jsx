import React from 'react'
import Navbar from './Component/Navbar'
import LandingPage from './Component/LandingPage'
import Marquee from './Component/Marquee'
import About from './Component/About'
import Eyes from './Component/Eyes'
import Feacture from './Component/Feacture'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feacture/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
