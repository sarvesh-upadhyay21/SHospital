import PageHero from "../components/PageHero";

const Contact = () => {
  return (
    <main className="main">

      {/* ===== COMMON HERO ===== */}
      <PageHero
        title="Contact Us"
        breadcrumb={[{ label: "Contact Us" }]}
      />

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact section">
        <div className="container">

          <div className="row gy-5">

            {/* ===== LEFT : CONTACT INFO ===== */}
            <div className="col-lg-5">
              <h3>Get in touch</h3>
              <p className="text-muted">
                We’d love to hear from you. Our team is always here to help.
              </p>

              <div className="contact-info">

                <div className="info-item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h5>Office</h5>
                    <p>
                      Wari, Pratappur, Prayagraj<br />
                      Uttar Pradesh – 212401
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h5>Call Us</h5>
                    <p>+91 8127218003</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="bi bi-whatsapp"></i>
                  <div>
                    <h5>WhatsApp</h5>
                    <p>+91 8127218003</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h5>Email</h5>
                    <p>sarojahospital25@gmail.com</p>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== RIGHT : CONTACT FORM ===== */}
            <div className="col-lg-7">
              <h3>Send your queries</h3>

              <form className="contact-form">

                <div className="row gy-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn-primary">
                      Submit
                    </button>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <section className="map-section">
        <iframe
          title="Saroja Hospital Location"
          src="https://www.google.com/maps?q=Wari%20Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0, width: "100%", height: "400px" }}
          loading="lazy"
        ></iframe>
      </section>

    </main>
  );
};

export default Contact;
