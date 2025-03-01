import * as hospitalService from '../services/hospitalService.js';

export const createHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.createHospital(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getHospitals = async (req, res) => {
  try {
    const hospitals = await hospitalService.getHospitals(req.query.city);
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.deleteHospital(req.query.id);
    res.json({ message: 'Hospital deleted successfully', hospital });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.updateHospital(
      req.query.id,
      req.body
    );
    res.json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addHospitalDetails = async (req, res) => {
  try {
    const hospital = await hospitalService.addHospitalDetails(
      req.query.id,
      req.body
    );
    res.json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};