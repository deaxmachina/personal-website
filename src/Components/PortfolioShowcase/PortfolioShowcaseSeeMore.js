import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const PortfolioShowcaseSeeMore = () => {
  return (
    <Link to={`portfolio`} className="medium-text noSelect">
      <div id="portfolio-showcase__seemore" className="medium-text noSelect">
        <span className="medium-text noSelect">More Projects</span>
        <FontAwesomeIcon icon={faChevronRight} id="portfolio-showcase__seemore-arrow" className="medium-text noSelect"/>
      </div>
    </Link>
  )
};

export default PortfolioShowcaseSeeMore;