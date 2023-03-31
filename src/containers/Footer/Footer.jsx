import React from 'react'
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/Ai'
const Footer = () => {
  return (
    <div className='bg-mediabg'>
      <div className="flex flex-wrap pr-[16px] md:pr-0 md:flex-nowrap justify-center md:justify-none items-center">
        <a href="https://www.facebook.com/profile.php?id=100026563458011" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook size="3rem" />
        </a>
        <a href="https://twitter.com/spencercarlsonm" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
          <AiFillTwitterSquare size="3rem" />
        </a>
        <a href="https://www.instagram.com/spencercarlsonmusic/" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="3rem" />
        </a>
      </div>
    </div>
  )
}

export default Footer