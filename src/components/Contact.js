// import React from "react";
// import "../css/Contact.css";

// export const Contact = () => {
//   return (
//     <section id="contact" className="contact-section py-5 text-center bg-light">
//       <div className="container">
//         <h2 className="fw-bold mb-4 animate__animated animate__fadeIn">
//           Contact Us
//         </h2>
//         <form
//           action="https://formspree.io/f/xyzebyvj"
//           method="POST"
//           className="mx-auto animate__animated animate__fadeIn animate__delay-1s"
//           style={{ maxWidth: "600px" }}
//         >
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <textarea
//               name="message"
//               rows="5"
//               className="form-control"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary px-5">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Info Column */}
          <div className="col-lg-6">
            <div className="row gy-4">
              {[
                {
                  icon: "bi-geo-alt",
                  title: "Address",
                  lines: ["H-15, STR-32 Canal Park Gulberg-2 Lahore, Pakistan"],
                  delay: 200,
                },
                {
                  icon: "bi-telephone",
                  title: "Call Us",
                  lines: ["+92 (306) 911-3060", "+92 (304) 988-7779"],
                  delay: 300,
                },
                {
                  icon: "bi-envelope",
                  title: "Email Us",
                  lines: ["info@zkitzone.com", "contact@zkitzone.com"],
                  delay: 400,
                },
                {
                  icon: "bi-clock",
                  title: "Open Hours",
                  lines: ["Monday - Friday", "9:00AM - 05:00PM"],
                  delay: 500,
                },
              ].map((info, idx) => (
                <div className="col-md-6" key={idx}>
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay={info.delay}
                  >
                    <i className={`bi ${info.icon}`}></i>
                    <h3>{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <form
              action="https://formspree.io/f/xyzebyvj"
              method="POST"
              className="php-email-form"
              // onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  {status === "loading" && (
                    <div className="loading">Loading</div>
                  )}
                  {status === "error" && (
                    <div className="error-message">Something went wrong</div>
                  )}
                  {status === "sent" && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
