import React from 'react'

import work from "../../images/icon-work.svg";
import play from "../../images/icon-play.svg";
import study from "../../images/icon-study.svg";
import exercise from "../../images/icon-exercise.svg";
import social from "../../images/icon-social.svg";
import self from "../../images/icon-self-care.svg";

const ImageAndColor = (name) => {
    if (name === "Work") {
      return <img src={work} alt="work" className="icon" />;
    } else if (name === "Play") {
      return <img src={play} alt="play" className="icon" />;
    } else if (name === "Study") {
      return <img src={study} alt="study" className="icon" />;
    } else if (name === "Exercise") {
      return <img src={exercise} alt="exercise" className="icon" />;
    } else if (name === "Social") {
      return <img src={social} alt="social" className="icon" />;
    } else if (name === "Self Care") {
      return <img src={self} alt="self" className="icon" />;
    }
  };

export default ImageAndColor