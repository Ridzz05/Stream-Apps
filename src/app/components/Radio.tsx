import { RadioIcon, MicrophoneIcon, MusicalNoteIcon, RssIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const radioCategories = [
  {
    id: 'live-radio',
    name: 'Radio Live',
    icon: RadioIcon,
    description: 'Dengarkan siaran radio langsung'
  },
  {
    id: 'talkshow',
    name: 'Talk Show',
    icon: MicrophoneIcon,
    description: 'Program talk show radio'
  },
  {
    id: 'music',
    name: 'Musik',
    icon: MusicalNoteIcon,
    description: 'Channel musik pilihan'
  },
  {
    id: 'podcast',
    name: 'Podcast',
    icon: RssIcon,
    description: 'Koleksi podcast terbaik'
  }
]

const featuredRadios = [
  { id: 1, name: 'Prambors', frequency: '102.2 FM', logo: '📻' },
  { id: 2, name: 'I-Radio', frequency: '89.6 FM', logo: '📻' },
  { id: 3, name: 'Gen FM', frequency: '98.7 FM', logo: '📻' },
  { id: 4, name: 'Hard Rock', frequency: '87.6 FM', logo: '📻' },
  { id: 5, name: 'Jak FM', frequency: '101.0 FM', logo: '📻' },
  { id: 6, name: 'Delta FM', frequency: '99.1 FM', logo: '📻' }
]

const Radio = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Simple Header */}
      <header className="mb-12 border-b pb-6">
        <h1 className="text-2xl font-normal mb-2">MyLinks Radio</h1>
        <p className="text-sm text-neutral-600">
          Radio & Podcast Indonesia
        </p>
      </header>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-lg font-normal mb-4">Kategori Radio</h2>
        <div className="grid grid-cols-2 gap-3">
          {radioCategories.map((category) => (
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

      {/* Featured Radio Stations */}
      <section>
        <h2 className="text-lg font-normal mb-4">Radio Populer</h2>
        <div className="grid grid-cols-3 gap-3">
          {featuredRadios.map((radio) => (
            <button 
              key={radio.id}
              className="flex flex-col items-center justify-center p-4 border aspect-square hover:bg-neutral-50 transition-colors"
            >
              <span className="text-2xl mb-2">{radio.logo}</span>
              <span className="text-xs font-medium">{radio.name}</span>
              <span className="text-xs text-neutral-600 mt-0.5">{radio.frequency}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <div className="mt-12 pt-6 border-t">
        <button className="w-full py-2 px-4 border text-sm hover:bg-neutral-50 transition-colors">
          Mulai Mendengarkan
        </button>
      </div>
    </main>
  )
}

export default Radio