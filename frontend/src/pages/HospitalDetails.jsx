import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const HospitalDetails = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const { data } = await api.getHospitalById(id);
        setHospital(data);
      } catch (error) {
        console.error('Error fetching hospital:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospital();
  }, [id]);

  if (loading) return <div className="loading">Loading Hospital Details...</div>;

  return (
    <div className="container">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={hospital.image} 
              alt={hospital.name} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{hospital.name}</h1>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold">Location:</span> {hospital.city}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Rating:</span> {hospital.rating}/5
              </p>
              <p className="text-lg">
                <span className="font-semibold">Departments:</span> {hospital.numberOfDepartments}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Doctors:</span> {hospital.numberOfDoctors}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Specialities</h2>
              <div className="flex flex-wrap gap-2">
                {hospital.speciality.map((spec, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;