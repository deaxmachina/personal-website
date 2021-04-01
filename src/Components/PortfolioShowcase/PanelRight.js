import React from "react";
import "./Portfolio.css";

// at what point should the image swich to the smaller one? 
const minToChangeImage = 650; 

const PanelRight = ({ 
  windowWidth, backgroundColour, imgUrl, smallImgUrl, title, responsibleFor, tools, client, viewBtnColour  
}) => {
  return (
    <div className="panel-right__wrapper">

      <div className="panel-right__text body-text-normal">
        <h2 class="panel-right__title-text underline-gradient underline-padding medium-text"><span>{title}</span></h2>
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

      <div className="panel-right__image-background" style={{backgroundColor: backgroundColour}}></div>
      <div className="panel-right__image" style={{backgroundImage: windowWidth > minToChangeImage? `url(${imgUrl})` : `url(${smallImgUrl})`}}></div>
    </div>
  )
};

export default PanelRight;