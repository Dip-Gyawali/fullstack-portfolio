import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials([
      {
        _id: "1",
        testimonial_name: "Amrit Bhusal",
        testimonial_designation: "Frontend Developer",
        testimonial_message: `<p>"Working alongside Dip has been one of the most rewarding experiences of my development career. As a full-stack developer, Dip brings not only technical depth across both frontend and backend but also a calm, solutions-driven mindset that elevates every project. His ability to bridge frontend needs with backend logic has consistently made our workflows smoother and more efficient. Whether it's API architecture, database optimization, or debugging complex logic, Dip approaches every challenge with precision and professionalism. He&rsquo;s not just a coder&mdash;he&rsquo;s a team asset, a problem-solver, and someone who genuinely cares about product quality and user experience."</p>`,
        image: "/img/testimonials/amrit.png",
      },
      {
        _id: "2",
        testimonial_name: "Rajiv Thakuri",
        testimonial_designation: "SEO Specialist",
        testimonial_message: `<p>"Working with Dip has been a seamless experience from an SEO perspective. As a full-stack developer, he not only understands technical implementation but also recognizes the importance of performance, structure, and crawlability in modern web development. Whether it was optimizing site speed, improving Core Web Vitals, or ensuring SEO-friendly markup and URLs, Dip consistently implemented best practices with precision. His ability to balance functionality with SEO requirements made a significant impact on the sites we collaborated on. Dip is a rare developer who genuinely understands how code and visibility go hand in hand."</p>`,
        image: "/img/testimonials/rajiv.jpg",
      },
      {
        _id: "3",
        testimonial_name: "Shaugat Puri",
        testimonial_designation: "Video Editor",
        testimonial_message: `<p>"Collaborating with Dip has been a game-changer for me as a video editor. His expertise as a full-stack developer ensured that every platform we worked on was fast, reliable, and tailored perfectly for smooth media integration. Whether it was optimizing video uploads, improving playback performance, or building tools that made my editing workflow easier, Dip always delivered with clarity and precision. He's not only technically skilled but also incredibly collaborative and responsive to creative needs. Truly one of the best developers I've worked with."</p>`,
        image: "/img/testimonials/saugat.jpg",
      },
    ]);
  }, []);

  useEffect(() => {
    const swiperInstance = new Swiper(".testimonials-swiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
      },
    });

    return () => {
      swiperInstance?.destroy();
    };
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold position-relative d-inline-block">
            Testimonials
            <span
              className="position-absolute"
              style={{
                height: "4px",
                width: "60px",
                backgroundColor: "#0d6efd",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></span>
          </h2>
          <p className="text-muted mt-3">
            Here's what people I've worked with have to say
          </p>
        </div>

        <div className="swiper testimonials-swiper" data-aos="fade-up">
          <div className="swiper-wrapper pb-4">
            {testimonials.map((item) => (
              <div className="swiper-slide" key={item._id}>
                <div className="bg-white rounded-3 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="mb-3">
                      <span
                        className="fs-1"
                        style={{ color: "#8cc0ff", lineHeight: 1 }}
                      >
                        ❝
                      </span>
                    </div>
                    <p className="fst-italic text-muted mb-4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.testimonial_message,
                        }}
                      />
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.testimonial_name}
                          width="60"
                          height="60"
                          className="rounded-circle border border-2"
                          style={{ objectFit: "cover" }}
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/60x60?text=NA";
                          }}
                        />
                      ) : (
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center bg-secondary-subtle text-secondary border"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-person fs-3"></i>
                        </div>
                      )}
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold">
                        {item.testimonial_name}
                      </h6>
                      <p className="mb-0 text-muted small">
                        {item.testimonial_designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-3"></div>
        </div>
      </div>
    </section>
  );
}
