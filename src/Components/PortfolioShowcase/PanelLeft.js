import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 650; 

const PanelLeft = ({ project, windowWidth }) => {
  return (
    <div className="panel-left__wrapper">
      <div className="panel-left__image-background" style={{backgroundColor: project.backgroundColour}}></div>
      <div className="panel-left__image" style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.imgUrl})` : `url(${project.smallImgUrl})`}}></div>
      <div className="panel-left__text body-text-normal">
        <h2 className="panel-left__title-text underline-gradient underline-padding medium-text"><span>{project.title}</span></h2>
        <p className="panel__responsible-for-container">
          <span className="panel__bold-text">Responsible for: </span>
          <span>{project.responsibleFor}</span>
        </p>
        <p className="panel__tools-container">
          <span className="panel__bold-text">Tools: </span>
          <span>{project.tools}</span>  
        </p>
        <p className="panel__client-container">
          <span>{project.client}</span>
        </p>
        
        <button className="view-btn body-text-normal" style={{backgroundColor: project.backgroundColour, borderColor: project.backgroundColour}}>view</button>
        <Link to={`/portfolio/${project.id}`} >
          <button className="about-btn body-text-normal">about</button>
        </Link>
      </div>
    </div>
  )
};

export default PanelLeft