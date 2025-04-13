import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    "Eos aspernatur rem",
    "Facilis neque ipsa",
    "Volup amet volupt",
    "Rerum omnis sint",
    "Alias possimus",
    "Repellendus molli",
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
                    <i className="bi bi-check"></i>
                    <h3>{feature}</h3>
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
