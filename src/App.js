import React from 'react'
import { Busride, Contact, Footer, Hero, Media, Navbar, News, About, Production } from './containers'
import './app.css'

const App = () => {
    return (
        <div className="text-primary font-climate md:font-mono sm:font-sans">
            <div className="bggradienthero md:h-screen">
                <Navbar />
                <Hero />
            </div>
            <About/>
            <News />
            <Media />
            <Busride />
            <Production/>
            <Contact />
            <Footer />
        </div>
    )
}

export default App