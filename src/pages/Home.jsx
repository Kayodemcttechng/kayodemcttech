import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stacks from '../components/Stacks'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Contact />
        <Footer />
    </section>
  )
}

export default Home