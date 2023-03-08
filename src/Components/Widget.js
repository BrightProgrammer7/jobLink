import React from "react";
import "../Styles/Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widget_article">
        <div className="widget_articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widget_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widget">
      <div className="widget_header">
        <h2>JobLink News</h2>
        <InfoIcon />
      </div>
      {/* <h1>Hello Widget</h1> */}
      {newsArticle("Bright Coder is Back", "Top news headline - 1000 readers")}
      {newsArticle("Is Redux too smart", "Code - 900 readers")}
      {newsArticle("Tesla hits new hights", "Cars & Auto - 800 readers")}
      {newsArticle("Bitcoin Breaks $30k", "Crypto - 700 readers")}
      {newsArticle("Bright Coder creates projects?!", "Top news - 600 readers")}
    </div>
  );
}

export default Widget;
