import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPortfolio = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API}/front/home/portfolio/${slug}`);
      setPortfolio(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
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
    getPortfolio();
  }, [slug]);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{portfolio?.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{portfolio?.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section py-5">
        <div className="container" data-aos="fade-up">
          {portfolio && (
            <div className="row">
              {/* Featured Image */}
              <div className="col-12 mb-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="portfolio-featured-image position-relative overflow-hidden rounded shadow-sm" style={{ maxHeight: "500px" }}>
                  {portfolio.cover_img ? (
                    <img 
                      src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${portfolio.cover_img}`} 
                      alt={portfolio.title} 
                      className="img-fluid w-100 object-fit-cover"
                      style={{ maxHeight: "500px", objectFit: "cover" }}
                    />
                  ) : (
                    <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                      <p className="text-muted">No image available</p>
                    </div>
                  )}
                  
                </div>
              </div>

              {/* Information and Description */}
              <div className="col-md-4 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="200">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Project Information</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Title</strong>
                        <span>{portfolio.title}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Category</strong>
                        <span>{portfolio.category}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Client</strong>
                        <span>{portfolio.client_name}</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Project URL</strong>
                        <div className="mt-2">
                          <a 
                            href={portfolio.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-sm btn-outline-primary w-100"
                          >
                            Visit Project
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-8" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Project Description</h4>
                  </div>
                  <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: portfolio.desc }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* End Portfolio Details Section */}
    </main>
  );
}