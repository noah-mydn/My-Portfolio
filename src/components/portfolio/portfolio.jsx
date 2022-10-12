import React from 'react'
import './portfolio.css'
import {motion} from 'framer-motion'

export default function Portfolio() {
  return (
    <motion.div id='portfolio' className='portfolio row'
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}>
        <div className='project_cards'>
            <h1 className='text-center'>Coming Soon...</h1>
        </div>
    </motion.div>
  )
}
