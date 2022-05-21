import React from 'react'
import {useInView} from 'react-intersection-observer';
import {animate, motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import './Contact.scss';

const Contact = () => {
  const {ref, inView} = useInView({
    threshold: 0.20
  });

  const animationHeader = useAnimation();

  useEffect (() => {
    if(inView) {
      animationHeader.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.1
        }
      });
    }
    
    if(!inView) {
      animationHeader.start({
        x: '-100vw',
        opacity: 0,
        transition: {
          type: 'spring', duration: 2
        }});
    };
  }, [inView]);

  return (
    <div className="app__contact-container" id='contact'>
      <div ref = {ref} className='app__contact-text'>
        <motion.div 
        animate = {animationHeader}> 
          <h1>Contact Me</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact