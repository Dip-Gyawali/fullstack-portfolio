import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial({ testimonials }) {
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
                          src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${item.image}`}
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
                      <h6 className="mb-1 fw-semibold">{item.testimonial_name}</h6>
                      <p className="mb-0 text-muted small">{item.testimonial_designation}</p>
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