import React from "react";
import "./aboutdetails.scss";

// /Icon
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';

function DetailType(props) {
  if (props.type == "email")
    return <MailOutlineRoundedIcon className="about_details_icon" style={{ fontSize: "25px" }} />;
  if (props.type == "instagram")
    return <InstagramIcon className="about_details_icon" style={{ fontSize: "25px" }} />;
  if (props.type == "website")
    return <LanguageOutlinedIcon className="about_details_icon" style={{ fontSize: "25px" }} />;
  if (props.type == "address")
    return <HomeOutlinedIcon className="about_details_icon" style={{ fontSize: "25px" }} />;
  else
    return <HomeOutlinedIcon className="about_details_icon" style={{ fontSize: "25px" }} />;
}
const about_details = (props) => (

  <div className="about_details" onClick={() => window.open(props.link, "_blank")} >
    <DetailType type={props.type} />
    <p className="about_details_title"> &nbsp; {props.title} : </p>
    <p className="about_details_value" > &nbsp; {props.value}</p>
  </div>
);

export default about_details;
