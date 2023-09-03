import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Fade from "react-reveal"
import "./about.scss";


// Components
import EduWorkBox from './eduWorkBox';
import OtherInterestInfo from "./itemInfo";
import EventsScrollView from "../events/eventSwiper";
import AboutDetails from "./aboutdetails";
import Title from "../ui-components/title/title";
import DownloadIcon from '@material-ui/icons/ArrowDownwardRounded';

// Assets
import hashedin_logo from "../../assets/about/hashedin_logo.png";
import atg_logo from "../../assets/about/atg_logo.png";
import rungta_logo from "../../assets/about/rungta_logo.png";
import shakuntala_logo from "../../assets/about/shakuntala_logo.png";
import resume from "../../assets/about/neeraj_dhurandher_resume.pdf";


// links
let email_link = "mailto:websiteneeraj@gmail.com?subject = Feedback From Website&body = Message";
let home_link = "https://goo.gl/maps/jQrLPbbSMJz7MiFx6";
let instagram_link = "https://instagram.com/neeraj_dhurandher"

// content
let drummer_title = "Drummer";
let drummer_des = "Playing drums has always been my favorite hobby. I've been pounding on the drums ever since I was a kid, and it remains my go-to activity in my spare time."


const about = () => (
  <div id="about">

    <div className="wrapper">
      <Title title="ABOUT ME" />
      <div>
        <div className="resume_dow_btn text-center flex-center">
          <a href={resume} download="Neeraj Dhurandher Resume">
            Download Resume
          </a>
          <DownloadIcon className="download_icon"/>
        </div>
      </div>

      <div className="horizontal-line-full" >
        <p style={{ color: "black", fontSize: "3px" }}>.</p>
      </div>

      <div>
        <div className="box-yellow-border contact-box" >
          <Row>
            <Col md={12} lg={6}>
              <Fade left duration={1000}>
                <div>
                  <AboutDetails type="email" title="Email " value="websiteneeraj@gmail.com" link={email_link} />
                  <p style={{ color: "transparent" }} >lorem</p>
                  <AboutDetails type="instagram" title="Instagram" value="neeraj_dhurandher" link={instagram_link} />
                  <p style={{ color: "transparent" }} >lorem</p>
                </div>
              </Fade>
            </Col>


            <Col md={12} lg={6}>
              <Fade right duration={1000}>
                <div >
                  <AboutDetails type="website" title="Website " value="neerajdhurandher.me" link="https://neerajdhurandher.me/" />
                  <p style={{ color: "transparent" }} >lorem</p>
                  <AboutDetails type="address" title="Address " value="Bhilai (CG), India" link={home_link} />
                  <p style={{ color: "transparent" }} >lorem</p>
                </div>
              </Fade>
            </Col>

          </Row>

        </div>

      </div>

      <div>
        <p className="some-heading-full-display">Work Experience</p>
      </div>

      <Fade left duration={1000}>
        <EduWorkBox avatar={hashedin_logo} name="Hashedin by Deloitte, Bengaluru" name_last="" job="SDET" year="MAR 2022 - Present" link="https://hashedin.com/" />
      </Fade>

      <Fade right duration={1000}>
        <EduWorkBox avatar={atg_logo} name="Across The Globe (ATG) , Bengaluru" name_last="" job="Android Developer Intern " year="JUN - DEC 2021" link="https://www.atg.world/" />
      </Fade>

      <div>
        <p className="some-heading-full-display">Education</p>
      </div>

      <Fade left duration={1000}>
        <EduWorkBox avatar={rungta_logo} name="Rungta College Of Engineering" name_last="and Technology , Bhilai" job="B.E. (CSE)" year="2018-2022" link="https://www.rungta.ac.in/" />
      </Fade>
      <Fade right duration={1000}>
        <EduWorkBox avatar={shakuntala_logo} name="Shakuntala Vidyalaya , Bhilai" name_last="" job="12th & 10th" year="2018 & 2016" link="http://www.shakuntalavidyalaya.edu.in/" />
      </Fade>

      <div>
        <p className="some-heading-full-display">Other Interests</p>
      </div>

    </div>

    <div className="other-interest-sec">
      <Row>
        <Col xs={6} md={4}>
          <OtherInterestInfo title={drummer_title} des={drummer_des} />
        </Col>
        <Col xs={12} md={8}>
          <EventsScrollView />
        </Col>
      </Row>
    </div>

  </div>
);

export default about;
