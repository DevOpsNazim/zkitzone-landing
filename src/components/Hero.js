import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../assets/css/main.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              We offer modern solutions for growing your business
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Smart IT Solutions | We deliver scalable web and cloud systems for
              your growth.
            </p>
            <div
              className="d-flex flex-column flex-md-row"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="#contact" className="btn-get-started">
                Free Consultation <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
          >
            <img
              src={require("../assets/img/hero-img.png")}
              className="img-fluid animated"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
