import React ,{useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function () {
  const [basicInfo, setBasicInfo] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/front/home`).then((res) => {
      console.log("basicInfo",res.data.basicInfo);
      setBasicInfo(res.data.basicInfo);
    });
  }, []);

  return (
      <>
  <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list" />
    <div className="profile-img">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${basicInfo?.[0]?.image}`}
        alt={basicInfo?.[0]?.name}
        className="img-fluid rounded-circle"
      />
    </div>
    <a
      href="index.html"
      className="logo d-flex align-items-center justify-content-center"
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">{basicInfo?.[0]?.name}</h1>
    </a>
    <div className="social-links text-center">
      {basicInfo?.[0]?.facebook_link && (
        <a href={basicInfo[0].facebook_link} className="facebook" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook" />
        </a>
      )}
      {basicInfo?.[0]?.linkedin_link && (
        <a href={basicInfo[0].linkedin_link} className="linkedin" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin" />
        </a>
      )}
      {basicInfo?.[0]?.github_link && (
        <a href={basicInfo[0].github_link} className="github" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github" />
        </a>
      )}
      {basicInfo?.[0]?.gitlab_link && (
        <a href={basicInfo[0].gitlab_link} className="gitlab" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-gitlab" />
        </a>
      )}
      {basicInfo?.[0]?.insta_link && (
        <a href={basicInfo[0].insta_link} className="instagram" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram" />
        </a>
      )}
    </div>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="/#hero" className="active">
            <i className="bi bi-house navicon" />
            Home
          </a>
        </li>
        <li>
          <a href="/#about">
            <i className="bi bi-person navicon" /> About
          </a>
        </li>
        <li>
          <a href="/#resume">
            <i className="bi bi-file-earmark-text navicon" /> Resume
          </a>
        </li>
        <li>
          <a href="/#portfolio">
            <i className="bi bi-images navicon" /> Portfolio
          </a>
        </li>
        <li>
          <a href="/#services">
            <i className="bi bi-hdd-stack navicon" /> Services
          </a>
        </li>
        <li>
          <a href="/#testimonials">
            <i className="bi bi-chat-quote navicon" /> Testimonials
          </a>
        </li>
        <li>
          <a href="/#contact">
            <i className="bi bi-envelope navicon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <Outlet/>
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
        Designed by <a href="https://www.linkedin.com/in/dip-gyawali-537029312/" target="_blank" rel="noopener noreferrer">Dip Kumar Gyawali</a>
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
