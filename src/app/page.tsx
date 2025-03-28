import { TvIcon, RadioIcon, RssIcon, FilmIcon, SparklesIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    id: 'tv',
    name: 'TV Streaming',
    icon: TvIcon,
    description: 'Nikmati berbagai channel TV nasional dan internasional',
    link: '/tv'
  },
  {
    id: 'radio',
    name: 'Radio Streaming',
    icon: RadioIcon,
    description: 'Dengarkan radio favorit dari seluruh Indonesia',
    link: '/radio'
  },
  {
    id: 'podcast',
    name: 'Podcast',
    icon: RssIcon,
    description: 'Koleksi podcast terbaik untuk menemani aktivitasmu',
    link: '/radio#podcast'
  },
  {
    id: 'movies',
    name: 'Film & Serial',
    icon: FilmIcon,
    description: 'Streaming film dan serial terbaru',
    link: '/tv#movies'
  }
]

const highlights = [
  {
    id: 'multiplatform',
    name: 'Multi Platform',
    icon: DevicePhoneMobileIcon,
    description: 'Akses di berbagai perangkat'
  },
  {
    id: 'exclusive',
    name: 'Konten Eksklusif',
    icon: SparklesIcon,
    description: 'Program spesial hanya di MyLinks'
  }
]

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Simple Header */}
      <header className="mb-12 border-b pb-6">
        <h1 className="text-2xl font-normal mb-2">MyLinks</h1>
        <p className="text-sm text-neutral-600">
          Platform Streaming TV & Radio Indonesia
        </p>
      </header>

      {/* Main Features */}
      <section className="mb-12">
        <h2 className="text-lg font-normal mb-4">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature) => (
            <Link 
              key={feature.id}
              href={feature.link}
              className="block p-4 border hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <feature.icon className="w-5 h-5 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">
                    {feature.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-lg font-normal mb-4">Keunggulan</h2>
        <div className="grid grid-cols-2 gap-3">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id}
              className="p-4 border"
            >
              <div className="flex items-start gap-3">
                <highlight.icon className="w-5 h-5 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">
                    {highlight.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <div className="mt-12 pt-6 border-t">
        <button className="w-full py-2 px-4 border text-sm hover:bg-neutral-50 transition-colors">
          Mulai Berlangganan
        </button>
      </div>
    </main>
  )
}
