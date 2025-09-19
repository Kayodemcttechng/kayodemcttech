import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stacks from '../components/Stacks'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Foooter from '../components/Foooter'

const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Contact />
        <Foooter />
    </section>
  )
}

export default Home