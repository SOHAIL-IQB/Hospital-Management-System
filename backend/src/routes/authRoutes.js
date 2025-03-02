import express from 'express';
import { register, login, getProfile } from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me',protect, getProfile);

export default router;