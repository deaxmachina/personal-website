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

const HeroMenu = () => {
  return (
    <>
      <div id="hero-menu-container">
        <div><p className="menu-item">projects</p></div>
        <div className="menu-item">about</div>
        <div className="menu-item">writing</div>
        <div className="menu-item">contact</div>
      </div >
      
      <div className="menu-underline"></div>

      <svg width="0" height="0">
        <filter id='static-noise'>
          <feTurbulence type="fractalNoise" baseFrequency='10' result='noisy' numOctaves="1"/>
          <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
          <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
        </filter>
      </svg>

    </>
  )
}


const HeroPage = ({ windowWidth, windowHeight }) => {
  return (
    <>
    <section id="hero-section">
      <HeroMenu />
      <HeroText />
      
      <HeaderViz 
          scaleFactor={ 
            windowWidth > 1500 ? 1: windowWidth > 1000 ? 0.9 : windowWidth > 600 ? 0.7 : 0.45
          }
        />

    </section>
    </>
  )
};



export default HeroPage; 