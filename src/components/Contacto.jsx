import { useState } from 'react'

const AZUL = '#1B4FA0'
const TEL_DISPLAY = '+52 56 6057 0553'
const TEL_WA = '525660570553'

/* ---------- Íconos minimalistas (línea, sin relleno) ---------- */

const IconoUbicacion = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M20 10.5c0 5.2-6.3 10.6-7.5 11.6a.8.8 0 0 1-1 0C10.3 21.1 4 15.7 4 10.5a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.3" r="2.8" />
  </svg>
)

const IconoTelefono = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M6.2 3.5h2.6l1.5 4-1.9 1.4a12.5 12.5 0 0 0 6.7 6.7l1.4-1.9 4 1.5v2.6a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
)

const IconoCorreo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m3.8 7.3 7.1 5.2a2 2 0 0 0 2.2 0l7.1-5.2" />
  </svg>
)

const IconoHorario = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.4 2" />
  </svg>
)

const IconoWhatsApp = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
)

/* ---------- Bloque de dato de contacto ---------- */

function DatoContacto({ icono, titulo, children }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
      <div style={{
        flexShrink: 0,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(27, 79, 160, 0.08)',
        color: '#0f1e33',
      }}>
        {icono}
      </div>
      <div>
        <h4 style={{
          margin: '0 0 .3rem',
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#0f1e33',
          lineHeight: 1.2,
        }}>
          {titulo}
        </h4>
        <div style={{
          fontSize: '1.2rem',
          color: '#5b6b80',
          lineHeight: 1.55,
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ---------- Sección de contacto ---------- */

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    servicio: '',
    mensaje: '',
  })

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    const texto =
      `Hola NB Logística, quiero solicitar una cotización.%0A%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Empresa: ${form.empresa}%0A` +
      `Teléfono: ${form.telefono}%0A` +
      `Correo: ${form.correo}%0A` +
      `Servicio de interés: ${form.servicio}%0A` +
      `Mensaje: ${form.mensaje}`
    window.open(`https://wa.me/${TEL_WA}?text=${texto}`, '_blank')
  }

  const estiloInput = {
    width: '100%',
    padding: '.85rem 1rem',
    border: '1px solid #dfe5ec',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    color: '#0f1e33',
    background: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const estiloLabel = {
    display: 'block',
    marginBottom: '.4rem',
    fontSize: '.95rem',
    fontWeight: 600,
    color: '#0f1e33',
  }

  return (
    <section id="contacto" style={{ padding: '5rem 0', background: '#f6f8fb' }}>
      <style>{`
        .nb-contacto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .nb-form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        @media (max-width: 900px) {
          .nb-contacto-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .nb-form-2col { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 2rem' }}>
        <p style={{
          margin: 0,
          fontSize: '1.15rem',
          fontWeight: 700,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: AZUL,
        }}>
          Contáctanos
        </p>

        <h2 style={{
          margin: '.75rem 0 1rem',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
          fontWeight: 800,
          color: '#0f1e33',
          lineHeight: 1.1,
        }}>
          ¿Listo para tu próximo proyecto?
        </h2>

        <p style={{
          margin: 0,
          fontSize: '1.1rem',
          color: '#5b6b80',
          maxWidth: '60rem',
        }}>
          Cuéntanos qué equipo necesitas y te atendemos de inmediato por WhatsApp.
        </p>
      </div>

      <div className="nb-contacto-grid">
        {/* Columna izquierda: datos */}
        <div>
          <DatoContacto icono={<IconoUbicacion />} titulo="Ubicación">
            Calle 8, con calle Cozumel, Supermanzana 216<br />
            C.P. 77519, Cancún, Quintana Roo
          </DatoContacto>

          <DatoContacto icono={<IconoTelefono />} titulo="Teléfono">
            <a href={`tel:+${TEL_WA}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {TEL_DISPLAY}
            </a>
          </DatoContacto>

          <DatoContacto icono={<IconoCorreo />} titulo="Correo">
<a href="mailto:operaciones@grupo-nb.com" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
  operaciones@grupo-nb.com
</a>
<a href="mailto:gerencia@grupo-nb.com" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
  gerencia@grupo-nb.com
</a>
          </DatoContacto>

          <DatoContacto icono={<IconoHorario />} titulo="Horario">
          Lunes a Viernes: 8:00 AM - 7:00 PM
          </DatoContacto>

          <a
            href={`https://wa.me/${TEL_WA}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.7rem',
              width: '100%',
              padding: '1.1rem',
          background: '#108854',
              color: '#fff',
              fontSize: '1.15rem',
              fontWeight: 700,
              borderRadius: '10px',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            <IconoWhatsApp size={24} />
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* Columna derecha: formulario */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 10px 40px rgba(15, 30, 51, .08)',
        }}>
          <h3 style={{
            margin: '0 0 1.75rem',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: AZUL,
          }}>
            Solicita tu cotización
          </h3>

          <div className="nb-form-2col">
            <div>
              <label style={estiloLabel}>Nombre</label>
              <input style={estiloInput} name="nombre" value={form.nombre}
                     onChange={cambiar} placeholder="Tu nombre" />
            </div>
            <div>
              <label style={estiloLabel}>Empresa</label>
              <input style={estiloInput} name="empresa" value={form.empresa}
                     onChange={cambiar} placeholder="Nombre de tu empresa" />
            </div>
            <div>
              <label style={estiloLabel}>Teléfono</label>
              <input style={estiloInput} name="telefono" value={form.telefono}
                     onChange={cambiar} placeholder="+52 ..." />
            </div>
            <div>
              <label style={estiloLabel}>Correo</label>
              <input style={estiloInput} name="correo" value={form.correo}
                     onChange={cambiar} placeholder="tu@correo.com" />
            </div>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <label style={estiloLabel}>Servicio de interés</label>
            <select style={estiloInput} name="servicio" value={form.servicio} onChange={cambiar}>
              <option value="">-- Selecciona --</option>
              <option>Camión plana</option>
              <option>Retroexcavadora</option>
              <option>Manipulador telescópico</option>
              <option>Plataforma de tijera</option>
              <option>Plataforma articulada</option>
              <option>Servicios mecánicos</option>
            </select>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <label style={estiloLabel}>Mensaje</label>
            <textarea style={{ ...estiloInput, minHeight: '120px', resize: 'vertical' }}
                      name="mensaje" value={form.mensaje} onChange={cambiar}
                      placeholder="Cuéntanos sobre tu proyecto, ubicación de la obra, fechas..." />
          </div>

          <button
            onClick={enviar}
            style={{
              marginTop: '1.75rem',
              width: '100%',
              padding: '1.1rem',
              background: AZUL,
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1.05rem',
              fontWeight: 700,
              fontFamily: 'inherit',
              cursor: 'pointer',
            }}
          >
            Enviar solicitud
          </button>
        </div>
      </div>
    </section>
  )
}
