import { useState, useEffect } from 'react'

const imagenes = [
  '/hero-1.jpeg',
  '/hero-2.jpg',
  '/hero-3.jpeg',
  '/hero.-4.jpg',
  '/hero-5.jpg',
  '/hero-6.jpeg',
  '/hero-7.jpeg',
  '/hero.-8.jpg',
]

export default function Hero() {
  const [actual, setActual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % imagenes.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="inicio">
      {imagenes.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${i === actual ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">Cancún · Quintana Roo</div>
        <h1>
             Soluciones en <em style={{ color: '#1B4FA0', fontStyle: 'normal' }}>renta de maquinaria</em> y transporte de carga
        </h1>
        <p>
          Equipos de alto rendimiento para la construcción, industria y logística.
          Retroexcavadoras, manipuladores telescópicos, plataformas y camiones plana
          con la confiabilidad que tu proyecto necesita.
        </p>
        <div className="hero-buttons">
                 <a href="#contacto" className="btn-primary" style={{ background: '#1B4FA0', borderColor: '#1B4FA0', color: '#fff' }}>
            Solicitar cotización →
          </a>
          <a href="#equipos" className="btn-outline">
            Conoce nuestros equipos
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <h3>5+</h3>
            <p>Tipos de equipo</p>
          </div>
          <div className="hero-stat">
            <h3>24/7</h3>
            <p>Disponibilidad</p>
          </div>
          <div className="hero-stat">
            <h3>Q. Roo</h3>
            <p>Cobertura regional</p>
          </div>
        </div>
      </div>
    </section>
  )
}