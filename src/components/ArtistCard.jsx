import React from 'react'

const ArtistCard = ({ name, title, description, image, imagealt, tidal, spotify, youtube, bandcamp }) => {
    return (
        <div className='flex flex-col sm:flex-row px-[17px] sm:py-[17px] md:w-[80%] max-w-[1024px]'>
            <img className='shadow-lg sm:shadow-none sm:h-[40%] sm:w-[45%] md:h-[30%] md:w-[30%] sm:mr-2' src={image} alt={imagealt} />
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='font-ubuntu font-bold text-lg text-busride'>{name} - {title}</h1>
                    <br className='sm:hidden' />
                    <p className='font-ubuntu text-sm sm:text-md md:text-lg leading-6'>{description}</p>
                </div>
                <div className='flex flex-row justify-start items-center'>
                    <div className=''>{tidal
                        ? (
                            <a target="_blank" rel="noopener noreferrer" href={tidal} ><button className='mr-5 my-5 px-7 py-2 border-[3px] border-busride text-busride  text-center font-ubuntu '>
                                Tidal</button></a>)
                        : ''}</div>
                    <div className=''>{spotify
                        ? (
                            <a target="_blank" rel="noopener noreferrer" href={spotify}><button className='mr-5 my-5 px-7 py-2 border-[3px] border-busride text-busride  text-center font-ubuntu'>
                                Spotify</button></a>)
                        : ''}
                    </div>
                    <div className=''>{youtube
                        ? (
                            <a target="_blank" rel="noopener noreferrer" href={youtube}><button className='mr-5 my-5 px-7 py-2 border-[3px] border-busride text-busride  text-center font-ubuntu'>
                                Youtube</button></a>)
                        : ''}
                    </div>
                    <div className=''>{bandcamp
                        ? (
                            <a target="_blank" rel="noopener noreferrer" href={bandcamp}><button className='mr-5 my-5 px-7 py-2 border-[3px] border-busride text-busride  text-center font-ubuntu'>
                                Bandcamp</button></a>
                        )
                        : ''}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ArtistCard