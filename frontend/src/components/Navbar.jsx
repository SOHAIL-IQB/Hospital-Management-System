import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            Hospital Manager
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <button onClick={logout} className="text-gray-600 hover:text-primary">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-primary">
                  Login
                </Link>
                <Link to="/register" className="text-primary hover:text-primary/80">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar