import {
  Boxes,
  ChartBar,
  MapPinned,
  MonitorCheck,
  ServerCog,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

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

const internalSystems = [
  "LogeX Vertex",
  "LogeX Axis",
  "LogeX LMS",
  "LogeX CGI",
  "LogeX SAR",
  "LogeX GPS",
  "LogeX SAT",
  "LogeX Compras",
  "LogeX Onix",
  "LogeX SGE",
  "LogeX Portal",
  "LogeX Monitoreo",
];

const Sistemas = () => {
  return (
    <div className="overflow-x-hidden">
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
              Sistemas internos
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Tecnología para controlar la operación logística
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              En LogeX utilizamos herramientas propias y plataformas internas
              para optimizar almacenes, transporte, trazabilidad e información
              operativa.
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
              Herramientas diseñadas para operar mejor
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Nuestros sistemas apoyan la gestión diaria de operaciones
              complejas y de gran escala. La información se organiza para dar
              visibilidad, prevenir incidencias y responder con mayor rapidez.
            </p>
            <img
              src="/sistemas-panel.webp"
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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Plataformas
            </p>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: colors.navy }}
            >
              Sistemas LogeX
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Un ecosistema de herramientas que acompaña la gestión logística,
              desde almacenes e inventarios hasta transporte, monitoreo y
              control operativo.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {internalSystems.map((system) => (
                <div
                  key={system}
                  className="rounded-lg border bg-gray-50 px-3 py-4 text-center text-sm font-semibold text-gray-700"
                >
                  {system}
                </div>
              ))}
            </div>
          </div>

          <img
            src="/sistemas-operacion.webp"
            alt="Operación tecnológica LogeX"
            className="max-h-[440px] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-start">
              <div className="flex items-center gap-4">
                <span
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  <MonitorCheck size={24} />
                </span>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Torre de control
                </h2>
              </div>
              <div>
                <p className="leading-8 text-gray-600">
                  Extraemos, transformamos y organizamos información logística
                  para configurar paneles e indicadores que supervisan la
                  operación en tiempo real, ayudan a prevenir incidencias y
                  permiten reaccionar ante contingencias operativas.
                </p>
                <Link
                  to="/contacto"
                  className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
                >
                  <ShieldCheck size={18} />
                  Solicitar información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sistemas;
