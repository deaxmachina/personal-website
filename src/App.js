import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import HeaderViz from "./Draft/HeaderVizHtml";
import HeaderViz2 from "./Draft/HeaderVizHtml2";
import FilterTests from "./Draft/FilterTests";


// Code to listen for resize - you can leave this out of the functional component
// I think it lets you listen for the width and height dynamically
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const App = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <>
      <HeaderViz windowWidth={windowWidth} windowHeight={windowHeight}/>
    </>
  )
};

export default App; 