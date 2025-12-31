import { Link } from "react-router-dom";

const PageHero = ({ title, breadcrumb = [] }) => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="directory-hero">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>

      {/* ===== BREADCRUMB (HERO KE NICHE) ===== */}
      {breadcrumb.length > 0 && (
        <section className="page-breadcrumb">
          <div className="container">
            <nav className="breadcrumb-nav" aria-label="breadcrumb">
              <Link to="/">Home</Link>

              {breadcrumb.map((item, index) => (
                <span key={index}>
                  {" "} /{" "}
                  {item.link ? (
                    <Link to={item.link}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </section>
      )}
    </>
  );
};

export default PageHero;
