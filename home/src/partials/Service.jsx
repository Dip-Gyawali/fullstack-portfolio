import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Service() {
  const [services, setService] = useState([]);

  useEffect(() => {
    setService([
      {
        _id: "1",
        title: "Full Stack Web Application Development",
        slug: "full-stack-web-application-development",
        desc: "<p>I build modern, scalable, and fully responsive web applications using the latest technologies like React, Node.js, Express, and Laravel. From planning database architecture to crafting interactive UIs, I handle the entire development lifecycle. I also integrate third-party services, secure your application, and ensure fast performance across all devices. Whether it's a dashboard, e-commerce site, or a business portal &mdash; I can bring your idea to life with a production-grade solution.</p>",
        excerpt:
          "Complete web application development from frontend to backend with deployment-ready solutions.",
        cover_img: "/img/services/full stack.jpeg",
      },
      {
        _id: "2",
        title: "Website Deployment & Server Setup",
        slug: "website-deployment-server-setup",
        desc: "<p>I handle the complete deployment process of your website or application &mdash; whether it's a Node.js app, Laravel backend, or a static frontend. I set up hosting environments, configure domains, SSL certificates, and environment variables. From cPanel-based deployments to manual uploads using FileZilla or Git, I ensure your website is live, secure, and accessible with minimal downtime.</p>",
        excerpt:
          "Seamless website deployment via cPanel, shared hosting, or VPS.",
        cover_img: "/img/services/deployment.jpeg",
      },
      {
        _id: "3",
        title: "SEO Optimization & Audit",
        slug: "seo-optimization-audit",
        desc: "<p>I offer in-depth SEO optimization including technical SEO (performance, indexing, mobile responsiveness), on-page SEO (meta tags, heading structure), and integration with tools like Google Search Console and Analytics. I also optimize load time, fix crawl errors, and help improve your Google rankings with a well-structured site setup.</p>",
        excerpt:
          "Improve your website’s visibility with technical and on-page SEO.",
        cover_img: "/img/services/seo.jpeg",
      },
      {
        _id: "4",
        title: "Custom Admin Panel Development",
        slug: "custom-admin-panel-development",
        desc: "<p>Need to manage products, users, or content? I develop clean and functional admin panels using React or Laravel that let you take full control over your data. Role-based access, analytics dashboards, content editors &mdash; I customize it to fit your workflow perfectly.</p>",
        excerpt:
          "Powerful, easy-to-use admin panels to manage your business operations.",
        cover_img: "/img/services/admin panel.jpeg",
      },
      {
        _id: "5",
        title: "Business Website Development",
        slug: "business-website-development",
        desc: `
          <p class="" data-start="395" data-end="835">
          I develop fast, responsive, and SEO-optimized business websites that represent your brand and help convert visitors into customers. Whether you're a small business, local service provider, or startup, I’ll create a custom website that includes essential sections like About, Services, Contact, and Testimonials. The site will be easy to manage, mobile-friendly, and fully deployed with your domain and hosting.
          </p>
          <p class="" data-start="839" data-end="856">Features include:</p>
          <ul data-start="859" data-end="1157">
          <li class="" data-start="859" data-end="909">
          <p class="" data-start="861" data-end="909">Clean, modern design tailored to your industry</p>
          </li>
          <li class="" data-start="912" data-end="964">
          <p class="" data-start="914" data-end="964">SEO-friendly structure for better Google ranking</p>
          </li>
          <li class="" data-start="967" data-end="1020">
          <p class="" data-start="969" data-end="1020">Contact forms, maps, and social media integration</p>
          </li>
          <li class="" data-start="1023" data-end="1067">
          <p class="" data-start="1025" data-end="1067">Image optimization and page speed tuning</p>
          </li>
          <li class="" data-start="1070" data-end="1122">
          <p class="" data-start="1072" data-end="1122">Hosting and deployment support via cPanel or VPS</p>
          </li>
          </ul>
          `,
        excerpt:
          "Professionally designed websites tailored for businesses to attract customers and build trust.",
        cover_img: "/img/services/business site.png",
      },
    ]);
  }, []);

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
                    src={service.cover_img}
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
