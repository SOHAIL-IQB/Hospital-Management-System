import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String },
  speciality: [{ type: String }],
  rating: { type: Number, min: 1, max: 5 },
  description: { type: String },
  images: [{ type: String }],
  numberOfDoctors: { type: Number },
  numberOfDepartments: { type: Number }
}, { timestamps: true });

export default mongoose.model('Hospital', hospitalSchema);