import aboutImg from "../assets/img/services/about-surgery.jpg";

const About = () => {
  return (
    <section id="about" className="about-modern section">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="about-image-box">
              <img
                src={aboutImg}
                alt="Best Medical Care at Saroja Hospital"
                className="img-fluid"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content-box">

              <span className="about-label">ABOUT US</span>

              <h2>
                Best Medical Care For Yourself <br /> and Your Family
              </h2>

              <p className="about-text">
                At <strong>Saroja Hospital, Prayagraj</strong>, we are committed to delivering
                advanced, safe and affordable healthcare services. Our hospital combines
                experienced doctors, modern medical technology and compassionate patient
                care to ensure reliable treatment outcomes for every family.
              </p>

              {/* ICON FEATURES */}
              <div className="about-features">

                <div className="feature-circle">
                  <i className="bi bi-person-check"></i>
                  <h5>Qualified<br />Doctors</h5>
                </div>

                <div className="feature-circle">
                  <i className="bi bi-hospital"></i>
                  <h5>Emergency<br />Services</h5>
                </div>

                <div className="feature-circle">
                  <i className="bi bi-activity"></i>
                  <h5>Accurate<br />Testing</h5>
                </div>

                <div className="feature-circle">
                  <i className="bi bi-ambulance"></i>
                  <h5>Free<br />Ambulance</h5>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
