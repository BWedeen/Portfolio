import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants'
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/benjaminwedeen540/")
  }

  const handleGitHub = () => {
    window.open("https://github.com/BWedeen")
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-namelogo">
         <img src={images.nameLogo} alt="nameLogo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul> 
      
      <div className = "socialIcon-container">
        <div className = "socialIcon" onClick={handleLinkedIn} href="https://linkedin.com">
          <AiFillLinkedin size = "2.5rem"/>
        </div>
        <div className = "socialIcon" onClick={handleGitHub} href="https://github.com">
          <AiFillGithub size = "2.5rem"/>
        </div>
      </div> 

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          
          {toggle && (
            <motion.div
              whileInView={{x : [300, 0]}}
              transition={{ duration: 0.3, ease: 'easeOut'}}
            >
              
              <HiX onClick={() => setToggle(false)}/>
              <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul> 
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar