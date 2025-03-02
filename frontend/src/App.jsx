import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import HospitalDetails from './pages/HospitalDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import HospitalForm from './components/HospitalForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/hospital/:id" element={<HospitalDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/hospital/create" element={<HospitalForm />} />
              <Route path="/hospital/edit/:id" element={<HospitalForm isEdit />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;