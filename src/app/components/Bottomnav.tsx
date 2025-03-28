import Link from 'next/link'
import { HomeIcon, RadioIcon, RectangleStackIcon, HeartIcon } from '@heroicons/react/24/outline'

const Bottomnav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full px-4 pb-4 z-50 md:hidden">
      <div className="flex items-center justify-around h-16 bg-white rounded-2xl shadow-lg mx-auto max-w-md border border-gray-100">
        <Link href="/" className="flex flex-col items-center space-y-1 relative group">
          <div className="absolute -top-1 w-full h-1 bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <HomeIcon className="w-5 h-5 text-neutral-900" />
          <span className="text-xs text-neutral-600">Beranda</span>
        </Link>
        
        <Link href="/tv" className="flex flex-col items-center space-y-1 relative group">
          <div className="absolute -top-1 w-full h-1 bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <RectangleStackIcon className="w-5 h-5 text-neutral-600" />
          <span className="text-xs text-neutral-600">TV</span>
        </Link>
        
        <Link href="/radio" className="flex flex-col items-center space-y-1 relative group">
          <div className="absolute -top-1 w-full h-1 bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <RadioIcon className="w-5 h-5 text-neutral-600" />
          <span className="text-xs text-neutral-600">Radio</span>
        </Link>
        
        <Link href="/donate" className="flex flex-col items-center space-y-1 relative group">
          <div className="absolute -top-1 w-full h-1 bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <HeartIcon className="w-5 h-5 text-neutral-600" />
          <span className="text-xs text-neutral-600">Donasi</span>
        </Link>
      </div>
    </div>
  )
}

export default Bottomnav
