import React, { useState } from "react";

import "./user-card.scss";
import jeremy from "../../images/image-jeremy.png";

const UserCard = (props) => {
  const [timeFrame, setTimeFrame] = useState("Weekly");
  props.func(timeFrame);

  return (
    <div className="uc-container">
      <div className="uc-header">
        <div className="uc-image">
          <img src={jeremy} alt="jeremy" />
        </div>
        <div className="user-data">
          <p style={{ fontSize: "small", fontWeight: 300 }}>Report for</p>
          <span style={{ fontSize: "xx-large", fontWeight: 300 }}>
            Jeremy Robson
          </span>
        </div>
      </div>
      <div className="uc-body">
        <p
          className={timeFrame === "Daily" ? "cursor timeframe" : "cursor"}
          onClick={() => setTimeFrame("Daily")}
        >
          Daily
        </p>
        <p
          className={timeFrame === "Weekly" ? "cursor timeframe" : "cursor"}
          onClick={() => setTimeFrame("Weekly")}
        >
          Weekly
        </p>
        <p
          className={timeFrame === "Monthly" ? "cursor timeframe" : "cursor"}
          onClick={() => setTimeFrame("Monthly")}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default UserCard;
