import { PlayCircleIcon, StarIcon, ClockIcon, FilmIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const channelCategories = [
  {
    id: 'live',
    name: 'Live TV',
    icon: PlayCircleIcon,
    description: 'Tonton siaran TV langsung',
    color: 'from-red-400 to-pink-400'
  },
  {
    id: 'popular',
    name: 'Populer',
    icon: StarIcon,
    description: 'Channel TV terpopuler',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: 'catchup',
    name: 'Catch Up',
    icon: ClockIcon,
    description: 'Tonton ulang acara TV',
    color: 'from-sky-400 to-blue-400'
  },
  {
    id: 'movies',
    name: 'Film & Serial',
    icon: FilmIcon,
    description: 'Koleksi film dan serial TV',
    color: 'from-purple-400 to-indigo-400'
  }
]

const ChannelsMenu = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Channels TV</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {channelCategories.map((category) => (
          <Link 
            key={category.id}
            href={`/channels/${category.id}`}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            
            <div className="relative p-6">
              <category.icon className="w-10 h-10 text-gray-700 group-hover:scale-110 transition-transform" />
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
              
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  Lihat Channel
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Featured Channels Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Channel Unggulan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((channel) => (
            <div 
              key={channel}
              className="aspect-video bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">Channel {channel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChannelsMenu 