import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Digital Transformation",
      icon: "bi-laptop",
    },
    {
      title: "Cloud & On-Premise Integration",
      icon: "bi-cloud-arrow-down",
    },
    {
      title: "Advanced Cybersecurity",
      icon: "bi-shield-lock",
    },
    {
      title: "DevOps & Automation",
      icon: "bi-gear-wide-connected",
    },
    {
      title: "Smart Networking",
      icon: "bi-diagram-3",
    },
    {
      title: "Backup & Disaster Recovery",
      icon: "bi-database-lock",
    },
  ];

  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>
          Our Advanced Features
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
            <img
              src={require("../assets/img/features.png")}
              className="img-fluid"
              alt="Features"
            />
          </div>

          <div className="col-xl-6 d-flex">
            <div className="row align-self-center gy-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className={`bi ${feature.icon}`}></i>
                    <h3>{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
