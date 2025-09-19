import React from 'react';

const Contact = () => {
  return (
    <div className=" bg-gray-900 py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-white text-center">
        Get <span className="text-red-500">In Touch</span>
      </h2>

      {/* Form Container */}
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto mt-12 bg-black/60 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <form className="flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-white font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              placeholder="Please how may I be of service to you?"
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
