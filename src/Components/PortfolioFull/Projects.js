import React from "react";
import { Link } from "react-router-dom";
import projectsMetadata from "../../Reusable/projectsMetadata";

const Projects = () => {
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
              style={{backgroundImage: `url(${project.smallImgUrl})`}}
            >
              <button className="portfolio-grid-btn">
                <span className="portfolio-grid-project-title body-text-large">CO2 Emissions in Cities Around The World</span>
                <br/>
                <Link to={`/portfolio/${project.id}`} >
                  <span className="border-button">about</span>
                </Link>
              </button>
              
            </div>
          ))
        }
      </div>
    </>
  )
};

export default Projects;