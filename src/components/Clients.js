import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const clientImages = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
    "client-6.png",
    "client-7.png",
    "client-8.png",
  ];

  return (
    <section id="clients" className="clients section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Clients</h2>
        <p>We work with best clients</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 },
          }}
        >
          {clientImages.map((img, index) => (
            <SwiperSlide
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={require(`../assets/img/clients/${img}`)}
                className="img-fluid"
                alt={`Client ${index + 1}`}
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
