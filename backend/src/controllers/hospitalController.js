import Hospital from '../models/Hospital.js';

export const createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getHospitals = async (req, res) => {
  const { city } = req.query;
  try {
    const hospitals = await Hospital.find(city ? { city } : {});
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.query.id);
    if (!hospital) return res.status(404).json({ error: 'Hospital not found' });
    res.json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.query.id,
      req.body,
      { new: true }
    );
    if (!hospital) return res.status(404).json({ error: 'Hospital not found' });
    res.json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addHospitalDetails = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.query.id,
      { $set: req.body },
      { new: true }
    );
    if (!hospital) return res.status(404).json({ error: 'Hospital not found' });
    res.json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};