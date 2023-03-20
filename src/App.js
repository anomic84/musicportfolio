import React from 'react'
import { Busride, Contact, Footer, Hero, Media, Navbar, News } from './containers'
import './app.css'

const App = () => {
    return (
        <div className="text-primary font-climate md:font-mono sm:font-sans">
            <Navbar/>
            <Hero/>
            <Media/>
            <Busride/>
            <News/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App