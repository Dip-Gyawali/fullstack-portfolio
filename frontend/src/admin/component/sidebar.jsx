import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faUser,
  faHome,
  faTh,
  faTools,
  faCogs,
  faStar,
  faEnvelope,
  faCode,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

export default function SideNav() {
  const [togglePortfolio, setPortfolioToggle] = useState(false);

  const toggleMenu = (menu) => {
    if (menu === "portfolio") {
      setPortfolioToggle((prev) => !prev);
    } 
  };
  return (
    <>
      {/* Begin page */}
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <a href="/admin" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="/images/logo-sm.svg" alt="logo" height={24} />
                  </span>
                  <span className="logo-lg">
                    <img src="/images/logo-sm.svg" alt="logo" height={24} />{" "}
                    <span className="logo-txt">Portfolio</span>
                  </span>
                </a>
                <a href="/admin" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="/images/logo-sm.svg" alt="logo" height={24} />
                  </span>
                  <span className="logo-lg">
                    <img src="/images/logo-sm.svg" alt="logo" height={24} />{" "}
                    <span className="logo-txt"> Portfolio</span>
                  </span>
                </a>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 header-item"
                id="vertical-menu-btn"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <h1 className="text-center">Portfolio Admin Panel</h1>
            </div>
          </div>
        </header>
        {/* ========== Left Sidebar Start ========== */}
        <div className="vertical-menu">
          <div data-simplebar="" className="h-100">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title" data-key="t-menu">
                  Menu
                </li>
                <li>
                  <a href="/admin/user">
                    <FontAwesomeIcon icon={faUser} />
                    <span data-key="t-dashboard">User</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/basic-info">
                    <FontAwesomeIcon icon={faHome} />
                    <span data-key="t-dashboard">Basic Info</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/roles">
                    <FontAwesomeIcon icon={faUser} />
                    <span data-key="t-dashboard">Roles</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/skills">
                    <FontAwesomeIcon icon={faTools} />
                    <span data-key="t-dashboard">Skills</span>
                  </a>
                </li> 
                <li>
                  <a href="/admin/service">
                    <FontAwesomeIcon icon={faCogs} />
                    <span data-key="t-dashboard">Service</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => toggleMenu("portfolio")}
                    className="has-arrow"
                  >
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span data-key="t-apps">Portfolio</span>
                  </a>
                  <ul
                    className={`sub-menu ${
                      togglePortfolio ? "d-block" : "d-none"
                    }`}
                    aria-expanded={togglePortfolio}
                  >
                    <li>
                      <a href="/admin/portfolio">
                      <FontAwesomeIcon icon={faBriefcase} />
                        <span data-key="t-calendar">Portfolio List</span>
                      </a>
                    </li>
                    <li>
                      <a href="/admin/portfolio-category">
                      <FontAwesomeIcon icon={faBriefcase} />
                        <span data-key="t-chat">Portfolio Category</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/admin/testimonials">
                    <FontAwesomeIcon icon={faStar} />
                    <span data-key="t-dashboard">Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/contacts">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span data-key="t-dashboard">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
        {/* Left Sidebar End */}
        {/* ============================================================== */}
        <div className="main-content">
          {/* End Page-content */}
          <Outlet />
          <footer className="footer">
            <div className="container-fluid">
            </div>
          </footer>
        </div>
      </div>
      {/* END layout-wrapper */}
    </>
  );
}
