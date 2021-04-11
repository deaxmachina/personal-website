import React from "react";
import { Link } from "react-router-dom";
import projectsMetadata from "../../data/projectsMetadata";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 450; 

const PortfolioFullProjects = ({ windowWidth }) => {
  return (
    <>
      <div className="title-container" id="portfolio__projects-container-styles">
        <div className="title-text large-text" id="portfolio__projects-text-styles">Projects</div>
      </div>
      <div className="portfolio-grid">
        {
          projectsMetadata.map(project => (
            <div 
              key={project.id} 
              className="portfolio-grid-entry" 
              style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.smallImgUrl})` : `url(${project.imgUrl})`}}
            >
              <button className="portfolio-grid-btn full-project">
                <span className="portfolio-grid-project-title body-text-large">{project.title}</span>
                <br/>
                <Link to={`/portfolio/${project.id}`} >
                  <span className="border-button full-project-btn">about</span>
                </Link>
              </button>
              
            </div>
          ))
        }
      </div>
    </>
  )
};

export default PortfolioFullProjects;