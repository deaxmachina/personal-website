import React from "react";
import "./Portfolio.css";

const PanelLeft = ({ backgroundColour, imgUrl, title, responsibleFor, tools, client, viewBtnColour }) => {
  return (
    <div className="panel-left__wrapper">
      <div className="panel-left__image-background" style={{backgroundColor: backgroundColour}}></div>
      <div className="panel-left__image" style={{backgroundImage: `url(${imgUrl})`}}></div>
      <div className="panel-left__text body-text-normal">
        <h2 className="panel-left__title-text gradient padding medium-text"><span>{title}</span></h2>
        <p className="panel__responsible-for-container">
          <span className="panel__bold-text">Responsible for: </span>
          <span>{responsibleFor}</span>
        </p>
        <p className="panel__tools-container">
          <span className="panel__bold-text">Tools: </span>
          <span>{tools}</span>  
        </p>
        <p className="panel__client-container">
          <span>{client}</span>
        </p>
        <button className="view-btn body-text-normal" style={{backgroundColor: viewBtnColour, borderColor: viewBtnColour}}>view</button>
        <button className="about-btn body-text-normal">about</button>
      </div>
    </div>
  )
};

export default PanelLeft