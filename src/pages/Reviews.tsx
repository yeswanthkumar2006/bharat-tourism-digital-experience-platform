import { useState, useEffect } from 'react'
import { Star, MessageSquare, Send, User } from 'lucide-react'
import { states } from '../data/states'
import { useAuth } from '../lib/auth'
import { supabase } from '../lib/supabase'

interface Review {
  id: string
  user_id: string
  state_id: string
  destination_name: string
  rating: number
  title: string
  content: string
  created_at: string
  profiles?: { full_name: string } | null
}

export default function Reviews() {
  const { user } = useAuth()
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [stateFilter, setStateFilter] = useState('All')

  const [form, setForm] = useState({
    state_id: '',
    destination_name: '',
    rating: 5,
    title: '',
    content: '',
  })

  useEffect(() => { fetchReviews() }, [])

  const fetchReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select('*, profiles(full_name)')
      .order('created_at', { ascending: false })
    setReviews((data || []) as unknown as Review[])
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    setSubmitting(true)
    try {
      await supabase.from('reviews').insert({
        user_id: user.id,
        state_id: form.state_id,
        destination_name: form.destination_name,
        rating: form.rating,
        title: form.title,
        content: form.content,
      })
      setForm({ state_id: '', destination_name: '', rating: 5, title: '', content: '' })
      setShowForm(false)
      fetchReviews()
    } finally {
      setSubmitting(false)
    }
  }

  const filtered = stateFilter === 'All' ? reviews : reviews.filter(r => r.state_id === stateFilter)

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <Star key={n} size={14} className={n <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'} />
      ))}
    </div>
  )

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-300 font-semibold text-sm tracking-wider uppercase mb-2">Travel Reviews</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">Share Your Experience</h1>
          <p className="text-white/70 text-lg max-w-2xl">Read and write reviews about destinations across Incredible India.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-colors mb-6 shadow-lg shadow-primary-600/20"
          >
            <MessageSquare size={18} /> Write a Review
          </button>
        )}

        {!user && (
          <div className="text-center bg-white rounded-2xl p-8 border border-slate-100 mb-6">
            <p className="text-slate-600 mb-2">Sign in to write reviews</p>
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8 animate-fade-in-up">
            <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Write a Review</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
                <select
                  required
                  value={form.state_id}
                  onChange={e => setForm({ ...form, state_id: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                >
                  <option value="">Select State</option>
                  {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
                <input
                  required
                  value={form.destination_name}
                  onChange={e => setForm({ ...form, destination_name: e.target.value })}
                  placeholder="e.g., Taj Mahal"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm({ ...form, rating: n })}
                    className="p-1 transition-transform hover:scale-125"
                  >
                    <Star size={28} className={n <= form.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'} />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                placeholder="Summarize your experience"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Review</label>
              <textarea
                required
                rows={4}
                value={form.content}
                onChange={e => setForm({ ...form, content: e.target.value })}
                placeholder="Share details about your visit..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              <Send size={16} /> {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        )}

        {/* Filter */}
        <div className="mb-6">
          <select
            value={stateFilter}
            onChange={e => setStateFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm"
          >
            <option value="All">All States</option>
            {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>

        {/* Reviews */}
        {loading ? (
          <p className="text-center text-slate-400 py-8">Loading reviews...</p>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
            <MessageSquare className="mx-auto mb-3 text-slate-300" size={40} />
            <p className="text-slate-500">No reviews yet</p>
            <p className="text-slate-400 text-sm">Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(review => {
              const state = states.find(s => s.id === review.state_id)
              return (
                <div key={review.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900">{review.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(review.rating)}
                        <span className="text-xs text-slate-400">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    {state && (
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-xs font-semibold">
                        {state.name}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary-600 font-medium mb-2">{review.destination_name}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{review.content}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                    <User size={12} />
                    <span>{review.profiles?.full_name || 'Anonymous Traveler'}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
