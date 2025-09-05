import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black py-12">
      {/* Contact Info */}
      <div className="text-2xl font-bold text-white text-center">
        Have a project <span className="text-red-500">in mind?</span>
      </div>
      <div className="text-lg font-medium text-white text-center mt-4">
        <a href="mailto:officialwithkayode@gmail.com" className="hover:underline">
          officialwithkayode@gmail.com
        </a>
        <span className="text-red-500 px-2">|</span>
        <a href="tel:+2348163791552" className="hover:underline">
          +234 816 379 1552
        </a>
      </div>

      {/* Social Links */}
      <div className="max-w-screen-xl mx-auto px-6 text-center mt-8">
        <p className="mb-4 text-lg font-semibold text-white">Connect with me!</p>

        <div className="flex justify-center gap-6 items-center">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-7 h-7 hover:scale-125 transition-transform duration-200"
            />
          </a>
          <a href="https://wa.me/2348163791552" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-7 h-7 hover:scale-125 transition-transform duration-200"
            />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-7 h-7 hover:scale-125 transition-transform duration-200"
            />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-7 h-7 hover:scale-125 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} KayodeMcttech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
