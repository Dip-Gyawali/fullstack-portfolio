import React, { useEffect, useState } from "react";

export default function About() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole([
      { name: "Full Stack Developer" },
      { name: "Laravel Developer" },
      { name: "React Developer" },
      { name: "Mern Stack Developer" },
    ]);
  }, []);

  return (
    <div>
      {/* About Section */}
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            As a passionate and detail-oriented Full Stack Developer, I
            specialize in building modern web applications with clean,
            efficient, and scalable code. With a strong foundation in both
            frontend and backend technologies, I enjoy transforming ideas into
            real-world solutions. I thrive in collaborative environments and
            continuously seek opportunities to grow and innovate through
            challenging projects.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 text-center">
              <img
                src="/images/me.png"
                className="img-fluid rounded-circle"
                alt="Profile"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </div>
            <div className="col-lg-8 content">
              <h2>
                {role?.map((item, index) => (
                  <span key={index}>
                    {item.name} {index < role.length - 1 && "| "}
                  </span>
                ))}
              </h2>
              <p className="fst-italic py-3">
                Full Stack Developer With Strong Knowledge of Laravel and MERN
                Stack
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Name:</strong> <span>Dip Kumar Gyawali</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+9779804444601">9804444601</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <a href="mail:dipgyawali2060@gmail.com">
                        dipgyawali2060@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Experience:</strong>{" "}
                      <span>1+ Years</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong>{" "}
                      <span>B.I.T</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong>{" "}
                      <span>Kathmandu, Nepal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </div>
  );
}
