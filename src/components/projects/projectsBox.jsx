import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Fade from 'react-reveal/Fade';


import "./projectsBox.scss";

import ActionButton from "./actionButton";
import Tooltip from '../tooltip/tooltip.jsx';
import YoutubePopUp from "./youtubePopUp.jsx";

import AndroidIcon from '../../assets/projects/android-icon-48.png';
import WebsiteIcon from '../../assets/projects/website-icon-48.png';

function AppOrWebsite(props) {
  if (props.type == "app")
    return (
      <>
        <Tooltip text="Sorry video not available yet ">
          <ActionButton type={"video"} name={"Watch video"} />
        </Tooltip>
        {/* <YoutubePopUp link={props.link} /> */}
      </>
    )
  else {
    return (
      <ActionButton type={"website"} name={"visit website"} link={props.link} />
    )
  }

}

const ProjectBox = (props) => (
  <div>
    <Fade left duration={1200}>
      <div className="project__box">

        <Row>
          {/* <Col xs="6" sm="4"> */}
          <Col md={5}>
            <div className="project__image">
              <img src={props.data.image} alt="project img" />
            </div>
          </Col>

          {/* <Col xs="6" sm="4"> */}
          <Col md={7}>
            <div className="project_title">
              <p className="font20 weight800 ">{props.data.title}</p>
            </div>
            <div className="project_details">
              <div className="project__info">
                <p>{props.data.description}</p>
                <p>{props.data.uselang}</p>
                <p>{props.data.date}</p>
              </div>

              <div className="action-buttons-div">
                <div className="action-button">
                  <ActionButton type={"github"} name={"Code Base"} link={props.data.gihubLink} />
                </div>
                <div className="action-button">
                  <AppOrWebsite type={props.data.type} link={props.data.videoOrWebsiteLink} />
                </div>
              </div>

            </div>
          </Col>
        </Row>

      </div>
    </Fade>
  </div>
);

export default ProjectBox;
