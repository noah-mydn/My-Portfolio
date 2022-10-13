import React from 'react'
import './home.css';
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import homeImg from './my-portfolio/images/yadanar.png';

export default function Home() {

  return (
        <motion.div className='row row-cols-lg-2 main_home' id='home'
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}>
          {/* Introduction Text */}
            <div className='intro-text d-flex flex-column align-items-center text-center'>
                <h1 className='text-intro'>
                  Hi there, I'm
                    <TypeAnimation
                        className='name_role'
                        cursor={true}
                        sequence={[ ' May Yadanar',2000,
                        ' Web Developer',2000,]}
                        speed={60}
                        repeat={Infinity}
                    />
                </h1>
                <small className='short_intro'>
                An undergraduate Computer Science student looking for junior-level web development roles 
                to make use of her web programming knowlege
                </small>  
            </div>

            {/* My Image */}
            <div className='img-container'>
                <img src={homeImg} className='yadanar'
                alt="My Image - May Yadanar"/>
            </div>
        </motion.div>
  )
}
