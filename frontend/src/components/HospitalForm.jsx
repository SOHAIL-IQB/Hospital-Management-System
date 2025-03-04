import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const HospitalForm = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    image: '',
    speciality: [],
    rating: 3,
    description: '',
    images: [],
    numberOfDoctors: 0,
    numberOfDepartments: 0
  });

  useEffect(() => {
    if (isEdit && id) {
      api.getHospitalById(id)
        .then(res => setFormData(res.data))
        .catch(err => console.error(err));
    }
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.updateHospital(id, formData);
      } else {
        await api.createHospital(formData);
      }
      navigate('/hospitals');
    } catch (error) {
      alert(error.response?.data?.error || 'Operation failed');
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-2xl font-bold mb-6">
        {isEdit ? 'Edit Hospital' : 'Create New Hospital'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label className="form-label">Hospital Name</label>
          <input
            type="text"
            className="form-input"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-input"
            value={formData.city}
            onChange={e => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          {isEdit ? 'Update Hospital' : 'Create Hospital'}
        </button>
      </form>
    </div>
  );
};

export default HospitalForm;