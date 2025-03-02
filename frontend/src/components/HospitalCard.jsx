import { Link } from 'react-router-dom'

const HospitalCard = ({ hospital }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img 
      src={hospital.image} 
      alt={hospital.name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{hospital.name}</h3>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
          ★ {hospital.rating}
        </span>
      </div>
      <p className="text-gray-600 mb-4 flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {hospital.city}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {hospital.speciality.map((spec, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
          >
            {spec}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Link
          to={`/hospital/${hospital._id}`}
          className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
)

export default HospitalCard