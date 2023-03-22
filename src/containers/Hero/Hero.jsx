import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bggradienthero">
      <div className="flex max-h-[1024px] max-w-[1024px]  lg:w-[33.33%] ">
        <img className=" justify-center " src="https://i.imgur.com/2amlMzV.jpg" alt="Limerence Album Cover" />
      </div>
      <div className="bg-navbg w-full">
        <h1 className="text-[2.5rem] lg:text-[4rem] text-manrope text-center text-navnametext font-euph tracking-[-0.04em]">"...Clever, Quirky..."</h1>
        </div>
    </div>

  )
}

export default Hero