export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>N<span>B</span> LOGÍSTICA</h3>
            <p>
              Renta de maquinaria pesada, plataformas de elevación y servicio de
              transporte de carga en Cancún y la Riviera Maya.
            </p>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href="tel:+525560570553">+52 56 6057 0553</a></li>
            <li><a href="mailto:gerencia@grupo-nb.com">gerencia@grupo-nb.com</a></li>
              <li><a href="https://wa.me/525560570553" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://sistema.grupo-nb.com/cotizador" target="_blank" rel="noopener noreferrer">Portal de cotizaciones</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <span>© {new Date().getFullYear()} NB Logística. Todos los derechos reservados.</span>
          <span>Cancún, Quintana Roo, México</span>
        </div>
      </div>
    </footer>
  )
}
