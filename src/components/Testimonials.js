import React from "react";
import Slider from "react-slick";
import "../css/Testimonials.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials=()=> {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
  ];

  return (
    <section id="testimonials" className="testimonials-section bg-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What Our Clients Say</h2>
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
                <p className="fs-5 fst-italic mb-3">“{item.quote}”</p>
                <footer className="text-muted fw-medium">{item.author}</footer>
              </blockquote>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}


