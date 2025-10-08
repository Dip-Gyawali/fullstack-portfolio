import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleToggle = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const handleNavClick = () => {
    // Hide mobile nav when clicking on navigation links
    setIsHeaderVisible(false);
  };

  return (
    <>
      <header 
        id="header" 
        className={`header dark-background d-flex flex-column ${isHeaderVisible ? 'header-show' : ''}`}
      >
        <i 
          className={`header-toggle d-xl-none ${isHeaderVisible ? 'bi bi-x' : 'bi bi-list'}`}
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        />
        <div className="profile-img">
          <img
            src="/images/me.png"
            alt="Dip Kumar Gyawali"
            className="img-fluid rounded-circle"
          />
        </div>
        <a
          href="index.html"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Dip Kumar Gyawali</h1>
        </a>
        <div className="social-links text-center">
          <a
            href="https://www.facebook.com/hiten.gyawali.1"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/dip-gyawali-537029312/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin" />
          </a>
          <a
            href="https://github.com/Dip-Gyawali"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href="https://gitlab.com/hitn"
            className="gitlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-gitlab" />
          </a>
          <a
            href="https://www.instagram.com/hitengyawali/"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram" />
          </a>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/#hero" className="active" onClick={handleNavClick}>
                <i className="bi bi-house navicon" />
                Home
              </a>
            </li>
            <li>
              <a href="/#about" onClick={handleNavClick}>
                <i className="bi bi-person navicon" /> About
              </a>
            </li>
            <li>
              <a href="/#portfolio" onClick={handleNavClick}>
                <i className="bi bi-images navicon" /> Portfolio
              </a>
            </li>
            <li>
              <a href="/#services" onClick={handleNavClick}>
                <i className="bi bi-hdd-stack navicon" /> Services
              </a>
            </li>
            <li>
              <a href="/#testimonials" onClick={handleNavClick}>
                <i className="bi bi-chat-quote navicon" /> Testimonials
              </a>
            </li>
            
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Dip Portfolio</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/dip-gyawali-537029312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dip Kumar Gyawali
            </a>
          </div>
        </div>
      </footer>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}