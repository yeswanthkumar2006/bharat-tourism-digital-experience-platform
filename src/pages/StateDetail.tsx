import { useParams, Link } from 'react-router-dom'
import { MapPin, Star, Calendar, Globe, ArrowLeft, Heart, Share2, ChevronRight } from 'lucide-react'
import { states } from '../data/states'
import { useState } from 'react'
import { useAuth } from '../lib/auth'
import { supabase } from '../lib/supabase'

export default function StateDetail() {
  const { id } = useParams<{ id: string }>()
  const state = states.find(s => s.id === id)
  const [activeImage, setActiveImage] = useState(0)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)
  const { user } = useAuth()

  if (!state) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-slate-700">State not found</h1>
        <Link to="/explore" className="text-primary-600 mt-4 inline-block">Back to Explore</Link>
      </div>
    )
  }

  const handleSave = async () => {
    if (!user) return
    setSaving(true)
    try {
      if (saved) {
        await supabase.from('saved_states').delete().eq('user_id', user.id).eq('state_id', state.id)
        setSaved(false)
      } else {
        await supabase.from('saved_states').insert({ user_id: user.id, state_id: state.id })
        setSaved(true)
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="pt-0">
      {/* Hero Gallery */}
      <section className="relative">
        <div className="h-[50vh] sm:h-[60vh] relative overflow-hidden">
          <img
            src={state.gallery[activeImage] || state.image}
            alt={state.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30" />
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {state.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                activeImage === i ? 'border-primary-400 scale-110' : 'border-white/50 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Nav overlay */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/25 transition-colors border border-white/20"
          >
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={!user || saving}
              className={`p-2.5 rounded-xl backdrop-blur-md border transition-all ${
                saved ? 'bg-rose-500 border-rose-400 text-white' : 'bg-white/15 border-white/20 text-white hover:bg-white/25'
              }`}
            >
              <Heart size={18} className={saved ? 'fill-current' : ''} />
            </button>
            <button className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-20 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary-500/90 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide">
                {state.region} India
              </span>
              <span className={`text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide ${
                state.type === 'state' ? 'bg-accent-500/90 text-white' : 'bg-secondary-500/90 text-white'
              }`}>
                {state.type === 'state' ? 'State' : 'Union Territory'}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">{state.name}</h1>
            <p className="text-white/80 text-lg font-display italic">{state.tagline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: MapPin, label: 'Capital', value: state.capital },
                { icon: Globe, label: 'Language', value: state.language },
                { icon: Calendar, label: 'Best Time', value: state.bestTime },
                { icon: Star, label: 'Rating', value: `${state.rating} / 5` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <Icon size={20} className="text-primary-500 mb-2" />
                  <p className="text-xs text-slate-400 font-medium uppercase">{label}</p>
                  <p className="text-sm font-semibold text-slate-800">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-3">About {state.name}</h2>
              <p className="text-slate-600 leading-relaxed">{state.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Top Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {state.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-primary-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary-700 transition-colors">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 gap-3">
                {state.gallery.map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan Trip Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-2">Plan Your Visit</h3>
              <p className="text-white/80 text-sm mb-4">Create a trip itinerary including {state.name} and nearby destinations.</p>
              <Link
                to="/trip-planner"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors w-full justify-center"
              >
                Start Planning <ChevronRight size={16} />
              </Link>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-semibold text-slate-900">Location</h3>
              </div>
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center">
                <iframe
                  title={`${state.name} map`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zT7a8ab8A3cQZ8fH5qH4KJ7E&q=${encodeURIComponent(state.name + ', India')}`}
                />
              </div>
              <div className="p-4 text-sm text-slate-500">
                <p>{state.capital}, {state.name}</p>
                <p className="text-xs mt-1">{state.latitude.toFixed(2)}N, {state.longitude.toFixed(2)}E</p>
              </div>
            </div>

            {/* Write Review Card */}
            <Link
              to="/reviews"
              className="block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-primary-200 transition-colors"
            >
              <h3 className="font-display font-bold text-slate-900 mb-2">Share Your Experience</h3>
              <p className="text-slate-500 text-sm mb-3">Been to {state.name}? Write a review and help other travelers.</p>
              <span className="text-primary-600 font-semibold text-sm">Write a Review &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
