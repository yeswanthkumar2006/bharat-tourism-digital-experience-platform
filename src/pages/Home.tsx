import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Star, Users, Compass, Camera, Plane, ChevronRight } from 'lucide-react'
import { states } from '../data/states'

const featuredStates = states.filter(s => s.popularity === 'high').slice(0, 8)
const stats = [
  { label: 'States & UTs', value: '36', icon: MapPin },
  { label: 'Destinations', value: '500+', icon: Compass },
  { label: 'Travelers', value: '10M+', icon: Users },
  { label: 'Reviews', value: '50K+', icon: Star },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1526880/pexels-photo-1526880.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <p className="text-primary-300 font-medium text-sm tracking-widest uppercase mb-4">Welcome to Incredible India</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-400">Magic of Bharat</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              From the snow-capped Himalayas to the tropical backwaters of Kerala,explore 36 states brimming with ancient heritage, vibrant cultures, and breathtaking landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-xl shadow-primary-600/30"
              >
                Explore States <ArrowRight size={20} />
              </Link>
              <Link
                to="/trip-planner"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20"
              >
                Plan Your Trip <Plane size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/10">
                  <Icon className="mx-auto mb-1 text-primary-400" size={20} />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured States */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wider uppercase mb-2">Top Destinations</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">Most Popular States</h2>
            </div>
            <Link to="/explore" className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
              View all states <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStates.map((state) => (
              <Link
                key={state.id}
                to={`/state/${state.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-sm font-medium">{state.rating}</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-lg">{state.name}</h3>
                  <p className="text-white/70 text-sm">{state.tagline}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/explore" className="inline-flex items-center gap-1 text-primary-600 font-semibold">
              View all states <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm tracking-wider uppercase mb-2">What We Offer</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">Plan Your Perfect Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: 'Explore 36 States',
                desc: 'Discover detailed guides for every state and union territory, from Kashmir to Kanyakumari.',
                link: '/explore',
                color: 'from-primary-500 to-primary-700',
              },
              {
                icon: Plane,
                title: 'Trip Planner',
                desc: 'Plan multi-state itineraries, set budgets, choose dates, and organize your dream vacation.',
                link: '/trip-planner',
                color: 'from-accent-500 to-accent-700',
              },
              {
                icon: Camera,
                title: 'Photo Gallery',
                desc: 'Browse stunning photographs capturing the beauty, culture, and diversity of Incredible India.',
                link: '/gallery',
                color: 'from-secondary-500 to-secondary-700',
              },
            ].map(({ icon: Icon, title, desc, link, color }) => (
              <Link
                key={title}
                to={link}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm tracking-wider uppercase mb-2">Regional Wonders</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">Explore by Region</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { region: 'North', image: 'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Majestic Himalayas' },
              { region: 'South', image: 'https://images.pexels.com/photos/1057538/pexels-photo-1057538.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Tropical Paradise' },
              { region: 'East', image: 'https://images.pexels.com/photos/784951/pexels-photo-784951.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Spiritual Heritage' },
              { region: 'West', image: 'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Coastal Beauty' },
              { region: 'Central', image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Wild Heartland' },
              { region: 'Northeast', image: 'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Unexplored gems' },
            ].map(({ region, image, label }) => (
              <Link
                key={region}
                to={`/explore?region=${region}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img src={image} alt={region} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-display font-bold text-xl">{region} India</h3>
                  <p className="text-white/70 text-sm">{label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Explore Incredible India?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Start planning your journey across the most diverse nation on Earth. From ancient wonders to modern marvels, India awaits.
          </p>
          <Link
            to="/trip-planner"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all hover:scale-105 shadow-xl"
          >
            Start Planning <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
