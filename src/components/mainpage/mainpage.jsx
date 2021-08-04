import React from "react";
import Typewriter from "typewriter-effect";
import { Row, Col } from "react-flexbox-grid";

import "./mainpage.scss";
import ContactSocial from '../contact/contactInfo/contactSocial';
import '../contact/contactInfo/contactSocial.scss';
import Button from '../ui-components/button/button';


import my_photo from '../../assets/mainpage/my_photo.png';


const mainpage = () => (
  <div className="hero" id="mainpage">
    <div className="wrapper">
      <Row>
        <Col md={6} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font40">Hey,</h1>
            <h1 className="weight800 font40">
              I am Neeraj Dhurandher
            </h1>
            <div className="typewriter" style={{ marginBottom: "20px" }} >

              <Typewriter className="typetext"
                options={{
                  strings: ['Android Developer', 'Web Developer' , 'Drummer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="weight800 font40">
              <ContactSocial />
            </div>
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div className="hero-image" >
            <img  src={my_photo} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>

  </div>
);

export default mainpage;
