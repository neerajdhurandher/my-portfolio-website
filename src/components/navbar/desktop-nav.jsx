import React from 'react';
import { Link } from "react-scroll";
// SCSS
import './navbar.scss';
import './hamburger.scss'

import ResumeDownloadButton from '../ui-components/resume-download/resume-button'
import NavScrollLink from './NavScrollLink';

// Assets
import LogoIcon from '../../assets/navbar/neeraj_logo_svg.svg';

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
        <NavScrollLink to="home">
          <img src={LogoIcon} alt="logo" className="pointer main-logo" />
        </NavScrollLink>
      </div>
      {/*  hamburger */}
      <div className="mobile__menu" onClick={menuOpen ? props.closeMobileMenu : props.mobileMenuOpen}  >
        {
          <SetMenuState setMenu={props.mobileNavbarOpen} />
        }
        <div className={`ham-menu-btn ${menuOpen ? "open" : ""}`} onClick = {hamburgerEvent}  >
          <div className="ham-menu-btn__burger"></div>
        </div>
      </div>

      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <NavScrollLink to="home">HOME</NavScrollLink>
          </li>
          <li>
            <NavScrollLink to="about">ABOUT</NavScrollLink>
          </li>
          <li>
            <NavScrollLink to="skills">SKILLS</NavScrollLink>
          </li>
          <li>
            <NavScrollLink to="projects">PROJECTS</NavScrollLink>
          </li>
          <li>
            <NavScrollLink to="contact">CONTACT</NavScrollLink>
          </li>
          <li>
            <ResumeDownloadButton/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;