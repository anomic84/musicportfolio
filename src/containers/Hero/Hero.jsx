import React from 'react'

const Hero = () => {
  return (
    <section className="flex items-center h-[88vh] justify-center bggradienthero">
      <div className="">
        <a target="_blank" 
        rel="noopener noreferrer" 
        href="https://songwhip.com/spencer-carlson" 
        className=''>
          <img className="m-auto w-[80%] max-h-[768px] max-w-[768px] rounded-[20%] border-navnametext border-4 
                          md:border-8 border-opacity-80 shadow-2xl
                          hover:w-[82%] duration-300 cursor-pointer"
            src="https://i.imgur.com/n9TIXIi.png"
            alt="Syzygy Album Cover" />
        </a>
      </div>
    </section>

  )
}

export default Hero