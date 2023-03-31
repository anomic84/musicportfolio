import React from 'react'

const ShowCard = ({ title, image, imagealt, location, date, time }) => {
    return (
        <div className="flex p-[17px] items-start justify-between mx-[17px] mb-[17px]  gap-3
        md:flex-col flex-wrap">
            <div className='flex-1 bg-cyan-100 p-2 shadow-lg rounded'>
                <img className=' 'src={image} alt={imagealt} />
            </div>
            <div className='flex-1 '>
                <h1 className='font-ubuntu text-cyan-600 md:text-2xl'>{title}</h1>
                <p className='font-ubuntu text-aboutbg text-sm md:text-lg'>{location}</p>
                <p className='font-ubuntu text-aboutbg text-xs md:text-lg'>{date}</p>
                <p className='font-ubuntu text-aboutbg text-xs md:text-lg'>{time}</p>
            </div>
        </div>
    )
}

export default ShowCard