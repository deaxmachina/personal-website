import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const PortfolioShowcaseSeeMore = () => {
  return (
    <div id="portfolio-showcase__seemore" className="medium-text">
      <span>More Projects</span>
      <FontAwesomeIcon icon={faChevronRight} id="portfolio-showcase__seemore-arrow"/>
    </div>
    
  )
};

export default PortfolioShowcaseSeeMore;