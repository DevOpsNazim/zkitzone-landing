// Hero.js
import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
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

      <div className="hero-content container text-center">
        <h1 className="display-4">Smart IT Solutions</h1>
        <p className="lead">
          We deliver scalable web and cloud systems for your growth.
        </p>
        <a href="#contact" className="btn btn-primary m-2">
          Get Started
        </a>
        <a href="#contact" className="btn btn-outline-light m-2">
          Free Consultation
        </a>
      </div>
    </section>
  );
}

export default Hero;
