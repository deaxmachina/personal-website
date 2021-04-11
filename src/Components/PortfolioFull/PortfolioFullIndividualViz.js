import React from "react";
import { Link } from "react-router-dom";
import visualisationsMetadata from "../../data/visualisationsMetadata";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 450; 


const PortfolioFullIndividualViz = ({ windowWidth }) => {
  return (
    <>
    <div className="title-container" id="portfolio__standalone-container-styles">
      <div className="title-text large-text" id="portfolio__standalone-text-styles">Standalone visualisations</div>
    </div>

    <div className="portfolio-grid">
        {
          visualisationsMetadata.map(project => (
            <div 
              key={project.id} 
              className="portfolio-grid-entry" 
              style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.smallImgUrl})` : `url(${project.imgUrl})`}}
            >
              <button className="portfolio-grid-btn individual-viz">
                <span className="portfolio-grid-project-title body-text-large">{project.title}</span>
                <br/>
                <span className="border-button individual-viz-btn noSelect">
                  <a href={project.websiteUrl} target="_blank" className="noSelect">view</a>
                </span>
              </button>
              
            </div>
          ))
        }
      </div>
    </>
  )
};

export default PortfolioFullIndividualViz;
