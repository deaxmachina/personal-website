import React, { useEffect } from "react";
import "./HeroPage.css";

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
          <feTurbulence type="fractalNoise" baseFrequency='3' result='noisy' numOctaves="100"/>
          <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
          <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
        </filter>
      </svg>

    </>
  )
};

export default HeroMenu; 