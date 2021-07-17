import React from 'react';
import { Link } from "react-scroll";
 // SCSS
import './navbar.scss';
// Assets
import LogoImgYellow from '../../assets/navbar/logo-yellow.svg';
import LogoNeeraj from '../../assets/navbar/neeraj_logo_svg.svg';
import MenuIcon from '@material-ui/icons/Menu';

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="mainpage" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoNeeraj} alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <MenuIcon alt="menu" style={{fontSize:"3.5rem"}}/>
      </div>
      
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li >
          <Link activeClass="active-link" to = "mainpage" spy={true} smooth={true} offset={-70} duration={500}>
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
              Projects
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