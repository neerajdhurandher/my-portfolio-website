import React from 'react';
import './style/App.scss';

// Components
import DesktopNav from './components/navbar/desktop-nav';
import MobileNav from './components/navbar/mobile-nav';
import Backdrop from "./components/navbar/backdrop";
import MainPage from './components/mainpage/mainpage';
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import FooterContact from "./components/footer/footerContact";
import Footer from "./components/footer/footer";

class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  // Detect if user is scorlled down (used for add/disable extra large navbar)
  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };
  // On closeMobileMenu click close navbar
  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };
  // Mobile menu handler
  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    // BACKDROP RENDER
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} />;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
      );
    }
    // MOBILE NAVBAR RENDER
    let mobileNavbar = <MobileNav />;
    if (this.state.mobileNavbarOpen) {
      mobileNavbar = (
        <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} userIsScrolled={this.state.userIsScrolled}
        />
      );
    }

    return (

      <div className="App">

        {mobileNavbar}
        {backdrop}
        <DesktopNav
          mobileNavbarOpen={this.state.mobileNavbarOpen}
          userIsScrolled={this.state.userIsScrolled}
          mobileMenuOpen={this.mobileMenuOpen}
          closeMobileMenu={this.closeMobileMenu}
        />

        <MainPage />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <FooterContact />
        <Footer />

      </div>

    );
  }
}

export default App;
