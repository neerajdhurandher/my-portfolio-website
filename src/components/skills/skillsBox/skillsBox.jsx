import React from "react";
// Scss
import "./skillsBox.scss";

const skillsBox = (props) => (
  <div className="skills__box ">
    <img className = "skill_img" src={props.preview} alt="project" />
    {/* <div className="skills__hover-info flex-center"> */}
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font18 weight500">{props.tag}</p>
      </div>
    </div>
  // </div>
);

export default skillsBox;
