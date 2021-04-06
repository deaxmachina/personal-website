import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import PortfolioShowcase from "./Components/PortfolioShowcase/PortfolioShowcase";
import Contact from "./Components/ContactPage/Contact";
import About from "./Components/About/About";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import ScrollToTop from "./Reusable/scrollToTop";
import PortfolioFull from "./Components/PortfolioFull/PortfolioFull";
import projectsMetadata from "./Reusable/projectsMetadata";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";


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

/*
const App = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <>
      <h1 style={{position: 'fixed', top: '0'}}>{windowWidth}</h1>
      <HeroPage windowWidth={windowWidth} windowHeight={windowHeight}/>
      <PortfolioShowcase />
      <Contact />
      <About windowWidth={windowWidth} windowHeight={windowHeight} />
    </>

  )
};
*/

const FrontPage = ({ windowWidth, windowHeight }) => {
  return (
    <>
      {/*<h1 style={{position: 'fixed', top: '0'}}>{windowWidth}</h1>*/}
      <HeroPage windowWidth={windowWidth} windowHeight={windowHeight}/>
      <PortfolioShowcase windowWidth={windowWidth} windowHeight={windowHeight}/>
      <Contact />
    </>
  )  
}

const App = () => {
  // get the width and height of the window 
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact
          render={ props => (
              <FrontPage {...props} windowWidth={windowWidth} windowHeight={windowHeight}/>
           )}
        />
        <Route path="/about" exact
          render={ props => (
              <About {...props} windowWidth={windowWidth} windowHeight={windowHeight} />
           )}
        />  
        <Route path="/portfolio" exact component={PortfolioFull} />    
        {
          projectsMetadata.map(project => (
            <Route path={`/portfolio/${project.id}`} exact
            render={ props => (
                <PortfolioPage {...props} project={project} windowWidth={windowWidth} />
             )}
          />  
          ))
        }
      </Switch>
    </Router>
    </>
  )
};

export default App; 