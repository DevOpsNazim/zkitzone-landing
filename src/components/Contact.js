import React from "react";
import "../css/Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4 animate__animated animate__fadeIn">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/xyzebyvj"
          method="POST"
          className="mx-auto animate__animated animate__fadeIn animate__delay-1s"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              rows="5"
              className="form-control"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary px-5">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
