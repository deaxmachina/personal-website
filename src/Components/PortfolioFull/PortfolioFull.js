import React from "react";
import "./PortfolioFull.css";
import Glow from "../../Reusable/glow";
import Projects from "./Projects";
import IndividualViz from "./IndividualViz";

const PortfolioFull = () => {
  return (
    <section id="portfolio-container">
      <Glow />
      <Projects />
      <IndividualViz />
    </section>
  )
};

export default PortfolioFull;