import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import MultiSelect from './MultiSelect';

const HospitalForm = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    image: '',
    speciality: [],
    rating: 4,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isEdit ? 'Edit Hospital' : 'Create New Hospital'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          {/** Form Fields with Updated Styles */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Hospital Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Speciality</label>
            <MultiSelect
              selected={formData.speciality}
              onChange={(value) => setFormData({ ...formData, speciality: value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Number of Doctors</label>
            <input
              type="number"
              name="numberOfDoctors"
              value={formData.numberOfDoctors}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Number of Departments</label>
            <input
              type="number"
              name="numberOfDepartments"
              value={formData.numberOfDepartments}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition"
          >
            {isEdit ? 'Update Hospital' : 'Create Hospital'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalForm;