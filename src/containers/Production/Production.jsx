import React from 'react'
import {artists} from '../../constants/constants'
import ArtistCard from '../../components/ArtistCard'
const Production = () => {
    return (
        <section className='bg-navnametext'>
            <div>
                <h1 className='text-center font-bungee text-busride text-4xl lg:text-5xl xl:text-7xl px-[17px] pb-3'>PRODUCED BY SPENCER CARLSON</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} {...artist} />
                ))}
            </div>
        </section>
    )
}

export default Production