import React from 'react'
// import { shows } from '../../constants/constants';
// import ShowCard from '../../components/ShowCard';
const News = () => {
  return (
    <section className="bg-mediabg bottom-0 h-[100vh]" id="news">
      <div className='flex flex-col items-center justify-center'>

          <h1 className='text-center font-bungee text-7xl py-3 text-aboutbg'>NEXT SHOWS:</h1>
          {/* <section className='max-w-[1024px] flex flex-col md:flex-row m-auto'>
          {shows.map((show) => (
            <ShowCard key={show.id} {...show} />
          ))}
        </section> */}
          <p className="font-climate text-center text-5xl py-12">No shows right now!</p>
        </div>
   
    </section>
  )
}

export default News