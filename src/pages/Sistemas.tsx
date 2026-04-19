import { PageSEO } from "@/components/layout/PageSEO";
import {
  Boxes,
  ChartBar,
  Check,
  MapPinned,
  MonitorCheck,
  Plug,
  ServerCog,
  Truck,
} from "lucide-react";
import { colors } from "../utils/colors";
import tdc from "@/assets/companies/tdc.webp";

const platforms = [
  {
    eyebrow: "TMS · Gestión de transporte",
    name: "LogeX Vertex",
    icon: <Truck size={22} />,
    description:
      "Planificación, ejecución y seguimiento de operaciones de transporte y distribución a nivel nacional.",
    features: [
      "Planificación de rutas",
      "Seguimiento GPS",
      "Gestión de flota",
      "Monitoreo en tiempo real",
    ],
    image: "/vertex.png",
    imageAlt: "LogeX Vertex — gestión de transporte",
  },
  {
    eyebrow: "WMS · Gestión de almacenes",
    name: "LogeX Axis",
    icon: <Boxes size={22} />,
    description:
      "Control de inventarios y movimientos de mercancía dentro de los centros de distribución, con trazabilidad end-to-end.",
    features: [
      "Control de inventarios",
      "Gestión de movimientos",
      "Trazabilidad completa",
      "Operación multi-centro",
    ],
    image: "/axis.png",
    imageAlt: "LogeX Axis — gestión de almacenes",
  },
  {
    eyebrow: "Monitoreo operativo",
    name: "Torre de Control",
    icon: <MonitorCheck size={22} />,
    description:
      "Supervisión de la operación en tiempo real con paneles, indicadores y alertas ante contingencias.",
    features: [
      "Paneles operativos",
      "Indicadores en vivo",
      "Alertas y notificaciones",
      "Respuesta ante contingencias",
    ],
    image: tdc,
    imageAlt: "Torre de Control — monitoreo operativo",
  },
];

const capabilities = [
  {
    icon: <Boxes size={22} />,
    title: "Gestión de almacenes",
    description:
      "Control de almacenamiento, inventario y movimiento de mercancía dentro de la operación.",
  },
  {
    icon: <Truck size={22} />,
    title: "Gestión de transporte",
    description:
      "Planificación, ejecución y seguimiento de transporte y distribución nacional.",
  },
  {
    icon: <MapPinned size={22} />,
    title: "Monitoreo GPS",
    description:
      "Rastreo y visibilidad de rutas para apoyar decisiones operativas en tiempo real.",
  },
  {
    icon: <ChartBar size={22} />,
    title: "Indicadores y control",
    description:
      "Paneles de información para supervisar procesos, entregas e incidencias.",
  },
];

const Sistemas = () => {
  return (
    <div className="overflow-x-hidden">
      <PageSEO
        title="Sistemas | Plataformas de Gestión Logística"
        description="Ecosistema de herramientas tecnológicas para almacenes, transporte, monitoreo GPS y control operativo: LogeX Vertex, Axis, LMS, GPS y más."
        path="/sistemas"
      />
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/sistemas-hero.webp"
          alt="Sistemas internos LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[520px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <ServerCog size={18} />
              Desarrollo de Software a la medida
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Tecnología avanzada para el control de sus operaciones logísticas
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
            Diseñamos, implementamos y operamos nuestras propias plataformas 
            tecnológicas, validadas en campo, para integrar y optimizar almacenes, 
            transporte, trazabilidad y flujo de información.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Ecosistema tecnológico
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Tecnología al servicio de la ejecución operativa
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
            Facilitamos la gestión de operaciones exigentes mediante información 
            ordenada y accionable, que permite anticiparse a problemas y responder con rapidez.
            </p>
            <img
              src="/vertex.png"
              alt="Panel de sistemas LogeX"
              className="mt-8 max-h-[300px] w-full rounded-lg object-cover shadow-sm"
              loading="lazy"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-lg border bg-white p-5 shadow-sm"
              >
                <span
                  className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {capability.icon}
                </span>
                <h3 className="font-semibold" style={{ color: colors.navy }}>
                  {capability.title}
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Plataformas
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Soluciones orientadas al cliente
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
            Un conjunto de plataformas que soportan 
            distintas capas de la operación, desde transporte y almacenes 
            hasta monitoreo en tiempo real.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {platforms.map((platform) => (
              <article
                key={platform.name}
                className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={platform.image}
                  alt={platform.imageAlt}
                  className="h-48 w-full border-b object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: colors.logex }}
                  >
                    {platform.eyebrow}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className="inline-flex size-11 items-center justify-center rounded-lg text-white shadow-sm"
                      style={{ background: colors.logex }}
                    >
                      {platform.icon}
                    </span>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: colors.navy }}
                    >
                      {platform.name}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-gray-600">
                    {platform.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {platform.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0"
                          style={{ color: colors.logex }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-lg border bg-white p-5 shadow-sm">
            <span
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50"
              style={{ color: colors.logex }}
            >
              <Plug size={20} />
            </span>
            <p className="leading-7 text-gray-600">
              <span
                className="font-semibold"
                style={{ color: colors.navy }}
              >
                Integración con los sistemas del cliente.
              </span>{" "}
              Nuestras plataformas se conectan con los ERPs y WMS de cada
              cliente a través de <strong>EDI</strong> y <strong>APIs</strong>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sistemas;
