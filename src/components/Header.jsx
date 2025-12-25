import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img/logo.webp";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="Saroja Hospital – Modern Multispeciality Healthcare"
            className="img-fluid rounded-3 me-3"
            height="80"
            loading="lazy"
          />
          <h1 className="sitename mb-0">Saroja Hospital</h1>
        </Link>

        {/* Navigation */}
        <nav
          id="navmenu"
          className={`navmenu ${mobileOpen ? "navmenu-active" : ""}`}
        >
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMobileOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setMobileOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" onClick={() => setMobileOpen(false)}>
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              mobileOpen ? "bi-x" : "bi-list"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            role="button"
            aria-label="Toggle navigation"
          />
        </nav>

        {/* CTA */}
        <Link to="/appointment" className="btn-getstarted">
          Appointment
        </Link>

      </div>
    </header>
  );
};

export default Header;
