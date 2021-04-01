import React from "react";


const ContactDecoration = ({ id }) => {
  const blueColour = "#0D8383" 
  const purpleColour =  "#4E1B34" 
  const lightColour = "#ebebeb"
  const opacity = 0.5;

  return (
    <>
    <svg width="447" height="394" id={id}>
      <filter id="glow-contact">
        <feGaussianBlur stdDeviation="5.0" result='colouredBlur'/>
        <feMerge>
          <feMergeNode in='colouredBlur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>

      <rect x="104" y="140" width="238" height="125" fill={lightColour} filter="url(#glow-contact)" fill-opacity={opacity} />
      <rect x="172.547" y="51" width="242" height="242" transform="rotate(45.48 172.547 51)" fill={blueColour} fill-opacity={opacity}/>
      <rect x="270.2" width="242" height="242" transform="rotate(43.3754 270.2 0)" fill={purpleColour} fill-opacity={opacity}/>
    </svg>
    </>
  )
};

export default ContactDecoration;