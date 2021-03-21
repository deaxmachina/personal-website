import React, { useEffect } from "react";
import "./CssTricks.css";



const CssTricks = () => {
  return (
    <div id="css-container">
      <div className="css-element element-1">
        <div id="css-element1-wrapper">
          <div className="element1-child child-1">I have some text</div>
          <div className="element1-child child-2">There is more</div>
          <div className="element1-child child-3">This is some longer text which will exceed the space that we have</div>
        </div>
      </div>
      <div className="css-element element-2"></div>
    </div>
  )
}


export default CssTricks; 