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
  const [basicInfo, setBasicInfo] = useState(null);
  const [role, setRole] = useState(null);
  const [services, setServices] = useState(null);
  const [skills, setSkills] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  const getData = async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/front/home`);
      console.log(response.data);
      setBasicInfo(response.data.basicInfo);
      setRole(response.data.role);
      setServices(response.data.service);
      setSkills(response.data.skill);
      setTestimonials(response.data.testimonial);
      setPortfolio(response.data.portfolio);
      console.log(response.data.skill);
      
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    getData();
  }, []);

  return (
    <>
      <main className="main">
        <Hero basicInfo={basicInfo} role={role} />
        <About basicInfo={basicInfo} role={role} />
        <Skills skills={skills} />
        <Resume basicInfo={basicInfo} />
        <Portfolio portfolio={portfolio}/>
        <Service services={services} />
        <Testimonial testimonials={testimonials} />
        <Contact basicInfo={basicInfo} />
      </main>
    </>
  );
}
