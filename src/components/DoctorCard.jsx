import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">

      {/* Header */}
      <div className="doctor-header">
        <img src={doctor.image} alt={doctor.name} />

        <div className="doctor-meta">
          <h3>{doctor.name}</h3>
          <span className="doctor-role">{doctor.designation}</span>

          <div className="line"></div>

          <p className="doctor-speciality">{doctor.department}</p>

          {doctor.subSpeciality && (
            <p className="doctor-sub">
              <strong>Sub-speciality:</strong> {doctor.subSpeciality}
            </p>
          )}
        </div>
      </div>

      <div className="divider"></div>

      {/* Tabs */}
      <div className="doctor-tabs">
        <span className="active">Qualification</span>
        <span>Experience</span>
      </div>

      {/* Qualification */}
      <ul className="doctor-qualification">
        {doctor.qualifications.map((q, i) => (
          <li key={i}>✓ {q}</li>
        ))}
      </ul>

      <div className="divider"></div>

      {/* Footer */}
      <div className="doctor-footer">
        <Link to={`/doctors/${doctor.slug}`} className="view-profile">
          View Profile
        </Link>
        <span className="arrow">›</span>
      </div>

    </div>
  );
};

export default DoctorCard;
