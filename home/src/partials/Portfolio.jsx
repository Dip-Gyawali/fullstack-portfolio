import React from "react";

export default function Portfolio({ portfolio }) {
  return (
    <div>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            {" "}
            Welcome to my portfolio! Here you'll find a selection of my recent
            projects, showcasing my skills in web development, design, and
            problem-solving. Each project reflects my dedication to writing
            clean, efficient code and creating user-friendly digital
            experiences.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            {/* End Portfolio Filters */}
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {portfolio?.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                  key={index}
                >
                  <div
                    className="portfolio-content h-100"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      height: "100%",
                    }}
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${
                        item.cover_img
                      }`}
                      className="img-fluid"
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "contain",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div
                      className="portfolio-info p-3"
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h4 style={{ marginBottom: "5px", fontSize: "1.1rem" }}>
                          {item.category}
                        </h4>
                        <p
                          style={{ marginBottom: "10px", fontSize: "0.95rem" }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <div>
                        <a
                          href={item.link}
                          title="Click To open link"
                          data-gallery="portfolio-gallery-app"
                          className="glightbox preview-link me-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="bi bi-link-45deg"
                          />
                        </a>
                        <a
                          href={`/portfolio/${item.slug}`}
                          title="More Details"
                          className="details-link"
                        >
                          <i
                            className="bi bi-eye"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End Portfolio Container */}
          </div>
        </div>
      </section>
      {/* /Portfolio Section */}
    </div>
  );
}
