import React from 'react'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import {Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence >
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </AnimatePresence>
  
  )
}
