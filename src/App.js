import React from 'react'
import { Busride, Contact, Footer, Hero, Media, Navbar, News, About } from './containers'
import './app.css'

const App = () => {
    return (
        <div className="text-primary font-climate md:font-mono sm:font-sans">
            <div className="">
                <Navbar />
                <Hero />
            </div>
            <About/>
            <Media />
            <Busride />
            <News />
            <Contact />
            <Footer />
        </div>
    )
}

export default App