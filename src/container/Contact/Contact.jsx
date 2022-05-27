import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { send } from 'emailjs-com';

import './Contact.scss';

const Contact = () => {

  const[sender_name, set_sender_name] = useState('');
  const[sender_email, set_sender_email] = useState('');
  const[message, set_message] = useState('');

  const handleName = (e) => {
    set_sender_name(e.target.value);
  }

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  }

  const handleMessage = (e) => {
    set_message(e.target.value);
  }

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_2s4zkgi',
      'template_9rtzpqf',
      {sender_name, sender_email, message},
      'RKZIhi3DSThZonsQg'
    )
    .then((response) => {
      console.log('Message sent successfully', response.status, response.text)
    })
    .catch((err)=> {
      console.log('Failed to send message', err)
    })
    set_sender_name('');
    set_sender_email('');
    set_message('');
  }

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
          type: 'spring', duration: 0.8, bounce: 0.23, delay: 0.1
        }
      });
      animationTextInput.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 0.8, bounce: 0.23, delay: 0.3
        }
      });
      animationTextArea.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 0.8, bounce: 0.23, delay: 0.4
        }
      });
      animationButton.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3, delay: 0.9
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
          x: '-100vw',
          opacity: 0,
          transition: {
            type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
          }
        });
        animationButton.start({
          y: '-1vw',
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
        <form onSubmit={sendMail}>
          <motion.div 
          animate= {animationTextInput}>
            <div className='app__contact-form-input-row'>
              <label class="input">
                <input class="input__field" name="sender_name" value={sender_name} onChange={handleName} type="text" required placeholder=" " />
                <span class="input__label" >Name</span>
              </label>
              <label class="input">
                <input class="input__field" name="sender_email" value={sender_email} onChange={handleEmail} type="text" required placeholder=" " />
                <span class="input__label">Email Address</span>
              </label>
            </div>
          </motion.div>
          <motion.div 
          animate= {animationTextArea} >
            <label class="textarea">
              <textarea class="textarea__field" name="message" value={message} onChange={handleMessage} required placeholder=" "/>
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