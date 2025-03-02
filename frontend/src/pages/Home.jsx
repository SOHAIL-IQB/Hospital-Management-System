import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>Welcome to Hospital Manager</h1>
        <p>Efficient hospital management solution</p>
        <div className="cta-buttons">
          <Link to="/hospitals" className="btn btn-primary">Browse Hospitals</Link>
          <Link to="/hospital/create" className="btn">Add Hospital</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;