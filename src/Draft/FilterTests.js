import React, { useEffect } from "react"; 

const FilterTests = () => {


  return (
    <>
    <div id="container">
      <svg width="691" height="685">

        <defs>

          <linearGradient id="linear-gradient" gradientTransform="rotate(20)">
            <stop offset="5%"  stop-color="gold" />
            <stop offset="95%" stop-color="red" />
          </linearGradient>

          <radialGradient id="radial-gradient" cx="40%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="50%" stopColor="hotpink" />
            <stop offset="100%" stopColor="plum" />
          </radialGradient>

          <linearGradient id="animate-gradient" x1='0%' x2='100%' y1='0%' y2='0%' spreadMethod="reflect">
            <stop offset="0%" stopColor="#FDA860" />
            <stop offset="17%" stopColor="#FC8669" />
            <stop offset="33%" stopColor="#E36172" />
            <stop offset="50%" stopColor="#C64277" />
            <stop offset="67%" stopColor="#E36172" />
            <stop offset="83%" stopColor="#FC8669" />
            <stop offset="100%" stopColor="#FDA860" />
            <animate
              attributeName="x1"
              values="0%;100%"
              dur="2s"
              repeatCount="indefinite"
             />
            <animate
              attributeName="x2"
              values="100%;200%"
              dur="2s"
              repeatCount="indefinite"
             />
          </linearGradient>

        </defs>

        <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
          <feTurbulence baseFrequency="0.05" />
        </filter>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result='colouredBlur'/>
          <feMerge>
            <feMergeNode in='colouredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>

        <filter id='static-noise'>
          <feTurbulence type="fractalNoise" baseFrequency='10' result='noisy' numOctaves="10"/>
          <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
          <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
        </filter>

        <filter id='noise2' x='0%' y='0%' width='100%' height='100%'>
          <feTurbulence baseFrequency="1" numOctaves="10" />
        </filter>

        <rect width="300" height="200" fill="url(#linear-gradient)" />
        <circle cx="100" cy="100" r="50" fill="url(#radial-gradient)" />
        <rect y="200" width="600" height="200" fill="url(#animate-gradient)" />
        <circle cx="400" cy="100" r="50" filter="url(#glow)" fill="white"/>
        <rect x="0" y="400" width="200" height="200" filter="url(#static-noise)" fill="white"></rect>

      </svg>
    </div>
    </>
  )
};

export default FilterTests; 