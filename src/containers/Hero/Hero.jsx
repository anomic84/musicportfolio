import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-h-[768px] max-w-[768px]">
        <img className="justify-center my-8 mx-auto w-[80%] 
        rounded-[20%] border-navnametext border-4 md:border-8 border-opacity-80 shadow-2xl" src="https://i.imgur.com/2amlMzV.jpg" alt="Limerence Album Cover" />
      </div>
    </div>

  )
}

export default Hero