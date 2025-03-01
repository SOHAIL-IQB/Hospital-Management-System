import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import hospitalRoutes from './src/routes/hospitalRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import errorHandler from './src/middlewares/errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/v1/hospitals', hospitalRoutes);
app.use('/api/v1/auth', authRoutes);

// Error Handling (MUST BE LAST MIDDLEWARE)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});