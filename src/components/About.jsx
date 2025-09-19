import React from 'react'
import { FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className="bg-[#d9c7b2]  py-20">
      <div className="lg:flex gap-12 items-center w-[85%] mx-auto">
        
        {/* Image Section */}
        <div className="lg:flex-1 flex justify-center">
          <img 
            className="rounded-lg lg:w-[500px] w-full h-auto shadow-lg"
            src="./assets/kayimg.jpeg" 
            alt="Kayode Mcttech"
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-1 mt-8 lg:mt-0 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-2">
            About <span className="text-gray-900">Me</span> 
            <FaCode className="text-red-500 text-3xl" />
          </h2>

          <p className="text-black leading-relaxed">
            I’m <span className="font-semibold text-gray-900">Kayode Oluwatobiloba Emmanuel</span>, a passionate 
            <span className="text-gray-900 font-semibold"> Wordpress and Frontend Developer</span> who loves crafting 
            modern, user-friendly, and high-performance web applications. 
            I bring designs to life with clean, responsive code.
          </p>

          <p className="text-black leading-relaxed">
            My toolkit includes <span className="font-semibold">React</span>, 
            <span className="font-semibold"> Tailwind CSS</span>, and 
            <span className="font-semibold"> Git</span> for version control. 
            I focus on writing scalable code with best practices while ensuring excellent user experiences across all devices.
          </p>

          <p className="text-black leading-relaxed">
            I enjoy collaborating with designers, backend developers, and product teams 
            to build solutions that deliver real value. Every project I work on is a chance 
            to create something impactful and meaningful for users.
          </p>

          <button className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-red-600 transition">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
