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
import React from 'react';
import { Link } from 'react-router-dom';
import mask from '../assets/mranjaanLogo.png';

const Navbar = () => {
  return (
    <nav className="bg-emerald-950 text-white p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="text-pink-500 text-2xl flex items-center">
          {/* <span>{'{'}</span> */}
          <span><img src={mask} className='h-13 w-13' alt="" /></span>
          {/* <span>{'}'}</span> */}
        </div>
        <span className="ml-2 text-xl font-mono">MrAnjaan</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-pink-500">Home</Link>
        <Link to="/products" className="hover:text-pink-500">Projects</Link>
        <Link to="/skills" className="hover:text-pink-500">Skills</Link>
        <Link to="/about" className="hover:text-pink-500">About</Link>
        <Link to="/contact" className="hover:text-pink-500">Contact</Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://github.com/mranjaan" target='_blank' className="hover:text-pink-500">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kishan-kumar-mranjaan/" target='_blank' className="hover:text-pink-500">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/krishna__k_v/?igsh=MWR3ZHU0eDJzODVhMg%3D%3D#" target='_blank' className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target='_blank' className="hover:text-pink-500">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
