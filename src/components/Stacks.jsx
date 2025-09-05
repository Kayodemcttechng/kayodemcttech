import React from 'react'

const Stacks = () => {
  return (
    <section className="relative bg-[url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg')] py-16 px-6 overflow-hidden bg-cover">
  {/* Background Design Layer (Gradient or Blur Shape) */}

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
    <h2 className="text-4xl font-bold mb-6">My Tech <span className='text-red-500 font-bold'>Stacks</span></h2>
    <p className="text-lg mb-12">Technologies and tools I use to build amazing web experiences:</p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
      {/* HTML */}
      <div className="flex flex-col items-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12 mb-2" />
        <p className="text-sm">HTML5</p>
      </div>

      {/* CSS */}
      <div className="flex flex-col items-center">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12 mb-2" />
        <p className="text-sm">CSS3</p>
      </div>

      {/* JavaScript */}
      <div className="flex flex-col items-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-2" />
        <p className="text-sm">JavaScript</p>
      </div>

      {/* React */}
      <div className="flex flex-col items-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
        <p className="text-sm">React</p>
      </div>

      {/* Tailwind */}
      <div className="flex flex-col items-center">
        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
        <p className="text-sm">Tailwind CSS</p>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-2" />
        <p className="text-sm">Git</p>
      </div>

      {/* TypeScript */}
      <div className="flex flex-col items-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-12 h-12 mb-2" />
        <p className="text-sm">Bootstrap</p>
      </div>

      {/* WordPress (white version) */}
      <div className="flex flex-col items-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" className="w-12 h-12 mb-2 invert" />
        <p className="text-sm">WordPress</p>
      </div>
    </div>
  </div>
</section>




  )
}

export default Stacks