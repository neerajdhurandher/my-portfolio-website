import React from "react";
import { Row, Col } from "react-flexbox-grid";
import ReactRoundedImage from "react-rounded-image";

import "./teamBox.scss";

const teamBox = (props) => (

  <div>

    <div  className="team__box " onClick={() => window.open(props.link, "_blank")} >

      <Row>
        <Col md={12} lg={4}>
          <div className="institute-round-image">
          <ReactRoundedImage 
            image={props.avatar}
            roundedColor="#1B1A1A"
            imageWidth="110"
            imageHeight="110"
            roundedSize="6"
            borderRadius="60"
            hoverColor="#FFE600"
          />
           </div>
        </Col>

        <Col md={12} lg={4}>
          <div className="team__box-info"  >
            <p className="font24 weight500">{props.name}</p>
            <p className="font24 weight500">{props.name_last}</p>
            <p className="font18 ">{props.job}</p>
            <p className="font18 ">{props.year}</p>
          </div>


        </Col>

      </Row>
    </div>
    <div className="horizontal-line-half" >
      <p className="horizontal-line-half" style={{ color: "grey", fontSize: "3px"}}>....</p>
    </div>





  </div>

);

export default teamBox;
