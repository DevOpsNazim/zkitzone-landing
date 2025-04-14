// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";

// const Faq = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const [faqs, setFaqs] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/faqs")
//       .then((res) => {
//         setFaqs(res.data);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch FAQs:", err);
//       });
//   }, []);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const renderFaqItems = (colIndex) =>
//     faqs
//       .filter((_, i) => i % 2 === colIndex)
//       .map((faq, index) => {
//         const globalIndex = faqs.findIndex((f) => f.question === faq.question);
//         const isActive = activeIndex === globalIndex;

//         return (
//           <div
//             className={`faq-item ${isActive ? "faq-active" : ""}`}
//             key={globalIndex}
//             onClick={() => toggleFAQ(globalIndex)}
//             data-aos="fade-up"
//           >
//             <div className="d-flex align-items-center">
//               <i
//                 className={`faq-icon bi ${
//                   faq.icon || "bi-question-circle"
//                 } me-2`}
//               ></i>
//               <h3>{faq.question}</h3>
//             </div>
//             <div
//               className="faq-content"
//               style={{ display: isActive ? "block" : "none" }}
//             >
//               <p>{faq.answer}</p>
//             </div>
//             <i
//               className={`faq-toggle bi ${
//                 isActive ? "bi-chevron-down" : "bi-chevron-right"
//               }`}
//             ></i>
//           </div>
//         );
//       });

//   return (
//     <section id="faq" className="faq section">
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2>F.A.Q</h2>
//         <p>Frequently Asked Questions</p>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//             <div className="faq-container">{renderFaqItems(0)}</div>
//           </div>
//           <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
//             <div className="faq-container">{renderFaqItems(1)}</div>
//           </div>
//         </div>

//         {/* Contact Form Call-to-Action */}
//         <div className="text-center mt-5">
//           <h4>Need more help?</h4>
//           <p>
//             If your question isn't answered here, feel free to reach out to us
//             directly.
//           </p>
//           <a href="#contact" className="btn btn-primary">
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;

// import React, { useEffect, useState } from "react";

// const Faq = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // fetch("/api/faq") // Relative path works locally and on Vercel
//     fetch(`${process.env.REACT_APP_API_URL}/api/faq`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch FAQs");
//         return res.json();
//       })
//       .then((data) => setFaqs(data))
//       .catch((err) => {
//         console.error("Error loading FAQs:", err);
//         setError("Sorry, FAQs could not be loaded.");
//       });
//   }, []);

//   return (
//     <section id="faq" className="faq section py-5 bg-light">
//       <div className="container">
//         <h2 className="text-center mb-4">Frequently Asked Questions</h2>
//         {error ? (
//           <p className="text-danger text-center">{error}</p>
//         ) : (
//           <div className="accordion" id="faqAccordion">
//             {faqs.map((faq, index) => (
//               <div className="accordion-item" key={index}>
//                 <h2 className="accordion-header" id={`heading${index}`}>
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#collapse${index}`}
//                     aria-expanded="false"
//                     aria-controls={`collapse${index}`}
//                   >
//                     {faq.question}
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapse${index}`}
//                   className="accordion-collapse collapse"
//                   aria-labelledby={`heading${index}`}
//                   data-bs-parent="#faqAccordion"
//                 >
//                   <div className="accordion-body">{faq.answer}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Faq;

import React, { useEffect, useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load FAQs");
        return res.json();
      })
      .then((data) => setFaqs(data))
      .catch((err) => {
        console.error("Error loading FAQs:", err);
        setError("Could not load FAQs. Please try again later.");
      });
  }, []);

  return (
    <section id="faq" className="faq section-bg py-5">
      <div className="container">
        <div className="section-title text-center mb-4">
          <h2>Frequently Asked Questions</h2>
        </div>

        {error && <p className="text-danger text-center">{error}</p>}

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`collapse-${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
