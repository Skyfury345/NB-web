import { useState, useEffect } from 'react'

const fotosNosotros = [
  '/Trabajos (1).jpeg',
  '/Trabajos (2).jpeg',
  '/Trabajos (3).jpeg',
  '/Trabajos (4).jpeg',
  '/Trabajos (5).jpeg',
  '/Trabajos (6).jpeg',
  '/Trabajos (7).jpeg',
  '/Trabajos (8).jpeg',
  '/Trabajos (9).jpeg',
  '/Trabajos (10).jpeg',
  '/Trabajos (11).jpeg',
  '/Trabajos (12).jpeg',
]

const IconRayo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M18 4 8 18h7l-2 10 10-14h-7l2-10z" />
  </svg>
)
const IconEscudo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 4 6 8v8c0 6 4.5 10 10 12 5.5-2 10-6 10-12V8l-10-4z" />
    <path d="m11.5 16 3 3 6-6" />
  </svg>
)
const IconDocumento = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M8 4h12l6 6v18H8z" />
    <path d="M20 4v6h6" />
    <path d="M12 16h10" />
    <path d="M12 20h10" />
    <path d="M12 24h6" />
  </svg>
)
const IconManos = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M4 18v6h4l4-2 6 2 8-4v-4l-6-4h-6l-4 2H4z" />
    <path d="M12 20h4" />
  </svg>
)

const valores = [
  { Icono: IconRayo, titulo: 'Respuesta inmediata', texto: 'Disponibilidad operativa para tu proyecto' },
  { Icono: IconEscudo, titulo: 'Equipos asegurados', texto: 'Cobertura y respaldo en cada servicio' },
  { Icono: IconDocumento, titulo: 'Cotización inmediata', texto: 'Presupuestos claros y sin sorpresas' },
  { Icono: IconManos, titulo: 'Atención personalizada', texto: 'Asesoramos según tus necesidades' },
]

export default function Nosotros() {
  const [actual, setActual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % fotosNosotros.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="nosotros" id="nosotros">
      <style>{`
        .nb-valor-icon {
          flex: 0 0 auto;
          width: 46px; height: 46px; border-radius: 12px;
          background: #1B4FA0;
          display: grid; place-items: center;
          box-shadow: 0 8px 18px rgba(27,79,160,.22);
        }
        .nb-valor-icon svg {
          width: 24px; height: 24px;
          fill: none; stroke: #fff;
          stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;
        }
        .valor-item { align-items: center; }
      `}</style>

      <div className="container">
        <div className="section-eyebrow">Quiénes somos</div>
<h2 className="section-title"><span style={{ color: '#1B4FA0' }}>N</span><span style={{ color: '#6B7280' }}>B</span> <span style={{ color: '#6B7280' }}>LOGÍSTICA</span></h2>
        <div className="nosotros-grid">
          <div className="nosotros-texto">
         <h3><span style={{ color: '#1B4FA0' }}>Tu socio logístico</span> en la Península de Yucatán</h3>
            <p>
              Somos una empresa dedicada a la renta de maquinaria pesada y servicio
              de transporte de carga en <strong style={{ color: '#1B4FA0' }}>Cancún y la Riviera Maya</strong>.
              Nuestro objetivo es ofrecer equipos confiables, en excelente estado y
              con el respaldo operativo que tu proyecto necesita.
            </p>
            <p>
              Contamos con una flota propia de camiones plana, retroexcavadoras,
              manipuladores telescópicos y plataformas de elevación que nos permite
              responder con rapidez a las necesidades de nuestros clientes.
            </p>
            <div className="nosotros-valores">
              {valores.map((v) => (
                <div className="valor-item" key={v.titulo}>
                  <span className="nb-valor-icon"><v.Icono /></span>
                  <div>
                    <h4>{v.titulo}</h4>
                    <p>{v.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="nosotros-imagen"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: 0,
              minHeight: 420,
              borderRadius: 16,
            }}
          >
            {fotosNosotros.map((foto, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("${foto}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: i === actual ? 1 : 0,
                  transition: 'opacity 1.2s ease',
                }}
              />
            ))}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '18px 20px',
                background: 'linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0))',
                display: 'flex',
                gap: 6,
                justifyContent: 'center',
              }}
            >
              {fotosNosotros.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i === actual ? 22 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === actual ? '#1B4FA0' : 'rgba(255,255,255,.7)',
                    transition: 'all .3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
