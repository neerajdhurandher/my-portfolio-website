import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "swiper/css/swiper.css";
// Components
import EventBox from "./eventBox";

// Assets
import repbulicDrum from "../../assets/events/repbulicDrum.JPG";
import vyomDrum from "../../assets/events/vyomDrum.jpg";
import IndeDrum from "../../assets/events/IndeDrum.jpg";
import rangDrum from "../../assets/events/rangDrum.jpg";
import vanmaDrum from "../../assets/events/vanmaDrum.jpg";
import swachDrum from "../../assets/events/swachDrum.png";
import clgEventDrum from "../../assets/events/clgEventDrum.png";

class MutipleSlidesPerView extends React.Component {
  state = {
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
        photo: swachDrum,
        event_name: "Swatch Bharat",
        event_details: "Shakuntala 2018",

      },
      {
        id: "4",
        photo: rangDrum,
        event_name: "Ranganch Band",
        event_details: "Rungta 2019",

      },
      {
        id: "5",
        photo: clgEventDrum,
        event_name: "College Event",
        event_details: "Rungta 2019",

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
    ],
  };

  render() {
    let partnersRender = null;

    if (this.state.events) {
      partnersRender = this.state.events.map((event) => (
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
      breakpoints: {
        1200: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        868: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
      },
    };
    return <Swiper
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      autoplay={{
      delay: 1200,
      disableOnInteraction: false
      }} {...params}>{partnersRender}</Swiper>;
  }
};
export default MutipleSlidesPerView;
