import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import * as d3 from 'd3';

const blueColour = "#0D8383" //"#0D7583" "#286380"
const purpleColour =  "#4E1B34" // "#4E1B34" "#4C4976"
const lighterPurpleColour = "#771D43";
const darkColour = "#0C070E"; 
const lightColour = "#ebebeb"


const cvHistory = [
  {
    id: 0,
    date: '2020 Sep - 2021 Oct',
    type: 'work',
    title: 'Project Researcher (Data Viz)',
    workplace: 'University of Tokyo',
    location: 'Tokyo, Japan',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff.This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff.This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  },
  {
    id: 1,
    date: '2017 Sep - 2018 Oct',
    type: 'education',
    title: 'Japanese Language Program',
    workplace: 'Waseda University & Daiwa Anglo-Japanese Foundation',
    location: 'Tokyo, Japan',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  },
  {
    id: 2,
    date: '2019 Sep - 2020 Oct',
    type: 'work',
    title: 'Data Scientist / Machine Learning Engineer',
    workplace: 'DataSine',
    location: 'London, UK',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  },
  {
    id: 3,
    date: '2018 Sep - 2019 Oct',
    type: 'work',
    title: 'Data Science Consultant',
    workplace: 'Microsoft UK',
    location: 'London, UK',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  },
  {
    id: 4,
    date: '2018 Mar - 2019 Apr',
    type: 'work',
    title: 'Technical Account Manager',
    workplace: 'Microsoft UK',
    location: 'Reading, UK',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  },
  {
    id: 5,
    date: '2016 Sep - 2017 Oct',
    type: 'education',
    title: 'Msc Mathematics & Foundation of Computer Science',
    workplace: 'University of Oxford',
    location: 'Oxford, UK',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  },
  {
    id: 6,
    date: '2013 Sep - 2015 Oct',
    type: 'education',
    title: 'BSc Mathematics',
    workplace: 'University College London',
    location: 'London, UK',
    details: 'This is job I did some work and apart from that was also required to do some work. I produced some interesting work and stuff'
  }

]

const CVTimeline = () => {

  const divRef= useRef();

  /// constants ///
  const height = 1200; 
  const leftMargin = "50%";
  const dimOpacity = 0.7;
  const lineWidth = "1px";

  /// D3 Code ///
  useEffect(() => {
    const container = d3.select(divRef.current)

    /////////////////////////////////////////////////
    ///////////////// Vertical Line ////////////////
    ///////////////////////////////////////////////

    /// Scale ///
    const yScale = d3.scalePoint()
      .domain(cvHistory.map(CVpoint => CVpoint.date))
      .range([0, height])
      .padding(0.7)

    /// Line ///
    const line = container.selectAll(".timeline-line")
      .data([0])
      .join("div")
      .classed("timeline-line", true)
        .style("position", "absolute")
        .style("left", leftMargin)
        .style("height", `${height}px`)
        .style("width", lineWidth)
        .style("background-color", purpleColour)
        .style("opacity", dimOpacity)

    /// Point on line ///
    const points = container.selectAll(".timelime-point")
      .data(cvHistory)
      .join("div")
      .classed("timeline-point", true)
        .style("position", "absolute")
        .style("left", `calc(${leftMargin} - 6.5px)`)
        .style("top", d => `${yScale(d.date)}px`)
        .style("width", '14px')
        .style("height", '14px')
        .style("border-radius", '100px')
        .style("background-color", purpleColour)
        .style("border", `2px solid ${lightColour}`)

    /// just for clicking and hover events ///
    const pointsBackground = container.selectAll(".timelime-point-bg")
        .data(cvHistory)
        .join("div")
        .classed("timeline-point-bg", true)
          .style("position", "absolute")
          .style("left", `calc(${leftMargin} - 6.5px)`)
          .style("top", d => `${yScale(d.date)}px`)
          .style("width", '60px')
          .style("height", '60px')
          .on('mouseover', function(e, datum) {
            const lowOpacity = 0.1;
            timelineInfo.style('opacity', d => d == datum ? 0 : lowOpacity)
            timelineInfoExtended
              .style('opacity', d => d == datum ? 1 : 0)
              //.style('background-color', d => d == datum ? "white" : "none") 
            timelineDates.style('opacity', d => d == datum ? 1 : lowOpacity)
            line.style("opacity", lowOpacity)
            points.style('opacity', d => d == datum ? 1 : lowOpacity)
            dateLines.style('opacity', d => d == datum ? 1 : lowOpacity)
          })
          .on('mouseout', function(e, datum) {
            timelineInfo.style('opacity', 1)
            timelineInfoExtended
              .style('opacity', 0)
              //.style('background-color', "none")
            timelineDates.style('opacity', 1)
            line.style("opacity", 1)
            points.style('opacity', 1)
            dateLines.style('opacity', 1)
          })


    /////////////////////////////////////////////////
    //////////////// Work Info Boxes ///////////////
    ///////////////////////////////////////////////
    const infoBoxWidth = '360px';
    const infoBoxHeight = '130px'

    /// detailed work info on hover ///
    const timelineInfoExtended = container
      .selectAll(".timeline-info-extended")
      .data(cvHistory)
      .join("div")
      .classed("timeline-info-extended", true)
        .style("position", 'absolute')
        .style("top", d => `${yScale(d.date)-70}px`)
        .style("left",d => d.type == 'work'? `calc(${leftMargin} + 20px)` : `calc(${leftMargin} - 20px - ${infoBoxWidth})` )
          .style("width", infoBoxWidth)
          .style("border", `5px solid white`)
          .style("background-color", '#f6f6f6')
          .style("text-align", 'left')
          .style("padding", '12px 17px')
          .style("opacity", 0)
          .style("cursor", "default")
  
    //timelineInfoExtended.selectAll(".job-title-extended").data(d=>[d]).join("h4").classed("job-title-extended", true).text(d => d.title)
    timelineInfoExtended.selectAll(".job-description").data(d=>[d]).join("p").classed("job-description", true).text(d => d.details)
  
  
    /// displayed work info ///
    const timelineInfo = container
      .selectAll(".timeline-info")
      .data(cvHistory)
      .join("div")
      .classed("timeline-info", true)
        .style("position", 'absolute')
        .style("top", d => `${yScale(d.date) -30}px`)
        .style("left",d => d.type == 'work'? `calc(${leftMargin} + 20px)` : `calc(${leftMargin} - 20px - ${infoBoxWidth})` )
        .style("width", infoBoxWidth)
        .style("background-color", "none")
        .style("text-align", d => d.type =="work" ? 'left' : 'right')
        .style("cursor", "default")

    timelineInfo
    .selectAll(".job-title")
    .data(d=>[d]).join("p")
      .classed("job-title gradient padding body-text-normal", true)
      .append("span")
      .text(d => d.title)

    timelineInfo.selectAll(".workplace-name").data(d=>[d]).join("p").classed("workplace-name", true).text(d => d.workplace)
    timelineInfo.selectAll(".wokplace-location").data(d=>[d]).join("p").classed("wokplace-location", true).text(d => d.location)
      


    /////////////////////////////////////////////////
    ///////////////////// Dates ////////////////////
    ///////////////////////////////////////////////
    const dateHorizontalOffset = 50; 

    /// lines to the date ///
    const dateLines = container
      .selectAll(".date-line")
      .data(cvHistory)
      .join("div")
      .classed('date-line', true)
        .style("position", "absolute")
        .style("width", `${dateHorizontalOffset}px`)
        .style("top", d => `${yScale(d.date) + 5}px`)
        .style("left", d => d.type == "work" 
          ? `calc(${leftMargin} - ${dateHorizontalOffset}px - 10px)` 
          : `calc(${leftMargin} + 10px)`
        )
        .style("background-color", purpleColour)
        .style("opacity", dimOpacity)
        .style('height', lineWidth)

    /// dates ///
    const timelineDates = container
      .selectAll(".timeline-date")
      .data(cvHistory)
      .join("p")
      .classed("timeline-date", true)
        .style("position", "absolute")
        .style("top", d => `${yScale(d.date) - 6}px`)
        .style("left", d => d.type == "work" 
          ? `calc(${leftMargin} - ${dateHorizontalOffset}px - 180px)` 
          : `calc(${leftMargin} + ${dateHorizontalOffset}px + 20px)`
        )
        .text(d => d.date)
        .style("cursor", "default")


    

  }, [])


  return (
    <>
    <div id="about__cv-title" className="medium-text"></div>
    <div id="about__cv-container">
      <div ref={divRef}></div>
    </div>
    </>
  )
};

export default CVTimeline;