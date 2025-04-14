// import React, { useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import "../assets/css/main.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section id="about" className="about section">
//       <div className="container" data-aos="fade-up">
//         <div className="row gx-0">
//           <div
//             className="col-lg-6 d-flex flex-column justify-content-center"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="content">
//               <h3>Who We Are</h3>
//               <h2>
//                 At ZK IT Zone, we’re passionate about empowering businesses
//                 through smart, scalable, and secure technology solutions.
//               </h2>
//               <p>
//                 From cutting-edge web and app development to robust cloud
//                 infrastructure, DevOps automation, and enterprise-grade
//                 cybersecurity, we deliver IT services designed to elevate your
//                 operations.
//               </p>
//               <p>
//                 Our team of certified experts works closely with you to
//                 understand your unique needs and craft solutions that drive real
//                 results. With 24/7 support, transparent communication, and a
//                 commitment to excellence, your satisfaction is not just our
//                 goal—it’s our guarantee. At ZK IT Zone, your success is our
//                 mission.
//               </p>
//               <div className="text-center text-lg-start">
//                 <a
//                   href="#"
//                   className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
//                 >
//                   <span>Read More</span>
//                   <i className="bi bi-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-lg-6 d-flex align-items-center"
//             data-aos="zoom-out"
//             data-aos-delay="200"
//           >
//             <img
//               src={require("../assets/img/about.png")}
//               className="img-fluid"
//               alt="About"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../assets/css/main.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who We Are</h3>
              <h2>
                Empowering businesses through smart, scalable, and secure
                technology solutions.
              </h2>
              <p>
                From web and app development to cloud infrastructure, DevOps,
                and cybersecurity, we deliver IT services tailored to elevate
                your business operations.
              </p>
              <p>
                Our certified experts collaborate closely with clients to craft
                impactful, results-driven solutions. With 24/7 support and a
                commitment to excellence, your success is our mission.
              </p>

              {/* Conditionally render additional content */}
              {showMore && (
                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                  <ul className="mt-4">
                    <li>Certified in AWS, Azure, Docker, Linux</li>
                    <li>Trusted by startups, SMBs, and global brands</li>
                    <li>
                      100% committed to performance, security, and support
                    </li>
                  </ul>
                </div>
              )}

              <div
                className="d-flex flex-column flex-md-row"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button
                  onClick={handleToggle}
                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>{showMore ? "Show Less" : "Read More"}</span>

                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src={require("../assets/img/about.png")}
              className="img-fluid"
              alt="About"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
