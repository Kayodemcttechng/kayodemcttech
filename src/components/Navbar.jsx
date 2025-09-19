import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between px-8 py-4 items-center">
        {/* Logo */}
        <div className="lg:text-3xl font-bold">
          Kayode<span className="text-[#d9c7b2] font-bold">Mcttech</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex md:hidden gap-6 font-bold">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT ME</a></li>
          <li><a href="#">MY STACKS</a></li>
          <li><a href="#">MY PROJECTS</a></li>
          <li><a href="#">GET IN TOUCH</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-slate-50 text-black py-2 px-5 rounded-md">
          DOWNLOAD MY CV
        </button>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" bg-black px-8 pb-6">
          <ul className="flex flex-col gap-4 font-bold">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT ME</a></li>
            <li><a href="#">MY STACKS</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">GET IN TOUCH</a></li>
          </ul>
          <button className="mt-4 w-full bg-slate-50 text-black py-2 px-5 rounded-md">
            DOWNLOAD MY CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
