import { Link } from 'react-router-dom';

const HospitalCard = ({ hospital }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={hospital.image || '/hospital-placeholder.jpg'} alt={hospital.name} />
      </div>
      <div className="card-content">
        <h3>{hospital.name}</h3>
        <div className="card-meta">
          <span>📍 {hospital.city}</span>
          <span>★ {hospital.rating}</span>
        </div>
        <div className="card-actions">
          <Link to={`/hospital/${hospital._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;