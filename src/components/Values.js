import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="values" className="values section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Values</h2>
        <p>
          What we value most
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <img
                src={require("../assets/img/values-1.png")}
                className="img-fluid"
                alt="Value 1"
              />
              <h3>Innovation at Every Stage</h3>
              <p>
                We embrace innovation not just as a concept—but as a mindset.
                From early-stage ideation to final deployment, we apply
                forward-thinking strategies and the latest technologies to
                deliver smarter, faster, and future-proof solutions. Whether
                it's automation, AI, or modern DevOps, we're always evolving to
                stay ahead of the curve.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img
                src={require("../assets/img/values-2.png")}
                className="img-fluid"
                alt="Value 2"
              />
              <h3>People-Centered Collaboration</h3>
              <p>
                At the heart of every project are the people behind it—our
                clients, our team, and our users. We value transparent
                communication, deep collaboration, and long-term relationships.
                Your goals become our goals, and your success becomes our
                mission. We listen, adapt, and co-create every step of the way.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img
                src={require("../assets/img/values-3.png")}
                className="img-fluid"
                alt="Value 3"
              />
              <h3>Security, Scalability, and Excellence</h3>
              <p>
                We build with purpose and precision. Every solution is
                engineered to be secure, scalable, and high-performing from day
                one. Through rigorous testing, reliable infrastructure, and a
                quality-first approach, we ensure you get results you can count
                on—today and tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
