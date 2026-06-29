import React from "react";
import "./navbar.scss";
import ResumeDownloadButton from "../ui-components/resume-download/resume-button";
import NavScrollLink from "./NavScrollLink";

function NavItem(props) {
  return (
    <NavScrollLink to={props.to} onClick={props.action}>
      {props.name}
    </NavScrollLink>
  );
}

const mobileNav = (props) => (

  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""} ${props.userIsScrolled ? "small-nav" : ""}`}>

    <div className="mobile__navbar-menu">
      <ul>
        <li className="flex-center">
          <NavItem  to = "home" name = "HOME" action = {props.closeMobileMenu}/>
        </li>

        <li className="flex-center">
          <NavItem  to = "about" name = "ABOUT" action = {props.closeMobileMenu}/>
        </li>

        <li className="flex-center">
          <NavItem  to = "skills" name = "SKILLS" action = {props.closeMobileMenu}/>
        </li>

        <li className="flex-center">
          <NavItem  to = "projects" name = "PROJECTS" action = {props.closeMobileMenu}/>
        </li>

        <li className="flex-center">
          <NavItem  to = "contact" name = "CONTACT" action = {props.closeMobileMenu}/>
        </li>

        <li className="flex-center">
          <ResumeDownloadButton/>
        </li>
      </ul>
    </div>
  </div>
);

export default mobileNav;
