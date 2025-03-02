import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hospitals from './pages/Hospitals'
import HospitalDetails from './pages/HospitalDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import HospitalForm from './components/HospitalForm'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hospitals" element={<Hospitals />} />
                <Route path="/hospital/:id" element={<HospitalDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                  <Route path="/hospital/create" element={<HospitalForm />} />
                  <Route path="/hospital/edit/:id" element={<HospitalForm isEdit />} />
                </Route>
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App