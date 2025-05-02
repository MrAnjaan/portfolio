import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'
// import About from './About'
const Home = () => {
  const data = useContext(DataContext)
  console.log(data)
  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/kishan-kumar-mranjaan/', '_blank', 'noopener,noreferrer')
  }
  return (
    <>

      <div className="flex justify-center items-center h-screen ">
        <div id='main-Name' className='p-4'>
          <h1 className='text-4xl pb-2 '>Hiii, My name is</h1>
          <h1 className='pb-4 text-6xl'>Kishan.</h1>
          <h1 className='mt -4 text-6xl text-emerald-400'>I am a Softwere Developer.</h1>

          <button
            onClick={handleConnectClick}
            className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Let's Connect
          </button>
        </div>
        {/* <div id='main-img'>
          <img src='' alt="This is LOGO" />
        </div> */}
      </div>
      {/* <About /> */}
    </>
  )
}

export default Home
