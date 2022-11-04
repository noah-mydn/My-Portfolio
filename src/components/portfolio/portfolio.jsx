import React from 'react'
import './portfolio.css'
import {motion} from 'framer-motion'
import {Card,CardTitle,CardBody,Button} from 'reactstrap';

export default function Portfolio() {
  const [showDemoBtn,setShowDemoBtn] = React.useState(false);

  return (
    <motion.div id='portfolio' className='portfolio row'
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}>
        <div className='project_cards'>
              <Card className='cardView'>
                <img src='./mayyadanar/space-tourism.png'
                className='img-fluid' alt='Space-Tourism-website'/>
                <CardBody>
                  <CardTitle className='h3 text-center space-8'>
                    Space Tourism 
                  </CardTitle>
                  <div className='codeLang'>
                    <div className='btn-lang'>React</div>
                    <div className='btn-lang'>Bootstrap</div>
                  </div>
                </CardBody>
                <div className='overlay' onMouseOver={()=>setShowDemoBtn(true)} onMouseLeave={()=>setShowDemoBtn(false)}>
                    {showDemoBtn && <a className='viewDemo' 
                    target='_blank' href='https://noah-space-tourism.netlify.app/'>
                     &#60; View Demo /&#62;</a>}
                </div>
              </Card>
        </div>
    </motion.div>
  )
}
