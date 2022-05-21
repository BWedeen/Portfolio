import React from 'react'
import {useInView} from 'react-intersection-observer';
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {animate, motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { images } from '../../constants';

import './Skills.scss';

const Skills = () => {
  const {ref, inView} = useInView({
    threshold: 0.20
  });

  const animationHeader = useAnimation();
  const animationProject1 = useAnimation();
  const animationProject2 = useAnimation();
  const animationProject3 = useAnimation();

  useEffect (() => {
    if(inView) {
      animationHeader.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.1
        }
      });
      animationProject1.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
        }
      });
      animationProject2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.3
        }
      });
      animationProject3.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.4
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
      animationProject1.start({
        y: '100vw',
        opacity: 0,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
        }
      });
      animationProject2.start({
        y: '100vw',
        opacity: 0,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
        }
      });
      animationProject3.start({
        y: '100vw',
        opacity: 0,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
        }
      });
    };
  }, [inView]);

  return (
    <div ref = {ref} className="app__skills-container" id='skills'>
      <div className='app__skills-text'>
        <motion.div 
        animate = {animationHeader}> 
          <h1>My Skills</h1>
        </motion.div>
      </div>
      <div className ="app__skills__container">
        <motion.div 
        animate = {animationProject1}>
          <article className='skills__item'>
            <div className="skills__item-text">
              <h2>Frontend</h2>
              <p>- JavaScript</p>
              <p>- React</p>
              <p>- HTML5</p>
              <p>- CSS</p>
              <p>- Sass</p>
            </div>
            <div className='skills__item-image'>
              <img src={images.javascript} alt="Javascript Logo"/>
              <img src={images.react} alt="React Logo"/>
              <img src={images.html} alt="Html Logo"/>
              <img src={images.css} alt="Css Logo"/>
            </div>
          </article>
        </motion.div>
        <motion.div 
        animate = {animationProject2}>
          <article className='skills__item'>
            <div className="skills__item-text">
              <h2>Backend</h2>
              <p>- Java</p>
              <p>- Python</p>
              <p>- Scala</p>
              <p>- C++</p>
              <p>- MySQL</p>
              <p>- MongoDB</p>
            </div>
            <div className='skills__item-image'>
              <img src={images.python} alt="Python Logo"/>
              <img src={images.javascript} alt="Java Logo"/>
              <img src={images.cpp} alt="C++ Logo"/>
              <img src={images.css} alt="MongoDB Logo"/>
            </div>
          </article>
        </motion.div>
        <motion.div 
        animate = {animationProject3}>
          <article className='skills__item'>
            <div className="skills__item-text">
              <h2>Other Tools</h2>
              <p>- Git</p>
              <p>- GitHub</p>
              <p>- Agile</p>
            </div>
            <div className='skills__item-image'>
              <img src={images.git} alt="Git Logo"/>
              <img src={images.react} alt="Github Logo"/>
              <img src={images.html} alt="Agile Logo"/>
              <img src={images.css} alt=""/>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills