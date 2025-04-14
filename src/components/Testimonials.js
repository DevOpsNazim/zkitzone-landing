import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <section id="testimonials" className="section bg-white">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What Our Clients Say</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-light rounded shadow text-center"
              >
                <p className="fs-5 fst-italic mb-3">“{item.quote}”</p>
                <footer className="text-muted fw-medium">{item.author}</footer>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
