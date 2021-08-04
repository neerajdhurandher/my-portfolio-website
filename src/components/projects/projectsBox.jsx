import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";

import "./projectsBox.scss";


const blog = (props) => (
  <div className="project__box ">

    <Row>
      <Col xs="6" sm="4">
        <div className="project__image"
          onClick={() => window.open(props.article.gihubLink, "_blank")}
        >
          <img src={props.article.image} alt="project img" />
          <div className="project__hover flex-center">
            <h4 className="font30 weight800 text-center">CLICK FOR CODE</h4>
          </div>
        </div>
      </Col>

      <Col xs="6" sm="4">
        <div className="project__info">
          <h4 className="font23 weight800">{props.article.title}</h4>
          <p className="font18 weight800 padding10">{props.article.description}</p>
          <p className="font18 weight800">{props.article.uselang}</p>
          <p className="font18 weight800">{props.article.date}</p>
        </div>
      </Col>
    </Row>

  </div>
);

export default blog;
