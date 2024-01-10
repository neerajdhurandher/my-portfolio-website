import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import InstagramIcon from '@material-ui/icons/Instagram';

// links
const github_link = "https://github.com/neerajdhurandher?tab=repositories";
const linkedin_link = "https://www.linkedin.com/in/neeraj-dhurandher";
const youtube_link = "https://www.youtube.com/channel/UCkG3MafX2ivqD7qXyN9J-Xw";
const gfg_link = "https://auth.geeksforgeeks.org/user/neerajdhurandher";
const instagram_link = "https://instagram.com/neeraj_dhurandher";

const contactSocial = () => (

  <div className="social_contact_div" >
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={3} lg={2} >
            <GitHubIcon className="contact__social" onClick={() => window.open(github_link, "_blank")} />
          </Col>
          <Col xs={3} lg={2} >
            <LinkedInIcon className="contact__social" onClick={() => window.open(linkedin_link, "_blank")} />
          </Col>
          <Col xs={3} lg={2} >
            <YouTubeIcon className="contact__social" onClick={() => window.open(youtube_link, "_blank")} />
          </Col>
          <Col xs={3} lg={2} >
            <InstagramIcon className="contact__social" onClick={() => window.open(instagram_link, "_blank")} />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default contactSocial;
