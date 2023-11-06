import React from 'react'
import {
    ShoppingCartIcon,
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon, } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div>
        <div className='flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4'>
            <Bars3Icon className="h-6 w-6 md:hidden"/>
            <h2 className='text-3xl font-bold'>udemy</h2>
            <h3 className='hidden text-sm md:block'>Caterogies</h3>
            <form className='hidden bg-[#f8f8fb] md:flex border border-black rounded-3xl flex-1 h-12 items-center' >
                <MagnifyingGlassIcon className='h-5 w-5 mx-4 text-gray-400' />
                <input type="text"
                 placeholder="Search for anything"
                 className="bg-transparent texts-sm outline-none" />
            </form>
            <h3 className='hidden text-sm lg:block' >Udemy Business</h3>
            <h3 className='hidden text-sm lg:block md:hidden' >Teach on Udemy</h3>
            <div className='flex' >
                <MagnifyingGlassIcon className='h-6 w-6 text-gray-400 md:hidden' />
                <ShoppingCartIcon className='h-6 w-6' />

            </div>
            <div className='hidden md:flex pr-4 space-x-4 justify-end'>
                <button className='border border-black h-10 text-sm font-bold w-20 hover:bg-[#f5f5f5]' >
                    Log In
                </button>
                <button className='border bg-black text-white border-black h-10 text-sm font-bold w-20' >
                    Sign Up 
                </button>
                <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F%] '>
                    <GlobeAltIcon className='h-5 w-5'/>
                </button>
            </div>
        </div>

    </div>
  )
};

export default Navbar;