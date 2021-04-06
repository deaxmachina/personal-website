import React from 'react';
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import Title from "./Title";
import SeeMore from "./SeeMore";
import projectsMetadata from "../../Reusable/projectsMetadata";
import _ from "lodash"


// get the subset of projects in the showcase 
const showcaseIDs = ['anime-timeline', 'japanese-earthquakes', 'co2-emissions', 'olympics-museum']
const projectsMetadataShowcase = projectsMetadata.filter(project => showcaseIDs.includes(project.id))
const [animeTimeline] = projectsMetadata.filter(project => project.id == 'anime-timeline')
const [japaneseEarthquakes] = projectsMetadata.filter(project => project.id == 'japanese-earthquakes')



const PortfolioShowcase = ({ windowWidth, windowHeight }) => {
  return (
    <section id="portfolio-showcase-section">
      <Title />
      <PanelLeft 
        project={animeTimeline}
        windowWidth={windowWidth}
      />
      <PanelRight 
        project={japaneseEarthquakes}
        windowWidth={windowWidth}
      />
      <SeeMore />
    </section>
  )
};

export default PortfolioShowcase;