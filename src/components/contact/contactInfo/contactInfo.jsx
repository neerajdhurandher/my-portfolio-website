import React from "react";
import { Row, Col } from "react-bootstrap";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import AdressPinIcon from '../../../assets/contact/contact-info-icon1.svg';
import PhoneIcon from "../../../assets/contact/contact-info-icon2.svg";
import EmailIcon from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (

  <div className = "contact__info">
  <Row>
    <Col xs={12}>
      <Row className="justify-content-center">
        <Col xs={12} lg={3}>
          <ContactInfoBox
            icon={AdressPinIcon}
            textLine1="Bhilai Chhattisgarh "
            textLine2="India"
            link = "https://goo.gl/maps/jQrLPbbSMJz7MiFx6"
          />
        </Col>
        <Col xs={12} lg={3}>
          <ContactInfoBox
            icon={PhoneIcon}
            textLine1="< 404 :) >"
            textLine2=""
            link = ""
            
           
          />
        </Col>
        <Col xs={12} lg={3}>
          <ContactInfoBox
            icon={EmailIcon}
            textLine1="websiteneeraj@gmail.com"
            textLine2=""
            link = "mailto:websiteneeraj@gmail.com?subject = Feedback From Website&body = Message"
          />
        </Col>
      </Row>
    </Col>
  </Row>

  </div>
);

export default contactInfo;
