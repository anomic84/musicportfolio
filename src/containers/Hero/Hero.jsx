import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800">
      <div className="flex max-h-[1024px] max-w-[1024px]  w-[33.33%]">
        <img className=" justify-center" src="https://i.imgur.com/2amlMzV.jpg" alt="Limerence Album Cover" />
      </div>
      <div className="bg-navbg w-full">
        <h1 className="text-[3rem] text-manrope text-center text-navnametext tracking-[-0.04em]">"...Clever,Quirky..."</h1>
        </div>
    </div>

  )
}

export default Hero