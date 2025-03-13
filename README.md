# Hospital Management System

## Overview
The Hospital Management System is a full-stack web application designed to efficiently manage hospital records. It allows users to create, view, edit, and delete hospital records, including details such as name, city, specialization, and ratings

## Features
- Add new hospitals with images and specialties  
- Search and filter hospitals by city  
- Edit and update hospital details  
- Delete hospital records  
- Secure authentication system using JWT  

## Tech Stack

### Backend
- Node.js with Express.js (REST API)  
- MongoDB as the database  
- Mongoose for object modeling  
- JWT for authentication  

### Frontend
- React.js (Vite-based setup)  
- Axios for API requests  
- React Router for navigation  
- Tailwind CSS for styling  

## Project Structure
```
backend/
│── src/
│   ├── config/              # Database connection
│   ├── controllers/         # Business logic (hospital & authentication)
│   ├── middlewares/         # Authentication & error handling
│   ├── models/              # Mongoose models (Hospital, User)
│   ├── routes/              # API routes
│   ├── services/            # Additional services
│── server.js                # Backend entry point
│── .env                     # Environment variables
│── package.json             # Dependencies
│── README.md                # Project documentation

frontend/
│── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Application pages
│   ├── services/            # API service functions
│── public/                  # Static assets
│── App.js                   # Main application entry
│── index.css                # Global styles
│── package.json             # Frontend dependencies

```

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/yourusername/hospital-management.git
cd hospital-management

cd backend
npm install
cp .env.example .env  # Configure environment variables
npm start  # Runs on http://localhost:8000

cd frontend
npm install
npm run dev  # Runs on http://localhost:5173


Authentication
	•	User authentication is implemented using JWT tokens.
	•	Protected routes require a valid token for access.

Future Enhancements
	•	Doctor and patient management
	•	Appointment booking system
	•	Dashboard with analytics


