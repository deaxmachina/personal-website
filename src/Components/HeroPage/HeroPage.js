import React, { useEffect } from "react";
import "./HeroPage.css";
import HeaderViz from "./HeaderViz";
import HeroText from "./HeroText";
import HeroMenu from "./HeroMenu";


const HeroPage = ({ windowWidth, windowHeight }) => {
  return (
    <>
    <section id="hero-section">
      <HeroMenu />
      <HeroText />
      <HeaderViz 
          scaleFactor={ 
            windowWidth > 1500 ? 1: windowWidth > 1000 ? 0.9 : windowWidth > 650 ? 0.75 : windowWidth > 400 ? 0.50 : 0.45
          }
        />
    </section>
    </>
  )
};

export default HeroPage; 