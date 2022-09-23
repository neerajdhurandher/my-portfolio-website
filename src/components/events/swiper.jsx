import React, { useState, useRef } from 'react';
import Swiper from "react-id-swiper";

// SCSS
import "swiper/css/swiper.css";
import '../../style/App.scss';

// Components
import EventBox from "./eventBox";

// icon 
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Assets
import repbulicDrum from "../../assets/events/repbulicDrum.JPG";
import vyomDrum from "../../assets/events/vyomDrum.jpg";
import IndeDrum from "../../assets/events/IndeDrum.jpg";
import rangDrum from "../../assets/events/rangDrum.jpg";
import vanmaDrum from "../../assets/events/vanmaDrum.jpg";
import swachDrum from "../../assets/events/swachDrum.png";
import clgEventDrum from "../../assets/events/clgEventDrum.JPG";
import vizagDrum from "../../assets/events/vizagDrum.jpg";

const MutipleSlidesPerView = () => {
  const state = {
    events: [
      {
        id: "1",
        photo: repbulicDrum,
        event_name: "Republic Day",
        event_details: "Shakuntala 2017",

      },
      {

        id: "2",
        photo: vyomDrum,
        event_name: "Vyom",
        event_details: "Rungta 2020",

      },
      {
        id: "3",
        photo: vizagDrum,
        event_name: "Coffee Museum",
        event_details: "Vizag 2022",

      },
      {
        id: "4",
        photo: rangDrum,
        event_name: "Rangmanch Band",
        event_details: "Rungta 2019",

      },
      {
        id: "5",
        photo: clgEventDrum,
        event_name: "College Event",
        event_details: "Rungta 2020",

      },
      {
        id: "6",
        photo: IndeDrum,
        event_name: "Independance Day",
        event_details: "Shakuntala 2017",

      },
      {
        id: "7",
        photo: vanmaDrum,
        event_name: "Van Mahotsav",
        event_details: "Shakuntala 2017",

      },
      {
        id: "8",
        photo: swachDrum,
        event_name: "Swatch Bharat",
        event_details: "Shakuntala 2018",

      },
    ],

  };
  const [swiper, setSwiper] = useState(null);
 
  const ref = useRef(null);
 
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      swiper.slideNext();
    }
  };
 
  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      swiper.slidePrev();
    }
  };

  let eventsRender = null;

  if (state.events) {
    eventsRender = state.events.map((event) => (
      <div key={event.id}>
        <EventBox event={event} />
      </div>
    ));
  }

  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true,
    //   color :'#fffff',
    // },
    breakpoints: {
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      860: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      770: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 1.7,
        spaceBetween: 15,
      },
      400: {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
    renderPrevButton: () => 
    <NavigateBeforeIcon className = "swiper-button-prev"  style={{fontSize:"50px", color :"#ffffff"}} onClick = {goPrev}/>,
    renderNextButton: () => 
    <NavigateNextIcon className = "swiper-button-next"  style={{fontSize:"50px", color :"#ffffff"}} onClick = {goNext}/>,
  };
  
    return(
    <>
     <Swiper
     ref={ref}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
       {...params}>{eventsRender}</Swiper>      
      </>
    )

};
export default MutipleSlidesPerView;
