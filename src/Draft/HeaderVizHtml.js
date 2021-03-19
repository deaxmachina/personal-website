import React, { useEffect } from "react"; 
// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, CustomWiggle, TweenMax, TweenLite } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);


const opacityLow = 0.4;
const opacityHigh = 0.4

const HeaderViz = ({ windowWidth, windowHeight }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 2.5,
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

    TweenLite.fromTo(".test", 2.5, { rotation: -60, opacity: 0}, {rotation: 45, ease: "Elastic.easeOut.config(5, 0.2)", opacity: 1 });


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
            <feTurbulence type="fractalNoise" baseFrequency='10' result='noisy' numOctaves="10"/>
            <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
            <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
          </filter>
        </defs>

        {/* 
        <g transform={`scale(${0.0007*windowWidth})`}>
          <path className="card-bg" fill="#0A1014" fill="url(#radial-gradient)" d="M243.916 94.2712C247.038 92.6827 250.608 92.1685 254.073 92.808L521.683 142.197C528.533 143.461 533.824 148.981 534.779 155.86L574.783 443.747C575.616 449.738 572.994 455.654 568.008 459.036L318.512 628.266C313.862 631.42 307.868 631.883 302.736 629.485L78.0659 524.534C73.3229 522.319 69.9376 517.948 68.9931 512.82L15.6443 223.144C14.37 216.225 17.7669 209.329 24.0156 206.15L243.916 94.2712Z" fill-opacity={0.8}/>
          <path className="card-bg" filter="url(#glow)" d="M171.809 172.38C173.402 168.822 176.256 165.966 179.832 164.351L397.818 65.9064C404.008 63.1109 411.306 64.4777 416.04 69.319L612.297 270.025C616.637 274.462 617.994 280.984 615.78 286.757L536.5 493.479C534.612 498.402 530.388 502.081 525.216 503.306L308.717 554.616C304.397 555.64 299.842 554.848 296.131 552.428L79.5831 411.181C73.017 406.898 70.5395 398.542 73.726 391.426L171.809 172.38Z" fill="#4C4976" fill-opacity={opacityHigh}/>
          <path className="card-bg"  d="M282.143 78.3839L524.855 314.363L382.488 469.329L188.034 504.918L43.7507 288.903L282.143 78.3839Z" fill="#2672A1" fill-opacity={opacityLow}/>
          <path className="card-bg"   filter="url(#static-noise)" d="M267.716 215.788C272.537 202.864 286.611 195.954 299.785 200.044L461.37 250.206C474.194 254.187 481.877 267.277 479.1 280.414L446.479 434.745C443.808 447.382 432.265 456.142 419.375 455.314L218.927 442.444C201.53 441.327 190.14 423.743 196.233 407.41L267.716 215.788Z" fill="#2177A7" fill-opacity={opacityLow}/>
          <path className="card-bg"   filter="url(#static-noise)" d="M215.941 353.973C201.283 349.038 194.178 332.466 200.698 318.422L288.028 130.333C293.133 119.337 305.15 113.31 317.002 115.801L569.869 168.933C583.167 171.727 592.049 184.294 590.249 197.768L558.37 436.511C556.204 452.737 539.764 462.977 524.259 457.758L215.941 353.973Z" fill="#2177A7" fill-opacity={0.2}/>
          <path className="card-bg"   d="M231.561 524.696C218.106 532.836 200.438 527.575 193.9 513.48L109.975 332.555C104.968 321.762 108.136 309.001 117.645 301.653L322.435 143.42C333.274 135.045 348.861 136.311 358.12 146.32L515.902 316.878C526.931 328.801 524.197 347.631 510.207 356.096L231.561 524.696Z" fill="#2177A7" fill-opacity={opacityLow}/>
          <rect className="card-bg"   width="380.314" height="337.291" transform="matrix(0.388631 -0.921394 0.926701 0.375798 118.2 419.359)" fill="#2177A7" fill-opacity={opacityLow}/>
          <rect className="test" filter="url(#glow)" x="356.37" y="227.629" width="106" height="105.55" transform="rotate(43.4472 356.37 227.629)" fill="#EBEBEB"/>
        </g>
        
        <g transform={`scale(${0.0007*windowWidth})`}>  
          <path className="card-bg" fill="#0A1014" fill="url(#radial-gradient)" fill-opacity="0.8" d="M243.916 94.2712C247.038 92.6827 250.608 92.1685 254.073 92.808L521.683 142.197C528.533 143.461 533.824 148.981 534.779 155.86L574.783 443.747C575.616 449.738 572.994 455.654 568.008 459.036L318.512 628.266C313.862 631.42 307.868 631.883 302.736 629.485L78.0659 524.534C73.3229 522.319 69.9376 517.948 68.9931 512.82L15.6443 223.144C14.37 216.225 17.7669 209.329 24.0156 206.15L243.916 94.2712Z" />
          <path className="card-bg" fill="#4F3C76" filter="url(#glow)" fill-opacity={opacityHigh} d="M171.809 172.38C173.402 168.822 176.256 165.966 179.832 164.351L397.818 65.9064C404.008 63.1109 411.306 64.4777 416.04 69.319L612.297 270.025C616.637 274.462 617.994 280.984 615.78 286.757L536.5 493.479C534.612 498.402 530.388 502.081 525.216 503.306L308.717 554.616C304.397 555.64 299.842 554.848 296.131 552.428L79.5831 411.181C73.017 406.898 70.5395 398.542 73.726 391.426L171.809 172.38Z" />
          <path className="card-bg" filter="url(#static-noise)" fill="#2177A7" fill-opacity={opacityLow} d="M276.308 192.756L484 257.231L441.826 456.756L184 440.201L276.308 192.756Z" />
          <path className="card-bg" fill="#2177A7"  fill-opacity={opacityLow} d="M188.484 344.73L296.751 111.545L593.438 173.885L554.188 467.833L188.484 344.73Z" />
          <rect className="card-bg" fill="#2177A7" fill-opacity={opacityLow} width="380.314" height="337.291" transform="matrix(0.388631 -0.921394 0.926701 0.375798 118.2 419.359)" />
          <path className="card-bg" fill="#2672A1" fill-opacity={opacityLow} d="M282.143 109.384L524.855 345.363L382.488 500.329L188.034 535.918L43.7508 319.903L282.143 109.384Z" />
          <rect className="test" fill="#EBEBEB" filter="url(#glow)" x="356.37" y="227.629" width="106" height="105.55" transform="rotate(43.4472 356.37 227.629)"/>
        </g>
        */}

        <g transform={`scale(${0.0005*windowWidth})`}>  
          <path className="card-bg" fill="#0A1014" fill="url(#radial-gradient)" fill-opacity="0.8" d="M257.73 91.822L542.176 144.318L585.141 453.52L320.013 633.352L79.4997 521L22.4999 211.5L257.73 91.822Z" />
          <path className="card-bg" fill="#4F3C76" filter="url(#glow)" fill-opacity={opacityHigh} d="M186.179 148.197L438.725 40.1062L677.481 284.274L591.002 527.287L339.274 579.77L78.0649 404.64L186.179 148.197Z" />
          <path className="card-bg" filter="url(#static-noise)" fill="#2177A7" fill-opacity={opacityLow} d="M285.308 192.756L493 257.231L450.826 456.756L193 440.201L285.308 192.756Z"/>
          <path className="card-bg" filter="url(#static-noise)" fill="#2177A7"  fill-opacity={opacityLow} d="M531.539 192.411L623.087 395.298L438.961 503.591L275.889 296.366L531.539 192.411Z"/>
          <path className="card-bg" fill="#2177A7"  fill-opacity={opacityLow} d="M279.277 453.039L213.451 288.121L402.972 135.38L537.285 284.5L279.277 453.039Z"/>
          <rect className="card-bg" fill="#2177A7"  fill-opacity={opacityLow} width="412.224" height="337.291" transform="matrix(0.388631 -0.921394 0.926701 0.375798 127.2 419.359)"/>
          <path className="card-bg" fill="#2177A7"  fill-opacity={opacityLow} d="M291.143 109.384L533.855 345.363L391.488 500.329L197.034 535.918L52.7508 319.903L291.143 109.384Z"/>
          <rect className="test" fill="#EBEBEB" filter="url(#glow)" x="365.37" y="227.629" width="106" height="105.55" transform="rotate(43.4472 365.37 227.629)"/>
        </g>
        
        </svg>
    </div>
    </>
  )
};

export default HeaderViz; 