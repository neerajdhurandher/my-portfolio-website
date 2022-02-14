import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Fade from "react-reveal"
import "./about.scss";


// Components
import EduWorkBox from './eduWorkBox';
import OtherIntrestInfo from "./itemInfo";
import EventsScrollView from "../events/eventSwiper";
import AboutDetails from "./aboutdetails";
import CustomButton from "../ui-components/button/button";
import Title from "../ui-components/title/title";
// Assets
import atglogo from "../../assets/about/atg_logo.png";
import rungtalogo from "../../assets/about/rungta_logo.png";
import shakuntalalogo from "../../assets/about/shakuntala_logo.png";
import Resume from "../../assets/about/Neeraj _Dhurandher_Resume.pdf"

let resume_link = "http://www.neerajdhurandher.tk/static/media/Neeraj%20Dhurandher%20Resume.pdf";
let emaillink = "mailto:websiteneeraj@gmail.com?subject = Feedback From Website&body = Message";
let phonelink = "tel:7224010437";
let homelink = "https://goo.gl/maps/jQrLPbbSMJz7MiFx6";


const about = () => (
  <div id="about">

    <div className="wrapper">

      <Title title="ABOUT ME." />

      <div>
        <p className="font20 download_cv_text"> Download my CV </p>
        <div className="resume_dow_btn"  >
          <a href={Resume} download = "Neeraj Dhurandher Resume" >
            Download
          </a>
        </div>
      </div>

      <div className="horizontal-line-full" >
        <p style={{ color: "black", fontSize: "3px" }}>.</p>
      </div>


      {/* yellow box with contact details */}
      <div>
        <div className="box-yellow-border" style={{ margin: "10px", paddingLeft: "10%", paddingRight: "10%" }}>

          <Row>
            <Col md={12} lg={6}>
              <Fade left >
                <div>
                  <AboutDetails type="email" title="Email " value="websiteneeraj@gmail.com " link={emaillink} />
                  <p style={{ color: "transparent" }} >lorem</p>
                  <AboutDetails type="phone" title="Phone No. " value="7224010437" link={phonelink} />
                  <p style={{ color: "transparent" }} >lorem</p>
                </div>
              </Fade>
            </Col>


            <Col md={12} lg={6}>
              <Fade right >
                <div >
                  <AboutDetails type="website" title="Website " value="neerajdhurandher.tk" link="http://www.neerajdhurandher.tk" />
                  <p style={{ color: "transparent" }} >lorem</p>
                  <AboutDetails type="address" title="Address " value="Bhilai (CG), India" link={homelink} />
                  <p style={{ color: "transparent" }} >lorem</p>
                </div>
              </Fade>
            </Col>

          </Row>

        </div>

      </div>

      <div>
        <p className="some-heading-full-display">WORK</p>
      </div>

      {/* <EduWorkSection /> */}
      <Fade right >
        <EduWorkBox avatar={atglogo} name="Across The Globe (ATG) , Bengaluru" name_last="" job="Android Developer Intern " year="JUN - DEC 2021" link="https://www.atg.world/" />
      </Fade>

      <div>
        <p className="some-heading-full-display">Education</p>
      </div>

      <Fade left >
        <EduWorkBox avatar={rungtalogo} name="Rungta College Of Engineering" name_last="and Technology , Bhilai" job="B.E. (CSE)" year="2018-2022" link="https://www.rungta.ac.in/" />
      </Fade>
      <Fade right >
        <EduWorkBox avatar={shakuntalalogo} name="Shakuntala Vidyalaya , Bhilai" name_last="" job="12th & 10th" year="2018 & 2016" link="http://www.shakuntalavidyalaya.edu.in/" />
      </Fade>


      <div>
        <p className="some-heading-full-display">Other Intrests</p>
      </div>

    </div>

    <div className="other-intrest-sec">
      <Row>
        <Col xs={6} md={4}>
          <OtherIntrestInfo />
        </Col>
        <Col xs={12} md={8}>
          <EventsScrollView />
        </Col>
      </Row>
    </div>

  </div>
);

export default about;
