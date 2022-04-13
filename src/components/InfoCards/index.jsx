import React from "react";
import "./info-cards.scss";
import InfoCard from "./InfoCard.jsx";

const infoCards = (props) => {
  return (
    <div className="main">
      <InfoCard timeSelected={props}/>
    </div>
  );
};

export default infoCards;
