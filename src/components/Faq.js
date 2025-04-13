import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    col: 0,
  },
  {
    question:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices...",
    col: 0,
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim...",
    col: 0,
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices...",
    col: 1,
  },
  {
    question:
      "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in...",
    col: 1,
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi...",
    col: 1,
  },
];

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderFaqItems = (colIndex) =>
    faqs
      .filter((faq, i) => faq.col === colIndex)
      .map((faq, i) => {
        const index = faqs.findIndex((f) => f.question === faq.question);
        const isActive = activeIndex === index;

        return (
          <div
            className={`faq-item ${isActive ? "faq-active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>
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
      </div>
    </section>
  );
};

export default Faq;
