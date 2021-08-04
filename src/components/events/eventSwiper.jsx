import React from "react";
import Swiper from './swiper';
//SCSS
import "./eventSwiper.scss";
import '../../style/App.scss';

// icon 
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const events = () => (
  <div id="events">
    <div className="event-container">
      <NavigateBeforeIcon className = "swiper-button-prev"  style={{fontSize:"50px", color :"e0dcdc"}}/>
      <NavigateNextIcon className = "swiper-button-next"  style={{fontSize:"50px", color :"#e0dcdc"}}/>
      <Swiper/>
    </div>
  </div>
);

export default events;
