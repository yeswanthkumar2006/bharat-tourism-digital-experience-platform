import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './lib/auth'
import Layout from './components/Layout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import StateDetail from './pages/StateDetail'
import TripPlanner from './pages/TripPlanner'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Auth from './pages/Auth'
import Admin from './pages/Admin'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/state/:id" element={<StateDetail />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}
