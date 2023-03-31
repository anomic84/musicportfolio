import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-h-[768px] max-w-[768px]">
        <a target="_blank" rel="noopener noreferrer" href="https://songwhip.com/spencer-carlson" >
          <img className="justify-center my-8 m-auto w-[80%] 
                          rounded-[20%] border-navnametext border-4 
                          md:border-8 border-opacity-80 shadow-2xl
                          hover:w-[82%] duration-300 cursor-pointer"
            src="https://i.imgur.com/2amlMzV.jpg"
            alt="Limerence Album Cover" />
        </a>
      </div>
    </div>

  )
}

export default Hero