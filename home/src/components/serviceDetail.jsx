import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/front/home/service/${slug}`
      );
      setServiceData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
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
  }, [slug]);

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{serviceData?.service?.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{serviceData?.service?.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}
      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="services-list">
                {serviceData?.allService?.map((item, index) => (
                  <a href={`/services/${item.slug}`} className="active">
                    {item.title}
                  </a>
                ))}
              </div>
              <h4>What I Can Do for You</h4>
              <p>
                Here’s a list of services I offer to help you achieve your goals
                with reliable and modern web solutions.
              </p>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${serviceData?.service?.cover_img}`}
                alt="image"
                className="img-fluid services-img"
              />
              <h3>
                 {serviceData?.service?.title}
              </h3>
              <p>
                {serviceData?.service?.desc && parse(serviceData?.service?.desc)}
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* /Service Details Section */}
    </main>
  );
}
