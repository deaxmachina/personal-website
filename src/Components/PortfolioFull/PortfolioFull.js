import React from "react";
import "./PortfolioFull.css";
import Glow from "../../Reusable/glow";
import PortfolioFullProjects from "./PortfolioFullProjects";
import PortfolioFullIndividualViz from "./PortfolioFullIndividualViz";

const PortfolioFull = ({ windowWidth }) => {
  return (
    <section id="portfolio-container">
      <Glow />
      <PortfolioFullProjects windowWidth={windowWidth}/>
      <PortfolioFullIndividualViz windowWidth={windowWidth} />
    </section>
  )
};

export default PortfolioFull;