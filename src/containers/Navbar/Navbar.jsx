import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="w-full h-[7vh] bg-mediabg top-0">
        {/* // MONITORS */}
        <div className="hidden lg:flex flex-row justify-center  items-center   w-screen">
          <div className="flex py-3">
            <div className="flex flex-1 items-center py-auto justify-end">

              {/* Monitor Links List */}
              <p className='lg:px-2 xl:px-3 whitespace-nowrap text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'>
                <Link to='/busride'>BUS RIDE DAYDREAM</Link>
              </p>
              <p className='lg:px-2 xl:px-3 whitespace-nowrap text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'>
                <Link to='/productions'>PRODUCED BY</Link>
              </p>
            </div>
            <div className='flex flex-1 justify-center px-5'>
              <p className='lg:px-2  xl:px-3 whitespace-nowrap lg:text-2xl xl:text-3xl font-climate tracking-widest text-navnametext'>
                <Link to='/'>SPENCER CARLSON</Link>
              </p>
            </div>
            <div className="flex flex-1 items-center justify-start">
              <p className='lg:px-2  xl:px-3 whitespace-nowrap text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'>
                <Link to='/about'>ABOUT</Link>
              </p>
              <p className='lg:px-2  xl:px-3 text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'>
                <Link to='/news'>NEWS</Link>
              </p>
              <p className='lg:px-2  xl:px-3 text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'>
                <Link to='/media'>MUSIC</Link>
              </p>
              <p className='lg:px-2  xl:px-3 text-sm text-navtext cursor-pointer hover:text-navnametext duration-300'>
                <Link to='/contact'>CONTACT</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
      {/* // TABLET */}
      <div className="hidden sm:flex lg:hidden flex-col items-center fixed mb-auto top-0 ">

        {/* Tablet Links List */}
        <div>
          <p className='px-3 text-lg text-navnametext'>
            <Link to='/'>SPENCER CARLSON</Link>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            <p className='px-3 text-sm text-navtext'>
              <Link to='/about'>ABOUT</Link>
            </p>
            <p className='px-3 text-sm text-navtext'>
              <Link to='/busride'>BUS RIDE DAYDREAM</Link>
            </p>
            <p className='px-3 text-sm text-navtext'>
              <Link to='/productions'>PRODUCED BY</Link>
            </p>
          </div>
          <div className="flex justify-between">
            <p className='px-3 text-sm text-navtext'>
              <Link to='/news'>NEWS</Link>
            </p>
            <p className='px-3 text-sm text-navtext'>
              <Link to='/media'>MUSIC</Link>
            </p>
            <p className='px-3 text-sm text-navtext'>
              <Link to='/contact'>CONTACT</Link>
            </p>

          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="w-full bg-mediabg">
        {/* 1 */}
        <div className="sm:hidden flex flex-row justify-between items-center px-4 py-3 w-full">
          {toggleMenu ? (
            ''
          ) : (
            <h1 className="text-navnametext text-lg py-auto text-center">Spencer Carlson</h1>
          )}

          {toggleMenu ? (
            ''
          ) : (<FaBars
            className="text-navnametext"
            size={27}
            onClick={() => setToggleMenu((prev) => !prev)}
          />
          )}
          {/* 2 */}
          {toggleMenu && (
            <div className="flex flex-col w-full mx-auto">

              <FaTimes className="text-navnametext right-4"
                size={27}
                onClick={() => setToggleMenu((prev) => !prev)}
              />
              <div className='z-10 h-screen flex justify-center items-center'>
                <div className="text-navtext my-auto sm:text-xl text-center w-full flex flex-col justify-center">

                  {/* Mobile Links List */}
                  {/* <p > */}
                  <Link to='/media' className='py-5 text-xl text-navtext' onClick={() => setToggleMenu((prev) => !prev)}>MUSIC</Link>
                  {/* </p> */}
                  {/* <p className='py-5 text-xl text-navtext'> */}
                  <Link to='/about' className='py-5 text-xl text-navtext' onClick={() => setToggleMenu((prev) => !prev)}>ABOUT</Link>
                  {/* </p>
                <p className='py-5 text-xl text-navtext'> */}
                  <Link to='/contact' className='py-5 text-xl text-navtext' onClick={() => setToggleMenu((prev) => !prev)}>CONTACT</Link>
                  {/* </p>
                <p className='py-5 text-xl text-navtext'> */}
                  <Link to='/productions' className='py-5 text-xl text-navtext' onClick={() => setToggleMenu((prev) => !prev)}>PRODUCED BY</Link>
                  {/* </p>
                <p className='py-5 text-xl text-navtext'> */}
                  <Link to='/news' className='py-5 text-xl text-navtext' onClick={() => setToggleMenu((prev) => !prev)}>NEWS AND SHOWS</Link>
                  {/* </p>
                <p className='py-5 text-xl text-navtext'> */}
                  <Link to='/busride' className='py-5 text-xl text-navtext' onClick={() => setToggleMenu((prev) => !prev)}>BUS RIDE DAYDREAM</Link>
                  {/* </p> */}


                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>

  )
}

export default Navbar