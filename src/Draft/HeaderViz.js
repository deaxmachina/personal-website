import React, { useEffect, useRef } from "react"; 
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TweenLite } from "gsap/all";
import "../Components/HeroPage/HeroPage.css";
import * as d3 from "d3";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

/// constants ///
const blueColour = "#0D8383" //"#0D7583" "#286380"
const purpleColour =  "#4E1B34" // "#4E1B34" "#4C4976"
const lighterPurpleColour = "#771D43";
const darkColour = "#0C070E"; 
const lightColour = "#ebebeb"

const opacityLow = 0.5;
const opacityHigh = 0.5

const chartSettings = {
  "width": 678,
  "height": 633,
}

// paths 
const cardPath1 = "M257.73 91.822L542.176 144.318L585.141 453.52L320.013 633.352L79.4997 521L22.4999 211.5L257.73 91.822Z";
const cardPath2 = "M186.179 148.197L438.725 40.1062L677.481 284.274L591.002 527.287L339.274 579.77L78.0649 404.64L186.179 148.197Z";
const cardPath3 = "M285.308 192.756L493 257.231L450.826 456.756L193 440.201L285.308 192.756Z";
const cardPath4 = "M531.539 192.411L623.087 395.298L438.961 503.591L275.889 296.366L531.539 192.411Z";
const cardPath5 = "M279.277 453.039L213.451 288.121L402.972 135.38L537.285 284.5L279.277 453.039Z";
const card6 = {
  width: "412.224",
  height: "337.291", 
  transform: "matrix(0.388631 -0.921394 0.926701 0.375798 127.2 419.359)"
}
const cardPath7 = "M291.143 109.384L533.855 345.363L391.488 500.329L197.034 535.918L52.7508 319.903L291.143 109.384Z";



const HeaderViz = ({ scaleFactor }) => {

  const cardRef1 = useRef(null);


  useEffect(() => {

    //////////////////////////////////////
    /////////// Animations //////////////
    //////////////////////////////////////
    const duration = 2.5;

    const timeline = gsap.timeline({
      defaults: {
        duration: duration,
        ease: "Back.easeInOut.config(2)",
        opacity: 0
      }
    });
    timeline.from(".card", { scale: 0.2, transformOrigin: "center" })

    //timeline.from(cardRef1.current, { delay: 0.1, scale: 0.2, transformOrigin: "center" }, "=.2")
    //timeline.from(d3.select(cardRef2.current), { delay: 0.1, scale: 0.2, transformOrigin: "center" }, "=.2")
    //timeline.from(cardRef1.current, { scale: 0.2, transformOrigin: "center" }, "=.2")
    //timeline.from(cardRef4.current, { delay: 0.1, scale: 0.2, transformOrigin: "center" }, "=.2")
    //timeline.from(cardRef5.current, { delay: 0.1, scale: 0.2, transformOrigin: "center" }, "=.2")
    //timeline.from(cardRef6.current, { delay: 0.1, scale: 0.2, transformOrigin: "center" }, "=.2")
    //timeline.from(cardRef7.current, { delay: 0.1, scale: 0.2, transformOrigin: "center" }, "=.2")

    // for the little diamond
    TweenLite.fromTo(".diamond", duration, { rotation: -60, opacity: 0}, {rotation: 45, ease: "Elastic.easeOut.config(5, 0.2)", opacity: 1 });

    },[])


  return (
    <>
    <div id="header-viz-container">
      <svg width={chartSettings.width*scaleFactor} height={chartSettings.height*scaleFactor}>

        <defs>
          <radialGradient id="radial-gradient" cx="45%" cy="50%" r="50%">
            <stop offset="0%" stopColor={lighterPurpleColour} />
            <stop offset="80%" stopColor={darkColour} />
            <stop offset="100%" stopColor={darkColour} />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4.0" result='colouredBlur'/>
            <feMerge>
              <feMergeNode in='colouredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='static-noise'>
            <feTurbulence type="fractalNoise" baseFrequency='10' result='noisy' numOctaves="1"/>
            <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
            <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
          </filter>
        </defs>

        <g transform={`scale(${scaleFactor})`}>  
          <path  className="card" fill={darkColour} fill="url(#radial-gradient)" fillOpacity={0.6} d={cardPath1} />
          <path ref={cardRef1} className="card" fill={purpleColour} filter="url(#glow)" fillOpacity={opacityLow} d={cardPath2} />
          <path className="card" fill={blueColour} fillOpacity={opacityLow} d={cardPath3}/>
          <path className="card" fill={blueColour} fillOpacity={opacityLow} filter="url(#static-noise)" d={cardPath4} />
          <path className="card" fill={blueColour} fillOpacity={opacityLow} filter="url(#static-noise)" d={cardPath5} />
          <rect className="card" fill={blueColour} fillOpacity={opacityLow} width={card6.width} height={card6.height} transform={card6.transform}/>
          <path className="card" fill={blueColour} fillOpacity={opacityLow} d={cardPath7} />
          <rect className="diamond" fill={lightColour} filter="url(#glow)" x="365.37" y="227.629" width="106" height="105.55" transform="rotate(43.4472 365.37 227.629)"/>
        </g>
        
      </svg>
    </div>
    </>
  )
};

export default HeaderViz; 