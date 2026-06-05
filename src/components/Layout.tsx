import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, Compass, Camera, Plane, MessageSquare, Shield, User, LogOut, LogIn } from 'lucide-react'
import { useAuth } from '../lib/auth'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { user, signOut } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home', icon: Compass },
    { to: '/explore', label: 'Explore States', icon: MapPin },
    { to: '/trip-planner', label: 'Trip Planner', icon: Plane },
    { to: '/gallery', label: 'Gallery', icon: Camera },
    { to: '/reviews', label: 'Reviews', icon: MessageSquare },
  ]

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path))

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-display font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className={`font-display font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  Bharat Tourism
                </h1>
                <p className={`text-xs transition-colors ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>Discover Incredible India</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(to)
                      ? scrolled ? 'bg-primary-50 text-primary-700' : 'bg-white/15 text-white'
                      : scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </Link>
              ))}
              {user && (
                <Link
                  to="/admin"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive('/admin')
                      ? scrolled ? 'bg-primary-50 text-primary-700' : 'bg-white/15 text-white'
                      : scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Shield size={16} />
                  Admin
                </Link>
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${scrolled ? 'bg-slate-100' : 'bg-white/15'}`}>
                    <User size={14} className={scrolled ? 'text-slate-600' : 'text-white/80'} />
                    <span className={`text-sm font-medium ${scrolled ? 'text-slate-700' : 'text-white'}`}>
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-500 hover:bg-slate-100' : 'text-white/70 hover:bg-white/10'}`}
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    scrolled
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  <LogIn size={16} />
                  Sign In
                </Link>
              )}
            </div>

            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen
                ? <X size={24} className={scrolled ? 'text-slate-800' : 'text-white'} />
                : <Menu size={24} className={scrolled ? 'text-slate-800' : 'text-white'} />
              }
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(to) ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
              {user && (
                <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                  <Shield size={18} />
                  Admin
                </Link>
              )}
              <div className="border-t pt-3 mt-3">
                {user ? (
                  <div className="flex items-center justify-between px-3 py-2">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-slate-500" />
                      <span className="text-sm text-slate-700">{user.user_metadata?.full_name || user.email}</span>
                    </div>
                    <button onClick={() => signOut()} className="text-rose-500 text-sm font-medium">Sign Out</button>
                  </div>
                ) : (
                  <Link to="/auth" className="flex items-center gap-2 px-3 py-2.5 text-primary-600 font-medium">
                    <LogIn size={18} />
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-0">{children}</main>

      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm">B</span>
                </div>
                <span className="font-display font-bold text-lg">Bharat Tourism</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Discover the incredible diversity of India — from snow-capped Himalayas to tropical beaches, ancient temples to modern cities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/explore" className="hover:text-primary-400 transition-colors">All States</Link></li>
                <li><Link to="/explore?region=North" className="hover:text-primary-400 transition-colors">North India</Link></li>
                <li><Link to="/explore?region=South" className="hover:text-primary-400 transition-colors">South India</Link></li>
                <li><Link to="/explore?region=Northeast" className="hover:text-primary-400 transition-colors">Northeast India</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/trip-planner" className="hover:text-primary-400 transition-colors">Trip Planner</Link></li>
                <li><Link to="/gallery" className="hover:text-primary-400 transition-colors">Photo Gallery</Link></li>
                <li><Link to="/reviews" className="hover:text-primary-400 transition-colors">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Ministry of Tourism</li>
                <li>Government of India</li>
                <li>tourism@india.gov</li>
                <li>+91-11-2379-1545</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            <p>Atithi Devo Bhava — The Guest is God</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
