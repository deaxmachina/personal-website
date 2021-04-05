import React from "react";

const portfolioItemsArray = [
  {id: 'anime-timeline', img: 'https://live.staticflickr.com/65535/50991770033_56c1f45f93_b.jpg'},
  {id: 'japanese-earthquakes', img: "https://live.staticflickr.com/65535/51014865042_53b9e795f0_b.jpg"},
  {id: 'co2-emissions', img: "https://live.staticflickr.com/65535/50984343631_a68166c7d5_b.jpg"},
  {id: 'olympics-museum', img: "https://live.staticflickr.com/65535/50978525421_dcd6369eb5_b.jpg"},
  {id: '100days-d3', img: "https://live.staticflickr.com/65535/50996460547_681351ebf8_b.jpg"},
  {id: 'nutrition-charts', img: "https://live.staticflickr.com/65535/50972510651_f55f08a8e2_b.jpg"},
]

const Projects = () => {
  return (
    <>
      <div className="title-container" id="portfolio__projects-container-styles">
        <div className="title-text large-text" id="portfolio__projects-text-styles">Projects</div>
      </div>
      <div className="portfolio-grid">
        {
          portfolioItemsArray.map(item => (
            <div 
              key={item.id} 
              className="portfolio-grid-entry" 
              style={{backgroundImage: `url(${item.img})`}}
            >
              <button className="portfolio-grid-btn">
                <span className="portfolio-grid-project-title body-text-large">CO2 Emissions in Cities Around The World</span>
                <br/>
                <span className="border-button">about</span>
                </button>
              
            </div>
          ))
        }
      </div>
    </>
  )
};

export default Projects;