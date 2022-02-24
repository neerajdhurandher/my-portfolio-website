import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";
import FavoriteIcon from '@material-ui/icons/Favorite';

import Arrow from '../../assets/footer/arrow.svg';

const partnerBox = () => (
  <div className="footer ">
    <div className="wrapper padding20">
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div className="footer-box ">
            <p style={{display:"inline" , fontSize:"1.4rem"}}>Designed by &nbsp;
            <line style={{color:"#FFE600" ,display:"inline" , fontSize:"1.8rem"}}>Neeraj Dhurandher</line> </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="footer-box back-to-top">
              <p>BACK TO TOP</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </Col>  
      </Row>
      <div style={{color :"white" , textAlign:"center" , display:"inline"}} >
      <p >Thankyou for Visiting in My Website &nbsp; <FavoriteIcon style = {{color:"red" , fontSize : "2rem" }}/> </p>
      
    </div>
    </div>
  </div>
);
export default partnerBox;
