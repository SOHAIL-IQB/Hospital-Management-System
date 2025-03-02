import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const HospitalDetails = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const { data } = await api.getHospitalById(id);
        setHospital(data);
      } catch (error) {
        console.error('Error fetching hospital:', error);
      }
    };
    fetchHospital();
  }, [id]);

  if (!hospital) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="hospital-details">
        <h1>{hospital.name}</h1>
        <div className="details-content">
          <div className="main-info">
            <img src={hospital.image} alt={hospital.name} />
            <div className="stats">
              <p>📍 {hospital.city}</p>
              <p>★ {hospital.rating}</p>
              <p>Doctors: {hospital.numberOfDoctors}</p>
              <p>Departments: {hospital.numberOfDepartments}</p>
            </div>
          </div>
          <div className="additional-info">
            <h3>Specialities</h3>
            <div className="specialities">
              {hospital.speciality.map((spec, index) => (
                <span key={index} className="spec-badge">{spec}</span>
              ))}
            </div>
            <h3>Description</h3>
            <p>{hospital.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;