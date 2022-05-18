import React from 'react'
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {animate, motion} from 'framer-motion'; 
import {useInView} from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import './About.scss';

const About = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animationHeader = useAnimation();
  const animationSubtext1 = useAnimation();
  const animationSubtext2 = useAnimation();
  const animationSubtext3 = useAnimation();
  const animationButton = useAnimation();
  const animationArrow = useAnimation();

  useEffect (() => {
    console.log("use eff hook inView = ", inView)
    if(inView) {
      animationHeader.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.01
        }
      });

      animationSubtext1.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.20, delay: 0.14
        }
      });

      animationSubtext2.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.15, delay: 0.18
        }
      });

      animationSubtext3.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.10, delay: 0.23
        }
      });

      animationButton.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.1, delay: 0.4
        }
      });

      animationArrow.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1, delay: 3, delay: 0.6
        }
      });
    }
    
    if(!inView) {
      animationHeader.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2
        }
      });
      
      animationSubtext1.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 1
        }
      });

      animationSubtext2.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2
        }
      });

      animationSubtext3.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2
        }
      });

      animationButton.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2
        }
      });

      animationArrow.start({
        y: '-10vw',
        opacity: -0.1,
        transition: {
          duration: 1, delay: 0
        }
      });
    };
  }, [inView]);

  const handleResume = () => {
    window.open("https://i.imgur.com/sL9RnNU.png")
  }

  return (
    <div className="app__about-container">
      <div className="app__about" id='about'>
        <div ref={ref} className="app__about-text" >
          <motion.div 
          animate = {animationHeader}>
            <h1>
              About Me
            </h1>
          </motion.div>
          <motion.div 
          animate = {animationSubtext1}>
            <p>
              Hello! My name is Ben Wedeen and I am a 22 year old studying computer science who likes making cool things. 
            </p>
          </motion.div>
          <motion.div 
          animate = {animationSubtext2}>
            <p>
              I enjoy the challenge of creating intuitive & useful applications using the newest tools and technology, and am currently applying to become a software developer at a well established company. 
              I coded this portfolio to showcase my favorite projects to potential employers.
            </p>
          </motion.div>
          <motion.div 
          animate = {animationSubtext3}>
            <p>
              Thank you for taking the time to check out my portfolio. Feel free to contact me with any questions about myself or any of my work! 
              If you haven't yet viewed my formal resume, please feel free to do so by clicking the button below!  
            </p>
          </motion.div>
          <motion.div 
          animate = {animationButton}>
            <div className='button-resume' onClick={handleResume}>VIEW RESUME</div>
          </motion.div>
        </div>

      

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon  icon={faJava} color="#5382a1"/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D2A" />
            </div>
          </div>
        </div>
      </div>  

      <motion.div 
      animate= {animationArrow}>
         <a href="#work" class="arrow-container">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>  
        </a>
      </motion.div>
    </div>
  )
}

export default About