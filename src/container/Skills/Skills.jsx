import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { images } from "../../constants";

import "./Skills.scss";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animationHeader = useAnimation();
  const animationProject1 = useAnimation();
  const animationProject2 = useAnimation();
  const animationProject3 = useAnimation();
  const animationArrow = useAnimation();

  useEffect(() => {
    if (inView) {
      animationHeader.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.1,
        },
      });
      animationProject1.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.2,
        },
      });
      animationProject2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.3,
        },
      });
      animationProject3.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.4,
        },
      });
      animationArrow.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 1.2,
        },
      });
    }

    if (!inView) {
      animationHeader.start({
        x: "-100vw",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
      animationProject1.start({
        y: "100vw",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.2,
        },
      });
      animationProject2.start({
        y: "100vw",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.2,
        },
      });
      animationProject3.start({
        y: "100vw",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.23,
          delay: 0.2,
        },
      });
      animationArrow.start({
        y: "-5vw",
        opacity: 0,
        transition: {
          duration: 0.3,
          delay: 0,
        },
      });
    }
  }, [
    inView,
    animationHeader,
    animationProject1,
    animationProject2,
    animationProject3,
    animationArrow,
  ]);

  return (
    <div ref={ref} className="app__skills-container" id="skills">
      <div className="app__skills-text">
        <motion.div animate={animationHeader}>
          <h1>My Skills</h1>
        </motion.div>
      </div>
      <div className="app__skills__container">
        <motion.div animate={animationProject1}>
          <article className="skills__item">
            <div className="skills__item-text">
              <h2>Frontend</h2>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Sass</li>
            </div>
            <div className="skills__item-image">
              <img src={images.javascript} alt="Javascript Logo" />
              <img src={images.react} alt="React Logo" />
              <img src={images.html} alt="Html Logo" />
              <img src={images.css} alt="Css Logo" />
            </div>
          </article>
        </motion.div>
        <motion.div animate={animationProject2}>
          <article className="skills__item">
            <div className="skills__item-text">
              <h2>Backend</h2>
              <li>Java</li>
              <li>Python</li>
              <li>Scala</li>
              <li>C++</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </div>
            <div className="skills__item-image">
              <img src={images.python} alt="Python Logo" />
              <img src={images.java} alt="Java Logo" />
              <img src={images.cpp} alt="C++ Logo" />
              <img src={images.mongodb} alt="MongoDB Logo" />
            </div>
          </article>
        </motion.div>
        <motion.div animate={animationProject3}>
          <article className="skills__item">
            <div className="skills__item-text">
              <h2>Other Tools</h2>
              <li>Git</li>
              <li>GitHub</li>
              <li>Agile</li>
            </div>
            <div className="skills__item-image">
              <img src={images.git} alt="Git Logo" />
              <img src={images.gitHub} alt="Github Logo" />
              <img src={images.agileScrum} alt="Agile/Scrum Logo" />
            </div>
          </article>
        </motion.div>
      </div>
      <motion.div animate={animationArrow}>
        <a
          href="#contact"
          class="skills-arrow-container"
          alt="Go to contact section"
        >
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>
        </a>
      </motion.div>
    </div>
  );
};

export default Skills;
