import React from 'react';
import PortfolioShowcasePanelLeft from "./PortfolioShowcasePanelLeft";
import PortfolioShowcasePanelRight from "./PortfolioShowcasePanelRight";
import PortfolioShowcaseTitle from "./PortfolioShowcaseTitle";
import PortfolioShowcaseSeeMoreSeeMore from "./PortfolioShowcaseSeeMore";
import projectsMetadata from "../../Reusable/projectsMetadata";
import "./PortfolioShowcase.css";
import _ from "lodash"


// get the subset of projects in the showcase 
const showcaseIDs = ['anime-timeline', 'japanese-earthquakes', 'co2-emissions', 'olympics-museum']
const projectsMetadataShowcase = projectsMetadata.filter(project => showcaseIDs.includes(project.id))
const [animeTimeline] = projectsMetadata.filter(project => project.id == 'anime-timeline')
const [japaneseEarthquakes] = projectsMetadata.filter(project => project.id == 'japanese-earthquakes')



const PortfolioShowcase = ({ windowWidth, windowHeight }) => {
  return (
    <section id="portfolio-showcase-section">
      <PortfolioShowcaseTitle />
      <PortfolioShowcasePanelLeft 
        project={animeTimeline}
        windowWidth={windowWidth}
      />
      <PortfolioShowcasePanelRight 
        project={japaneseEarthquakes}
        windowWidth={windowWidth}
      />
      <PortfolioShowcaseSeeMoreSeeMore />
    </section>
  )
};

export default PortfolioShowcase;