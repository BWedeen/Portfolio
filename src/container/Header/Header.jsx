import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

import "./Header.scss";

const Header = () => {
  /*Scrolling parallax */
  const [offsetY, setOffsetY] =
    useState(
      0
    ); /*set offsetY = 0; # pixels scrolled from top of page to bottom*/
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*Animated text */
  const [letterClass2, setLetterClass2] = useState("text-animate");
  const nameLetterArray= ["I","'",'m','','','','','B','e','n','','','','', 'W','e','d','e','e','n'];
  const welcomeLetterArray= ["F","u",'l','l','','','','S','t','a','c','k','','','','D','e','v','e','l','o','p','e','r'];


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass2("text-animate-hover");
    }, 8000);
  }, []);

  return (
    <div className="app__header-parallax" id="home">
      <div className="stars">
        <img
          src={images.stars}
          id="stars"
          alt=""
          style={{ transform: `translateX(${offsetY * 0.2}px)` }}
        />
      </div>
      <div className="moon">
        <img
          src={images.moon}
          id="moon"
          alt=""
          style={{ transform: `translateY(${offsetY * 0.55}px)` }}
        />
      </div>
      <div className="mountains_back">
        <img
          src={images.mountainsBack}
          id="mountainsBack"
          alt=""
          style={{ transform: `translateY(${offsetY * 0.4 - 130}px)` }}
        />
      </div>
      <h1 className="text" id="text" alt="">
        <AnimatedLetters
          letterClass={letterClass2}
          strArray={nameLetterArray}
          idx={1}
        />
      </h1>
      <h2 className="subtext" id="subtext2">
        <AnimatedLetters
          letterClass={letterClass2}
          strArray={welcomeLetterArray}
          idx={1}
        />
      </h2>
      <a href="#about" className="button">
        Continue
      </a>
      <div className="mountains_front">
        <img src={images.mountainsFront} id="mountainsFront" alt="" />
      </div>
    </div>
  );
};

export default Header;
