import React from "react";

const AboutPhotoDecoration = ({ scaleFactor, imgUrl }) => {
  const blueColour = "#0D8383" 
  const purpleColour =  "#4E1B34" 
  const lighterPurpleColour = "#771D43"
  const lightColour = "#ebebeb"
  const opacity = 0.8;
  const blendMode = "screen"

  return (
    <div id="about__about-photo">
      <svg width="200" height="200" style={{overflow: 'visible'}}>
        <g transform={`scale(${scaleFactor})`}>   
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="394" height="447">
            <rect x="342.222" y="172.829" width="242" height="242" transform="rotate(135.575 342.222 172.829)" fill="#0D8383"/>
            <rect x="393.061" y="270.565" width="242" height="242" transform="rotate(133.47 393.061 270.565)" fill="#4E1B34"/>
          </mask>
          <g mask="url(#mask0)">
            <rect fill={lighterPurpleColour} fill-opacity={0.2} filter="url(#glow-about)" x="253.336" y="104.134" width="238" height="125" transform="rotate(90.095 253.336 104.134)"/>
            <rect fill={blueColour} fill-opacity={opacity}  x="342.222" y="172.829" width="242" height="242" transform="rotate(135.575 342.222 172.829)"/>
            <rect fill={purpleColour} fill-opacity={opacity} x="393.061" y="270.565" width="242" height="242" transform="rotate(133.47 393.061 270.565)"/>
            <rect y="71" width="401" height="250" fill="url(#pattern0)" style={{mixBlendMode: blendMode}}/>
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
              <use xlinkHref="#image0" transform="translate(0 -0.101393) scale(0.000533333 0.000855467)"/>
            </pattern>
          <image id="image0" width="1875" height="1406" xlinkHref={imgUrl}/>    </defs>
        </g>
      </svg>
    </div>
  )
};

export default AboutPhotoDecoration;