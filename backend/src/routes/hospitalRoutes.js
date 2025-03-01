import express from 'express';
import { protect, admin } from '../middlewares/auth.js';
import {
  createHospital,
  getHospitals,
  deleteHospital,
  updateHospital,
  addHospitalDetails
} from '../controllers/hospitalController.js';

const router = express.Router();

// Public routes
router.get('/', getHospitals);

// Protected admin routes
router.use(protect, admin);
router.post('/create', createHospital);
router.delete('/delete', deleteHospital);
router.put('/update', updateHospital);
router.post('/details', addHospitalDetails);

export default router;