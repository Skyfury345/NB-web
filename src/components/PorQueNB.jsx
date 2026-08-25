const IconMexico = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="11" />
    <path d="M5 16h22" />
    <path d="M16 5c3 3.5 4.5 7 4.5 11S19 24.5 16 27c-3-2.5-4.5-6-4.5-11S13 8.5 16 5z" />
  </svg>
)
const IconHerramienta = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M20.5 6a5.5 5.5 0 0 0-5 8L6 23.5 8.5 26l9.5-9.5a5.5 5.5 0 0 0 8-6L22.5 14 18 9.5 20.5 6z" />
  </svg>
)
const IconMapa = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 4c-4.4 0-8 3.4-8 7.6C8 18 16 28 16 28s8-10 8-16.4C24 7.4 20.4 4 16 4z" />
    <circle cx="16" cy="12" r="3" />
  </svg>
)
const IconRayo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M18 4 8 18h7l-2 10 10-14h-7l2-10z" />
  </svg>
)
const IconCapacitacion = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M4 12 16 6l12 6-12 6L4 12z" />
    <path d="M9 15v5c0 1.5 3 3 7 3s7-1.5 7-3v-5" />
    <path d="M28 12v6" />
  </svg>
)
const IconEscudo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 4 6 8v8c0 6 4.5 10 10 12 5.5-2 10-6 10-12V8l-10-4z" />
    <path d="m11.5 16 3 3 6-6" />
  </svg>
)

const razonesIzq = [
  {
    Icono: IconMexico,
    titulo: 'Empresa 100% mexicana',
    texto: 'Capital y operación local. Decisiones rápidas y trato directo, sin filtros corporativos.',
  },
  {
    Icono: IconHerramienta,
    titulo: 'Servicio postventa',
    texto: 'Damos seguimiento durante toda la renta, no terminamos al entregar el equipo.',
  },
  {
    Icono: IconMapa,
    titulo: 'Cobertura nacional',
    texto: 'Movemos maquinaria a donde tu proyecto lo pida, con transporte propio.',
  },
]

const razonesDer = [
  {
    Icono: IconRayo,
    titulo: 'Cotización inmediata',
    texto: 'Presupuesto claro el mismo día, con precios firmes y sin cargos escondidos.',
  },
  {
    Icono: IconCapacitacion,
    titulo: 'Capacitación al operador',
    texto: 'Entrenamos a tu personal para el uso seguro y correcto del equipo.',
  },
  {
    Icono: IconEscudo,
    titulo: 'Equipos con seguro',
    texto: 'Toda la flota va con cobertura vigente, para que tu obra no pare.',
  },
]

export default function PorQueNB() {
  return (
    <section className="por-que-nb" id="por-que-nb">
      <style>{`
        .por-que-nb {
          padding: 64px 20px 80px;
          background: #fff;
          color: #0B1B33;
        }
        .pqnb-wrap { max-width: 1240px; margin: 0 auto; text-align: center; }

        .pqnb-eyebrow {
          font-size: 12px; letter-spacing: .22em; text-transform: uppercase;
          color: #1B4FA0; font-weight: 700; margin: 0 0 12px;
        }
        .pqnb-title {
          margin: 0 auto 18px; max-width: 900px;
          font-size: clamp(30px, 4.4vw, 52px);
          font-weight: 800; letter-spacing: -.02em; line-height: 1.05;
          text-transform: uppercase;
        }
        .pqnb-intro {
          margin: 0 auto 16px; max-width: 720px;
          color: #5A6472; font-size: 16px; line-height: 1.6;
        }

        .pqnb-layout {
          display: grid; grid-template-columns: 1fr 1.1fr 1fr;
          gap: 40px; align-items: center;
        }

        .pqnb-col { display: flex; flex-direction: column; gap: 44px; }
        .pqnb-col.izq { text-align: right; }
        .pqnb-col.der { text-align: left; }

        .pqnb-item { display: flex; gap: 18px; align-items: flex-start; }
        .pqnb-col.izq .pqnb-item { flex-direction: row-reverse; }

        .pqnb-icon {
          flex: 0 0 auto;
          width: 62px; height: 62px; border-radius: 50%;
          background: #1B4FA0;
          display: grid; place-items: center;
          box-shadow: 0 12px 24px rgba(27,79,160,.28);
        }
        .pqnb-icon svg {
          width: 30px; height: 30px;
          fill: none; stroke: #fff;
          stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;
        }
        .pqnb-item h4 {
          margin: 6px 0 6px; font-size: 15px; font-weight: 800;
          letter-spacing: .06em; text-transform: uppercase;
        }
        .pqnb-item p {
          margin: 0; color: #5A6472;
          font-size: 14px; line-height: 1.55;
        }
        .pqnb-foto {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          min-height: 560px;
          overflow: hidden;
        }
        .pqnb-foto::before {
          content: '';
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 650px; height: 650px; max-width: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, #F6F8FC 0%, #EEF2F9 60%, transparent 72%);
          opacity: .55;
        }
        .pqnb-foto img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: contain; transform: scale(1.3);
          filter: drop-shadow(0 24px 30px rgba(11,27,51,.18));
        }

        @media (max-width: 960px) {
          .por-que-nb { padding: 64px 16px; }
          .pqnb-layout { grid-template-columns: 1fr; gap: 40px; }
          .pqnb-col, .pqnb-col.izq, .pqnb-col.der { text-align: left; }
          .pqnb-col.izq .pqnb-item { flex-direction: row; }
          .pqnb-foto { min-height: 340px; order: -1; }
          .pqnb-foto::before { width: 320px; height: 320px; }
          .pqnb-foto img { transform: scale(1.4); }
        }
      `}</style>

      <div className="pqnb-wrap">
        <p className="pqnb-eyebrow">Seguridad, respaldo y disponibilidad</p>
        <h2 className="pqnb-title">¿Por qué elegir NB Logística?</h2>
        <p className="pqnb-intro">
          No solo rentamos maquinaria: somos tu socio operativo. Estas son las
          razones por las que nuestros clientes regresan proyecto tras proyecto.
        </p>

        <div className="pqnb-layout">
          <div className="pqnb-col izq">
            {razonesIzq.map((r) => (
              <div key={r.titulo} className="pqnb-item">
                <div className="pqnb-icon"><r.Icono /></div>
                <div>
                  <h4>{r.titulo}</h4>
                  <p>{r.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pqnb-foto">
     <img src="/equipos/genie-gs3246.png" alt="Plataforma de tijera Genie GS-3246" />
          </div>

          <div className="pqnb-col der">
            {razonesDer.map((r) => (
              <div key={r.titulo} className="pqnb-item">
                <div className="pqnb-icon"><r.Icono /></div>
                <div>
                  <h4>{r.titulo}</h4>
                  <p>{r.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
