import { Link } from 'react-router-dom'

const AZUL = '#1B4FA0'
const TEL_WA = '525660570553'

const departamentos = [
  {
    titulo: 'Gerencia Comercial',
    correo: 'gerencia@grupo-nb.com',
    telefono: '+52 56 6057 0553',
    telLink: '525660570553',
  },
  {
    titulo: 'Operaciones y Soporte',
    correo: 'operaciones@grupo-nb.com',
    telefono: '+52 984 879 5278',
    telLink: '529848795278',
  },
  {
    titulo: 'Contabilidad',
    correo: 'contabilidad@grupo-nb.com',
    telefono: '+52 1 998 440 7977',
    telLink: '5219984407977',
  },
  {
    titulo: 'Venta y Renta',
    correo: 'contacto@grupo-nb.com',
    telefono: '+52 56 6057 0553',
    telLink: '525660570553',
  },
]

export default function ContactoPage() {
  return (
    <section style={{ padding: '120px 0 80px', background: '#f6f8fb', minHeight: '100vh' }}>
      <style>{`
        .ctp-header { max-width: 900px; margin: 0 auto 3rem; padding: 0 2rem; }
        .ctp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .ctp-card {
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 6px 24px rgba(15,30,51,.07);
        }
        .ctp-dept {
          font-size: 1.2rem;
          font-weight: 800;
          color: ${AZUL};
          margin: 0 0 1.25rem;
          text-transform: uppercase;
          letter-spacing: .04em;
        }
        .ctp-row {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: .75rem;
        }
        .ctp-row svg {
          flex-shrink: 0;
          width: 20px; height: 20px;
          fill: none; stroke: #5b6b80;
          stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;
        }
        .ctp-row a {
          color: #0f1e33;
          text-decoration: none;
          font-size: 1rem;
        }
        .ctp-row a:hover { color: ${AZUL}; }
        .ctp-wa {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          margin-top: 1rem;
          padding: .7rem 1.25rem;
          background: #128C7E;
          color: #fff;
          font-size: .9rem;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
        }
        .ctp-wa:hover { opacity: .85; }
        .ctp-back {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          color: ${AZUL};
          font-weight: 600;
          text-decoration: none;
          font-size: .95rem;
          margin-bottom: .75rem;
        }
        .ctp-back:hover { text-decoration: underline; }
        @media (max-width: 600px) {
          .ctp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ctp-header">
        <Link className="ctp-back" to="/">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Inicio
        </Link>
        <h1 style={{ margin: '0 0 .5rem', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f1e33', textTransform: 'uppercase' }}>
          Contáctanos
        </h1>
        <p style={{ margin: 0, fontSize: '1.05rem', color: '#5b6b80' }}>
          Escríbenos al departamento que necesites. Respuesta inmediata por WhatsApp o correo.
        </p>
      </div>

      <div className="ctp-grid">
        {departamentos.map((d) => (
          <div className="ctp-card" key={d.titulo}>
            <h3 className="ctp-dept">{d.titulo}</h3>
            <div className="ctp-row">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
                <path d="m3.8 7.3 7.1 5.2a2 2 0 0 0 2.2 0l7.1-5.2" />
              </svg>
              <a href={'mailto:' + d.correo}>{d.correo}</a>
            </div>
            <div className="ctp-row">
              <svg viewBox="0 0 24 24">
                <path d="M6.2 3.5h2.6l1.5 4-1.9 1.4a12.5 12.5 0 0 0 6.7 6.7l1.4-1.9 4 1.5v2.6a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
              </svg>
              <a href={'tel:+' + d.telLink}>{d.telefono}</a>
            </div>
     
          </div>
        ))}
      </div>
    </section>
  )
}