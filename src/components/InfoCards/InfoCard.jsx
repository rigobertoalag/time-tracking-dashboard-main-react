import React from "react";
import "./info-cards.scss";
import ImageAndColor from "./ImageAndColor";

import data from "../../data.json";

const infoCard = (props) => {
  return data.map((d, i) => (
    <div
      className={
        d.title === "Work"
          ? "ic-container ic-c-work"
          : d.title === "Play"
          ? "ic-container ic-c-play"
          : d.title === "Study"
          ? "ic-container ic-c-study"
          : d.title === "Exercise"
          ? "ic-container ic-c-exercise"
          : d.title === "Social"
          ? "ic-container ic-c-social"
          : d.title === "Self Care"
          ? "ic-container ic-c-self"
          : ""
      }
      key={i}
    >
      {ImageAndColor(d.title)}
      <div className="ic-data-container cursor">
        <div className="ic-header">
          <p className="ic-task">{d.title}</p>
          <p className="ic-options cursor">...</p>
        </div>
        <span className="ic-hours">
          {props.timeSelected.timeSelected === "Daily"
            ? d.timeframes.daily.current
            : props.timeSelected.timeSelected === "Weekly"
            ? d.timeframes.weekly.current
            : props.timeSelected.timeSelected === "Monthly"
            ? d.timeframes.monthly.current
            : ""}
          hrs
        </span>
        <p className="ic-lastweek">
          Last Week -{" "}
          {props.timeSelected.timeSelected === "Daily"
            ? d.timeframes.daily.previous
            : props.timeSelected.timeSelected === "Weekly"
            ? d.timeframes.weekly.previous
            : props.timeSelected.timeSelected === "Monthly"
            ? d.timeframes.monthly.previous
            : ""}
          hrs
        </p>
      </div>
    </div>
  ));
};

export default infoCard;
