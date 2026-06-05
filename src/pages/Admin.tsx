import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, MessageSquare, Plane, ChartBar as BarChart3, Shield } from 'lucide-react'
import { useAuth } from '../lib/auth'
import { supabase } from '../lib/supabase'
import { states } from '../data/states'

export default function Admin() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ users: 0, reviews: 0, trips: 0 })
  const [recentReviews, setRecentReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('reviews').select('*, profiles(full_name)').order('created_at', { ascending: false }).limit(10),
      supabase.from('trips').select('id', { count: 'exact', head: true }),
    ]).then(([usersRes, reviewsRes, tripsRes]) => {
      setStats({
        users: usersRes.count || 0,
        reviews: reviewsRes.count || 0,
        trips: tripsRes.count || 0,
      })
      setRecentReviews(reviewsRes.data || [])
      setLoading(false)
    })
  }, [user])

  if (!user) {
    return (
      <div className="pt-32 text-center pb-20">
        <Shield className="mx-auto mb-4 text-slate-300" size={48} />
        <h1 className="font-display text-3xl font-bold text-slate-800 mb-3">Admin Dashboard</h1>
        <p className="text-slate-500 mb-6">Sign in to access the admin panel.</p>
        <Link to="/auth" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
          Sign In
        </Link>
      </div>
    )
  }

  const statCards = [
    { label: 'Total Users', value: stats.users, icon: Users, color: 'from-primary-500 to-primary-700' },
    { label: 'Reviews', value: stats.reviews, icon: MessageSquare, color: 'from-accent-500 to-accent-700' },
    { label: 'Trip Plans', value: stats.trips, icon: Plane, color: 'from-secondary-500 to-secondary-700' },
    { label: 'States & UTs', value: states.length, icon: BarChart3, color: 'from-amber-500 to-amber-700' },
  ]

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="text-primary-400" size={24} />
            <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase">Admin Dashboard</p>
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Bharat Tourism Portal</h1>
          <p className="text-white/60 text-lg">Overview of platform activity and content management.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
                <Icon size={18} className="text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Reviews */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="font-display font-bold text-slate-900">Recent Reviews</h2>
            </div>
            <div className="divide-y divide-slate-50">
              {loading ? (
                <p className="p-5 text-sm text-slate-400">Loading...</p>
              ) : recentReviews.length === 0 ? (
                <p className="p-5 text-sm text-slate-400">No reviews yet</p>
              ) : (
                recentReviews.map((review: any) => {
                  const state = states.find(s => s.id === review.state_id)
                  return (
                    <div key={review.id} className="px-5 py-3 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-slate-800 truncate">{review.title}</h4>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                          {review.rating}/5
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {state?.name || review.state_id} — {review.destination_name}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        By {review.profiles?.full_name || 'Anonymous'} on {new Date(review.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {/* States Overview */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="font-display font-bold text-slate-900">States by Region</h2>
            </div>
            <div className="p-5 space-y-3">
              {['North', 'South', 'East', 'West', 'Central', 'Northeast'].map(region => {
                const regionStates = states.filter(s => s.region === region)
                return (
                  <div key={region} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{region} India</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 bg-slate-100 rounded-full w-24">
                        <div
                          className="h-2 bg-primary-500 rounded-full"
                          style={{ width: `${(regionStates.length / states.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-600 w-6 text-right">{regionStates.length}</span>
                    </div>
                  </div>
                )
              })}
              <div className="pt-2 border-t flex items-center justify-between">
                <span className="text-sm font-bold text-slate-800">Total</span>
                <span className="text-sm font-bold text-primary-700">{states.length}</span>
              </div>
            </div>

            {/* Top Rated */}
            <div className="px-5 py-4 border-t border-slate-100">
              <h3 className="font-semibold text-sm text-slate-700 mb-3">Top Rated States</h3>
              <div className="space-y-2">
                {states.sort((a, b) => b.rating - a.rating).slice(0, 5).map((s, i) => (
                  <Link key={s.id} to={`/state/${s.id}`} className="flex items-center gap-3 py-1 hover:text-primary-600 transition-colors group">
                    <span className="text-xs font-bold text-slate-300 w-4">{i + 1}</span>
                    <span className="text-sm flex-1 group-hover:text-primary-700 transition-colors">{s.name}</span>
                    <span className="text-xs font-semibold text-amber-600">{s.rating}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
