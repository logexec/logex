import { ChartBar, MapPinned, MonitorCheck, ServerCog } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const capabilities = [
  {
    icon: <MonitorCheck size={22} />,
    title: "Torre de control",
    description:
      "Monitoreo operativo con paneles e indicadores para supervisar procesos logísticos.",
  },
  {
    icon: <MapPinned size={22} />,
    title: "Trazabilidad",
    description:
      "Seguimiento de rutas y operaciones para mejorar visibilidad y respuesta.",
  },
  {
    icon: <ChartBar size={22} />,
    title: "Información logística",
    description:
      "Datos organizados para apoyar decisiones y prevenir incidencias operativas.",
  },
];

const Tecnologia = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/sistemas-hero.webp"
          alt="Tecnología logística LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[480px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <ServerCog size={18} />
              Tecnología
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Tecnología aplicada a la operación logística
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              Utilizamos sistemas internos, trazabilidad e información operativa
              para mejorar la gestión de almacenes, transporte y control.
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
              Control y visibilidad
            </p>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: colors.navy }}
            >
              Operaciones conectadas
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              La tecnología permite integrar información, monitorear procesos y
              responder con mayor agilidad ante las necesidades de cada
              operación.
            </p>
            <Link
              to="/sistemas"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              Ver sistemas
            </Link>
          </div>

          <div className="grid gap-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm"
              >
                <span
                  className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {capability.icon}
                </span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.navy }}>
                    {capability.title}
                  </h3>
                  <p className="mt-1 leading-7 text-gray-600">
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tecnologia;
