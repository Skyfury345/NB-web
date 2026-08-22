const servicios = [
  {
    icono: '/Plana.png',
    titulo: 'Camión tipo plana',
    descripcion: 'Transporte de carga con camiones plana de 12 metros. Ideales para materiales de construcción, estructuras metálicas, contenedores y carga sobredimensionada.',
  },
  {
    icono: '/retro.png',
    titulo: 'Retroexcavadora',
    descripcion: 'Renta de retroexcavadoras para excavación, demolición, carga de materiales y movimiento de tierras en obras de construcción e infraestructura.',
  },
  {
    icono: '/Mani.png',
    titulo: 'Manipulador telescópico',
    descripcion: 'Equipos de 17 metros de alcance y 4 toneladas de capacidad. Perfectos para elevar y colocar materiales en alturas con precisión.',
  },
  {
    icono: '/tijera.png',
    titulo: 'Plataforma tipo tijera',
    descripcion: 'Plataformas de elevación vertical para trabajos en alturas. Superficie de trabajo amplia y estable para mantenimiento, instalaciones y acabados.',
  },
  {
    icono: '/art.png',
    titulo: 'Plataforma articulada',
    descripcion: 'Alcance y flexibilidad para acceder a zonas difíciles. Ideal para fachadas, techos, instalaciones eléctricas y trabajos en alturas complejas.',
  },
  {
    icono: '/meca.png',
    titulo: 'Servicios mecánicos',
    descripcion: 'Mantenimiento preventivo y correctivo de maquinaria pesada. Reparaciones hidráulicas, cambio de sellos de cilindros, mangueras y diagnóstico de sistemas para mantener tus equipos operando al máximo.',
  },
]

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-eyebrow">Nuestros servicios</div>
        <h2 className="section-title">El equipo correcto para cada proyecto</h2>
        <p className="section-desc">
          Ofrecemos renta de maquinaria pesada y servicio de transporte de carga
          para la industria de la construcción y logística en la Península de Yucatán.
        </p>
        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <div className="servicio-card" key={i}>
  <div className="servicio-icon"><img src={s.icono} alt={s.titulo} style={{ width: 58, height: 58, objectFit: 'contain' }} /></div>
              <h3>{s.titulo}</h3>
              <p>{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
