import React from 'react';
import { Link } from "react-scroll";
// SCSS
import './navbar.scss';
import './hamburger.scss'

// Assets
import LogoNeeraj from '../../assets/navbar/neeraj_logo_svg.svg';

let menuOpen = false;

function hamburgerEvent() {
  if (!menuOpen) {
    menuOpen = true;
  } else {
    menuOpen = false;
  }

};

const SetMenuState = (props) => {
  if (!props.setMenu && menuOpen) {
    menuOpen = false;
  }
  return null;
};

const desktopNav = (props) => (

  // <nav className={`Navbar extraLargeNavbar  ${menuOpen ? "open_mobile_nav" : ""}`}>
    
    <nav className={`Navbar   ${!props.userIsScrolled ? "extraLargeNavbar" : ""}  ${menuOpen ? "open_mobile_nav" : ""}`}>

    <div className="wrapper flex-s-between">
      <div>
        <Link to="mainpage" spy={true} smooth={true} offset={-70} duration={500}>
          <img src={LogoNeeraj} alt="logo" className="pointer" />
        </Link>
      </div>

      <div className="mobile__menu" onClick = {hamburgerEvent} onClick={menuOpen ? props.closeMobileMenu : props.mobileMenuOpen}  >
        {
          <SetMenuState setMenu={props.mobileNavbarOpen} />
        }
        <div className={`ham-menu-btn ${menuOpen ? "open" : ""}`} onClick = {hamburgerEvent}  >
          <div className="ham-menu-btn__burger"></div>
        </div>
      </div>

      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li >
            <Link activeClass="active-link" to="mainpage" spy={true} smooth={true} offset={-70} duration={500}>
              HOME
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;