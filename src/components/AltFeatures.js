import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AltFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const altFeatures = [
    {
      icon: "bi-award",
      title: "Corporis voluptates sit",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    },
    {
      icon: "bi-card-checklist",
      title: "Ullamco laboris nisi",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: "bi-dribbble",
      title: "Labore consequatur",
      desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    },
    {
      icon: "bi-filter-circle",
      title: "Beatae veritatis",
      desc: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
    },
    {
      icon: "bi-lightning-charge",
      title: "Molestiae dolor",
      desc: "Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte",
    },
    {
      icon: "bi-patch-check",
      title: "Explicabo consectetur",
      desc: "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore",
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
