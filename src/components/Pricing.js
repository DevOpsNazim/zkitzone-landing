import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const pricingPlans = [
    {
      name: "Free Plan",
      price: 0,
      color: "#20c997",
      icon: "bi-box",
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        { text: "Pharetra massa", unavailable: true },
        { text: "Massa ultricies mi", unavailable: true },
      ],
      delay: 100,
    },
    {
      name: "Starter Plan",
      price: 19,
      color: "#0dcaf0",
      icon: "bi-send",
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        "Pharetra massa",
        { text: "Massa ultricies mi", unavailable: true },
      ],
      featured: true,
      delay: 200,
    },
    {
      name: "Business Plan",
      price: 29,
      color: "#fd7e14",
      icon: "bi-airplane",
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        "Pharetra massa",
        "Massa ultricies mi",
      ],
      delay: 300,
    },
    {
      name: "Ultimate Plan",
      price: 49,
      color: "#0d6efd",
      icon: "bi-rocket",
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        "Pharetra massa",
        "Massa ultricies mi",
      ],
      delay: 400,
    },
  ];

  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Check Our Affordable Pricing
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {pricingPlans.map((plan, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={plan.delay}
            >
              <div className="pricing-tem">
                {plan.featured && <span className="featured">Featured</span>}
                <h3 style={{ color: plan.color }}>{plan.name}</h3>
                <div className="price">
                  <sup>$</sup>
                  {plan.price}
                  <span> / mo</span>
                </div>
                <div className="icon">
                  <i
                    className={`bi ${plan.icon}`}
                    style={{ color: plan.color }}
                  ></i>
                </div>
                <ul>
                  {plan.features.map((item, i) =>
                    typeof item === "string" ? (
                      <li key={i}>{item}</li>
                    ) : (
                      <li key={i} className={item.unavailable ? "na" : ""}>
                        {item.text}
                      </li>
                    )
                  )}
                </ul>
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
