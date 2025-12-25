import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section">
      <div className="container">

        {/* Main CTA */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Your Health Is Our Priority</h2>
            <p>
              At Saroja Hospital, we are committed to providing safe, timely and affordable
              medical care with experienced doctors, modern facilities and a
              patient-first approach for families across Prayagraj.
            </p>

            <div className="cta-buttons">
              <Link to="/appointment" className="btn-primary me-3">
                Book Appointment
              </Link>
              <Link to="/doctors" className="btn-secondary">
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="row features-row mt-5">

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h5>Emergency & Critical Care</h5>
              <p>
                Prompt medical attention and emergency support to handle urgent
                health conditions with care and responsibility.
              </p>
              <Link to="/contact" className="feature-link">
                <span>Get Help</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="bi bi-calendar-check"></i>
              </div>
              <h5>Easy Appointment Booking</h5>
              <p>
                Simple and convenient appointment scheduling to reduce waiting
                time and ensure timely consultation.
              </p>
              <Link to="/appointment" className="feature-link">
                <span>Book Now</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="bi bi-people"></i>
              </div>
              <h5>Experienced Medical Team</h5>
              <p>
                Qualified doctors and healthcare professionals delivering ethical,
                evidence-based and compassionate treatment.
              </p>
              <Link to="/doctors" className="feature-link">
                <span>Meet Our Doctors</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>

        {/* Emergency Alert */}
        <div className="emergency-alert mt-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="emergency-content d-flex align-items-center">
                <div className="emergency-icon me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="emergency-text">
                  <h4>Medical Emergency?</h4>
                  <p>
                    Call our emergency contact number for immediate medical assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="tel:+918127218003" className="emergency-btn">
                <i className="bi bi-telephone-fill"></i>
                Call +91 8127218003
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
