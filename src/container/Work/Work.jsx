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
        <motion.div animate = {animationProject1}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage0} alt="Crypto Pub homepage"/>
            </div>
            <div className="work__item-text">
              <h2>Crypto Pub</h2>
              <p>Crypto Pub is a fully responsive web application that gives users detailed information on all cryptocurrencies, and allows them to add any crypto to their personal watchlist.</p>
              <p>This was a personal passion project I created using React and Coingecko's API for frontend processes, as well as Google's Firebase for the backend database to store user info.</p>
              <a href="https://cryptopub.netlify.app/" className="btn" target="_blank" rel="noreferrer" style={{marginRight: "20px"}}>Live Site</a>
              <a href="https://github.com/BWedeen/crypto-pub" className="btn" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </article>
        </motion.div>
        <motion.div animate = {animationProject2}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage1} alt="Collatz homepage"/>
            </div>
            <div className="work__item-text">
              <h2>Collatz</h2>
              <p>Collatz is a fully responsive travel recommendation web app that gives users attractions, hotels, flights and more - based on a desired location, set budget and other user specifications.</p>
              <p>I built the frontend with React, using Google API for tracking users. The backend was written by a team of graduate students in Python, using several popular REST APIs to gather data.</p>
              <a href="https://github.com/CUBigDataClass/Collatz" className="btn" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </article>
        </motion.div>
        <motion.div animate = {animationProject3}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage3} alt="412 Motorsport homepage"/>
            </div>
            <div className="work__item-text">
              <h2>412 Motorsport</h2>
              <p>412 Motorsport is an autoshop based in Los Angeles, California. I became friends with the owner of the shop, and ended up building his business a new online shop for ecommerce.</p>
              <p>The store was built and hosted using Shopify. This website is still live and I do occasional updates on it for the owner.</p>
              <a href="https://412motorsport.com/" className="btn" target="_blank" rel="noreferrer">View Site</a>
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
              <p>Spotify Advanced Search was built using React, Spotify API, NodeJS and a Mongo database to keep track of user information.</p>
              <a href="https://github.com/Larjun/Advanced-Spotify-Search" className="btn" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </article>
        </motion.div>
        <motion.div animate = {animationProject4}>
          <article className='work__item'>
            <div className="work__item-image">
              <img src={images.ProjectImage2} alt="Covid Simulator graphs"/>
            </div>
            <div className="work__item-text">
              <h2>Covid Simulator</h2>
              <p>This project builds on an existing virus outbreak simulation to simulate the spread of COVID, introducing new factors to simulate the introduction of COVID-19 into a small population.</p>
              <p>This was done as a final research project for a class that handled the modeling of naturally occuring events. Made in Python with libraries such as Pandas, MatPlotLib and Mesa. </p>
              <a href="https://github.com/BWedeen/COVID-Simulator" className="btn" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </article>
        </motion.div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <motion.div animate= {animationArrow}>
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