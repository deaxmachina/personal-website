import React, { useEffect } from "react";
import "./HeroPage.css";

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
};

export default HeroText; 