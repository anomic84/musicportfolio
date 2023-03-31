import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full py-3 lg:py-7 ">
      {/* // MONITORS */}
      <div className="hidden lg:flex flex-row justify-center items-center">
        <div className="flex">
          <div className="flex flex-1 items-center justify-end">

            <p className='lg:px-2 xl:px-3 whitespace-nowrap text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'><a href="#busride">BUS RIDE DAYDREAM</a></p>
            <p className='lg:px-2 xl:px-3 whitespace-nowrap text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'><a href="#productions">PRODUCED BY</a></p>
          </div>
          <div className='flex flex-1 justify-center px-5'>
            <p className='lg:px-2  xl:px-3 whitespace-nowrap lg:text-2xl xl:text-3xl font-climate tracking-widest text-navnametext'><a href="#home">SPENCER CARLSON</a></p>
          </div>
          <div className="flex flex-1 items-center justify-start">
            <p className='lg:px-2  xl:px-3 whitespace-nowrap text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'><a href="#about">ABOUT</a></p>
            <p className='lg:px-2  xl:px-3 text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'><a href="#news">NEWS</a></p>
            <p className='lg:px-2  xl:px-3 text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'><a href="#media">MUSIC</a></p>
            <p className='lg:px-2  xl:px-3 text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'><a href="#contact">CONTACT</a></p>
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

      <div className="sm:hidden flex justify-between items-center px-4 w-full">
        {toggleMenu
          ? ''
          : <h1 className="text-navnametext text-lg  text-center">Spencer Carlson</h1>
        }
        <div className="flex ">
          {toggleMenu
            ? <FaTimes className="text-navnametext" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
            : <FaBars className="text-navnametext" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
          }
          {toggleMenu && (
            <div className="z-10 h-screen w-[100%] flex justify-center items-center">
              <div className="text-navtext  sm:text-xl text-center flex flex-col justify-center">
                <p className='py-5 text-xl text-navtext'><a href="#media">MUSIC</a></p>
                <p className='py-5 text-xl text-navtext'><a href="#about">ABOUT</a></p>
                <p className='py-5 text-xl text-navtext'><a href="#contact">CONTACT</a></p>
                <p className='py-5 text-xl text-navtext'><a href="#productions">PRODUCED BY</a></p>
                <p className='py-5 text-xl text-navtext'><a href="#news">NEWS AND SHOWS</a></p>
                <p className='py-5 text-xl text-navtext'><a href="#busride">BUS RIDE DAYDREAM</a></p>


              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Navbar