import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [serviceData, setServiceData] = useState([]);
  const [services, setService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    setServiceData([
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

  useEffect(() => {
    if (serviceData && slug) {
      const found = serviceData.find((item) => item.slug === slug);
      setService(found || null);
    }
  }, [serviceData, slug]);

  if (!services) return <div>Loading or not found...</div>;

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{services?.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{services?.title}</li>
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
                {serviceData?.map((item, index) => (
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
                src={services?.cover_img}
                alt="image"
                className="img-fluid services-img"
              />
              <h3>
                 {services?.title}
              </h3>
              <p>
                {services?.desc && parse(services?.desc)}
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* /Service Details Section */}
    </main>
  );
}
