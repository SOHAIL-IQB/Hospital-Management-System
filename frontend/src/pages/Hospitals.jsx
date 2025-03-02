import { useState, useEffect } from 'react';
import HospitalCard from '../components/HospitalCard';
import api from '../services/api';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const { data } = await api.getHospitals(searchCity);
        setHospitals(data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };
    fetchHospitals();
  }, [searchCity]);

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </div>
      <div className="card-grid">
        {hospitals.map(hospital => (
          <HospitalCard key={hospital._id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default Hospitals;