import React from "react";

import "./navbar.scss";

const backdrop = (props) => (
  <div
    onClick={props.closeMobileMenu}
    className={`backdrop ${props.isOpen ? "backdrop__open" : ""} ${props.userIsScrolled ? "backdrop_large" : ""}`}
  ></div>
);

export default backdrop;
