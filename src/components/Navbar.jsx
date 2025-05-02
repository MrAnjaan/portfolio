// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className='flex bg-emerald-950 py-5 px-10 items-center justify-between'>
//         <h2 className='text-2xl font-mono font-bold' >MrAnjaan</h2>
//         <div className='flex gap-8 items-center text-lg underline'>
//           <Link to='/'> Home</Link>
//           <Link to='/about'> About</Link>
//           <Link to='/product'> Product</Link>
//           <Link to='/contact'> Contact</Link>
// {/* ye isliye ni kia kuki br br reload hora h
//             <a href='/' className='text-xl underline'>Home</a>
//             <a href='/about' className='text-xl underline'>About</a>
//             <a href='/contact' className='text-xl underline'>Contact</a>
//             <a href='/product' className='text-xl underline'>Product</a> */}
            
//         </div>
//     </nav>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mask from '../assets/mranjaanLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-emerald-950 text-white p-4 flex flex-wrap justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="text-pink-500 text-2xl flex items-center">
          <span><img src={mask} className="h-13 w-13" alt="Logo" /></span>
        </div>
        <span className="ml-2 text-xl font-mono">MrAnjaan</span>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-pink-500 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="h-8 w-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 10-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 101.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links and Social Icons */}
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <div className="flex flex-col font-medium md:flex-row md:space-x-4 text-lg md:underline-offset-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Link to="/" className="hover:text-pink-500 py-2 md:py-0">
            Home
          </Link>
          <Link to="/products" className="hover:text-pink-500 py-2 md:py-0">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-pink-500 py-2 md:py-0">
            Skills
          </Link>
          <Link to="/about" className="hover:text-pink-500 py-2 md:py-0">
            About
          </Link>
          <Link to="/contact" className="hover:text-pink-500 py-2 md:py-0">
            Contact
          </Link>
        </div>

        <div className="flex flex-row md:flex-row md:space-x-4 mt-4 md:mt-0 justify-center md:justify-end md:flex-1">
          <a
            href="https://github.com/mranjaan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 px-2"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kishan-kumar-mranjaan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 px-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/krishna__k_v/?igsh=MWR3ZHU0eDJzODVhMg%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 px-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 px-2"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
