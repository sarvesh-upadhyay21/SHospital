import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const AboutPage = () => {
  return (
    <main className="main">

      <PageHero
        title="About Saroja Hospital"
        breadcrumb={[
          { label: "About" }
        ]}
      />


      {/* ================= ABOUT CONTENT ================= */}
      <section id="about" className="about section">
        <div className="container">

          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="content">

                {/* SEO Optimized H2 */}
                <h2>
                  About Saroja Hospital – Multispeciality Hospital in Prayagraj
                </h2>

                <p>
                  <strong>Saroja Hospital</strong> is a trusted and patient-centric healthcare
                  center in Prayagraj, known for accurate diagnosis, ethical medical practices,
                  and modern treatment facilities. Our focus is always on patient safety,
                  comfort, and long-term health outcomes.
                </p>

                <p>
                  We offer a wide range of medical services including{" "}
                  <strong>
                    Endoscopy & Colonoscopy, Laparoscopic and General Surgery
                  </strong>, and effective treatment for Stones, Piles, Hernia, and Fissure.
                  Our hospital also provides complete care for stomach and digestive disorders,
                  liver diseases, chest and respiratory problems, heart conditions,
                  diabetes, thyroid disorders, TB, UTI, allergy, and asthma.
                </p>

                <p>
                  At Saroja Hospital, we believe that good treatment starts with clear
                  communication. Our experienced medical team ensures transparent
                  consultation, personalized care, and treatment in a clean, safe,
                  and supportive environment.
                </p>

                {/* ================= STATS ================= */}
                <div className="stats-container">
                  <div className="row gy-4">

                    <div className="col-sm-6">
                      <div className="stat-item">
                        <div className="stat-number">
                          5<span>+</span>
                        </div>
                        <div className="stat-label">
                          Years of Medical Experience
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="stat-item">
                        <div className="stat-number">
                          50,000<span>+</span>
                        </div>
                        <div className="stat-label">
                          Patients Successfully Treated
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ================= CTA ================= */}
                <div className="cta-buttons mt-4">
                  <Link to="/doctors" className="btn-primary me-3">
                    Consult Our Doctors
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    Explore Our Medical Services
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      {/* ================= END ABOUT ================= */}

    </main>
  );
};

export default AboutPage;
