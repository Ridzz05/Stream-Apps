'use client'

import { useState } from 'react'
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

const tvChannels = [
  {
    id: 'rcti',
    name: 'RCTI',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGcmN0aSUyRmluZXdzaWQmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'gtv',
    name: 'GTV',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGZ3R2JTJGaW5ld3NpZCZoZWlnaHQ9MTAwJTI1JndpZHRoPTEwMCUyNQ==',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'inews',
    name: 'iNews',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGaW5ld3MlMkZpbmV3c2lkJmhlaWdodD0xMDAlMjUmd2lkdGg9MTAwJTI1',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'mnctv',
    name: 'MNCTV',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGbW5jdHYlMkZpbmV3c2lkJmhlaWdodD0xMDAlMjUmd2lkdGg9MTAwJTI1',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'idx',
    name: 'IDX',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZjZG4tbGl2ZXR2LXN0dWRpby5tZXR1YmUuaWQlMkZpZHhjaGFubmVsLm0zdTgmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'mncnews',
    name: 'MNC News',
    embedUrl: 'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZjZG4tbGl2ZXR2LXN0dWRpby5tZXR1YmUuaWQlMkZtbmNuZXdzLm0zdTgmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'trans7',
    name: 'Trans 7',
    embedUrl: 'https://20.detik.com/watch/livestreaming-trans7',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'transtv',
    name: 'Trans TV',
    embedUrl: 'https://20.detik.com/watch/livestreaming-transtv',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'cnn',
    name: 'CNN Indonesia',
    embedUrl: 'https://www.cnnindonesia.com/tv/embed?ref=transmedia',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'sctv',
    name: 'SCTV',
    embedUrl: 'https://www.vidio.com/live/204-sctv-tv-stream/embed?autoplay=true&player_only=true&live_chat=false&mute=false',
    status: 'online',
    limit: 'limited'
  },
  {
    id: 'metrotv',
    name: 'Metro TV',
    embedUrl: 'https://www.dailymotion.com/embed/video/k236ofBIxajxDiti8CY?autoPlay=1&queue-enable=false',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'kompastv',
    name: 'Kompas TV',
    embedUrl: 'https://www.dailymotion.com/embed/video/k46igSmSMGBIiWsXtWk?autoplay=1',
    status: 'online',
    limit: 'no-limit'
  },
  {
    id: 'beritasatu',
    name: 'Berita Satu',
    embedUrl: 'https://beritasatu.tv/playstream.php',
    status: 'online',
    limit: 'no-limit'
  }
]

const TV = () => {
  const [selectedChannel, setSelectedChannel] = useState(tvChannels[0])

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Simple Header */}
      <header className="mb-8 border-b pb-6">
        <h1 className="text-2xl font-normal mb-2">MyLinks TV</h1>
        <p className="text-sm text-neutral-600">
          Streaming TV Indonesia
        </p>
      </header>

      {/* Main TV Player */}
      <section className="mb-8">
        <div className="border">
          <div className="p-3 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{selectedChannel.name}</h3>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full ${selectedChannel.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-xs text-neutral-600">
                  {selectedChannel.status === 'online' ? 'Live' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-neutral-100">
            <iframe 
              src={selectedChannel.embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {selectedChannel.limit === 'limited' && (
            <div className="p-2 bg-neutral-50 border-t">
              <p className="text-xs text-neutral-600">⚠️ Streaming terbatas waktu</p>
            </div>
          )}
        </div>
      </section>

      {/* Channel List */}
      <section className="mb-8">
        <h2 className="text-lg font-normal mb-4">Pilih Channel</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {tvChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel)}
              className={`p-3 border text-center transition-colors ${
                selectedChannel.id === channel.id 
                  ? 'bg-neutral-100 border-neutral-300' 
                  : 'hover:bg-neutral-50'
              }`}
            >
              <span className="text-sm font-medium">{channel.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t pt-6">
        <div className="text-xs text-neutral-600">
          <p>⚠️ Catatan:</p>
          <ul className="list-disc pl-4 mt-2 space-y-1">
            <li>Beberapa channel mungkin memerlukan waktu untuk memuat</li>
            <li>Kualitas streaming tergantung pada koneksi internet</li>
            <li>Channel tertentu memiliki batas waktu streaming</li>
            <li>Jika streaming tidak berfungsi, coba refresh halaman</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default TV 