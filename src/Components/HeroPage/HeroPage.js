import React, { useEffect } from "react";
import "./HeroPage.css";
import HeaderViz from "./HeaderViz";


const HeroText = () => {
  return (
    <div id="hero-text-container">
      <p className="greeting">Hi, I'm</p>
      <h1 className="name">Dea Bankova</h1>
      <p className="personal-description">
        I create visualisations to tell stories with data.  
        Currently visiting researcher in data visualsiation  
        at the University of Tokyo & independent  
      </p>
    </div>
  )
}


const HeroPage = ({ windowWidth, windowHeight }) => {
  return (
    <section id="hero-section">
      <HeroText />
      <HeaderViz 
        scaleFactor={ 
          windowWidth > 1500 ? 1: windowWidth > 1000 ? 0.9 : windowWidth > 500 ? 0.7 : 0.45
        }
      />
    </section>
  )
};



export default HeroPage; 