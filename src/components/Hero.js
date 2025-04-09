import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <video
        className="hero-video"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero-content container text-center position-absolute top-50 start-50 translate-middle text-white">
        <h1 className="display-4 fw-bold animated fadeIn">
          Smart IT Solutions
        </h1>
        <p className="lead animated fadeIn delay-1s">
          We deliver scalable web and cloud systems for your growth.
        </p>
        <div className="hero-buttons mt-4">
          <a
            href="#contact"
            className="btn btn-primary m-2 animated fadeIn delay-2s"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="btn btn-outline-light m-2 animated fadeIn delay-2s"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
