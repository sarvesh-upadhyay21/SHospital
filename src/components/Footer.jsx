import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">

      <div className="container footer-top">
        <div className="row gy-4">

          {/* Hospital Info */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center text-decoration-none">
              <span className="sitename">Saroja Hospital</span>
            </Link>

            <div className="footer-contact pt-3">
              <p>
                Wari, Pratappur, Prayagraj <br />
                Uttar Pradesh, India – 212401
              </p>

              <p className="mt-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:+918127218003">+91 8127218003</a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:sarojahospital25@gmail.com">
                  sarojahospital25@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="social-links d-flex mt-4">
              <a
                href="https://x.com/SarojaHospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saroja Hospital Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578194472776"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saroja Hospital Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/sarojahospital25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saroja Hospital Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saroja Hospital LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Our Specialties</h4>
            <ul>
              <li><Link to="/services#general-medicine">General Medicine</Link></li>
              <li><Link to="/services#laparoscopic-surgery">Laparoscopic Surgery</Link></li>
              <li><Link to="/services#chest-care">Chest & Respiratory Care</Link></li>
              <li><Link to="/services#endoscopy">Endoscopy & Colonoscopy</Link></li>
              <li><Link to="/services#emergency-care">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="col-xl-3 col-lg-12 col-md-7">
            <div className="footer-widget mb-30">
              <h4>Hospital Location</h4>
              <div className="map-canvas">
                <iframe
                  title="Saroja Hospital Location"
                  className="map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3208.5410447865233!2d82.25462282679428!3d25.489538764996908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762447943235"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Saroja Hospital</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
