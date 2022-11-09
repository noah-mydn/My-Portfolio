import React from 'react'
import './about.css'
import {motion} from 'framer-motion'

export default function About() {

  return (
    <motion.div className='row'
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}>
      <div id='about' className='about_container'>
        <h3 className='text-center'>About Me</h3>
        <div className='about'>
            <div className='img-container'>
              <img src='./mayyadanar/yadanar.jpeg' id='my_about_img' alt="Image-May Yadanar"/>
            </div>
            <div className='about_card'>
                <p className='about_info'>
                  <span className='hello'>Hello  </span><br/>
                  I'm a self-motivated junior front-end web developer. 
                  Mainly, I develop websites using one of the JavaScript libraries, React. Currently, I'm looking for full-time remote 
                  front-end developer roles to apply my knowledge in a practical environment 
                  where I could cultivate my skills to gain more experience for better career advancement.
                </p>
                <a href='./mayyadanar/resume.pdf' download='May Yadanar Resume'>
                  <button className='download' value='download'>Download CV</button>
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  )
}
