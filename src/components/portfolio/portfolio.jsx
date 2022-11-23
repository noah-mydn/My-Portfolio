import React from 'react'
import './portfolio.css'
import { PROJECTS } from './projects';
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
              {PROJECTS.map((project)=> (
                  <Card className='cardView' key={project.id}>
                    <img src={project.image}
                    className='img-fluid' alt={project.title}/>
                    <CardBody>
                      <CardTitle className='h5 text-center space-3'>
                        {project.title} 
                      </CardTitle>
                        <div className='codeLang'>
                          <div className='btn-lang'>{project.codeLang}</div>
                          <div className='btn-lang'>{project.framework}</div>
                        </div>
                      </CardBody>
                      <div className='overlay' onMouseOver={()=>setShowDemoBtn(true)} onMouseLeave={()=>setShowDemoBtn(false)}>
                          {showDemoBtn && <a className='viewDemo' 
                          target='_blank' href={project.demoLink}>
                          &#60; View Demo /&#62;</a>}
                      </div>
              </Card>
              ))}
        </div>
    </motion.div>
  )
}
