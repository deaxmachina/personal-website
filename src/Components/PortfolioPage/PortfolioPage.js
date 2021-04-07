import React from "react";
import "./PortfolioPage.css";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 650; 

const PortfolioPage = ({ project, windowWidth }) => {
  return (
    <>
    <div className="portfolio-page__wrapper">
      <div className="portfolio-page__image-background" style={{backgroundColor: project.backgroundColour}}></div>
      <div className="portfolio-page__image" style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.individualPageImgUrl})` : `url(${project.individualPageSmallImgUrl})`}}></div>
      <div className="portfolio-page__text body-text-normal">
        <div id="portfolio-page__title-text" className="large-text"><span>{project.title}</span></div>
        <button className="portfolio-page__view-btn body-text-normal" style={{backgroundColor: project.backgroundColour}}>view</button>
        <p className="portfolio-page__responsible-for-container">
          <span className="portfolio-page__bold-text">Responsible for: </span>
          <span>{project.responsibleFor}</span>
        </p>
        <p className="portfolio-page__tools-container">
          <span className="portfolio-page__bold-text">Tools: </span>
          <span>{project.tools}</span>  
        </p>
        <p className="portfolio-page__client-container">
          <span>{project.client}</span>
        </p>
        <br />
        <p className="portfolio-page__project-description-container">
          {project.description.split ('\n').map ((item, i) => <><p key={i}>{item}</p><br /></>)}
        </p>

      </div>
    </div>
    </>
  )
};

export default PortfolioPage;