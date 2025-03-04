import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for JWT
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default {
  // Auth
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/me'),

  // Hospitals
  getHospitals: (city) => api.get(`/hospitals?city=${city}`),
  createHospital: (data) => api.post('/hospitals/create', data),
  updateHospital: (id, data) => api.put(`/hospitals/update?id=${id}`, data),
  deleteHospital: (id) => api.delete(`/hospitals/delete?id=${id}`),
  getHospitalById: (id) => api.get(`/hospitals/${id}`),
  addHospitalDetails: (id, data) => api.post(`/hospitals/details?id=${id}`, data)
};