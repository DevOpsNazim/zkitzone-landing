import React from "react";
import Slider from "react-slick";
import "../css/Testimonials.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, // Enables fade transition
  };

  // Testimonials with additional dynamic client info
  const testimonials = [
    {
      quote:
        "zkitzone streamlined our entire infrastructure. We cut costs and improved speed overnight.",
      author: "– Jenna, CTO @ HealthStack",
    },
    {
      quote:
        "Their cloud and security setup helped us scale without the headaches. True pros!",
      author: "– Marco, Co-founder @ Learnlytics",
    },
    {
      quote:
        "We trust zkitzone for every project. Their DevOps skills are unmatched.",
      author: "– Ali, CEO @ NanoTech",
    },
    // New Client Testimonials with Equipment/Controls
    {
      quote:
        "PC Hotel Lahore partnered with zkitzone for advanced networking and CCTV surveillance setup. Our hotel now runs on a fully automated network with dynamic controls for monitoring, security, and guest services.",
      author: "– Waqar, IT Manager @ PC Hotel Lahore",
      equipment: [
        "CCTV Surveillance",
        "Network Infrastructure",
        "Guest Service Automation",
      ],
    },
    {
      quote:
        "Corvit Systems Lahore approached zkitzone for a high-performance cloud solution. Their cloud architecture provides us with flexibility, scalability, and efficient management of our IT resources.",
      author: "– Subhan Malik, CTO @ Corvit Systems Lahore",
      equipment: [
        "AWS Cloud Architecture",
        "Infrastructure Automation",
        "Secure Data Hosting",
      ],
    },
    {
      quote:
        "Parklane Hotel Lahore implemented zkitzone’s integrated IoT solutions, optimizing guest room controls, energy management, and surveillance systems to offer an exceptional guest experience.",
      author: "– Imran Khalid, Head of IT @ Parklane Hotel Lahore",
      equipment: [
        "IoT Room Control",
        "Energy Management",
        "Surveillance Systems",
      ],
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section bg-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 section-title">
          What Our Clients Say
        </h2>
        <div
          className="testimonial-slider mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <blockquote
                key={idx}
                className="testimonial-card p-4 bg-light rounded shadow text-center"
              >
                <p className="fs-5 fst-italic mb-3 testimonial-quote">
                  “{item.quote}”
                </p>
                <footer className="text-muted fw-medium testimonial-author">
                  {item.author}
                </footer>
                {item.equipment && item.equipment.length > 0 && (
                  <div className="testimonial-equipment mt-3">
                    <h6>Used Equipment & Controls:</h6>
                    <ul>
                      {item.equipment.map((equipment, idx) => (
                        <li key={idx}>{equipment}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </blockquote>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
