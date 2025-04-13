import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: "bi-activity",
      title: "Nesciunt Mete",
      desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      style: "item-cyan",
      delay: 100,
    },
    {
      icon: "bi-broadcast",
      title: "Eosle Commodi",
      desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      style: "item-orange",
      delay: 200,
    },
    {
      icon: "bi-easel",
      title: "Ledo Markt",
      desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      style: "item-teal",
      delay: 300,
    },
    {
      icon: "bi-bounding-box-circles",
      title: "Asperiores Commodi",
      desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      style: "item-red",
      delay: 400,
    },
    {
      icon: "bi-calendar4-week",
      title: "Velit Doloremque.",
      desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      style: "item-indigo",
      delay: 500,
    },
    {
      icon: "bi-chat-square-text",
      title: "Dolori Architecto",
      desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      style: "item-pink",
      delay: 600,
    },
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Check Our Services
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div
                className={`service-item ${service.style} position-relative`}
              >
                <i className={`bi ${service.icon} icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
