'use client'

import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon, MapPinIcon, MusicalNoteIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline'

interface RadioStation {
  radioId: string
  logo: string
  name: string
  genres: string[]
  currentTrack: string
  listeners: string
  like: string
  streamUrl: string
}

interface City {
  name: string
  url: string
}

const Radio = () => {
  const [stations, setStations] = useState<RadioStation[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedStation, setSelectedStation] = useState<RadioStation | null>(null)
  const [loading, setLoading] = useState(true)
  const [audioPlaying, setAudioPlaying] = useState(false)

  // Fetch all radio stations
  const fetchRadioStations = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.i-as.dev/api/radio')
      const data = await response.json()
      setStations(data)
      if (data.length > 0 && !selectedStation) {
        setSelectedStation(data[0])
      }
    } catch (error) {
      console.error('Error fetching radio stations:', error)
    } finally {
      setLoading(false)
    }
  }

  // Fetch cities
  const fetchCities = async () => {
    try {
      const response = await fetch('https://api.i-as.dev/api/radio/city')
      const data = await response.json()
      setCities(data)
    } catch (error) {
      console.error('Error fetching cities:', error)
    }
  }

  // Fetch stations by city
  const fetchStationsByCity = async (citySlug: string) => {
    try {
      setLoading(true)
      const response = await fetch(`https://api.i-as.dev/api/radio/city/${citySlug}`)
      const data = await response.json()
      setStations(data)
      if (data.length > 0) {
        setSelectedStation(data[0])
      }
    } catch (error) {
      console.error('Error fetching stations by city:', error)
    } finally {
      setLoading(false)
    }
  }

  // Search stations
  const searchStations = async (query: string) => {
    if (!query) {
      fetchRadioStations()
      return
    }
    try {
      setLoading(true)
      const response = await fetch(`https://api.i-as.dev/api/radio/search/${query}`)
      const data = await response.json()
      setStations(data)
    } catch (error) {
      console.error('Error searching stations:', error)
    } finally {
      setLoading(false)
    }
  }

  // Handle city change
  const handleCityChange = (cityUrl: string) => {
    setSelectedCity(cityUrl)
    if (cityUrl) {
      const citySlug = cityUrl.split('/').pop()
      if (citySlug) {
        fetchStationsByCity(citySlug)
      }
    } else {
      fetchRadioStations()
    }
  }

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    searchStations(query)
  }

  // Initial data fetch
  useEffect(() => {
    fetchRadioStations()
    fetchCities()
  }, [])

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8 border-b pb-6">
        <h1 className="text-2xl font-normal mb-2">MyLinks Radio</h1>
        <p className="text-sm text-neutral-600">
          Streaming Radio Indonesia
        </p>
      </header>

      {/* Search and Filter */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari radio..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* City Filter */}
          <div className="sm:w-64">
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Semua Kota</option>
                {cities.map((city) => (
                  <option key={city.url} value={city.url}>
                    {city.name}
                  </option>
                ))}
              </select>
              <MapPinIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Player */}
      {selectedStation && (
        <section className="mb-8">
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedStation.logo} 
                  alt={selectedStation.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="font-medium">{selectedStation.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">{selectedStation.currentTrack}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      {selectedStation.listeners} pendengar
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      {selectedStation.like} suka
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setAudioPlaying(!audioPlaying)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {audioPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            </div>
            {audioPlaying && (
              <audio
                src={selectedStation.streamUrl}
                autoPlay
                controls
                className="w-full"
              >
                Browser Anda tidak mendukung pemutaran audio
              </audio>
            )}
          </div>
        </section>
      )}

      {/* Station List */}
      <section>
        <h2 className="text-lg font-normal mb-4">Daftar Radio</h2>
        {loading ? (
          <div className="text-center py-8">
            <p>Memuat...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stations.map((station) => (
              <button
                key={station.radioId}
                onClick={() => {
                  setSelectedStation(station)
                  setAudioPlaying(false)
                }}
                className={`flex items-center gap-3 p-3 border rounded-lg transition-colors ${
                  selectedStation?.radioId === station.radioId
                    ? 'bg-gray-50 border-gray-300'
                    : 'hover:bg-gray-50'
                }`}
              >
                <img 
                  src={station.logo} 
                  alt={station.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-sm">{station.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {station.currentTrack}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Disclaimer */}
      <section className="mt-12 border-t pt-6">
        <div className="text-xs text-neutral-600">
          <p>⚠️ Catatan:</p>
          <ul className="list-disc pl-4 mt-2 space-y-1">
            <li>Kualitas streaming tergantung pada koneksi internet</li>
            <li>Beberapa radio mungkin memerlukan waktu untuk memuat</li>
            <li>Jika streaming tidak berfungsi, coba refresh halaman</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Radio