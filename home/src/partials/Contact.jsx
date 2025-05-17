import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Contact({ basicInfo }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [successBanner, setSuccessBanner] = useState(false);

  // Effect to handle automatic hiding of success banner after 5 seconds
  useEffect(() => {
    let timeoutId;
    if (successBanner) {
      timeoutId = setTimeout(() => {
        setSuccessBanner(false);
      }, 5000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [successBanner]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API}/front/home/send-message`, formData);

      setStatus({
        type: "success",
        message: "Message submitted successfully!",
      });
      
      // Show the success banner
      setSuccessBanner(true);
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Success Banner */}
      {successBanner && (
        <div className="success-banner" style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "15px 30px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
          textAlign: "center",
          fontWeight: "bold",
          width: "auto",
          maxWidth: "90%"
        }}>
          Message sent successfully! Thank you for contacting us.
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Send Message to Reach Me Out</p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>{basicInfo?.[0]?.location}</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Me</h3>
                    <p>{basicInfo?.[0]?.phone_no}</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Me</h3>
                    <p>{basicInfo?.[0]?.email}</p>
                  </div>
                </div>
                {/* End Info Item */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4200.445070936068!2d85.32802925383753!3d27.712988012436693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e4e3dfaeb%3A0xcbadb01fa8d00b71!2sNaxal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1747279038221!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      id="message-field"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 text-center">
                    {loading && <div className="loading">Loading...</div>}
                    {status.message && (
                      <div
                        className={
                          status.type === "success"
                            ? "sent-message"
                            : "error-message"
                        }
                      >
                        {status.message}
                      </div>
                    )}
                    <button type="submit" disabled={loading}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </div>
  );
}