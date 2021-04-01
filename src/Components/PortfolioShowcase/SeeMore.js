import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const SeeMore = () => {
  return (
    <div id="portfolio-showcase__seemore" className="medium-text">
      <span>More Projects</span>
      <FontAwesomeIcon icon={faChevronRight} id="portfolio-showcase__seemore-arrow"/>
    </div>
    
  )
};

export default SeeMore;