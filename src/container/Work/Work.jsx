import React from 'react'
import {useInView} from 'react-intersection-observer';
import { motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { images } from '../../constants'

import './Work.scss';

const Work = () => {

  const {ref, inView} = useInView({
    threshold: 0.16
  });

  const animationHeader = useAnimation();
  const animationProject1 = useAnimation();
  const animationProject2 = useAnimation();
  const animationProject3 = useAnimation();
  const animationProject4 = useAnimation();
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
      animationProject4.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.5
        }
      });
      animationArrow.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4, delay: 0.95
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
            type: 'spring', duration: 1.5, bounce: 0.23, delay: 0.2
          }
        });
        animationProject2.start({
          y: '100vw',
          opacity: 0,
          transition: {
            type: 'spring', duration: 1.5, bounce: 0.23, delay: 0.2
          }
        });
        animationProject3.start({
          y: '100vw',
          opacity: 0,
          transition: {
            type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
          }
        });
        animationProject4.start({
          y: '100vw',
          opacity: 0,
          transition: {
            type: 'spring', duration: 1.3, bounce: 0.23, delay: 0.2
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
  }, [inView, animationHeader, animationProject1, animationProject2, animationProject3, animationProject4, animationArrow]);


  return (
    <div ref={ref} className="app__work" id='work'>
      <div className='app__work-text'>
        <motion.div 
        animate = {animationHeader}>
          <h1>My Work</h1>
        </motion.div>
      </div>
      <div className ="app__work__container">
        <motion.div 
        animate = {animationProject1}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage1} alt="Collatz homepage"/>
            </div>
            <div className="work__item-text">
              <h2>Collatz</h2>
              <p>Collatz is a travel recommendation web app that gives users attractions, hotels, flights and more - based on a desired location, set budget and other user specifications.</p>
              <p>I built the frontend with React, using Google API for tracking users. The backend was written by a team of graduate students in Python, utilitizing several REST APIs to gather data.</p>
              <a href="https://github.com/CUBigDataClass/Collatz" className="btn" target="_blank">View Code</a>
            </div>
          </article>
        </motion.div>
        <motion.div 
        animate = {animationProject2}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage3} alt="412 Motorsport homepage"/>
            </div>
            <div className="work__item-text">
              <h2>412 Motorsport</h2>
              <p>412 Motorsport is an autoshop based in Los Angeles, California. I became friends with the owner of the shop, and ended up building his business a new online shop for ecommerce.</p>
              <p>The store was built and hosted using Shopify, written in Liquid & JavaScript. This website is still live and I work on it still work on it and update it occasionally.</p>
              <a href="https://412motorsport.com/" className="btn" target="_blank">View Site</a>
            </div>
          </article>
        </motion.div>
        <motion.div 
        animate = {animationProject3}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage4} alt="Spotify Advanced Search homepage"/>
            </div>
            <div className="work__item-text">
              <h2>Spotify Advanced Search </h2>
              <p>Spotify Advanced Search is a web app that allows users to generate songs based on song characteristics such as Acousticness, Energy, Valence - and more.</p>
              <p>Spotify Advanced Search was built using React, Spotify API, NodeJS and utilized a MongoDB database set up by teammates to keep track of user information.</p>
              <a href="" className="btn" target="_blank">View Code</a>
            </div>
          </article>
        </motion.div>
        <motion.div 
        animate = {animationProject4}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage2} alt="Covid Simulator graphs"/>
            </div>
            <div className="work__item-text">
              <h2>Covid Simulator</h2>
              <p>This project builds on an existing virus outbreak simulation to simulate the spread of COVID, introducing new factors to simulate the introduction of COVID-19 into a small population.</p>
              <p>This was done as a final research project for a class that handled the dynamic modelling of naturally occuring events. Made in Python with libraries such as Pandas, MatPlotLib and Mesa. </p>
              <a href="" className="btn" target="_blank">View Code</a>
            </div>
          </article>
        </motion.div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <motion.div 
      animate= {animationArrow}>
        <a href="#skills" class="arrow-container" alt="Go to skills section">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>  
        </a>
      </motion.div> 
    </div>
  )
}

export default Work