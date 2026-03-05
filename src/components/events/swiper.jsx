
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../style/App.scss';

import EventBox from './eventBox';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import repbulicDrum from '../../assets/events/repbulicDrum.JPG';
import vyomDrum from '../../assets/events/vyomDrum.jpg';
import IndeDrum from '../../assets/events/IndeDrum.jpg';
import rangDrum from '../../assets/events/rangDrum.jpg';
import vanmaDrum from '../../assets/events/vanmaDrum.jpg';
import swachDrum from '../../assets/events/swachDrum.png';
import clgEventDrum from '../../assets/events/clgEventDrum.JPG';
import vizagDrum from '../../assets/events/vizagDrum.jpg';
import hashedinDrum from '../../assets/events/hashedinDrum.jpg';

const MultipleSlidesPerView = () => {
  const events = [
     { id: "1", photo: hashedinDrum, event_name: "Ethenic Day", event_details: "Hashedin by Deloitte 2022" },
    { id: "2", photo: vyomDrum, event_name: "Vyom", event_details: "Rungta 2020" },
    { id: "3", photo: vizagDrum, event_name: "Coffee Museum", event_details: "Vizag 2022" },
    { id: "4", photo: rangDrum, event_name: "Rangmanch Band", event_details: "Rungta 2019" },
    { id: "5", photo: clgEventDrum, event_name: "College Event", event_details: "Rungta 2020" },
    { id: "6", photo: IndeDrum, event_name: "Independance Day", event_details: "Shakuntala 2017" },
    { id: "7", photo: vanmaDrum, event_name: "Van Mahotsav", event_details: "Shakuntala 2017" },
    { id: "8", photo: swachDrum, event_name: "Swatch Bharat", event_details: "Shakuntala 2018" },
    { id: "9", photo: repbulicDrum, event_name: "Republic Day", event_details: "Shakuntala 2017" },
  ];

  const swiperRef = useRef(null);

  return (
    <>
      <div className="swiper-nav">
        <NavigateBeforeIcon
          className="swiper-button-prev"
          style={{ fontSize: "50px", color: "#ffffff" }}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <NavigateNextIcon
          className="swiper-button-next"
          style={{ fontSize: "50px", color: "#ffffff" }}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={swiper => (swiperRef.current = swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          1200: { slidesPerView: 2.5, spaceBetween: 40 },
          1024: { slidesPerView: 2.2, spaceBetween: 20 },
          860: { slidesPerView: 1.8, spaceBetween: 20 },
          770: { slidesPerView: 1.5, spaceBetween: 20 },
          550: { slidesPerView: 1.7, spaceBetween: 15 },
          400: { slidesPerView: 1.3, spaceBetween: 15 },
          320: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        {events.map(event => (
          <SwiperSlide key={event.id}>
            <EventBox event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MultipleSlidesPerView;
