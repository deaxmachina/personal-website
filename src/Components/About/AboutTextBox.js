import React from "react";
import {aboutStringPart1, aboutStringPart2} from "./data/aboutText";
import Glow from "../../Reusable/glow";


const AboutTextBox = () => {
  return (
    <>
      <Glow />
      <div className="title-container" id="about__about-title-container">
        <div className="title-text large-text" id="about__about-title-text">About</div>
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
