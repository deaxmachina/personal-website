import React from "react";
import "./PortfolioFull.css";
import { range } from "d3";

const numberPortfolioItems = 6; 
const numberPortfolioItemsArray = range(numberPortfolioItems)
const imgUrlAnimeTimelineBig = 'https://live.staticflickr.com/65535/50991770033_56c1f45f93_b.jpg'
const imgUrlJapaneseEarthquake = "https://live.staticflickr.com/65535/51014865042_53b9e795f0_b.jpg"

const portfolioItemsArray = [
  {id: 'anime-timeline', img: 'https://live.staticflickr.com/65535/50991770033_56c1f45f93_b.jpg'},
  {id: 'japanese-earthquakes', img: "https://live.staticflickr.com/65535/51014865042_53b9e795f0_b.jpg"},
  {id: 'co2-emissions', img: "https://live.staticflickr.com/65535/50984343631_a68166c7d5_b.jpg"},
  {id: 'olympics-museum', img: "https://live.staticflickr.com/65535/50978525421_dcd6369eb5_b.jpg"},
  {id: '100days-d3', img: "https://live.staticflickr.com/65535/50996460547_681351ebf8_b.jpg"},
  {id: 'nutrition-charts', img: "https://live.staticflickr.com/65535/50972510651_f55f08a8e2_b.jpg"},
]


const PortfolioFull = () => {
  return (
    <section id="portfolio-container">
      <h1>I am the Portfolio</h1>
      <div className="portfolio-grid">
        {
          portfolioItemsArray.map(item => (
            <div 
              key={item.id} 
              className="portfolio-grid-entry" 
              style={{backgroundImage: `url(${item.img})`}}
            >
              <button className="portfolio-grid-btn">
                <span className="portfolio-grid-project-title">CO2 Emissions in Cities</span>
                <br/>
                <span className="border-button">about</span>
                </button>
              
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default PortfolioFull;