import React from 'react'
import img1 from "../img/img1.png.jpg"

const Main = () => {
  return (
    <div className='w-full h-96 border border-gray-100 relative'>
        <img src={img1} alt="woman at desk" className='h-full w-full object-cover bg-no-repeat bg-bottom'
        />
        <div className='absolute bg-white top-12 left-8 p-4 flex flex flex-col items-start justify-center shadow-lg h-40 w-[440px]'>
            <h2 className='text-3xl font-bold mb-2'>Hello, World! </h2>
            <h3 className='text-xl'>Is it cake?</h3>
            <h3 className='text-xl'>Wild Turkey</h3>
        </div>


    </div>
  )
}

export default Main