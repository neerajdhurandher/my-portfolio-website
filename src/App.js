import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.scss';

// Components
import DesktopNav from './components/navbar/desktop-nav';
import MobileNav from './components/navbar/mobile-nav';
import Backdrop from "./components/navbar/backdrop";
import MainPage from './components/mainpage/mainpage';
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import ProjectNew from './components/project-new/ProjectNew';
import Contact from "./components/contact/contact";
import FooterContact from "./components/footer/footerContact";
import Footer from "./components/footer/footer";
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';

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
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} userIsScrolled={this.state.userIsScrolled}/>;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} userIsScrolled={this.state.userIsScrolled} isOpen={true} />
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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          {/* ── Projects page ──────────────────────────────────── */}
          <Route path="/projects" element={
            <div className="App">
              {mobileNavbar}
              {backdrop}
              <DesktopNav
                mobileNavbarOpen={this.state.mobileNavbarOpen}
                userIsScrolled={this.state.userIsScrolled}
                mobileMenuOpen={this.mobileMenuOpen}
                closeMobileMenu={this.closeMobileMenu}
              />
              <ProjectsPage />
              <Footer />
            </div>
          } />

          {/* ── Main / catch-all ───────────────────────────────── */}
          <Route path="*" element={
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
              <ProjectNew />
              <Contact />
              <FooterContact />
              <Footer />

            </div>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
