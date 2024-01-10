import React from "react";

import "./contactInfoBox.scss";

const contactInfoBox = (props) => (

  <div className="contact__info_box" onClick={()=> window.open(props.link, "_blank")} >
    <div>
      <img src={props.icon} alt="address" />
    </div>
    <div>
      <p>{props.textLine1}</p>
      <p>{props.textLine2}</p>
    </div>
  </div>
);

export default contactInfoBox;
