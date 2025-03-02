import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">🏥 Hospital Manager</Link>
          <div className="nav-links">
            {user ? (
              <>
                <span>Welcome, {user.name}</span>
                {user.role === 'admin' && (
                  <Link to="/hospital/create" className="btn">Add Hospital</Link>
                )}
                <button onClick={logout} className="btn btn-danger">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;