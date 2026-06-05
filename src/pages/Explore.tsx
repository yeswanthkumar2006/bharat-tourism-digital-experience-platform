import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, MapPin, Star, SlidersHorizontal, X } from 'lucide-react'
import { states, regions, stateTypes } from '../data/states'

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const regionFilter = searchParams.get('region') || 'All'
  const typeFilter = searchParams.get('type') || 'All'
  const sortBy = searchParams.get('sort') || 'name'

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'All') params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...states]

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.capital.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.highlights.some(h => h.toLowerCase().includes(q))
      )
    }

    if (regionFilter !== 'All') {
      result = result.filter(s => s.region === regionFilter)
    }

    if (typeFilter !== 'All') {
      result = result.filter(s => s.type === (typeFilter === 'State' ? 'state' : 'union_territory'))
    }

    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    else if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name))
    else if (sortBy === 'popularity') {
      const pop = { high: 3, medium: 2, low: 1 }
      result.sort((a, b) => pop[b.popularity] - pop[a.popularity])
    }

    return result
  }, [search, regionFilter, typeFilter, sortBy])

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-16 sm:py-20">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/784951/pexels-photo-784951.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-2">Explore India</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">All 36 States & Union Territories</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            From the Himalayan peaks to the Indian Ocean, discover every destination Bharat has to offer.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search states, capitals, attractions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                showFilters ? 'bg-primary-50 border-primary-200 text-primary-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Region</label>
                <div className="flex flex-wrap gap-2">
                  {regions.map(r => (
                    <button
                      key={r}
                      onClick={() => setFilter('region', r)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        regionFilter === r ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Type</label>
                <div className="flex flex-wrap gap-2">
                  {stateTypes.map(t => (
                    <button
                      key={t}
                      onClick={() => setFilter('type', t)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        typeFilter === t ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={e => setFilter('sort', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-sm bg-white"
                >
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
              {(regionFilter !== 'All' || typeFilter !== 'All') && (
                <button
                  onClick={() => setSearchParams({})}
                  className="flex items-center gap-1 text-rose-500 text-sm font-medium hover:text-rose-600"
                >
                  <X size={14} /> Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-slate-500 mb-6">{filtered.length} destination{filtered.length !== 1 ? 's' : ''} found</p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No states match your search.</p>
            <button onClick={() => { setSearch(''); setSearchParams({}); }} className="mt-3 text-primary-600 font-medium text-sm">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((state, i) => (
              <Link
                key={state.id}
                to={`/state/${state.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-semibold text-primary-700">
                    {state.region}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star size={12} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold">{state.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3 line-clamp-1">{state.tagline}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin size={12} />
                    <span>{state.capital}</span>
                    <span className="text-slate-300">|</span>
                    <span className={`px-2 py-0.5 rounded-full ${state.type === 'state' ? 'bg-accent-50 text-accent-700' : 'bg-secondary-50 text-secondary-700'}`}>
                      {state.type === 'state' ? 'State' : 'UT'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
