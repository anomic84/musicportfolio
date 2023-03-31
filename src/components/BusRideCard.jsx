import React from 'react'

const BusRideCard = ({ title, image, imagealt, link }) => {
    return (
        <div className='flex flex-col items-center py-2 '>
            <div className='flex justify-center'>
                <a href={link}
                    target="_blank"
                    rel="noopener noreferrer" >
                    <img src={image}
                        alt={imagealt}
                        className="px-2 m-auto  drop-shadow-lg hover:blur-sm" />
                </a>
            </div>
            <a href={link}
                target="_blank"
                rel="noopener noreferrer">
                <h1 className="font-titan text-busride text-xl">{title}</h1>
            </a>
        </div>
    )
}

export default BusRideCard