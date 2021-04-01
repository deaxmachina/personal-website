import React from "react";
import {aboutStringPart1, aboutStringPart2} from "./data/aboutText";


const AboutTextBox = () => {
  return (
    <>
      <div id="about__about-title-container">
        <div id="about__about-title-text" className="large-text">About</div>
      </div>
      <div id="about__about-text" className="body-text-normal">
        <div id="about__about-text-first-para">{aboutStringPart1}</div>
        <br />
        <div>{aboutStringPart2}</div>
      </div>
    </>
  )
};

export default AboutTextBox;
