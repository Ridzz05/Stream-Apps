import Link from 'next/link'

const Navbarlogo = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 pt-4 z-50 bg-transparent">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 bg-white rounded-2xl shadow-lg px-6 max-w-5xl mx-auto border border-gray-100">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              MyLinks
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/channels" 
              className="text-gray-600 hover:text-sky-500 transition-colors relative group"
            >
              <span className="relative">
                Channels
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></div>
              </span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-sky-500 transition-colors relative group"
            >
              <span className="relative">
                Tentang
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></div>
              </span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-sky-500 transition-colors relative group"
            >
              <span className="relative">
                Kontak
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></div>
              </span>
            </Link>
            <button className="bg-gradient-to-r from-sky-400 to-blue-400 text-white px-6 py-2.5 rounded-xl hover:shadow-md hover:scale-105 transition-all duration-300">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbarlogo 