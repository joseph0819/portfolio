import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Projects from './Projects'
import About from './About'
import Blog from './Blog'
import Contact from '../Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
