import React from "react";
import Swiper from './swiper';
//SCSS
import "./eventSwiper.scss";
import '../../style/App.scss';


const events = () => (
  <div id="events">
    <div className="event-container">
      <Swiper/>
    </div>
  </div>
);

export default events;
