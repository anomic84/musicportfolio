import React from 'react'
import { busrides } from '../../constants/constants'
import BusRideCard from '../../components/BusRideCard'

const Busride = () => {
  return (
    <section className="bg-navnametext py-10" id="busride">
      <div>
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://songwhip.com/busridedaydream">
          <h1 className='text-center font-bungee text-aboutbg text-5xl hover:text-[3.25rem] duration-300 px-[17px] pb-3'>
            Bus Ride <br className='md:hidden' />Daydream
          </h1>
        </a>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto py-4 mb-4 rounded-b-[20px] max-w-[450px] shadow-lg '>
        <iframe className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]" src="https://bandcamp.com/EmbeddedPlayer/album=3992714661/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=2677760773/transparent=true/" seamless><a href="https://busridedaydream.bandcamp.com/album/aquamoon" title="aquamoon">Aquamoon by Bus Ride Daydream</a></iframe>
        <p className='p-[17px] w-[300px] md:w-[450px] m-auto font-ubuntu text-sm md:text-md  text-aboutbg'>Bus Ride Daydream is a side project by Spencer Carlson. This project is a sonic experiment mixing element of Pychadelic with Lo-Fi Hip Hop<br />
          The ultimate goal is both create the magical feeling of nostalgia that Lo-Fi Hip Hop eminates with the essence of surrealism hovering </p>
      </div>
      <div className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-center py-4 px-[17px] bg-navnametext'>
        {busrides.map((busride) => (
          <BusRideCard key={busride.id} {...busride} />
        ))}
      </div>
    </section>
  )
}

export default Busride