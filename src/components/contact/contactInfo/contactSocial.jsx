import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";



import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

  const gihublink = "https://github.com/neerajdhurandher?tab=repositories"; 
  const linkedinlink = "https://www.linkedin.com/in/neeraj-dhurandher";
  const youtubelink = "https://www.youtube.com/channel/UCkG3MafX2ivqD7qXyN9J-Xw";
  const gfglink = "https://auth.geeksforgeeks.org/user/neerajdhurandar/practice";

const contactSocial = () => (

  <div className= "social_contact_div" >
  <Row>
    <Col xs={12}>
      <Row center="xs">
          <Col xs={3} lg={2} >
          <GitHubIcon className="contact__social" onClick={()=> window.open(gihublink, "_blank")} /> 
          </Col>
          <Col xs={3} lg={2} >
         <LinkedInIcon className="contact__social" onClick={()=> window.open(linkedinlink, "_blank")} />
        </Col>
        <Col xs={3} lg={2} >
         <YouTubeIcon className="contact__social" onClick={()=> window.open(youtubelink, "_blank")} />
        </Col>
        <Col xs={3} lg={2} >
         <DeveloperModeIcon className="contact__social" onClick={()=> window.open(gfglink, "_blank")} />
        </Col>
      </Row>
    </Col>
  </Row>
  
  </div>
);

export default contactSocial;
