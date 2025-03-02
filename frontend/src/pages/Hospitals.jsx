import { useEffect, useState } from 'react'
import HospitalCard from '../components/HospitalCard'
import api from '../services/api'

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([])
  const [cityFilter, setCityFilter] = useState('')

  useEffect(() => {
    const loadHospitals = async () => {
      try {
        const { data } = await api.getHospitals(cityFilter)
        setHospitals(data)
      } catch (error) {
        console.error('Failed to load hospitals:', error)
      }
    }
    loadHospitals()
  }, [cityFilter])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
          <input
            type="text"
            placeholder="Search by city..."
            className="w-full md:w-64 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map(hospital => (
            <HospitalCard key={hospital._id} hospital={hospital} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hospitals