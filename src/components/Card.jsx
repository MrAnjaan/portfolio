import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 rounded' >
        <img className='ml-2 h-32 w-35 rounded-full mb-3 ' src={props.profile_photo}  />
        <h1 className='text-2xl font-semibold mb-4' >{props.user}</h1>
        <h2> {props.city}, {props.age}</h2>
        <h2> {props.profession}</h2>
        <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5' >Add Friend</button>
    </div>
  )
}

export default Card