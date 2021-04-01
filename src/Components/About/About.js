import React from "react";
import "./About.css";
import {aboutStringPart1, aboutStringPart2} from "./aboutText";
import CVTimeline from "./CVTimeline";


const PhotoDecoration = ({ scaleFactor, imgUrl }) => {
  const blueColour = "#0D8383" 
  const purpleColour =  "#4E1B34" 
  const lighterPurpleColour = "#771D43"
  const lightColour = "#ebebeb"
  const opacity = 0.6;
  const blendMode = "screen"

  return (
    <div id="about__about-photo">
    <svg width="200" height="200" style={{overflow: 'visible'}} >
      <g transform={`scale(${scaleFactor})`}> 
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="394" height="447">
          <rect x="342.222" y="172.829" width="242" height="242" transform="rotate(135.575 342.222 172.829)"/>
          <rect x="393.061" y="270.565" width="242" height="242" transform="rotate(133.47 393.061 270.565)"/>
        </mask>
        <g mask="url(#mask0)">
          <rect fill={lighterPurpleColour} fill-opacity={0.2} filter="url(#glow-about)" x="253.794" y="103.42" width="238" height="125" transform="rotate(90.095 253.794 103.42)"/>
          <rect fill={blueColour} fill-opacity={opacity} x="342.222" y="172.829" width="242" height="242" transform="rotate(135.575 342.222 172.829)" />
          <rect fill={purpleColour} fill-opacity={opacity} x="393.061" y="270.565" width="242" height="242" transform="rotate(133.47 393.061 270.565)" />
          <rect x="79.5417" y="91.7139" width="279" height="215" fill="url(#pattern0)" style={{ mixBlendMode: blendMode }}/>
        </g>
        <defs>
          <filter id="glow-about">
            <feGaussianBlur stdDeviation="5.0" result='colouredBlur'/>
            <feMerge>
              <feMergeNode in='colouredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='static-noise-about'>
            <feTurbulence type="fractalNoise" baseFrequency='10' result='noisy' numOctaves="1"/>
            <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
            <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
          </filter>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="translate(-0.0138309) scale(0.000548086 0.000711238)"/>
          </pattern>
          <image id="image0" width="1875" height="1406" xlinkHref={imgUrl}/>
        </defs>
      </g>
    </svg>
  </div>
  )
};


const AboutText = () => {
  return (
    <>
      <div id="about__about-title-container">
        <div id="about__about-title-text" className="large-text">About</div>
      </div>

      <div id="about__about-text" className="body-text-normal">
        <div id="about__about-text-first-para">{aboutStringPart1}</div>
        <br />
        <div>{aboutStringPart2}</div>

        
      <div id="about__about-triangle"></div>
      
      
    </div>
    </>
  )
}


const About = ({ windowWidth, windowHeight }) => {
  return (
    <section id="about__page-container">
      <div id="about__about-container">
        <AboutText />
        <PhotoDecoration
            scaleFactor={ 
              windowWidth > 1300 ? 1.3: windowWidth > 1100 ? 1 : windowWidth > 900 ? 0.85 : windowWidth > 600 ? 0.90 : windowWidth > 400 ? 0.80 : 0.70
            }
            imgUrl="https://live.staticflickr.com/65535/51077543302_8c5ce50658_b.jpg"
        />
      </div>
      <CVTimeline windowWidth={windowWidth} windowHeight={windowHeight}/>
    </section>
  )
};


export default About;