import React from 'react'
import { faCss3, faGitAlt, faJava, faJsSquare, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './About.scss';

const About = () => {

  return (
    <div className="app__about" id='about'>
      <div className="app__about-text" >
        <h1>
          About Me
        </h1>
        <p>
          Hello! My name is Ben Wedeen and I am a 22 year old student studying computer science with a passon for creating interesting things on the internet. 
          I made this portfolio to showcase my coolest projects to friends as well as potential employers.
        </p>
        <p>
          I love the challenge of creating intuitive & useful applications using modern development tools, and aspire to become a full stack developer at a well established company.
        </p>
        <p>
          Thank you for taking the time to check out my portfolio. Feel free to contact me with any questions about myself or any of my work! 
          If you haven't yet viewed my formal resume, please feel free to do so by clicking the button below!  
        </p>
        <div className='button-resume'>VIEW RESUME</div>
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
  )
}

export default About