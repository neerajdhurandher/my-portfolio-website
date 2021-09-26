import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from '../../assets/navbar/mobile-close.svg';
import LogoNeeraj from '../../assets/navbar/neeraj_logo_svg.svg';

const mobileNav = (props) => (
  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
    <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
    <div className="mobile__navbar-logo flex-center">
      <Link
        to="mainpage"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={props.closeMobileMenu}
      >
        <img src={LogoNeeraj} alt="logo" />
      </Link>
    </div>
    <div className="mobile__navbar-menu">
      <ul>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="mainpage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            HOME
          </Link>
        </li>
        
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            SKILLS
          </Link>
        </li>

        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default mobileNav;
