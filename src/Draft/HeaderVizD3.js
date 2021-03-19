import React, { useEffect, useRef } from "react"; 
import * as d3 from "d3";
// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, CustomWiggle, TweenMax, TweenLite } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

// paths // 
const path1 = "M282.143 78.3839L524.855 314.363L382.488 469.329L188.034 504.918L43.7507 288.903L282.143 78.3839Z";
const path2 = "M243.916 94.2712C247.038 92.6827 250.608 92.1685 254.073 92.808L521.683 142.197C528.533 143.461 533.824 148.981 534.779 155.86L574.783 443.747C575.616 449.738 572.994 455.654 568.008 459.036L318.512 628.266C313.862 631.42 307.868 631.883 302.736 629.485L78.0659 524.534C73.3229 522.319 69.9376 517.948 68.9931 512.82L15.6443 223.144C14.37 216.225 17.7669 209.329 24.0156 206.15L243.916 94.2712Z";
const path3 = "M171.809 172.38C173.402 168.822 176.256 165.966 179.832 164.351L397.818 65.9064C404.008 63.1109 411.306 64.4777 416.04 69.319L612.297 270.025C616.637 274.462 617.994 280.984 615.78 286.757L536.5 493.479C534.612 498.402 530.388 502.081 525.216 503.306L308.717 554.616C304.397 555.64 299.842 554.848 296.131 552.428L79.5831 411.181C73.017 406.898 70.5395 398.542 73.726 391.426L171.809 172.38Z";
const path4 = "M267.716 215.788C272.537 202.864 286.611 195.954 299.785 200.044L461.37 250.206C474.194 254.187 481.877 267.277 479.1 280.414L446.479 434.745C443.808 447.382 432.265 456.142 419.375 455.314L218.927 442.444C201.53 441.327 190.14 423.743 196.233 407.41L267.716 215.788Z";
const path5 = "M215.941 353.973C201.283 349.038 194.178 332.466 200.698 318.422L288.028 130.333C293.133 119.337 305.15 113.31 317.002 115.801L569.869 168.933C583.167 171.727 592.049 184.294 590.249 197.768L558.37 436.511C556.204 452.737 539.764 462.977 524.259 457.758L215.941 353.973Z";
const path6 = "M231.561 524.696C218.106 532.836 200.438 527.575 193.9 513.48L109.975 332.555C104.968 321.762 108.136 309.001 117.645 301.653L322.435 143.42C333.274 135.045 348.861 136.311 358.12 146.32L515.902 316.878C526.931 328.801 524.197 347.631 510.207 356.096L231.561 524.696Z";

const rect1 = {
  width: 380,
  height: 337,
  transform: "matrix(0.388631 -0.921394 0.926701 0.375798 118.2 419.359)"
}

const rect2 = {
  x: 356,
  y: 223,
  width: 106,
  height: 106,
  transform: "rotate(43.4472 356.37 227.629)"
}

// colours //
const blueColour = "#2177A7";
const purpleColour = "#730B3D";
const darkColour = "#0A1014";
const lightColour = "#EEEEEE";



const HeaderViz = () => {

  // refs // 
  const svgRef = useRef();
  const headerGRef = useRef();

  // constants //
  const width = 700;
  const height = 700; 
  const scale = 0.5;
  const opacity = 0.5;

  useEffect(() => {

    ////////////////////////////////
    ///////////// D3 //////////////
    //////////////////////////////

    const headerG = d3.select(headerGRef.current)
      .attr("transform", `scale(${scale})`)

    headerG.append("path")
      .classed("card-bg", true)
      .attr("d", path1)
      .attr("fill", blueColour)
      .attr("fill-opacity", opacity)

    headerG.append("path")
      .classed("card-bg", true)
      .attr("d", path2)
      .attr("fill", darkColour)
      .attr("fill-opacity", opacity)

    headerG.append("path")
      .classed("card-bg", true)
      .attr("d", path3)
      .attr("fill", purpleColour)
      .attr("fill-opacity", opacity)

    headerG.append("path")
      .classed("card-bg", true)
      .attr("d", path4)
      .attr("fill", blueColour)
      .attr("fill-opacity", opacity)

    headerG.append("path")
      .classed("card-bg", true)
      .attr("d", path5)
      .attr("fill", blueColour)
      .attr("fill-opacity", opacity)

    headerG.append("path")
      .classed("card-bg", true)
      .attr("d", path6)
      .attr("fill", blueColour)
      .attr("fill-opacity", opacity)

    headerG.append("rect")
      .classed("card-bg", true)
      .attr("width", rect1.width)
      .attr("height", rect1.height)
      .attr("transform", rect1.transform)
      .attr("fill", blueColour)
      .attr("fill-opacity", opacity)

    headerG.append("rect")
      .classed("test", true)
      .attr("x", rect2.x)
      .attr("y", rect2.y)
      .attr("width", rect2.width)
      .attr("height", rect2.height)
      .attr("transform", rect2.transform)
      .attr("fill", lightColour)
      .attr("fill-opacity", 1)


    ////////////////////////////////
    ////////// GSAP ///////////////
    //////////////////////////////
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

    TweenLite.fromTo(".test", 2, { rotation: -60}, {rotation: 45, ease: "Elastic.easeOut.config(5, 0.2)" });


    },[])

  return (
    <>
    <div id="container">
      <svg ref={svgRef} width={width} height={height}>
        <g ref={headerGRef}>
        </g>
      </svg>
    </div>
    </>
  )
};

export default HeaderViz; 