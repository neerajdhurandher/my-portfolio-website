import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";


// Components
import TeamBox from './teamBox';
import OtherIntrestInfo from "./teamInfo";
import EventsScrollView from "../events/eventSwiper";
import AboutDetails from "./aboutdetails";
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
// Assets
import atglogo from "../../assets/about/atg_logo.png";
import rungtalogo from "../../assets/about/rungta_logo.png";
import shakuntalalogo from "../../assets/about/shakuntala_logo.png";


let resume_link = "https://drive.google.com/drive/folders/1nc_JnFrAl7OOq1ZfSaRa2EqV0mGgM62K";
let emaillink = "mailto:websiteneeraj@gmail.com?subject = Feedback From Website&body = Message";
let phonelink = "tel:7224010437";
let homelink = "https://goo.gl/maps/jQrLPbbSMJz7MiFx6";

function refreshPage() {
  window.location.reload(false);
}

let downloadResume = () => {
  fetch('https://drive.google.com/drive/folders/1nc_JnFrAl7OOq1ZfSaRa2EqV0mGgM62K')
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'neeraj_resume.pdf';
        a.click();
      });

      console.log("clickeddddd");
      // window.location.href = response.url;
    });
}

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />

      <div style={{ marginTop: "20px" }}>
        <Row >
          <Col md={12} lg={3}>
            <p className="font20 "> Download my CV </p>
          </Col>
          <Col md={12} lg={3}>
            <div className="resume_dow_btn" onClick={()=> window.open(resume_link, "_blank")} >
              {/* <Button label="Download" onClick={downloadResume} /> */}
              {/* <Button label="Download" openlink={{resume_link}} /> */}
              <div className = " button button-link ">
                <p>Download</p>
              </div>
              
            </div>
          </Col>
        </Row>
      </div>

      <div className="horizontal-line-full" >
        <p style={{ color: "black", fontSize: "3px" }}>.</p>
      </div>


      {/* yellow box with contact details */}
      <div>
        <div className="box-yellow-border" style={{ margin: "10px", paddingLeft: "10%", paddingRight: "10%", cursor: "pointer" }}>

          <Row>

            <Col md={12} lg={6}>
              <div  >

                <AboutDetails type="email" title="Email " value="websiteneeraj@gmail.com " link={emaillink} />
                <p style={{ color: "transparent" }} >lorem</p>
                <AboutDetails type="phone" title="Phone No. " value="7224010437" link={phonelink} />
                <p style={{ color: "transparent" }} >lorem</p>
              </div>
            </Col>


            <Col md={12} lg={6}>
              <div >

                <AboutDetails type="website" title="Website " value="neerajdhurandher.tk" link="http://www.neerajdhurandher.tk" />
                <p style={{ color: "transparent" }} >lorem</p>
                <AboutDetails type="address" title="Address " value="Bhilai (CG), India" link={homelink} />
                <p style={{ color: "transparent" }} >lorem</p>
              </div>

            </Col>

          </Row>

        </div>

      </div>



      <div>
        <p className="some-heading-full-display">WORK</p>
      </div>

      <TeamBox avatar={atglogo} name="Across The Globe (ATG)" name_last="" job="Android Developer Intern " year="JUN - DEC 2021" link="https://www.atg.world/" />
    

      <div>
        <p className="some-heading-full-display">Education</p>
      </div>
    
      <TeamBox avatar={rungtalogo} name="Rungta College Of Engineering" name_last="and Technology , Bhilai" job="B.E. (CSE)" year="2018-2022" link="https://www.rungta.ac.in/" />

      <TeamBox avatar={shakuntalalogo} name="Shakuntala Vidyalaya , Bhilai" name_last="" job="12th & 10th" year="2018 & 2016" link="http://www.shakuntalavidyalaya.edu.in/" />
     
      <div>
        <p className="some-heading-full-display">Other Intrests</p>
      </div>

      <Row>
        <Col md={6} lg={5}>
          <OtherIntrestInfo />
        </Col>
        <Col md={10} lg={7}>
          <EventsScrollView />
        </Col>
      </Row>

    </div>
  </div>
);

export default about;
