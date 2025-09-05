import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[url('/assets/kayodemcttech.jpg')] bg-cover bg-center h-[50vh]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-4">
          Hi, I’m <span className="text-red-500">Kayode</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
          A Frontend Engineer passionate about building modern, responsive, and user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
            View My Projects
          </button>
          <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-600 transition">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
