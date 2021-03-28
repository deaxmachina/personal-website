import React from "react";
import "./About.css";
import {aboutStringPart1, aboutStringPart2} from "./aboutText";


/*
const PhotoDecoration = ({ scaleFactor, imgUrl }) => {
  const blueColour = "#0D8383" 
  const purpleColour =  "#4E1B34" 
  const lighterPurpleColour = "#771D43"
  const lightColour = "#ebebeb"
  const opacity = 0.9;
  const blendMode = "screen"

  return (
    <div id="about__about-photo">
    <svg width="200" height="200" style={{overflow: 'visible'}} >
      <g transform={`scale(${scaleFactor})`}> 
        <rect fill={lighterPurpleColour} fill-opacity={0.9} filter="url(#glow-about)" x="253.794" y="103.42" width="238" height="125" transform="rotate(90.095 253.794 103.42)"/>
        <rect fill={blueColour} fill-opacity={opacity} filter="url(#static-noise-about)" x="342.681" y="172.115" width="242" height="242" transform="rotate(135.575 342.681 172.115)" />
        <rect fill={purpleColour} fill-opacity={opacity}  x="393.519" y="269.851" width="242" height="242" transform="rotate(133.47 393.519 269.851)"/>
        <rect x="82" y="81" width="312" height="234" fill="url(#pattern0)" style={{ mixBlendMode: blendMode }}/>
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
            <use xlinkHref="#image0" transform="scale(0.000533428 0.000711238)"/>
          </pattern>
          <image id="image0" width="1875" height="1406" xlinkHref={imgUrl}/>
        </defs>
      </g>
    </svg>
    </div>
  )
};
*/

const PhotoDecoration = ({ scaleFactor, imgUrl }) => {
  const blueColour = "#0D8383" 
  const purpleColour =  "#4E1B34" 
  const lighterPurpleColour = "#771D43"
  const lightColour = "#ebebeb"
  const opacity = 0.9;
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
          <rect fill={lighterPurpleColour} fill-opacity={0.9} filter="url(#glow-about)" x="253.794" y="103.42" width="238" height="125" transform="rotate(90.095 253.794 103.42)"/>
          <rect fill={blueColour} fill-opacity={opacity} filter="url(#static-noise-about)" x="342.222" y="172.829" width="242" height="242" transform="rotate(135.575 342.222 172.829)" />
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
        <div id="about__about-title-text" className="large-text">About me</div>
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

const CvTimeline = () => {
  return (
    <>
      <div id="about__cv-title" className="medium-text">CV at a glance</div>
      <div id="about__cv-container"></div>
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
              windowWidth > 1300 ? 1.1: windowWidth > 1200 ? 0.95 : windowWidth > 900 ? 0.75 : windowWidth > 600 ? 0.90 : windowWidth > 400 ? 0.80 : 0.70
            }
            imgUrl="https://live.staticflickr.com/65535/51077543302_8c5ce50658_b.jpg"
        />
      </div>
      <CvTimeline />
    </section>
  )
};


export default About;