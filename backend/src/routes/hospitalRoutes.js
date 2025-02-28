import express from 'express';
import {
  createHospital,
  getHospitals,
  deleteHospital,
  updateHospital,
  addHospitalDetails
} from '../controllers/hospitalController.js';

const router = express.Router();

router.post('/create', createHospital);
router.get('/', getHospitals);
router.delete('/delete', deleteHospital);
router.put('/update', updateHospital);
router.post('/details', addHospitalDetails);

export default router;