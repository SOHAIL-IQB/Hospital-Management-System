import { useState, useEffect } from 'react';
import HospitalCard from '../components/HospitalCard';
import api from '../services/api';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const { data } = await api.getHospitals(cityFilter);
        setHospitals(data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospitals();
  }, [cityFilter]);

  if (loading) return <div className="loading">Loading Hospitals...</div>;

  return (
    <div className="container">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by city..."
          className="form-input"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
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