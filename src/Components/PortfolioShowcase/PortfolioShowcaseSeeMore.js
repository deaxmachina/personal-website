import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const PortfolioShowcaseSeeMore = () => {
  return (
    <Link to={`portfolio`}>
      <div id="portfolio-showcase__seemore" className="medium-text noSelect">
        <span>More Projects</span>
        <FontAwesomeIcon icon={faChevronRight} id="portfolio-showcase__seemore-arrow"/>
      </div>
    </Link>
  )
};

export default PortfolioShowcaseSeeMore;