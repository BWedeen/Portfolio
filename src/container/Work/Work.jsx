import React from 'react'
import {useInView} from 'react-intersection-observer';
import {animate, motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import './Work.scss';

const Work = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animationHeader = useAnimation();

  useEffect (() => {
    console.log("use eff hook inView = ", inView)
    if(inView) {
      animationHeader.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.1
        }
      });
    }
    
    if(!inView) {
      animationHeader.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2
        }})
    };
  }, [inView]);


  return (
    <div className="app__work" id='work'>
      <div ref={ref} className='app__work-text'>
        <motion.div 
        animate = {animationHeader}>
          <h1>My Work</h1>
        </motion.div>
      </div>
      
    </div>
    
  )
}

export default Work