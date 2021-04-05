import React from 'react';
import "../App.css";


const Glow = () => {
  return (
    <svg width="0" height="0">
      <defs>
        <filter id="glow-generic">
          <feGaussianBlur stdDeviation="3.0" result='colouredBlur'/>
          <feMerge>
            <feMergeNode in='colouredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
};

export default Glow;