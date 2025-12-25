import { Link } from "react-router-dom";
import heroImg from "../assets/img/health/SarojaHospital.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container-fluid p-0">
        <div className="hero-wrapper">

          {/* Hero Image */}
          <div className="hero-image">
            <img
              src={heroImg}
              alt="Saroja Hospital Wari Prayagraj – Multispeciality Healthcare Facility"
              className="img-fluid"
              loading="eager"
              width="1920"
              height="900"
            />
            <div className="hero-overlay" />
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <div className="content-box">

                    {/* Primary SEO Heading */}
                    <h1>
                      Saroja Hospital – Multispeciality Healthcare in Prayagraj
                    </h1>

                    {/* Supporting Heading */}
                    <h2 className="hero-subtitle">
                      Advanced Endoscopy, Laparoscopy & Chest Care with Modern Medical Technology
                    </h2>
 

                    {/* CTA Buttons */}
                    <div className="cta-group">
                      <Link to="/appointment" className="btn btn-primary">
                        <i className="bi bi-calendar-check"></i> Book Appointment
                      </Link>

                      <Link to="/services" className="btn btn-outline">
                        <i className="bi bi-list-ul"></i> Explore Services
                      </Link>
                    </div>

                    {/* Info Badges */}
                    <div className="info-badges">

                      <div className="badge-item">
                        <i className="bi bi-telephone-fill"></i>
                        <div className="badge-content">
                          <span>Emergency Contact</span>
                          <strong>
                            <a href="tel:+918127218003" className="text-decoration-none">
                              +91 8127218003
                            </a>
                          </strong>
                        </div>
                      </div>

                      <div className="badge-item">
                        <i className="bi bi-clock-fill"></i>
                        <div className="badge-content">
                          <span>OPD Timings</span>
                          <strong>Mon – Wed – Fri | 3:00 PM – 6:00 PM</strong>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Key Services Highlights */}
              <div className="features-wrapper">
                <div className="row gy-4">

                  <div className="col-lg-4 col-md-6">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="bi bi-camera-video-fill"></i>
                      </div>
                      <div className="feature-text">
                        <h3>Endoscopy</h3>
                        <p>
                          Accurate diagnosis and treatment of digestive disorders using
                          advanced endoscopic techniques.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="bi bi-eye-fill"></i>
                      </div>
                      <div className="feature-text">
                        <h3>Colonoscopy</h3>
                        <p>
                          Comprehensive colon screening and early detection with modern
                          medical equipment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>
                      <div className="feature-text">
                        <h3>Laser Treatment</h3>
                        <p>
                          Minimally invasive laser treatment for piles, kidney stones and
                          related conditions.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
