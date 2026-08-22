/*  Catálogo de equipos – NB Logística
    Edita aquí para agregar/quitar modelos o corregir specs.
    Las imágenes van en public/equipos/<slug>.png               */

const TEL_WA = '525660570553'

export const CATEGORIAS = [
  {
    slug: 'plataforma-articulada',
    nombre: 'Plataforma articulada',
    descripcion: 'Acceso a zonas de difícil alcance con brazo articulado',
    imagen: '/articulada.png',
    icono: 'articulada',
  },
  {
    slug: 'plataforma-de-tijera',
    nombre: 'Plataforma de tijera',
    descripcion: 'Elevación vertical para trabajo en interiores y exteriores',
    imagen: '/tijera.png',
    icono: 'tijera',
  },
  {
    slug: 'manipulador-telescopico',
    nombre: 'Manipulador telescópico',
 descripcion: 'Carga y colocación de materiales a gran altura. Ideales para montaje de estructuras, suministro de materiales en obra y maniobras de carga y descarga pesada en terrenos irregulares en obra o industria.',
    imagen: '/manipulador.png',
    icono: 'manipulador',
  },
  {
    slug: 'retroexcavadora',
    nombre: 'Retroexcavadora',
    descripcion: 'Excavación, carga y movimiento de tierra',
    imagen: '/retro.png',
    icono: 'retro',
  },
  {
    slug: 'camion-plana',
    nombre: 'Camión plana',
    descripcion: 'Traslado de maquinaria y carga pesada',
   imagen: '/equipos/plana-10m.png',
    icono: 'plana',
  },
]

export const EQUIPOS = {
  /* ─── ARTICULADAS ─── */
  'plataforma-articulada': [
    {
      id: 'genie-z45-25',
      marca: 'Genie',
      modelo: 'Z-45/25 J RT',
      imagen: '/equipos/genie-z45-25.png',
      specs: [
        { label: 'Altura de trabajo', valor: '16.05 m' },
        { label: 'Altura de plataforma', valor: '14.07 m' },
        { label: 'Capacidad', valor: '227 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'genie-z62-40',
      marca: 'Genie',
      modelo: 'Z-62/40',
      imagen: '/equipos/genie-z62-40.png',
      specs: [
        { label: 'Altura de trabajo', valor: '20.87 m' },
        { label: 'Altura de plataforma', valor: '18.87 m' },
        { label: 'Capacidad', valor: '227 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'zoomlion-za14j',
      marca: 'Zoomlion',
      modelo: 'ZA14J',
      imagen: '/equipos/zoomlion-za14j.png',
      specs: [
        { label: 'Altura de trabajo', valor: '15.80 m' },
        { label: 'Altura de plataforma', valor: '13.80 m' },
        { label: 'Capacidad', valor: '300 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'zoomlion-za14ac-li',
      marca: 'Zoomlion',
      modelo: 'ZA14AC-Li',
      imagen: '/equipos/zoomlion-za14ac-li.png',
      specs: [
        { label: 'Altura de trabajo', valor: '15.80 m' },
        { label: 'Altura de plataforma', valor: '13.80 m' },
        { label: 'Capacidad', valor: '230 kg' },
        { label: 'Motor', valor: 'Eléctrico (Litio)' },
      ],
    },
    {
      id: 'zoomlion-za20j',
      marca: 'Zoomlion',
      modelo: 'ZA20J',
      imagen: '/equipos/zoomlion-za20j.png',
      specs: [
        { label: 'Altura de trabajo', valor: '21.38 m' },
        { label: 'Altura de plataforma', valor: '19.38 m' },
        { label: 'Capacidad', valor: '250 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'jlg-800aj',
      marca: 'JLG',
      modelo: '800AJ',
      imagen: '/equipos/jlg-800aj.png',
      specs: [
        { label: 'Altura de trabajo', valor: '26.38 m' },
        { label: 'Altura de plataforma', valor: '24.38 m' },
        { label: 'Capacidad', valor: '227 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
  ],

  /* ─── TIJERAS ─── */
  'plataforma-de-tijera': [
    {
      id: 'genie-gs1930',
      marca: 'Genie',
      modelo: 'GS-1930',
      imagen: '/equipos/genie-gs1930.png',
      specs: [
        { label: 'Altura de trabajo', valor: '7.79 m' },
        { label: 'Altura de plataforma', valor: '5.79 m' },
        { label: 'Capacidad', valor: '227 kg' },
        { label: 'Motor', valor: 'Eléctrico' },
      ],
    },
    {
      id: 'genie-gs2632',
      marca: 'Genie',
      modelo: 'GS-2632',
      imagen: '/equipos/genie-gs2632.png',
      specs: [
        { label: 'Altura de trabajo', valor: '9.92 m' },
        { label: 'Altura de plataforma', valor: '7.92 m' },
        { label: 'Capacidad', valor: '227 kg' },
        { label: 'Motor', valor: 'Eléctrico' },
      ],
    },
    {
      id: 'genie-gs3246',
      marca: 'Genie',
      modelo: 'GS-3246',
      imagen: '/equipos/genie-gs3246.png',
      specs: [
        { label: 'Altura de trabajo', valor: '11.75 m' },
        { label: 'Altura de plataforma', valor: '9.75 m' },
        { label: 'Capacidad', valor: '227 kg' },
        { label: 'Motor', valor: 'Eléctrico' },
      ],
    },
    {
      id: 'zoomlion-zs0808ac-li',
      marca: 'Zoomlion',
      modelo: 'ZS0808AC-Li',
      imagen: '/equipos/zoomlion-zs0808ac-li.png',
      specs: [
        { label: 'Altura de trabajo', valor: '10.00 m' },
        { label: 'Altura de plataforma', valor: '8.00 m' },
        { label: 'Capacidad', valor: '230 kg' },
        { label: 'Motor', valor: 'Eléctrico (Litio)' },
      ],
    },
    {
      id: 'zoomlion-zs1012ac-li',
      marca: 'Zoomlion',
      modelo: 'ZS1012AC-Li',
      imagen: '/equipos/zoomlion-zs1012ac-li.png',
      specs: [
        { label: 'Altura de trabajo', valor: '11.80 m' },
        { label: 'Altura de plataforma', valor: '9.80 m' },
        { label: 'Capacidad', valor: '350 kg' },
        { label: 'Motor', valor: 'Eléctrico (Litio)' },
      ],
    },
    {
      id: 'zoomlion-zs1212ac-li',
      marca: 'Zoomlion',
      modelo: 'ZS1212AC-Li',
      imagen: '/equipos/zoomlion-zs1212ac-li.png',
      specs: [
        { label: 'Altura de trabajo', valor: '13.80 m' },
        { label: 'Altura de plataforma', valor: '11.80 m' },
        { label: 'Capacidad', valor: '350 kg' },
        { label: 'Motor', valor: 'Eléctrico (Litio)' },
      ],
    },
  ],

  /* ─── MANIPULADORES ─── */
  'manipulador-telescopico': [
    {
      id: 'jcb-512-56',
      marca: 'JCB',
      modelo: '512-56',
      imagen: '/equipos/jcb-512-56.png',
      specs: [
        { label: 'Altura de elevación', valor: '17.07 m' },
        { label: 'Alcance horizontal', valor: '12.80 m' },
        { label: 'Capacidad máxima', valor: '5,444 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'genie-gth1056',
      marca: 'Genie',
      modelo: 'GTH-1056',
      imagen: '/equipos/genie-gth1056.png',
      specs: [
        { label: 'Altura de elevación', valor: '17.25 m' },
        { label: 'Alcance horizontal', valor: '12.80 m' },
        { label: 'Capacidad máxima', valor: '4,536 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'dieci-icarus-4017',
      marca: 'Dieci',
      modelo: 'Icarus 40.17',
      imagen: '/equipos/dieci-icarus-4017.png',
      specs: [
        { label: 'Altura de elevación', valor: '16.90 m' },
        { label: 'Alcance horizontal', valor: '13.40 m' },
        { label: 'Capacidad máxima', valor: '4,000 kg' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
  ],

  /* ─── RETROEXCAVADORAS ─── */
  'retroexcavadora': [
    {
      id: 'cat-420',
      marca: 'CAT',
      modelo: '420',
      imagen: '/equipos/cat-420.png',
      specs: [
        { label: 'Profundidad de excavación', valor: '4.35 m' },
        { label: 'Alcance de excavación', valor: '5.65 m' },
        { label: 'Capacidad del cucharón', valor: '1.0 m³' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'cat-416',
      marca: 'CAT',
      modelo: '416',
      imagen: '/equipos/cat-416.png',
      specs: [
        { label: 'Profundidad de excavación', valor: '4.27 m' },
        { label: 'Alcance de excavación', valor: '5.47 m' },
        { label: 'Capacidad del cucharón', valor: '0.9 m³' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
    {
      id: 'jcb-3cx',
      marca: 'JCB',
      modelo: '3CX',
      imagen: '/equipos/jcb-3cx.png',
      specs: [
        { label: 'Profundidad de excavación', valor: '4.67 m' },
        { label: 'Alcance de excavación', valor: '6.12 m' },
        { label: 'Capacidad del cucharón', valor: '1.0 m³' },
        { label: 'Combustible', valor: 'Diésel' },
      ],
    },
  ],

  /* ─── CAMIÓN PLANA ─── */
  'camion-plana': [
    {
      id: 'plana-10m',
      marca: 'NB Logística',
      modelo: 'Plana 10 m',
   imagen: '/equipos/plana-10m.png',
      specs: [
        { label: 'Largo de plataforma', valor: '10 m' },
        { label: 'Capacidad de carga', valor: '20 ton' },
        { label: 'Servicio', valor: 'Traslado de maquinaria' },
        { label: 'Cobertura', valor: 'Península de Yucatán' },
      ],
    },
    {
      id: 'plana-12m',
      marca: 'NB Logística',
      modelo: 'Plana 12 m',
     imagen: '/equipos/plana-12m.png',
      specs: [
        { label: 'Largo de plataforma', valor: '12 m' },
        { label: 'Capacidad de carga', valor: '20 ton' },
        { label: 'Servicio', valor: 'Traslado de maquinaria' },
        { label: 'Cobertura', valor: 'Península de Yucatán' },
      ],
    },
  ],
}

export function linkWhatsApp(modelo) {
  const txt = encodeURIComponent(
    `Hola NB Logística, me interesa solicitar una cotización del equipo: ${modelo}`
  )
  return `https://wa.me/${TEL_WA}?text=${txt}`
}