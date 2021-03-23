import React from "react";
import "./PortfolioShowcase.css";

const PanelRight = ({ backgroundColour, imgUrl, title, responsibleFor, tools, client, viewBtnColour }) => {
  return (
    <div className="panel-right__wrapper">

      <div className="panel-right__text">
        <h2 class="panel-right__title-text gradient padding"><span>{title}</span></h2>
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
        <button className="view-btn" style={{backgroundColor: viewBtnColour, borderColor: viewBtnColour}}>view</button>
        <button className="about-btn">about</button>
      </div>

      <div className="panel-right__image-background" style={{backgroundColor: backgroundColour}}></div>
      <div className="panel-right__image" style={{backgroundImage: `url(${imgUrl})`}}></div>
    </div>
  )
};

export default PanelRight;