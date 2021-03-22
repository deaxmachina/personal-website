import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import CssTricks from "./Draft/CssTricks";


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
      <HeroPage windowWidth={windowWidth} windowHeight={windowHeight}/>
      <h1 style={{position: 'absolute', top: '0'}}></h1>
    </>

  )
};

export default App; 