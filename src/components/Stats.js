import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Stats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stats = [
    {
      icon: "bi-emoji-smile",
      color: "color-blue",
      end: 114,
      label: "Happy Clients",
    },
    {
      icon: "bi-journal-richtext",
      color: "color-orange",
      end: 52,
      label: "Projects",
      style: { color: "#ee6c20" },
    },
    {
      icon: "bi-headset",
      color: "color-green",
      end: 1463,
      label: "Hours Of Support",
      style: { color: "#15be56" },
    },
    {
      icon: "bi-people",
      color: "color-pink",
      end: 13,
      label: "Hard Workers",
      style: { color: "#bb0852" },
    },
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i
                  className={`bi ${stat.icon} ${stat.color} flex-shrink-0`}
                  style={stat.style}
                ></i>
                <div>
                  <InView triggerOnce threshold={0.5}>
                    {({ inView, ref }) => (
                      <span ref={ref}>
                        {inView ? <CountUp end={stat.end} duration={1.5} /> : 0}
                      </span>
                    )}
                  </InView>
                  <p>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
