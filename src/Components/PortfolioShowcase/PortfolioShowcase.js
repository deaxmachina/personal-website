import React from 'react';
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";

const imgUrlAnimeTimelineBig = 'https://live.staticflickr.com/65535/50991770033_56c1f45f93_b.jpg'
const imgUrlJapaneseEarthquake = "https://live.staticflickr.com/65535/51014865042_53b9e795f0_b.jpg"

const PortfolioShowcase = () => {
  return (
    <>
      <PanelLeft 
        backgroundColour='#4E1B34'
        imgUrl={imgUrlAnimeTimelineBig}
        title="Timeline of Anime"
        responsibleFor="data analysis, visualisation, website"
        tools="python, D3, React, GSAP"
        client="personal project"
        viewBtnColour="#4E1B34"
      />
      <PanelRight 
        backgroundColour='#286380'
        imgUrl={imgUrlJapaneseEarthquake}
        title="Japanese Earthquake Disasters"
        responsibleFor="data analysis, visualisation, website"
        tools="python, D3, React, GSAP"
        client="while at University of Tokyo"
        viewBtnColour="#286380"
      />
    </>
  )
};

export default PortfolioShowcase;