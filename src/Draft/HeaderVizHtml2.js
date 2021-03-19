import React, { useEffect } from "react"; 
// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, CustomWiggle, TweenMax, TweenLite } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);


const opacityLow = 0.3;
const opacityHigh = 0.3

const HeaderViz2 = ({ windowWidth, windowHeight }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "Back.easeInOut.config(2)",
        opacity: 0
      }
    });
    
    timeline
      .from(".card-bg", {
        delay: 0.1,
        scale: 0.2,
        transformOrigin: "center"
      }, "=.2")
      .from(".card-top", {
        scaleX: 0,
        scaleY: 0,
        transformOrigin: "center"
      })

    TweenLite.fromTo(".test", 2, { rotation: -60, opacity: 0}, {rotation: 45, ease: "Elastic.easeOut.config(5, 0.2)", opacity: 1 });


    },[])

    //730B3D

  return (
    <>
    <div id="container">
      <svg width="691" height="685">

        <defs>
          <radialGradient id="radial-gradient" cx="45%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#730B3D" />
            <stop offset="80%" stopColor="#0A1014" />
            <stop offset="100%" stopColor="#0A1014" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4.0" result='colouredBlur'/>
            <feMerge>
              <feMergeNode in='colouredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='static-noise'>
            <feTurbulence type="fractalNoise" baseFrequency='20' result='noisy' numOctaves="10"/>
            <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
            <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
          </filter>
        </defs>


        <g transform={`scale(${0.0007*windowWidth})`}>

        <path className="card-bg" fill="#0A1014" fill="url(#radial-gradient)"  d="M605.756 403.561L424.86 612.86L148.946 531.708L101.599 322.894L236.946 147.856L577.755 172.756L605.756 403.561Z" fill-opacity={0.8}/>
        <rect className="card-bg" filter="url(#glow)" x="201.255" y="202.005" width="328.96" height="332.344" transform="rotate(-15.3804 201.255 202.005)" fill="#4C4976" fill-opacity={opacityLow}/>
        <rect className="card-bg" x="311.56" y="288.212" width="162.44" height="191.578" transform="rotate(-5.78511 311.56 288.212)" fill="#2672A1" fill-opacity={0.3}/>
        <rect className="card-bg" x="156.255" y="220.756" width="271.33" height="254.597" transform="rotate(-11.3739 156.255 220.756)" fill="#2672A1" fill-opacity={opacityLow}/>
        <rect className="card-bg" filter="url(#static-noise)" x="562.983" y="255.863" width="281.049" height="260.217" transform="rotate(103.795 562.983 255.863)" fill="#2672A1" fill-opacity={opacityLow}/>
        <path className="card-bg" d="M385.705 119.14L628.418 355.119L486.05 510.085L291.596 545.674L147.313 329.659L385.705 119.14Z" fill="#2672A1" fill-opacity={opacityLow}/>
        <path className="card-bg" d="M544.151 415.596L460.143 491.295L287.789 473.714L261.996 289.434L476.664 243.104L544.151 415.596Z" fill="#2672A1" fill-opacity={opacityLow}/>
        <rect className="test" filter="url(#glow)" x="354.781" y="295.756" width="87.4119" height="87.4119" transform="rotate(44.7377 354.781 295.756)" fill="#EBEBEB"/>

        </g>


      </svg>
    </div>
    </>
  )
};

export default HeaderViz2; 