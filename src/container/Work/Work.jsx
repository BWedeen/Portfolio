import React from 'react'
import {useInView} from 'react-intersection-observer';
import {animate, motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import ProjectImage1 from '../../assets/portfolio1.png';
import ProjectImage2 from '../../assets/portfolio4.png';
import ProjectImage3 from '../../assets/portfolio3.png';
import ProjectImage4 from '../../assets/portfolio2.png';

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
    };
  }, [inView]);


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
              <img src={ProjectImage1} alt=""/>
            </div>
            <div className="work__item-text">
              <h2>Collatz</h2>
              <p>Collatz is a travel recommendation web app that gives users attractions, hotels, flights and more - based on a desired location, set budget and other user specifications.</p>
              <p>I built the frontend with React, using Google API for tracking users. The backend was written by a team of graduate students in Python, utilitizing several REST APIs to gather data.</p>
              <a href="" className="btn" target="_blank">View Code</a>
            </div>
          </article>
        </motion.div>
        <motion.div 
        animate = {animationProject2}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={ProjectImage3} alt=""/>
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
              <img src={ProjectImage2} alt=""/>
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
              <img src={ProjectImage4} alt=""/>
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
    </div>
  )
}

export default Work