import React from 'react'
import { FaUser } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-7">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2 text-red-500">CONVERTOR</h1>
          <p className="text-sm text-gray-700">&copy; 2024 Compressor.io. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap justify-center px-4 gap-6 mb-4 mt-8">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">Features</a>
          <a href="#" className="hover:text-red-500 transition">Pricing</a>
          <a href="#" className="hover:text-red-500 transition">Privacy</a>
          <a href="#" className="hover:text-red-500 transition">T&Cs</a>
          <a href="#" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Social Media */}
        <div>
      <a
        href="https://sudaiskhan.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:underline justify-center gap-1 text-gray-600 hover:text-red-500 transition"
      >
        <FaUser className="text-base" /> Portfolio
      </a>

        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
