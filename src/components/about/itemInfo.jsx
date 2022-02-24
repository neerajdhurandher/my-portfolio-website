import React from "react";
import Zoom from 'react-reveal/Zoom';

// SCSS
import "./itemInfo.scss";

const about = (props) => (
  <div className="item_info " >
    <div>
    <Zoom left cascade duration={800}>
      <h4 className="font40 weight800 padding30">{props.title}</h4>
      </Zoom>
      <p className="font18 weight500 padding40">{props.des}</p>
    </div>
  </div>
);

export default about;
