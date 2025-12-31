import { Link } from "react-router-dom";

import endoscopyImg from "../assets/img/services/Endoscopy&Colonoscopy.png";
import laparoscopyImg from "../assets/img/services/Laparoscopic&GeneralSurgery.png";
import stonesImg from "../assets/img/services/Treatment of Stones, Piles, Hernia & Fissure.png";
import tbImg from "../assets/img/services/TB, UTI, Allergy & Asthma.png";
import heartImg from "../assets/img/services/Blood Pressure, Heart Disease & Thyroid Care.png";
import liverImg from "../assets/img/services/Liver & Diabetes Management.png";

import PageHero from "../components/PageHero";

const Services = () => {
  return (
    <main className="main">

      {/* ===== COMMON HERO (PAGE LEVEL) ===== */}
      <PageHero
        title="Our Medical Services"
        breadcrumb={[{ label: "Services" }]}
      />

      {/* ===== SERVICES GRID ===== */}
      <section
        id="featured-departments"
        className="featured-departments section"
      >
        <div className="container">
          <div className="row gy-4">

            {/* 1. Endoscopy & Colonoscopy */}
            <div className="col-lg-4 col-md-6">
              <div className="department-card">
                <div className="department-image">
                  <img
                    src={endoscopyImg}
                    alt="Endoscopy and Colonoscopy services in Prayagraj"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="department-content">
                  <div className="department-icon">
                    <i className="fas fa-microscope"></i>
                  </div>
                  <h3>Endoscopy & Colonoscopy</h3>
                  <p>
                    Accurate diagnosis and treatment of digestive system disorders using
                    advanced endoscopic and colonoscopic procedures.
                  </p>
                  <Link to="/services/endoscopy" className="btn-learn-more">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Laparoscopic & General Surgery */}
            <div className="col-lg-4 col-md-6">
              <div className="department-card">
                <div className="department-image">
                  <img
                    src={laparoscopyImg}
                    alt="Laparoscopic and general surgery at Saroja Hospital Prayagraj"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="department-content">
                  <div className="department-icon">
                    <i className="fas fa-procedures"></i>
                  </div>
                  <h3>Laparoscopic & General Surgery</h3>
                  <p>
                    Minimally invasive surgical treatment for gallbladder, appendix,
                    hernia and piles, enabling faster recovery and minimal discomfort.
                  </p>
                  <Link to="/services/laparoscopic-surgery" className="btn-learn-more">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Stones, Piles, Hernia & Fissure */}
            <div className="col-lg-4 col-md-6">
              <div className="department-card">
                <div className="department-image">
                  <img
                    src={stonesImg}
                    alt="Kidney stones, piles, hernia and fissure treatment in Prayagraj"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="department-content">
                  <div className="department-icon">
                    <i className="fas fa-clinic-medical"></i>
                  </div>
                  <h3>Stones, Piles, Hernia & Fissure</h3>
                  <p>
                    Advanced laser and surgical treatment options for kidney stones,
                    piles, fissures and hernia with minimal pain and faster healing.
                  </p>
                  <Link to="/services/stones-piles-hernia" className="btn-learn-more">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. TB, UTI, Allergy & Asthma */}
            <div className="col-lg-4 col-md-6">
              <div className="department-card">
                <div className="department-image">
                  <img
                    src={tbImg}
                    alt="TB, UTI, allergy and asthma treatment in Prayagraj"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="department-content">
                  <div className="department-icon">
                    <i className="fas fa-lungs"></i>
                  </div>
                  <h3>TB, UTI, Allergy & Asthma</h3>
                  <p>
                    Comprehensive care for respiratory diseases, infections and allergies
                    with long-term disease management and monitoring.
                  </p>
                  <Link to="/services/tb-uti-asthma" className="btn-learn-more">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Heart, Thyroid & Blood Pressure */}
            <div className="col-lg-4 col-md-6">
              <div className="department-card">
                <div className="department-image">
                  <img
                    src={heartImg}
                    alt="Heart disease, thyroid and blood pressure treatment in Prayagraj"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="department-content">
                  <div className="department-icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h3>Heart, Thyroid & Blood Pressure Care</h3>
                  <p>
                    Expert diagnosis, treatment and continuous monitoring of hypertension,
                    thyroid disorders and heart-related conditions.
                  </p>
                  <Link to="/services/heart-thyroid-bp" className="btn-learn-more">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 6. Liver & Diabetes Management */}
            <div className="col-lg-4 col-md-6">
              <div className="department-card">
                <div className="department-image">
                  <img
                    src={liverImg}
                    alt="Liver disease and diabetes management in Prayagraj"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="department-content">
                  <div className="department-icon">
                    <i className="fas fa-syringe"></i>
                  </div>
                  <h3>Liver & Diabetes Management</h3>
                  <p>
                    Personalized treatment plans for diabetes and liver disorders with
                    lifestyle guidance and regular health monitoring.
                  </p>
                  <Link to="/services/liver-diabetes" className="btn-learn-more">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Services;
