import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline';
import img2 from "../img/img2.jpg"

const Course = ({ item }) => {
  return (
    <div className='flex flex-col items-start space-y-[1px]'>
      <img src={img2} alt="working desk"className='h-32 w-full'/>
      <h2 className='font-bold text-md pt-1'>{item.title}</h2>
      <h2 className='text-xs text-gray-700'>{item.username}</h2>
      <div className='flex space-x-1'>
          <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
          <div className='flex items-center'>
            <StarIcon className='w-4 fill-current text-orange-400'/>
            <StarIcon className='w-4 fill-current text-orange-400'/>
            <StarIcon className='w-4 fill-current text-orange-400'/>
            <StarIcon className='w-4 fill-current text-orange-400'/>
            <StarIcon className='w-4 fill-current text-orange-400'/>
          </div>
          <h3 className='text-xs'>{item.students}</h3>
      </div>
      <div className='flex space-x-4 items-center'>
        <h3 className='text-black font-bold'>{item.price}</h3>
        <h3 className='text-gray-800 text-sm line-through'>{item.OldPrice}</h3>
      </div>
    </div>
  )
};

export default Course;