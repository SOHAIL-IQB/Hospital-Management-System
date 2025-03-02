import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

const HospitalDetails = () => {
  const { id } = useParams()
  const [hospital, setHospital] = useState(null)

  useEffect(() => {
    const loadHospital = async () => {
      try {
        const { data } = await api.getHospitalById(id)
        setHospital(data)
      } catch (error) {
        console.error('Failed to load hospital details:', error)
      }
    }
    loadHospital()
  }, [id])

  if (!hospital) return <div className="text-center p-8">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{hospital.name}</h1>
                <p className="mt-2 text-gray-600 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {hospital.city}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  ★ {hospital.rating}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">About</h3>
                  <p className="text-gray-600">{hospital.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{hospital.numberOfDoctors}</p>
                    <p className="text-gray-600">Doctors</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{hospital.numberOfDepartments}</p>
                    <p className="text-gray-600">Departments</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Specialities</h3>
                  <div className="flex flex-wrap gap-2">
                    {hospital.speciality.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Gallery</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {hospital.images?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Hospital ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalDetails