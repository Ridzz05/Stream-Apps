import { PlayCircleIcon, StarIcon, ClockIcon, FilmIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const channelCategories = [
  {
    id: 'live',
    name: 'Live TV',
    icon: PlayCircleIcon,
    description: 'Tonton siaran TV langsung'
  },
  {
    id: 'popular',
    name: 'Populer',
    icon: StarIcon,
    description: 'Channel TV terpopuler'
  },
  {
    id: 'catchup',
    name: 'Catch Up',
    icon: ClockIcon,
    description: 'Tonton ulang acara TV'
  },
  {
    id: 'movies',
    name: 'Film & Serial',
    icon: FilmIcon,
    description: 'Koleksi film dan serial TV'
  }
]

const featuredChannels = [
  { id: 1, name: 'RCTI', logo: '📺' },
  { id: 2, name: 'SCTV', logo: '📺' },
  { id: 3, name: 'Indosiar', logo: '📺' },
  { id: 4, name: 'Trans TV', logo: '📺' },
  { id: 5, name: 'NET TV', logo: '📺' },
  { id: 6, name: 'Metro TV', logo: '📺' }
]

const TV = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Simple Header */}
      <header className="mb-12 border-b pb-6">
        <h1 className="text-2xl font-normal mb-2">MyLinks TV</h1>
        <p className="text-sm text-neutral-600">
          Streaming TV Indonesia
        </p>
      </header>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-lg font-normal mb-4">Kategori Channel</h2>
        <div className="grid grid-cols-2 gap-3">
          {channelCategories.map((category) => (
            <Link 
              key={category.id}
              href={`#${category.id}`}
              className="block p-4 border hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <category.icon className="w-5 h-5 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Channels */}
      <section>
        <h2 className="text-lg font-normal mb-4">Channel Unggulan</h2>
        <div className="grid grid-cols-3 gap-3">
          {featuredChannels.map((channel) => (
            <button 
              key={channel.id}
              className="flex flex-col items-center justify-center p-4 border aspect-square hover:bg-neutral-50 transition-colors"
            >
              <span className="text-2xl mb-2">{channel.logo}</span>
              <span className="text-xs text-neutral-600">{channel.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <div className="mt-12 pt-6 border-t">
        <button className="w-full py-2 px-4 border text-sm hover:bg-neutral-50 transition-colors">
          Mulai Menonton
        </button>
      </div>
    </main>
  )
}

export default TV 