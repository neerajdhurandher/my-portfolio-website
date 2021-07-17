import React from "react";
import { Link } from "react-scroll";

import "./projectsBox.scss";


const blog = (props) => (
    <div className="blog__box ">
      <div className="blog__image" 
       onClick = {()=> window.open(props.article.gihubLink, "_blank")}
      >
        <img src={props.article.image} alt="blog story" />
        <div className="blog__hover flex-center">
          <h4 className="font30 weight800">CLICK FOR CODE</h4>
        </div>
      </div>
      <div className="blog__info">
        <h4 className="font20 weight800">{props.article.title}</h4>
        <p className="font14 weight800 padding10">{props.article.description}</p>
        <p className="font14 weight800 ">{props.article.uselang}</p>
        <p className="font14 weight800">{props.article.date}</p>
      </div>
    </div>
  );

export default blog;
