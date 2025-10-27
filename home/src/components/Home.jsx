import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import Hero from "../partials/Hero";
import About from "../partials/About";
import Skills from "../partials/Skills";
import Resume from "../partials/Resume";
import Portfolio from "../partials/Portfolio";
import Service from "../partials/Service";
import Testimonial from "../partials/Testimonial";
import Contact from "../partials/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Portfolio />
        <Service />
        <Testimonial />
      </main>
    </>
  );
}
