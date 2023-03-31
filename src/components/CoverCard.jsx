import React from 'react'

const CoverCard = ({ image, imagealt, link }) => {
    return (
        <div >
            <div >
                <a href={link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={image}
                        alt={imagealt}
                        className="max-h-[320px] drop-shadow-lg hover:blur-sm" />
                </a>
            </div>
        </div>
    )
}

export default CoverCard