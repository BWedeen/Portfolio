import React from 'react'
import {useInView} from 'react-intersection-observer';
import {animate, motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import emailjs from '@emailjs/browser';

import './Contact.scss';

const Contact = () => {
  const {ref, inView} = useInView({
    threshold: 0.20
  });

  const animationHeader = useAnimation();
  const animationTextInput = useAnimation();
  const animationTextArea = useAnimation();
  const animationButton= useAnimation();
  const animationArrow = useAnimation();

  useEffect (() => {
    if(inView) {
      animationHeader.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.1
        }
      });
      animationTextInput.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.3
        }
      });
      animationTextArea.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.4
        }
      });
      animationButton.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4, delay: 1.2
        }
      });
      animationArrow.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4, delay: 1.2
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
        animationTextInput.start({
          x: '-100vw',
          opacity: 0,
          transition: {
            type: 'spring', duration: 2
        }});
        animationTextArea.start({
          y: '100vw',
          opacity: 0,
          transition: {
            type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
          }
        });
        animationButton.start({
          y: '-5vw',
          opacity: 0,
          transition: {
            duration: 0.3, delay: 0
          }
        });
        animationArrow.start({
          y: '-5vw',
          opacity: 0,
          transition: {
            duration: 0.3, delay: 0
        }
      });
    };
  }, [inView, animationHeader, animationTextInput, animationTextArea, animationButton,animationArrow]);

  return (
    <div className="app__contact-container" id='contact'>
      <div ref = {ref} className='app__contact-text'>
        <motion.div 
        animate = {animationHeader}> 
          <h1>Contact Me</h1>
        </motion.div>
      </div>
      
      <div className='app__contact-form'>
        <form>
        <motion.div 
        animate= {animationTextInput}>
          <div className='app__contact-form-input-row'>
            <label class="input">
              <input class="input__field" type="text" placeholder=" " />
              <span class="input__label">Name</span>
            </label>
            <label class="input">
              <input class="input__field" type="text" placeholder=" " />
              <span class="input__label">Email Address</span>
            </label>
          </div>
          </motion.div>
          <motion.div 
        animate= {animationTextInput} >
          <label class="textarea">
            <textarea class="textarea__field" placeholder=" "/>
            <span class="textarea__label">Message</span>
          </label>
          </motion.div>
          <motion.div 
          animate= {animationArrow}>
            <button type="submit">Send</button>
          </motion.div>
        </form>
      </div>
      <div className='app__contact-arrow-container'>
        <motion.div 
        animate= {animationArrow}> 
          <a href="#home" class="skills-arrow-container" alt="Go back to top">
              <div class="arrow"></div>
              <div class="arrow"></div>
              <div class="arrow"></div>  
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact