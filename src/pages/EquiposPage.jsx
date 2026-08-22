import { Link } from 'react-router-dom'

const AZUL = '#1B4FA0'

const ICONOS = {
  articulada: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="6" y="29" width="36" height="8" rx="1.5" />
      <path d="m20 29 12-19" />
      <path d="M32 10h14" />
      <path d="M46 4h12v8H46z" />
      <path d="M46 8h12" />
      <circle cx="15" cy="41" r="4" />
      <circle cx="34" cy="41" r="4" />
    </svg>
  ),
  tijera: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <path d="M10 10h44" />
      <path d="M12 10V4h40v6" />
      <path d="m17 13 30 11" />
      <path d="M47 13 17 24" />
      <path d="m17 24 30 11" />
      <path d="M47 24 17 35" />
      <rect x="10" y="35" width="44" height="6" rx="1.5" />
      <circle cx="19" cy="44" r="3" />
      <circle cx="45" cy="44" r="3" />
    </svg>
  ),
  manipulador: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="8" y="24" width="42" height="9" rx="1.5" />
      <path d="M14 24v-7h10v7" />
      <path d="m13 23 33-16 4 5-33 16z" />
      <path d="m50 12 7-3" />
      <path d="m52 16 6-2" />
      <circle cx="17" cy="38" r="5" />
      <circle cx="43" cy="38" r="5" />
    </svg>
  ),
  retro: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="22" y="19" width="17" height="12" rx="1.5" />
      <path d="M26 19v-8h9v8" />
      <path d="M22 25 10 30" />
      <path d="M10 30H5v6h9" />
      <path d="m39 21 12-9" />
      <path d="m51 12 6 12" />
      <path d="M57 24h-6l2 6h6z" />
      <circle cx="26" cy="36" r="5" />
      <circle cx="45" cy="35" r="6.5" />
    </svg>
  ),
  plana: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <rect x="4" y="12" width="16" height="18" rx="1.5" />
      <path d="M8 17h8" />
      <path d="M20 27h40" />
      <path d="M22 27v-3" />
      <path d="M60 27v-3" />
      <circle cx="12" cy="36" r="4.5" />
      <circle cx="40" cy="36" r="4.5" />
      <circle cx="52" cy="36" r="4.5" />
    </svg>
  ),
}

const CATEGORIAS = [
  { slug: 'plataforma-articulada', nombre: 'Plataformas\narticuladas', icono: 'articulada' },
  { slug: 'plataforma-de-tijera', nombre: 'Plataformas\nde tijera', icono: 'tijera' },
  { slug: 'manipulador-telescopico', nombre: 'Manipuladores\ntelescópicos', icono: 'manipulador' },
  { slug: 'retroexcavadora', nombre: 'Retroexcavadoras', icono: 'retro' },
  { slug: 'camion-plana', nombre: 'Camión\nplana', icono: 'plana' },
]

export default function EquiposPage() {
  return (
    <section style={{ padding: '120px 0 80px', background: '#fff', minHeight: '100vh' }}>
      <style>{`
        .eqp-header {
          max-width: 1200px;
          margin: 0 auto 3rem;
          padding: 0 2rem;
        }
        .eqp-eyebrow {
          margin: 0 0 .5rem;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: ${AZUL};
        }
        .eqp-title {
          margin: 0 0 .5rem;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #0f1e33;
          text-transform: uppercase;
        }
        .eqp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .eqp-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #0f1e33;
          padding: 2.5rem 1.5rem;
          border: 1px solid #e9ecf0;
          transition: background .2s, box-shadow .2s;
          text-align: center;
        }
        .eqp-card:hover {
          background: #f6f8fb;
          box-shadow: 0 8px 30px rgba(15,30,51,.08);
        }
        .eqp-card:hover .eqp-icon svg {
          stroke: ${AZUL};
        }
        .eqp-card:hover .eqp-label {
          color: ${AZUL};
        }
        .eqp-icon {
          margin-bottom: 1.25rem;
        }
        .eqp-icon svg {
          width: 90px;
          height: 68px;
          fill: none;
          stroke: #0f1e33;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke .2s;
        }
        .eqp-label {
          font-size: .85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .06em;
          line-height: 1.4;
          white-space: pre-line;
          transition: color .2s;
        }
        @media (max-width: 600px) {
          .eqp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .eqp-card { padding: 2rem 1rem; }
          .eqp-icon svg { width: 70px; height: 52px; }
        }
      `}</style>

      <div className="eqp-header">
        <p className="eqp-eyebrow">Categorías</p>
        <h1 className="eqp-title">Nuestros equipos</h1>
      </div>

      <div className="eqp-grid">
        {CATEGORIAS.map((cat) => (
          <Link className="eqp-card" key={cat.slug} to={'/equipos/' + cat.slug}>
            <span className="eqp-icon">{ICONOS[cat.icono]}</span>
            <span className="eqp-label">{cat.nombre}</span>
          </Link>
        ))}
      </div>

      <div style={{
        maxWidth: 700,
        margin: '4rem auto 0',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: '#f6f8fb',
        borderRadius: 16,
      }}>
        <h3 style={{ margin: '0 0 .75rem', fontSize: '1.5rem', fontWeight: 800, color: '#0f1e33' }}>
          ¿No encuentras lo que necesitas?
        </h3>
        <p style={{ margin: '0 0 1.5rem', fontSize: '1.05rem', color: '#5b6b80' }}>
          Pregunta por disponibilidad, también trabajamos con equipos bajo pedido.
        </p>
        <a
          href="https://wa.me/525660570553?text=Hola%20NB%20Log%C3%ADstica%2C%20quiero%20preguntar%20por%20disponibilidad%20de%20equipo"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            padding: '.9rem 2rem',
            background: '#1B4FA0',
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: 700,
            borderRadius: 10,
            textDecoration: 'none',
          }}
        >
          Consultar disponibilidad
        </a>
      </div>
    </section>
  )
}
