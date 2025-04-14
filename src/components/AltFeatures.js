import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AltFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const altFeatures = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      desc: "Responsive and high-performance websites built with the latest technologies like React, Next.js, and modern CMS platforms.",
    },
    {
      icon: "bi-phone",
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps using Flutter and React Native to ensure seamless performance across Android and iOS.",
    },
    {
      icon: "bi-brush",
      title: "UI/UX & Logo Design",
      desc: "Creative and user-focused interfaces, branding, and logos that communicate your vision and convert visitors into clients.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "SEO & Digital Marketing",
      desc: "Boost your search rankings and visibility with optimized content, keyword strategy, and on-page SEO techniques.",
    },
    {
      icon: "bi-hdd-network",
      title: "Hosting & Domain Management",
      desc: "End-to-end management of domain registration, hosting, SSL, and DNS for stable and secure online presence.",
    },
    {
      icon: "bi-cloud-upload",
      title: "Cloud App Deployment",
      desc: "Launch and manage scalable applications on AWS, Azure, or Google Cloud with full CI/CD pipelines.",
    },
  ];

  return (
    <section id="alt-features" className="alt-features section">
      <div className="container">
        <div className="row gy-5">
          <div
            className="col-xl-7 d-flex order-2 order-xl-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row align-self-center gy-5">
              {altFeatures.map((feature, index) => (
                <div className="col-md-6 icon-box" key={index}>
                  <i className={`bi ${feature.icon}`}></i>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-xl-5 d-flex align-items-center order-1 order-xl-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={require("../assets/img/alt-features.png")}
              className="img-fluid"
              alt="Alt Features"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AltFeatures;
