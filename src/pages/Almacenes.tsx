import { Boxes, ClipboardCheck, PackageCheck, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const points = [
  {
    icon: <Warehouse size={22} />,
    title: "Almacenamiento",
    description:
      "Soluciones de almacenaje eficientes y seguras para operaciones logísticas de gran escala.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Gestión de inventarios",
    description:
      "Control de inventario y flujo de productos para mantener una operación ordenada y trazable.",
  },
  {
    icon: <PackageCheck size={22} />,
    title: "Manejo de mercancía",
    description:
      "Procesos de recepción, movimiento y despacho orientados a eficiencia y cuidado del producto.",
  },
];

const Almacenes = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/servicios-hero.webp"
          alt="Gestión de almacenes LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[480px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <Warehouse size={18} />
              Gestión de almacenes
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Almacenamiento y control de inventarios
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              Administramos bodegas, inventarios y movimiento de mercancía con
              procesos diseñados para aportar eficiencia, seguridad y visibilidad
              a la cadena de abastecimiento.
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
              Operación
            </p>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: colors.navy }}
            >
              Inventario bajo control
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              En LogeX brindamos servicios de almacenamiento y gestión de
              inventarios para empresas que requieren procesos confiables,
              trazabilidad y capacidad operativa.
            </p>
            <Link
              to="/contacto"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              <ClipboardCheck size={18} />
              Solicitar información
            </Link>
          </div>

          <div className="grid gap-4">
            {points.map((point) => (
              <article
                key={point.title}
                className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm"
              >
                <span
                  className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {point.icon}
                </span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.navy }}>
                    {point.title}
                  </h3>
                  <p className="mt-1 leading-7 text-gray-600">
                    {point.description}
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

export default Almacenes;
