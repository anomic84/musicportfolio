import React from 'react'
import { shows } from '../../constants/constants';
import ShowCard from '../../components/ShowCard';
const News = () => {
  return (
    <section className="bg-mediabg bottom-0 h-[88vh]" id="news">
      <div>
        <h1 className='text-center font-bungee text-7xl pb-3 text-aboutbg'>NEXT SHOWS:</h1>
        <section className='max-w-[1024px] flex flex-col md:flex-row m-auto'>
          {shows.map((show) => (
            <ShowCard key={show.id} {...show} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default News