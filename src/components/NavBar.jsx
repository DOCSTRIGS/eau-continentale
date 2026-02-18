import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  const { pathname } = useLocation()
  const active = (p) => (pathname === p ? 'active' : '')

  return (
    <header className="site-header bg-white shadow-md fixed inset-x-0 top-0 z-40">
      <div className="container-wide py-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
            <img src="/eau.png" alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <Link to="/" className="text-lg font-bold text-gray-800">EAU CONTINENTALE</Link>
            <div className="text-xs text-gray-400">ESI KOKOE</div>
          </div>
        </div>

        <nav className="flex-1 flex justify-center space-x-8 text-sm">
          <Link to="/" className={`nav-link ${active('/')}`}>Accueil</Link>
          <Link to="/about" className={`nav-link ${active('/about')}`}>À propos</Link>
          <Link to="/products" className={`nav-link ${active('/products')}`}>Produits</Link>
          <Link to="/contact" className={`nav-link ${active('/contact')}`}>Contact</Link>
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
          <a href="tel:+22800000000" className="hidden md:inline-flex items-center gap-2 px-4 py-2 btn-primary" aria-label="Contactez-nous">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.81.37 1.6.73 2.33a1 1 0 0 1-.24 1.09L8.91 9.91a16 16 0 0 0 6.2 6.2l1.74-1.66a1 1 0 0 1 1.09-.24c.73.36 1.52.61 2.33.73a1 1 0 0 1 .75 1V21z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Contact</span>
          </a>
          {/* mobile contact button */}
          <a href="tel:+22800000000" className="md:hidden inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.81.37 1.6.73 2.33a1 1 0 0 1-.24 1.09L8.91 9.91a16 16 0 0 0 6.2 6.2l1.74-1.66a1 1 0 0 1 1.09-.24c.73.36 1.52.61 2.33.73a1 1 0 0 1 .75 1V21z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </header>
  )
}
