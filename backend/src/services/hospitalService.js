import Hospital from '../models/Hospital.js';

export const createHospital = async (hospitalData) => {
  try {
    return await Hospital.create(hospitalData);
  } catch (error) {
    throw new Error(`Hospital creation failed: ${error.message}`);
  }
};

export const getHospitals = async (city) => {
  try {
    return city 
      ? await Hospital.find({ city }) 
      : await Hospital.find();
  } catch (error) {
    throw new Error(`Fetch hospitals failed: ${error.message}`);
  }
};

export const deleteHospital = async (hospitalId) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(hospitalId);
    if (!hospital) throw new Error('Hospital not found');
    return hospital;
  } catch (error) {
    throw new Error(`Delete failed: ${error.message}`);
  }
};

export const updateHospital = async (hospitalId, updateData) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      hospitalId,
      updateData,
      { new: true, runValidators: true }
    );
    if (!hospital) throw new Error('Hospital not found');
    return hospital;
  } catch (error) {
    throw new Error(`Update failed: ${error.message}`);
  }
};

export const addHospitalDetails = async (hospitalId, detailsData) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      hospitalId,
      { $set: detailsData },
      { new: true }
    );
    if (!hospital) throw new Error('Hospital not found');
    return hospital;
  } catch (error) {
    throw new Error(`Add details failed: ${error.message}`);
  }
};