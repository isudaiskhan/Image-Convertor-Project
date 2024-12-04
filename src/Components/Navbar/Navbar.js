import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'login', label: 'Login' },
  ];

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full shadow-lg border-t-4 border-t-red-500 z-50 transition bg-white duration-300 ${hasScrolled ? 'bg-white' : ''} ${hasScrolled && window.scrollY > 10 ? 'top-0 shadow-lg' : ''}`}>
        <div className="relative container mx-auto sm:px-10 px-5">
          <div className="md:py-1 py-2 mx-auto flex items-center justify-between xl:justify-start">
            <div className="flex flex-wrap items-center cursor-pointer">
              <a href='/' className="flex-grow text-4xl font-bold text-red-500 ml-2">Convertor</a>
            </div>

            <div className="hidden md:flex items-center space-x-24 ml-auto">
              <ul className="flex items-center space-x-3 mx-auto">
                {navItems.map((item) => (
                  <li key={item.id} className="p-5 mx-1 border-transparent relative group cursor-pointer">
                    <a href='/' className="text-black hover:text-red-500">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="block md:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                <IoMdMenu className="text-4xl text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen sm:w-3/5 w-full py-4 px-8 shadow md:w-1/3 bg-white z-50"
          >
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
              <AiOutlineClose className="text-4xl text-red-500 hover:text-red-600" />
            </button>
            <ul className="mt-8 flex flex-col space-y-7">
              {navItems.map((item) => (
                <li key={item.id} className="py-2">
                  <a href='/' className="cursor-pointer pt-0.5 uppercase text-black" onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
