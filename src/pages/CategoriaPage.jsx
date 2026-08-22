import { useParams, Link } from 'react-router-dom'
import { CATEGORIAS, EQUIPOS, linkWhatsApp } from '../data/equiposData'

const AZUL = '#1B4FA0'

export default function CategoriaPage() {
  const { slug } = useParams()
  const cat = CATEGORIAS.find((c) => c.slug === slug)
  const modelos = EQUIPOS[slug] || []

  if (!cat) {
    return (
      <section style={{ padding: '160px 2rem 80px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Categoría no encontrada</h2>
        <Link to="/equipos" style={{ color: AZUL }}>← Volver a equipos</Link>
      </section>
    )
  }

  return (
    <section style={{ padding: '120px 0 80px', background: '#f6f8fb', minHeight: '100vh' }}>
      <style>{`
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .cat-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(15,30,51,.07);
          display: flex;
          flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(15,30,51,.12);
        }
        .cat-card-img-wrap {
         height: 280px;
          background: #f0f2f5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .cat-card-img-wrap img {
          max-height: 120%;
          max-width: 100%;
          object-fit: contain;
        }
        .cat-card-body { padding: 1.5rem 1.75rem 1.75rem; flex: 1; display: flex; flex-direction: column; }
        .cat-card-marca {
          font-size: .85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: ${AZUL};
          margin: 0 0 .25rem;
        }
        .cat-card-modelo {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f1e33;
          margin: 0 0 1rem;
        }
        .cat-spec-row {
          display: flex;
          justify-content: space-between;
          padding: .45rem 0;
          border-bottom: 1px solid #f0f2f5;
          font-size: .95rem;
        }
        .cat-spec-label { color: #5b6b80; }
        .cat-spec-valor { font-weight: 600; color: #0f1e33; }
        .cat-card-actions {
          margin-top: auto;
          padding-top: 1.25rem;
          display: flex;
          gap: .75rem;
        }
        .cat-btn {
          flex: 1;
          padding: .75rem;
          border-radius: 8px;
          font-size: .9rem;
          font-weight: 700;
          font-family: inherit;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: opacity .2s;
        }
        .cat-btn:hover { opacity: .85; }
        .cat-btn-primary { background: ${AZUL}; color: #fff; }
.cat-btn-wa { background: #1B4FA0; color: #fff; }

        .cat-back {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          color: ${AZUL};
          font-weight: 600;
          text-decoration: none;
          font-size: .95rem;
          margin-bottom: .75rem;
        }
        .cat-back:hover { text-decoration: underline; }

        @media (max-width: 760px) {
          .cat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto 2.5rem', padding: '0 2rem' }}>
        <Link className="cat-back" to="/equipos">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Todos los equipos
        </Link>

        <h1 style={{
          margin: '0 0 .5rem',
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          fontWeight: 800, color: '#0f1e33', textTransform: 'uppercase',
        }}>
          {cat.nombre}
        </h1>
        <p style={{ margin: 0, fontSize: '1.05rem', color: '#5b6b80' }}>
          {cat.descripcion}
        </p>
      </div>

      <div className="cat-grid">
        {modelos.map((eq) => (
          <div className="cat-card" key={eq.id}>
            <div className="cat-card-img-wrap">
              <img
                src={eq.imagen}
                alt={`${eq.marca} ${eq.modelo}`}
                onError={(e) => { e.currentTarget.src = cat.imagen }}
              />
            </div>
            <div className="cat-card-body">
              <p className="cat-card-marca">{eq.marca}</p>
              <h3 className="cat-card-modelo">{eq.modelo}</h3>

              {eq.specs.map((s) => (
                <div className="cat-spec-row" key={s.label}>
                  <span className="cat-spec-label">{s.label}</span>
                  <span className="cat-spec-valor">{s.valor}</span>
                </div>
              ))}

              <div className="cat-card-actions">
                <a
                  className="cat-btn cat-btn-wa"
                  href={linkWhatsApp(`${eq.marca} ${eq.modelo}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
