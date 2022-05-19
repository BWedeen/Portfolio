import React from 'react'
import {useInView} from 'react-intersection-observer';
import {animate, motion} from 'framer-motion'; 
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import ProjectImage1 from '../../assets/portfolio1.png';
import ProjectImage2 from '../../assets/portfolio1.png';
import ProjectImage3 from '../../assets/portfolio3.png';
import ProjectImage4 from '../../assets/portfolio1.png';

import './Work.scss';

const Work = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });

  const animationHeader = useAnimation();
  const animationProject1 = useAnimation();
  const animationProject2 = useAnimation();
  const animationProject3 = useAnimation();
  const animationProject4 = useAnimation();

  useEffect (() => {
    console.log("use eff hook inView = ", inView)
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
              <p>412 Motorsport is an autoshop based in Los Angeles, California. I befriended the owners of the shop, and ended up building them a new online shop for ecommerce.</p>
              <p>The store was built and hosted using Shopify, written in Liquid & JavaScript. This is the first professional work I completed in my computer science career, and I still work on it today.</p>
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
              <p>The frontend of Spotify Advanced Search was built using NodeJS and React with Spotify API, while the backend utilized a MongoDB database.</p>
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
              <p>Collatz is a travel recommendation web app that gives users attractions, hotels, flights - and more - based on a desired location, set budget and other user specifications.</p>
              <p>The frontend of Collatz was built to be fully responsive using React, while the backend relied on Python scripts and several different REST APIs.</p>
              <a href="" className="btn" target="_blank">View Code</a>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Work