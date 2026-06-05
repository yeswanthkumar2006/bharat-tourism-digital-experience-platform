import { useState, useMemo } from 'react'
import { Camera, X, Search } from 'lucide-react'
import { states } from '../data/states'

const allImages = states.flatMap(s =>
  s.gallery.map((img, i) => ({
    src: img,
    stateId: s.id,
    stateName: s.name,
    label: `${s.name} — ${s.highlights[i] || s.highlights[0]}`,
    region: s.region,
  }))
)

export default function Gallery() {
  const [selected, setSelected] = useState<typeof allImages[0] | null>(null)
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('All')

  const filtered = useMemo(() => {
    let result = allImages
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(img => img.stateName.toLowerCase().includes(q) || img.label.toLowerCase().includes(q))
    }
    if (region !== 'All') {
      result = result.filter(img => img.region === region)
    }
    return result
  }, [search, region])

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary-300 font-semibold text-sm tracking-wider uppercase mb-2">Photo Gallery</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Visual Journey Through India</h1>
          <p className="text-white/70 text-lg max-w-2xl">Browse stunning photographs from every corner of Incredible India.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by state or attraction..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['All', 'North', 'South', 'East', 'West', 'Central', 'Northeast'].map(r => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  region === r ? 'bg-primary-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <p className="text-sm text-slate-500 mb-4">{filtered.length} photos</p>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(img)}
              className="relative w-full group rounded-xl overflow-hidden break-inside-avoid animate-fade-in"
              style={{ animationDelay: `${Math.min(i * 0.03, 0.6)}s` }}
            >
              <img src={img.src} alt={img.label} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{img.stateName}</p>
                <p className="text-white/70 text-xs">{img.highlights?.[0] || ''}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Camera className="mx-auto mb-3 text-slate-300" size={40} />
            <p className="text-slate-400">No photos match your search.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[85vh]" onClick={e => e.stopPropagation()}>
            <img src={selected.src} alt={selected.label} className="max-w-full max-h-[80vh] rounded-xl object-contain" />
            <div className="mt-3 text-center">
              <p className="text-white font-medium">{selected.stateName}</p>
              <p className="text-white/60 text-sm">{selected.label}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
