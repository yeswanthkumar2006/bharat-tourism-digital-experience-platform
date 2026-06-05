import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Trash2, Calendar, MapPin, Users, Wallet, ChevronDown, ChevronUp, Plane } from 'lucide-react'
import { states } from '../data/states'
import { useAuth } from '../lib/auth'
import { supabase } from '../lib/supabase'

interface TripDestination {
  state_id: string
  destination_name: string
  visit_date: string
  notes: string
}

interface Trip {
  id: string
  name: string
  start_date: string
  end_date: string
  states: string[]
  budget: string
  travelers: number
  notes: string
  status: string
  destinations: TripDestination[]
}

export default function TripPlanner() {
  const { user } = useAuth()
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [expandedTrip, setExpandedTrip] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '',
    start_date: '',
    end_date: '',
    budget: 'medium',
    travelers: 2,
    notes: '',
  })
  const [destinations, setDestinations] = useState<TripDestination[]>([])

  useEffect(() => {
    if (user) fetchTrips()
    else setLoading(false)
  }, [user])

  const fetchTrips = async () => {
    if (!user) return
    const { data } = await supabase
      .from('trips')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    setTrips((data || []) as Trip[])
    setLoading(false)
  }

  const addDestination = () => {
    setDestinations([...destinations, { state_id: '', destination_name: '', visit_date: '', notes: '' }])
  }

  const updateDestination = (index: number, field: keyof TripDestination, value: string) => {
    const updated = [...destinations]
    updated[index] = { ...updated[index], [field]: value }
    if (field === 'state_id') {
      const state = states.find(s => s.id === value)
      updated[index].destination_name = state?.highlights[0] || ''
    }
    setDestinations(updated)
  }

  const removeDestination = (index: number) => {
    setDestinations(destinations.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    setCreating(true)
    try {
      const stateIds = [...new Set(destinations.map(d => d.state_id).filter(Boolean))]
      const { data: trip } = await supabase
        .from('trips')
        .insert({
          user_id: user.id,
          name: form.name,
          start_date: form.start_date,
          end_date: form.end_date,
          states: stateIds,
          budget: form.budget,
          travelers: form.travelers,
          notes: form.notes,
          status: 'planning',
        })
        .select()
        .single()

      if (trip && destinations.length > 0) {
        const destData = destinations
          .filter(d => d.state_id)
          .map((d, i) => ({
            trip_id: trip.id,
            state_id: d.state_id,
            destination_name: d.destination_name,
            visit_date: d.visit_date || null,
            notes: d.notes || null,
            order_index: i,
          }))
        await supabase.from('trip_destinations').insert(destData)
      }

      setForm({ name: '', start_date: '', end_date: '', budget: 'medium', travelers: 2, notes: '' })
      setDestinations([])
      setShowForm(false)
      fetchTrips()
    } finally {
      setCreating(false)
    }
  }

  const deleteTrip = async (id: string) => {
    await supabase.from('trips').delete().eq('id', id)
    setTrips(trips.filter(t => t.id !== id))
  }

  const budgetLabels: Record<string, string> = { low: 'Budget', medium: 'Moderate', high: 'Luxury' }
  const statusColors: Record<string, string> = { planning: 'bg-amber-100 text-amber-700', booked: 'bg-accent-100 text-accent-700', completed: 'bg-primary-100 text-primary-700' }

  if (!user) {
    return (
      <div className="pt-32 text-center pb-20">
        <Plane className="mx-auto mb-4 text-slate-300" size={48} />
        <h1 className="font-display text-3xl font-bold text-slate-800 mb-3">Plan Your Indian Adventure</h1>
        <p className="text-slate-500 mb-6">Sign in to create and manage your trip itineraries.</p>
        <Link to="/auth" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
          Sign In to Start Planning
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-700 to-accent-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-300 font-semibold text-sm tracking-wider uppercase mb-2">Trip Planner</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Plan Your Journey</h1>
          <p className="text-white/70 text-lg max-w-2xl">Create detailed itineraries, choose destinations, and organize your perfect India trip.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create Trip */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors mb-6 shadow-lg shadow-primary-600/20"
        >
          <Plus size={20} />
          Create New Trip
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8 animate-fade-in-up">
            <h2 className="font-display text-xl font-bold text-slate-900 mb-5">New Trip Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Trip Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g., Golden Triangle Tour"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                <input
                  type="date"
                  required
                  value={form.start_date}
                  onChange={e => setForm({ ...form, start_date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
                <input
                  type="date"
                  required
                  value={form.end_date}
                  onChange={e => setForm({ ...form, end_date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Budget</label>
                <select
                  value={form.budget}
                  onChange={e => setForm({ ...form, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                >
                  <option value="low">Budget</option>
                  <option value="medium">Moderate</option>
                  <option value="high">Luxury</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Travelers</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={form.travelers}
                  onChange={e => setForm({ ...form, travelers: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>
            </div>

            {/* Destinations */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-slate-700">Destinations</label>
                <button type="button" onClick={addDestination} className="text-primary-600 text-sm font-medium flex items-center gap-1">
                  <Plus size={14} /> Add Stop
                </button>
              </div>

              {destinations.length === 0 && (
                <p className="text-slate-400 text-sm text-center py-4 bg-slate-50 rounded-xl">Add destinations to your itinerary</p>
              )}

              <div className="space-y-3">
                {destinations.map((dest, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <select
                        value={dest.state_id}
                        onChange={e => updateDestination(i, 'state_id', e.target.value)}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                      >
                        <option value="">Select State</option>
                        {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      </select>
                      <input
                        type="text"
                        placeholder="Destination"
                        value={dest.destination_name}
                        onChange={e => updateDestination(i, 'destination_name', e.target.value)}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                      />
                      <input
                        type="date"
                        value={dest.visit_date}
                        onChange={e => updateDestination(i, 'visit_date', e.target.value)}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
                      />
                    </div>
                    <button type="button" onClick={() => removeDestination(i)} className="p-1.5 text-rose-400 hover:text-rose-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
              <textarea
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
                rows={3}
                placeholder="Any special requirements, preferences..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={creating}
              className="w-full bg-accent-600 text-white py-3 rounded-xl font-semibold hover:bg-accent-700 transition-colors disabled:opacity-50"
            >
              {creating ? 'Creating...' : 'Create Trip'}
            </button>
          </form>
        )}

        {/* Trips List */}
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Your Trips</h2>

        {loading ? (
          <div className="text-center py-12 text-slate-400">Loading trips...</div>
        ) : trips.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
            <Plane className="mx-auto mb-3 text-slate-300" size={40} />
            <p className="text-slate-500 mb-1">No trips yet</p>
            <p className="text-slate-400 text-sm">Create your first trip itinerary above.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {trips.map(trip => (
              <div key={trip.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedTrip(expandedTrip === trip.id ? null : trip.id)}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-slate-900">{trip.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[trip.status] || 'bg-slate-100 text-slate-600'}`}>
                        {trip.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {trip.start_date} — {trip.end_date}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {trip.travelers}</span>
                      <span className="flex items-center gap-1"><Wallet size={12} /> {budgetLabels[trip.budget] || trip.budget}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); deleteTrip(trip.id) }} className="p-2 text-rose-400 hover:text-rose-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                    {expandedTrip === trip.id ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                  </div>
                </button>

                {expandedTrip === trip.id && (
                  <div className="px-5 pb-5 border-t border-slate-100 pt-4 animate-fade-in">
                    {trip.states && trip.states.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-slate-400 uppercase mb-2">States Included</p>
                        <div className="flex flex-wrap gap-2">
                          {trip.states.map(sid => {
                            const s = states.find(st => st.id === sid)
                            return s ? (
                              <Link key={sid} to={`/state/${sid}`} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors">
                                <MapPin size={12} /> {s.name}
                              </Link>
                            ) : null
                          })}
                        </div>
                      </div>
                    )}
                    {trip.notes && (
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Notes</p>
                        <p className="text-sm text-slate-600">{trip.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
