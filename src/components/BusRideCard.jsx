import React from 'react'

const BusRideCard = ({ title, image, imagealt, link }) => {
    return (
        <div className='flex flex-col justify-center items-center py-2 card'>
            <div className='flex justify-center'>
                <a href={link}
                    target="_blank"
                    rel="noopener noreferrer" >
                    <img src={image}
                        alt={imagealt}
                        className="px-2 max-h-[320px] m-auto drop-shadow-lg" />
                </a>
            </div>
            <a href={link}
                target="_blank"
                rel="noopener noreferrer">
                <h1 className="font-titan text-busride text-sm whitespace-pre sm:text-xl">{title}</h1>
            </a>
        </div>
    )
}

export default BusRideCard