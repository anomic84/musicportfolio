import React from 'react'

const About = () => {
    return (
        <div className="bg-slate-900">
            <div>
                <p className="text-sm leading-6 font-ubuntu text-bold text-navtext px-3 py-4 text-center">
                    Spencer Carlson is a Singer-Songwriter based out of Seattle Washington. Lyrically mused by desire, depression and anxiety, while finding hope and relief, he sings over a bed of carefully chosen chords or arpeggiated progressions. He combines the feel of influences like Nick Drake, Elliott Smith, and Thurston Moore into songs that sound original and unique.
                    <br /><br />
                    Northwest Folklife Festival 2015
                    <br /><br />
                    Opened for the Posies 2016
                    <br /><br />
                    Northwest Folklife Festival 2022
                    <br /><br />
                    Northwest Folklife Festival 2023
                </p>
            </div>
            <div className="flex flex-col justify-center ">
                    <div className="px-[17px]">
                        <img src="https://i.imgur.com/EoLSRLZ.jpg" alt="Opening for the Posies" className="w-full " />
                    </div>
                    <div className="inline-grid grid-cols-2 gap-[5px] px-[17px] py-[5px]ç">
                        <img src="https://i.imgur.com/4kOkZTt.jpg" alt="" className="" />
                        <img src="https://i.imgur.com/QZ5sVsU.jpg" alt="" className=""/>
                        <img src="https://i.imgur.com/ziYymGX.jpg" alt="" className=""/>
                        <img src="https://i.imgur.com/JwVKc6w.jpg" alt="" className=""/>
                    </div>
            </div>
        </div>
    )
}

export default About
