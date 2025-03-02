import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Modern Hospital Management System
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Efficiently manage hospital records, staff, and patient data with our comprehensive solution.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/hospitals"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Browse Hospitals
          </Link>
          <Link
            to="/hospital/create"
            className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10"
          >
            Add New Hospital
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home