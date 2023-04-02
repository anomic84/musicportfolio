import React from 'react'
import { covers } from '../../constants/constants'
import CoverCard from '../../components/CoverCard'

const Media = () => {
  return (
    <div className='bgmedia py-10' id='media'>
      <div className="flex flex-col ">
        <div>
          <h1 className='hidden md:block text-center font-bungee text-mediabg text-7xl pb-3'>Discography</h1>
        </div>
        <div>
          <h1 className='text-center font-bungee text-mediabg text-6xl  pb-3 md:hidden'>Disco-<br/>graphy</h1>
        </div>
        {/* for monitors and larger */}
        <div className="inline-grid grid-cols-2 lg:grid-cols-4 gap-[5px] px-[17px] py-[5px] mx-auto max-w-[960px]
                         container">
          {covers.map((cover) => (
            <CoverCard key={cover.id} {...cover} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Media