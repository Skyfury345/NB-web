import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const loc = useLocation()
  const enInicio = loc.pathname === '/'

  function ancla(hash) {
    if (enInicio) return hash
    return '/' + hash
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <span className="navbar-logo-text">
            <span>N</span>
            <span style={{ color: '#4B5563' }}>B</span>
            {' '}
            <span style={{ color: '#4B5563' }}>LOGÍSTICA</span>
          </span>
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={'navbar-links ' + (menuOpen ? 'open' : '')}>
          <li>
            <a href={ancla('#inicio')} onClick={() => setMenuOpen(false)}>Inicio</a>
          </li>
          <li>
            <Link to="/equipos" onClick={() => setMenuOpen(false)}>Equipos</Link>
          </li>
          <li>
          <Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
          </li>
          <li>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </li>
          <li>
            <a href="https://sistema.grupo-nb.com/cotizador" className="btn-login" target="_blank" rel="noopener noreferrer">
                           <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>
              Mi cuenta
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}