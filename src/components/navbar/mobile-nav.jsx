import React from "react";
import { Link } from "react-scroll";
import "./navbar.scss";

function NavItem (props) {
  
  return (
  <Link
    activeClass="active-link"
    to= {props.to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={props.action}
  >
    {props.name}
  </Link>
  )
}

const mobileNav = (props) => (

  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""} ${props.userIsScrolled ? "small-nav" : ""}`}>

    <div className="mobile__navbar-menu">
      <ul>
        <li className="flex-center">
          <NavItem  to = "mainpage" name = "HOME" action = {props.closeMobileMenu}/>
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
      </ul>
    </div>
  </div>
);

export default mobileNav;
