import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./aboutdetails.scss";

// /Icon
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


let detail_type = "phone_number";

function DetailType (props){ 
    if(props.type == "email")
  return  <MailOutlineRoundedIcon className="about_details_icon" style={{fontSize:"25px"}}/>;
  if(props.type == "phone")
  return  <PhoneInTalkOutlinedIcon className="about_details_icon" style={{fontSize:"25px"}}/>;
  if(props.type == "website")
  return  <LanguageOutlinedIcon className="about_details_icon" style={{fontSize:"25px"}}/>;
  if(props.type == "address")
  return  <HomeOutlinedIcon className="about_details_icon" style={{fontSize:"25px"}}/>;
  else
  return  <HomeOutlinedIcon className="about_details_icon" style={{fontSize:"25px"}}/>;
}
const aboutdetails = (props) => (

<div className = "aboutdetails" onClick={()=> window.open(props.link, "_blank")} >

  <DetailType type = {props.type}/>

 <p className="about_details_title"> &nbsp; { props.title} : </p>
 <p className="about_details_value" > &nbsp; {props.value}</p>
                  
</div>

);

export default aboutdetails;