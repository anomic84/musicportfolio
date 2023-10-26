import React from 'react'
import { Busride, Contact, Footer, Hero, Media, Navbar, News, About, Production } from './containers'
import './index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div className='max-h-[100vh]'>

                <Navbar />



                <Routes>
         
                        <Route path='/' exact element={<Hero />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/media' element={<Media />} />
                        <Route path='/busride' element={<Busride />} />
                        <Route path='/productions' element={<Production />} />
                        <Route path='/contact' element={<Contact />} />
           
                </Routes>



                <Footer />


            </div>
        </Router >
    )
}

export default App