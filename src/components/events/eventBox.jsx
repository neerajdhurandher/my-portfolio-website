import React from "react";
// SCSS
import "./eventbox.scss";

const EventBox = (props) => (
  <div className="event_photo__box ">
    <div className="event-photo">
      <img  src={props.event.photo} alt="events" />
    </div>
    
    <div className="event_photo_box-info">
      <p className="font15 weight800">{props.event.event_name}</p>
      <p className="font12 weight800">{props.event.event_details}</p>
    </div>

  </div>
);

export default EventBox;
