import React from "react";
import parse from "html-react-parser";

export default function Service({ services }) {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Provide the best services to the clients</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {services?.map((service, index) => (
              <div
                key={service._id}
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="card border-0 shadow-sm w-100">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${
                      service.cover_img
                    }`}
                    className="card-img-top img-fluid"
                    alt={service.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold" title={service.title}>
                      {service.title}
                    </h5>
                    <p className="card-text" title={service.excerpt}>
                      {service.excerpt}
                    </p>
                    <a
                      href={`/services/${service.slug}`}
                      className="btn btn-sm btn-primary mt-auto align-self-start"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </div>
  );
}
