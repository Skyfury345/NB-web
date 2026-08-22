import { Link } from 'react-router-dom'

const AZUL = '#1B4FA0'

export default function NosotrosPage() {
  return (
    <section style={{ padding: '120px 0 80px', background: '#fff', minHeight: '100vh' }}>
      <style>{`
        .nos-header { max-width: 900px; margin: 0 auto 3rem; padding: 0 2rem; }
        .nos-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2rem; max-width: 900px; margin: 0 auto 3rem; padding: 0 2rem;
        }
        .nos-card { background: #f6f8fb; border-radius: 16px; padding: 2.5rem; }
        .nos-card h3 {
          margin: 0 0 1rem; font-size: 1.3rem; font-weight: 800;
          color: ${AZUL}; text-transform: uppercase; letter-spacing: .04em;
        }
        .nos-card p { margin: 0; color: #5b6b80; font-size: 1rem; line-height: 1.6; }
        .nos-mapa-wrap { max-width: 900px; margin: 0 auto; padding: 0 2rem; }
        .nos-mapa-titulo {
          font-size: 1.3rem; font-weight: 800; color: #0f1e33;
          text-transform: uppercase; margin: 0 0 1.5rem;
        }
        .nos-back {
          display: inline-flex; align-items: center; gap: .4rem;
          color: ${AZUL}; font-weight: 600; text-decoration: none;
          font-size: .95rem; margin-bottom: .75rem;
        }
        .nos-back:hover { text-decoration: underline; }
        @media (max-width: 700px) { .nos-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="nos-header">
        <Link className="nos-back" to="/">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Inicio
        </Link>
        <h1 style={{ margin: '0 0 .5rem', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f1e33', textTransform: 'uppercase' }}>
          Nosotros
        </h1>
        <p style={{ margin: '0 0 .5rem', fontSize: '1.1rem', color: '#5b6b80', maxWidth: 700 }}>
          Somos una empresa 100% mexicana dedicada a la renta de maquinaria pesada,
          plataformas de elevación y transporte de carga con equipo propio en la
          Península de Yucatán. Trabajamos con operadores certificados y equipos
          asegurados para darle a tu proyecto el respaldo que necesita.
        </p>
      </div>

      <div className="nos-grid">
        <div className="nos-card">
          <h3>Misión</h3>
          <p>
            Proveer soluciones confiables de renta de maquinaria pesada y transporte
            de carga, con equipos en óptimas condiciones, operadores capacitados y
            atención personalizada que garantice la continuidad y seguridad de cada
            proyecto de nuestros clientes.
          </p>
        </div>
        <div className="nos-card">
          <h3>Visión</h3>
          <p>
            Ser la empresa líder en renta de maquinaria y logística de carga en el
            sureste de México, reconocida por la calidad de nuestro servicio, la
            disponibilidad inmediata de equipos y el compromiso con la satisfacción
            de nuestros clientes.
          </p>
        </div>
      </div>

      <div className="nos-mapa-wrap">
        <h3 className="nos-mapa-titulo">Nuestra cobertura</h3>
        <div style={{ background: '#f6f8fb', borderRadius: 16, padding: '2rem' }}>
          <p style={{ margin: '0 0 1.5rem', color: '#5b6b80', fontSize: '1rem' }}>
            Operamos en toda la Península de Yucatán: Cancún, Playa del Carmen, Tulum y Mérida.
          </p>
       <svg viewBox="0 0 500 480" style={{ width: '100%', height: 'auto', maxHeight: 420 }}>
<rect width="500" height="480" fill="#f6f8fb" rx="12" />
            <path d="M40 380 L30 340 L25 300 L20 260 L18 220 L25 180 L40 150 L60 125 L85 105 L110 90 L140 78 L170 68 L200 58 L230 48 L260 38 L290 30 L320 24 L350 22 L375 25 L395 32 L410 45 L420 62 L428 85 L432 110 L430 140 L425 170 L418 200 L408 230 L395 260 L380 290 L365 318 L348 345 L330 370 L310 392 L288 410 L265 425 L240 435 L215 440 L190 438 L165 432 L140 425 L115 418 L90 412 L65 408 L40 400 Z"
                  fill="#C8D5E3" stroke="#9BAFC4" strokeWidth="1.5" />
            <path d="M438 195 Q445 185 450 190 Q455 200 452 215 Q448 225 442 222 Q436 215 435 205 Z"
                  fill="#C8D5E3" stroke="#9BAFC4" strokeWidth="1" />
            <path d="M310 24 L305 120 L340 220 L395 260"
                  fill="none" stroke="#8A9DB5" strokeWidth="1" />
            <path d="M110 90 L135 200 L140 280 L165 380"
                  fill="none" stroke="#8A9DB5" strokeWidth="1" />
            <path d="M135 200 L305 120"
                  fill="none" stroke="#8A9DB5" strokeWidth="1" />
            <text x="200" y="115" textAnchor="middle" style={{ fontSize: '16px', fontWeight: 700, fill: '#7A8FA5', letterSpacing: '6px' }}>YUCATÁN</text>
            <text x="350" y="280" textAnchor="middle" style={{ fontSize: '13px', fontWeight: 700, fill: '#7A8FA5', letterSpacing: '4px' }}>QUINTANA</text>
            <text x="350" y="298" textAnchor="middle" style={{ fontSize: '13px', fontWeight: 700, fill: '#7A8FA5', letterSpacing: '4px' }}>ROO</text>
            <text x="90" y="310" textAnchor="middle" style={{ fontSize: '12px', fontWeight: 700, fill: '#7A8FA5', letterSpacing: '3px' }}>CAMPECHE</text>
            <circle cx="408" cy="52" r="5" fill={AZUL} />
            <text x="390" y="45" textAnchor="end" style={{ fontSize: '14px', fontWeight: 800, fill: '#0f1e33' }}>CANCÚN</text>
            <circle cx="420" cy="160" r="5" fill={AZUL} />
            <text x="410" y="150" textAnchor="end" style={{ fontSize: '12px', fontWeight: 700, fill: '#0f1e33' }}>PLAYA DEL</text>
            <text x="410" y="166" textAnchor="end" style={{ fontSize: '12px', fontWeight: 700, fill: '#0f1e33' }}>CARMEN</text>
            <circle cx="395" cy="258" r="5" fill={AZUL} />
            <text x="380" y="270" textAnchor="end" style={{ fontSize: '13px', fontWeight: 700, fill: '#0f1e33' }}>TULUM</text>
            <circle cx="175" cy="85" r="5" fill={AZUL} />
            <text x="190" y="82" style={{ fontSize: '14px', fontWeight: 800, fill: '#0f1e33' }}>MÉRIDA</text>
          </svg>
          <div style={{
            display: 'flex', gap: '2rem', flexWrap: 'wrap',
            marginTop: '1.5rem', justifyContent: 'center',
          }}>
            {['Cancún', 'Playa del Carmen', 'Tulum', 'Mérida'].map((c) => (
              <span key={c} style={{
                display: 'flex', alignItems: 'center', gap: '.5rem',
                fontSize: '1.05rem', fontWeight: 600, color: '#0f1e33',
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: AZUL, flexShrink: 0,
                }} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}