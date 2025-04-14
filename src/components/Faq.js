import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faqs")
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch FAQs:", err);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderFaqItems = (colIndex) =>
    faqs
      .filter((_, i) => i % 2 === colIndex)
      .map((faq, index) => {
        const globalIndex = faqs.findIndex((f) => f.question === faq.question);
        const isActive = activeIndex === globalIndex;

        return (
          <div
            className={`faq-item ${isActive ? "faq-active" : ""}`}
            key={globalIndex}
            onClick={() => toggleFAQ(globalIndex)}
            data-aos="fade-up"
          >
            <div className="d-flex align-items-center">
              <i
                className={`faq-icon bi ${
                  faq.icon || "bi-question-circle"
                } me-2`}
              ></i>
              <h3>{faq.question}</h3>
            </div>
            <div
              className="faq-content"
              style={{ display: isActive ? "block" : "none" }}
            >
              <p>{faq.answer}</p>
            </div>
            <i
              className={`faq-toggle bi ${
                isActive ? "bi-chevron-down" : "bi-chevron-right"
              }`}
            ></i>
          </div>
        );
      });

  return (
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>F.A.Q</h2>
        <p>Frequently Asked Questions</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">{renderFaqItems(0)}</div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-container">{renderFaqItems(1)}</div>
          </div>
        </div>

        {/* Contact Form Call-to-Action */}
        <div className="text-center mt-5">
          <h4>Need more help?</h4>
          <p>
            If your question isn't answered here, feel free to reach out to us
            directly.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
