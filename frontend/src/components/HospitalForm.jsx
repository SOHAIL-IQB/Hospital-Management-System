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
      api.getHospitalById(id).then(res => setFormData(res.data));
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
      <h2>{isEdit ? 'Edit Hospital' : 'Create Hospital'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Hospital Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        {/* Add other form fields similarly */}
        <button type="submit" className="btn btn-primary">
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default HospitalForm;