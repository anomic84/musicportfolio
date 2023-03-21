import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-navbg w-full py-7">
      {/* // MONITORS */}
      <div className="hidden lg:flex flex-row justify-center items-center">
        <div className="flex">
          <div className="flex flex-1 items-center justify-end">
   
            <p className='px-3 whitespace-nowrap text-sm text-navtext'><a href="#busride">BUS RIDE DAYDREAM</a></p>
            <p className='px-3 whitespace-nowrap text-sm text-navtext'><a href="#productions">PRODUCED BY</a></p>
          </div>
          <div className='flex flex-1 justify-center px-5'>
            <p className='px-3 whitespace-nowrap text-3xl font-climate tracking-widest text-navnametext'><a href="#home">SPENCER CARLSON</a></p>
          </div>
          <div className="flex flex-1 items-center justify-start">
          <p className='px-3 whitespace-nowrap text-sm text-navtext'><a href="#about">ABOUT</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#news">NEWS</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#media">MUSIC</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#contact">CONTACT</a></p>
          </div>
        </div>
      </div>
      {/* // TABLET */}
      <div className="hidden sm:flex lg:hidden flex-col items-center">
        <div>
          <p className='px-3 text-lg text-navnametext'><a href="#home">SPENCER CARLSON</a></p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            <p className='px-3 text-sm text-navtext'><a href="#about">ABOUT</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#busride">BUS RIDE DAYDREAM</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#productions">PRODUCED BY</a></p>
          </div>
          <div className="flex justify-between">
            <p className='px-3 text-sm text-navtext'><a href="#news">NEWS</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#media">MUSIC</a></p>
            <p className='px-3 text-sm text-navtext'><a href="#contact">CONTACT</a></p>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="pr-4 sm:hidden">
        {toggleMenu
          ? <FaTimes color="#530E1A" size={37} onClick={() => setToggleMenu(false)} />
          : <FaBars color="#530E1A" size={37} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="p-[3rem]">
            <div className="text-navtext dark:text-white sm:text-xl text-center">
              <p className='px-3 text-sm text-navtext'><a href="#news">NEWS</a></p>
              <p className='px-3 text-sm text-navtext'><a href="#media">MUSIC</a></p>
              <p className='px-3 text-sm text-navtext'><a href="#about">ABOUT</a></p>
              <p className='px-3 text-sm text-navtext'><a href="#contact">CONTACT</a></p>
              <p className='px-3 text-sm text-navtext'><a href="#productions">PRODUCED BY</a></p>
              <p className='px-3 text-sm text-navtext'><a href="#busride">BUS RIDE DAYDREAM</a></p>
              {/* <p><a href="#footer">Contact</a></p> */}

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar