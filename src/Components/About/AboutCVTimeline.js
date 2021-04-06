import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import * as d3 from 'd3';
import cvHistory from "./data/cvHistory";

const AboutCVTimeline = ({ windowWidth, windowHeight }) => {

  const divRef= useRef();

  /// constants ///
  const height = 1200; 
  const dimOpacity = 0.7;
  const lineWidth = "1px";
  const leftMargin = "50%";

  /// screen sizes ///
  const mediumScreen = 900;
  const smallScreen = 650;
  const tinyScreen = 420; 

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
      .padding(0.2)
      //.padding(windowWidth > mediumScreen ? 0.5 : 0.2)

    /// Line ///
    const line = container.selectAll(".timeline-line")
      .data([0])
      .join("div")
      .classed("timeline-line", true)
        .style("position", "absolute")
        .style("left", leftMargin)
        .style("height", `${height}px`)
        .style("width", lineWidth)
        .style("opacity", dimOpacity)

    /// Point on line ///
    const points = container
      .selectAll(".timeline-point")
      .data(cvHistory)
      .join("div")
      .classed("timeline-point", true)
        .style("position", "absolute")
        .style("left", `calc(${leftMargin} - 6.5px)`)
        .style("top", d => `${yScale(d.date)}px`)
        .style("opacity", 1)

    /// just for clicking and hover events ///
    const pointsBackground = container.selectAll(".timelime-point-bg")
      .data(cvHistory)
      .join("div")
      .classed("timeline-point-bg", true)
        .style("position", "absolute")
        .style("left", `calc(${leftMargin} - 30px)`)
        .style("top", d => `${yScale(d.date) - 30}px`)
        .style("width", '60px')
        .style("height", '60px')
        .on('mouseover', function(e, datum) {
            const lowOpacity = 0.1;
            timelineInfo.style('opacity', d => d == datum ? 0 : lowOpacity)
            timelineInfoExtended.style('opacity', d => d == datum ? 1 : 0)
            timelineDates.style('opacity', d => d == datum ? 1 : lowOpacity)
            line.style("opacity", lowOpacity)
            points.style('opacity', d => d == datum ? 1 : lowOpacity)
            dateLines.style('opacity', d => d == datum ? 1 : lowOpacity)
          })
        .on('mouseout', function(e, datum) {
            timelineInfo.style('opacity', 1)
            timelineInfoExtended.style('opacity', 0)
            timelineDates.style('opacity', 1)
            line.style("opacity", 1)
            points.style('opacity', 1)
            dateLines.style('opacity', 1)
          })


    /////////////////////////////////////////////////
    //////////////// Work Info Boxes ///////////////
    ///////////////////////////////////////////////

    // for small screen make the info box smaller 
    const infoBoxWidth =  windowWidth > tinyScreen ? '360px' : '250px';
    const infoBoxHeight = '130px'
  
    /// displayed work info ///
    const timelineInfo = container
      .selectAll(".timeline-info")
      .data(cvHistory)
      .join("div")
      .classed("timeline-info", true)
        .style("position", 'absolute')
        .style("top", d => `${yScale(d.date) -30}px`)
        // alternate left and right if large screen, else all on the right
        .style("left", d => windowWidth > mediumScreen
          ? d.type == 'work'? `calc(${leftMargin} + 20px)` : `calc(${leftMargin} - 20px - ${infoBoxWidth})` 
          : `calc(${leftMargin} + 20px)` 
        )
        .style("width", infoBoxWidth)
        // align right or left depending on the side of the timeline on large screen; always alight left on medium 
        .style("text-align", d => windowWidth > mediumScreen
          ? d.type =="work" ? 'left' : 'right'
          : 'left'
        )

    timelineInfo
      .selectAll(".job-title")
      .data(d=>[d]).join("p")
      .classed("job-title gradient padding body-text-normal", true)
        .selectAll(".title-span").data(d => [d]).join("span").classed("title-span", true)
        .text(d => d.title)

    timelineInfo.selectAll(".workplace-name").data(d=>[d]).join("p").classed("workplace-name", true).text(d => d.workplace)
    timelineInfo.selectAll(".workplace-location").data(d=>[d]).join("p").classed("workplace-location", true).text(d => d.location)
      

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
        // for small screen give the lines 0 width i.e. remove them 
        .style("width", windowWidth > smallScreen ? `${dateHorizontalOffset}px` : 0)
        .style("top", d => `${yScale(d.date) + 5}px`)
        // if big screen alternate the lines, else put all to the left
        .style("left", d => windowWidth > mediumScreen
        ? d.type == "work" 
          ? `calc(${leftMargin} - ${dateHorizontalOffset}px - 10px)` 
          : `calc(${leftMargin} + 10px)`
        : `calc(${leftMargin} - ${dateHorizontalOffset}px - 10px)` 
        )
        .style("opacity", dimOpacity)
        .style('height', lineWidth)

    /// dates ///
    const timelineDates = container
      .selectAll(".timeline-date")
      .data(cvHistory)
      .join("p")
      .classed("timeline-date", true)
        .style("position", "absolute")
        // for small screen more them up so that the date can do above the job title
        .style("top", d => windowWidth > smallScreen ? `${yScale(d.date) - 6}px` : `${yScale(d.date) - 60}px` )
        // alternating left-right for big screen, all on the left for medium screen and all on the right for small 
        .style("left", d => windowWidth > mediumScreen
        ? d.type == "work" 
          ? `calc(${leftMargin} - ${dateHorizontalOffset}px - 180px)` 
          : `calc(${leftMargin} + ${dateHorizontalOffset}px + 20px)`
        : windowWidth > smallScreen
          ? `calc(${leftMargin} - ${dateHorizontalOffset}px - 180px)` 
          : `calc(${leftMargin} + ${dateHorizontalOffset}px + -30px)`
        )
        .text(d => d.date)


    /////////////////////////////////////////////////
    //////// Detailed Work Info on Hover ///////////
    ///////////////////////////////////////////////
    const timelineInfoExtended = container
      .selectAll(".timeline-info-extended")
      .data(cvHistory)
      .join("div")
      .classed("timeline-info-extended", true)
        .style("position", 'absolute')
        .style("top", d => `${yScale(d.date)-70}px`)
        .style("left", d => windowWidth > mediumScreen
          ? d.type == 'work'? `calc(${leftMargin} + 20px)` : `calc(${leftMargin} - 20px - ${infoBoxWidth})` 
          : `calc(${leftMargin} + 20px)`
        )
          .style("width", infoBoxWidth)
  
    timelineInfoExtended.selectAll(".job-title-extended").data(d=>[d]).join("h4").classed("job-title-extended", true).text(d => d.title)
    timelineInfoExtended.selectAll(".job-description").data(d=>[d]).join("p").classed("job-description", true).text(d => d.details)
  
    
  }, [windowWidth])


  return (
    <>
    <div id="about__cv-title" className="medium-text"></div>
    <div id="about__cv-container">
      <div ref={divRef}></div>
    </div>
    </>
  )
};

export default AboutCVTimeline;