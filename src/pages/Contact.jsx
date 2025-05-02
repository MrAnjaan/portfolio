import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <h1 className="text-4xl sm:text-5xl text-emerald-500 font-extrabold mb-10 drop-shadow-lg text-center">Contact Me</h1>
      <div className="flex flex-wrap justify-center space-x-6 sm:space-x-12 text-4xl sm:text-6xl">
        <a href="https://github.com/mranjaan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-300 transition-colors duration-300 mb-6 sm:mb-0">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href="mailto:bullzsocial@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-red-300 transition-colors duration-300 mb-6 sm:mb-0">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/kishan-kumar-mranjaan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors duration-300 mb-6 sm:mb-0">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 8.98h4v12H3v-12zm7.5 0h3.6v1.64h.05a3.95 3.95 0 013.55-1.95c3.8 0 4.5 2.5 4.5 5.75v6.56h-4v-5.8c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.22 1.5-2.22 3.05v5.9h-4v-12z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/krishna__k_v/?igsh=MWR3ZHU0eDJzODVhMg%3D%3D#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300 transition-colors duration-300 mb-6 sm:mb-0">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Contact
 