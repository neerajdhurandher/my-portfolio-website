import React from "react";
import Fade from "react-reveal"
// Scss
import "./skillsBox.scss";

const skillsBox = (props) => (
  <Fade top distance="10px">
    <div className="skills__box ">
      <img className="skill_img" src={props.preview} alt="project" />
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font18 weight500">{props.tag}</p>
      </div>
    </div>
  </Fade>
);

export default skillsBox;
