import React from "react";
import "./About.css";
import CVTimeline from "./CVTimeline";
import PhotoDecoration from "./PhotoDecoration";
import AboutTextBox from "./AboutTextBox";
import CVTitle from "./CVTitle";


const About = ({ windowWidth, windowHeight }) => {
  return (
    <section id="about__page-container">
      <div id="about__about-container">       
        <PhotoDecoration
            scaleFactor={ 
              windowWidth > 1300 ? 1.3: windowWidth > 1100 ? 1.1 : windowWidth > 600 ? 0.95 : windowWidth > 400 ? 0.80 : 0.70
            }
            imgUrl="https://live.staticflickr.com/65535/51077543302_8c5ce50658_b.jpg"
        />
        <AboutTextBox />
      </div>
      <CVTitle />
      <CVTimeline windowWidth={windowWidth} windowHeight={windowHeight}/>
    </section>
  )
};

export default About;
