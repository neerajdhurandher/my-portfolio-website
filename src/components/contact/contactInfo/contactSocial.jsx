import React from "react";
import { Row, Col } from "react-bootstrap";
import "./contactSocial.scss";

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// links
const github_link = "https://github.com/neerajdhurandher?tab=repositories";
const linkedin_link = "https://www.linkedin.com/in/neeraj-dhurandher";
const youtube_link = "https://www.youtube.com/channel/UCkG3MafX2ivqD7qXyN9J-Xw";
const instagram_link = "https://instagram.com/neeraj_dhurandher";

const contactSocial = (props) => (

  <div className="social_contact_div" >
    <Row>
      <Col xs={12}>
        <Row className={`justify-content-center ${props.iconPadding ? 'icon-row' : ''}`}>
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
