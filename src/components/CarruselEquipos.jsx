import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const EQUIPOS = [
  {
    id: "camion-plana",
    nombre: "Camión plana",
    detalle: "Traslado de maquinaria",
    enlace: "/equipos/camion-plana",
    icono: (
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
  },
  {
    id: "retroexcavadora",
    nombre: "Retroexcavadora",
    detalle: "Excavación y carga",
    enlace: "/equipos/retroexcavadora",
    icono: (
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
  },
  {
    id: "manipulador",
    nombre: "Manipulador telescópico",
    detalle: "17 m de alcance, 4 ton",
    enlace: "/equipos/manipulador-telescopico",
    icono: (
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
  },
  {
    id: "tijera",
    nombre: "Plataforma de tijera",
    detalle: "Elevación vertical",
    enlace: "/equipos/plataforma-de-tijera",
    icono: (
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
  },
  {
    id: "articulada",
    nombre: "Plataforma articulada",
    detalle: "Acceso a zonas difíciles",
    enlace: "/equipos/plataforma-articulada",
    icono: (
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
  },
  {
    id: "servicios-mecanicos",
    nombre: "Servicios mecánicos",
    detalle: "Preventivo y correctivo",
    enlace: "#contacto",
    icono: (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <path d="M40 6a11 11 0 0 0-10.4 14.5L10 40.1a4.2 4.2 0 0 0 6 6l19.6-19.6A11 11 0 0 0 50 16.1l-6.5 6.5-5.1-5.1L44.9 11A11 11 0 0 0 40 6z" />
        <path d="M14 41.5h.02" />
      </svg>
    ),
  },
];

const TRIPLE = [...EQUIPOS, ...EQUIPOS, ...EQUIPOS];
const TOTAL = EQUIPOS.length;
const GAP = 24;

export default function CarruselEquipos() {
  const pista = useRef(null);
  const busy = useRef(false);

  const paso = useCallback(() => {
    const card = pista.current?.querySelector(".nbc-card");
    return card ? card.offsetWidth + GAP : 224;
  }, []);

  const bloqueW = useCallback(() => paso() * TOTAL, [paso]);

  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    el.scrollLeft = bloqueW();
  }, [bloqueW]);

  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    const comprobar = () => {
      if (busy.current) return;
      const bw = bloqueW();
      if (el.scrollLeft < bw * 0.25) {
        busy.current = true;
        el.scrollLeft += bw;
        busy.current = false;
      } else if (el.scrollLeft > bw * 1.75) {
        busy.current = true;
        el.scrollLeft -= bw;
        busy.current = false;
      }
    };
    el.addEventListener("scroll", comprobar, { passive: true });
    return () => el.removeEventListener("scroll", comprobar);
  }, [bloqueW]);

  const mover = (dir) => {
    pista.current?.scrollBy({ left: paso() * dir, behavior: "smooth" });
  };

  return (
    <section className="nbc" id="equipos">
      <style>{`
        .nbc {
          --nb-acento: #1B4FA0;
          --nb-tinta: #101418;
          --nb-gris: #6B7280;
          --nb-panel: #F1F2F4;
          --nb-linea: #D7DAE0;
          padding: 88px 20px 96px;
          background: #fff;
          font-family: inherit;
        }
        .nbc-wrap { max-width: 1200px; margin: 0 auto; }
        .nbc-eyebrow {
          font-size: 12px; letter-spacing: .22em; text-transform: uppercase;
          color: var(--nb-acento); font-weight: 700; margin: 0 0 10px;
        }
        .nbc-title {
          margin: 0 0 14px; color: var(--nb-tinta);
          font-size: clamp(30px, 5vw, 52px); line-height: 1.02;
          font-weight: 800; letter-spacing: -.02em; text-transform: uppercase;
        }
        .nbc-title span { color: var(--nb-acento); }
        .nbc-sub {
          margin: 0 0 40px; max-width: 620px;
          color: var(--nb-gris); font-size: 17px; line-height: 1.6;
        }
        .nbc-stage { position: relative; }
        .nbc-panel {
          background: var(--nb-panel);
          transform: skewX(-4deg);
          padding: 46px 0;
        }
        .nbc-panel-inner { transform: skewX(4deg); }
        .nbc-track {
          display: flex; gap: ${GAP}px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          padding: 8px 32px; margin: -8px 0;
          scrollbar-width: none;
        }
        .nbc-track::-webkit-scrollbar { display: none; }
        .nbc-card {
          flex: 0 0 auto; width: 200px;
          scroll-snap-align: center;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; text-decoration: none;
          background: none; border: 0; cursor: pointer;
          padding: 10px 6px 4px; color: inherit;
        }
        .nbc-icon {
          height: 84px; display: flex; align-items: flex-end;
          transition: transform .28s ease;
        }
        .nbc-icon svg {
          width: 78px; height: 60px;
          fill: none; stroke: var(--nb-tinta);
          stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;
          transition: stroke .28s ease;
        }
        .nbc-rule {
          width: 100%; height: 1px; background: var(--nb-linea);
          margin: 22px 0 14px; transition: background .28s ease;
        }
        .nbc-name {
          font-size: 14px; font-weight: 800; letter-spacing: .06em;
          text-transform: uppercase; color: var(--nb-tinta);
          transition: color .28s ease;
        }
        .nbc-detail {
          margin-top: 6px; font-size: 12.5px; letter-spacing: .04em;
          color: var(--nb-gris);
        }
        .nbc-card:hover .nbc-icon,
        .nbc-card:focus-visible .nbc-icon { transform: translateY(-14px); }
        .nbc-card:hover .nbc-icon svg,
        .nbc-card:focus-visible .nbc-icon svg { stroke: var(--nb-acento); }
        .nbc-card:hover .nbc-rule,
        .nbc-card:focus-visible .nbc-rule { background: var(--nb-acento); }
        .nbc-card:hover .nbc-name,
        .nbc-card:focus-visible .nbc-name { color: var(--nb-acento); }
        .nbc-card:focus-visible { outline: 2px solid var(--nb-acento); outline-offset: 6px; }
        .nbc-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 52px; height: 52px; border-radius: 50%;
          background: #fff; border: 1px solid var(--nb-linea);
          display: grid; place-items: center; cursor: pointer;
          box-shadow: 0 10px 26px rgba(16,20,24,.10);
          transition: background .2s ease, border-color .2s ease;
          z-index: 2;
        }
        .nbc-arrow:hover { background: var(--nb-acento); border-color: var(--nb-acento); }
        .nbc-arrow:hover svg { stroke: #fff; }
        .nbc-arrow svg {
          width: 18px; height: 18px; fill: none; stroke: var(--nb-tinta);
          stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
          transition: stroke .2s ease;
        }
        .nbc-arrow.izq { left: -14px; }
        .nbc-arrow.der { right: -14px; }
        @media (max-width: 860px) {
          .nbc { padding: 64px 16px 72px; }
          .nbc-panel { transform: none; padding: 34px 0; }
          .nbc-panel-inner { transform: none; }
          .nbc-track { padding: 8px 16px; gap: 16px; }
          .nbc-card { width: 168px; }
          .nbc-icon svg { width: 66px; height: 52px; }
          .nbc-arrow { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nbc-icon, .nbc-icon svg, .nbc-rule, .nbc-name { transition: none; }
          .nbc-card:hover .nbc-icon { transform: none; }
        }
      `}</style>

      <div className="nbc-wrap">
        <p className="nbc-eyebrow">Equipos</p>
        <h2 className="nbc-title">
          Nuestros <span>equipos</span>
        </h2>
        <p className="nbc-sub">
          Renta de maquinaria pesada y transporte de carga con equipo propio,
          operadores certificados y cobertura en toda la Península de Yucatán.
        </p>

        <div className="nbc-stage">
          <button
            className="nbc-arrow izq"
            onClick={() => mover(-1)}
            aria-label="Ver equipos anteriores"
            type="button"
          >
            <svg viewBox="0 0 24 24">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="nbc-panel">
            <div className="nbc-panel-inner">
              <div className="nbc-track" ref={pista}>
                {TRIPLE.map((eq, i) => (
                  <Link className="nbc-card" key={eq.id + '-' + i} to={eq.enlace}>
                    <span className="nbc-icon">{eq.icono}</span>
                    <span className="nbc-rule" />
                    <span className="nbc-name">{eq.nombre}</span>
                    <span className="nbc-detail">{eq.detalle}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            className="nbc-arrow der"
            onClick={() => mover(1)}
            aria-label="Ver más equipos"
            type="button"
          >
            <svg viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}