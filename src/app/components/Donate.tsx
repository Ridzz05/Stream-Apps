import { HeartIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/outline'

const donationOptions = [
  {
    id: 'one-time',
    name: 'Donasi Sekali',
    amount: 'Rp 10.000',
    description: 'Dukung kami dengan donasi sekali',
    icon: HeartIcon
  },
  {
    id: 'monthly',
    name: 'Donasi Bulanan',
    amount: 'Rp 50.000/bln',
    description: 'Dukung kami secara berkelanjutan',
    icon: SparklesIcon
  },
  {
    id: 'custom',
    name: 'Donasi Bebas',
    amount: 'Nominal bebas',
    description: 'Tentukan nominal donasimu sendiri',
    icon: GiftIcon
  }
]

const Donate = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Simple Header */}
      <header className="mb-12 border-b pb-6">
        <h1 className="text-2xl font-normal mb-2">Donasi</h1>
        <p className="text-sm text-neutral-600">
          Dukung pengembangan MyLinks
        </p>
      </header>

      {/* Donation Message */}
      <section className="mb-12">
        <div className="border p-4">
          <p className="text-sm text-neutral-600 leading-relaxed">
            MyLinks berkomitmen untuk menyediakan layanan streaming yang berkualitas. 
            Dukungan Anda membantu kami mengembangkan platform ini menjadi lebih baik.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="mb-12">
        <h2 className="text-lg font-normal mb-4">Pilihan Donasi</h2>
        <div className="grid gap-3">
          {donationOptions.map((option) => (
            <button 
              key={option.id}
              className="block w-full p-4 border hover:bg-neutral-50 transition-colors text-left"
            >
              <div className="flex items-start gap-3">
                <option.icon className="w-5 h-5 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm">
                      {option.name}
                    </h3>
                    <span className="text-xs text-neutral-600">
                      {option.amount}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Bank Information */}
      <section>
        <h2 className="text-lg font-normal mb-4">Informasi Rekening</h2>
        <div className="border p-4">
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium">Bank Transfer</p>
              <p className="text-sm mt-1">1234 5678 9012 3456</p>
              <p className="text-xs text-neutral-600">a.n. MyLinks Indonesia</p>
            </div>
            <div className="pt-2 border-t">
              <p className="text-xs font-medium">E-Wallet</p>
              <p className="text-sm mt-1">mylinks@email.com</p>
              <p className="text-xs text-neutral-600">DANA / GoPay / OVO / LinkAja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <div className="mt-12 pt-6 border-t">
        <button className="w-full py-2 px-4 border text-sm hover:bg-neutral-50 transition-colors">
          Hubungi Admin
        </button>
      </div>
    </main>
  )
}

export default Donate 