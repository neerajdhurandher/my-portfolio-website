import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./projectsBox.scss";

import ActionButton from "./actionButton";
import Tooltip from '../tooltip/tooltip.jsx'

import AndroidIcon from '../../assets/projects/android-icon-48.png';
import WebsiteIcon from '../../assets/projects/website-icon-48.png';

function AppOrWebsite(props) {
  if (props.type == "app")
    return (
      <Tooltip text="Sorry video not available yet ">
        <ActionButton type={"video"} name={"Watch video"} />
      </Tooltip>
    )
  else {
    return (
      <ActionButton type={"website"} name={"visit website"} link={props.link} />
    )
  }

}

const ProjectBox = (props) => (
  <div className="project__box">

    <Row>
      <Col xs="6" sm="4">
        <div className="project__image">
          <img src={props.data.image} alt="project img" />
        </div>
      </Col>

      <Col xs="6" sm="4">
        <div className="project_title">
          {/* <img src={(props.data.type === "app") ? AndroidIcon : WebsiteIcon} /> */}
          <span>
            <p className="font20 weight800 ">{props.data.title}</p>
            </span>
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
);

export default ProjectBox;
