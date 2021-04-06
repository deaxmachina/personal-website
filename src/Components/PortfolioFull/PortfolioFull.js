import React from "react";
import "./PortfolioFull.css";
import Glow from "../../Reusable/glow";
import PortfolioFullProjects from "./PortfolioFullProjects";
import PortfolioFullIndividualViz from "./PortfolioFullIndividualViz";

const PortfolioFull = () => {
  return (
    <section id="portfolio-container">
      <Glow />
      <PortfolioFullProjects />
      <PortfolioFullIndividualViz />
    </section>
  )
};

export default PortfolioFull;