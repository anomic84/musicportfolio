import React from 'react'

const About = () => {
    return (
        <div className="bg-slate-900 py-10">
            <h1 className="text-[2.5rem] lg:text-[4rem] text-center text-navnametext font-euph md:tracking-[-0.04em]">"...Clever, Quirky..."</h1>

            <div className="flex justify-center">
                <p className="text-sm lg:text-md leading-6 font-ubuntu text-bold text-navtext px-[17px] py-4 text-center max-w-[700px] justify-center">
                    Spencer Carlson is a Singer-Songwriter based out of Seattle Washington. Lyrically mused by desire, depression and anxiety, while finding hope and relief, he sings over a bed of carefully chosen chords or arpeggiated progressions. He combines the feel of influences like Nick Drake, Elliott Smith, and Thurston Moore into songs that sound original and unique.
                    <br /><br />
                    <span className="text-navnametext">Northwest Folklife Festival 2015</span>
                    <br /><br />
                    <span className="text-navnametext">Opened for the Posies 2016</span>
                    <br /><br />
                    <span className="text-navnametext">Northwest Folklife Festival 2022</span>
                    <br /><br />
                    <span className="text-navnametext">Northwest Folklife Festival 2023</span>
                </p>
            </div>
            <div className="flex flex-col ">
                <div className="px-[17px] max-w-[960px] mx-auto">
                    <img src="https://i.imgur.com/EoLSRLZ.jpg" alt="Opening for the Posies" className="w-full drop-shadow-lg" />
                    <p className="text-[8px] font-ubuntu text-navtext">Picture taken by <a className="text-[10px]  text-navnametext cursor-pointer " href="https://flickr.com/photos/115479516@N05?fbclid=IwAR1Jao9SkkKj249IZObK41ujkspADim5eiUDsMvL5mYjPEWte80HqrpUUgw">
                        Andrew Kvenvolden</a></p>
                </div>
                {/* for monitors and larger */}
                <div className="inline-grid grid-cols-2 lg:grid-cols-4 gap-[5px] px-[17px] py-[5px] mx-auto max-w-[960px]">
                    <div>
                        <img src="https://i.imgur.com/4kOkZTt.jpg" alt="" className="max-h-[320px] drop-shadow-lg" />
                        <p className="hidden lg:block text-[8px] font-ubuntu text-navtext">Pictures taken by <span className="text-[10px]  text-navnametext cursor-pointer">James Toohey</span></p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/QZ5sVsU.jpg" alt="" className="max-h-[320px] drop-shadow-lg" />
                        <p></p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/ziYymGX.jpg" alt="" className="max-h-[320px] drop-shadow-lg" />
                        <p className="hidden lg:block text-[8px]  font-ubuntu text-navtext">Picture taken by <a className="text-[10px]  text-navnametext cursor-pointer" href="http://www.iamwonder.net/?fbclid=IwAR1LYKKFhxS4Ny5NrdxQgtJHvtMGc0xCRmPH4nn-48V-tPNFoWVHVPo9Uzs">
                            Wonder Wood</a></p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/JwVKc6w.jpg" alt="" className="max-h-[320px] drop-shadow-lg" />
                        <p className="hidden lg:block text-[8px] font-ubuntu text-navtext">Picture taken by <a className="text-[10px]  text-navnametext cursor-pointer " href="https://flickr.com/photos/115479516@N05?fbclid=IwAR1Jao9SkkKj249IZObK41ujkspADim5eiUDsMvL5mYjPEWte80HqrpUUgw">
                            Andrew Kvenvolden</a></p>
                    </div>
                </div>
                {/* for tablets and mobile */}
                <ol className="px-[17px] sm:flex m-auto lg:hidden">
                    <li className="text-[8px] px-5  font-ubuntu text-navtext">Pictures 1 & 2 taken by <span className="text-[10px]  text-navnametext cursor-pointer">James Toohey</span></li>
                    <li className="text-[8px] px-5  font-ubuntu text-navtext">Picture 3 taken by <a className="text-[10px]  text-navnametext cursor-pointer" href="http://www.iamwonder.net/?fbclid=IwAR1LYKKFhxS4Ny5NrdxQgtJHvtMGc0xCRmPH4nn-48V-tPNFoWVHVPo9Uzs">
                        Wonder Wood</a></li>
                    <li className="text-[8px] px-5  font-ubuntu text-navtext">Picture 4 taken by <a className="text-[10px]  text-navnametext cursor-pointer " href="https://flickr.com/photos/115479516@N05?fbclid=IwAR1Jao9SkkKj249IZObK41ujkspADim5eiUDsMvL5mYjPEWte80HqrpUUgw">
                        Andrew Kvenvolden</a></li>
                </ol>
            </div>
        </div>
    )
}

export default About
