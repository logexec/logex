import { CheckCircle2, Route, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const items = [
  "Levantamiento de necesidades operativas y puntos críticos.",
  "Diseño de procesos logísticos adaptados al cliente.",
  "Integración de almacenamiento, transporte e información.",
  "Seguimiento de mejoras para ganar eficiencia y visibilidad.",
];

const Consultoria = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/consultoria-hero.webp"
          alt="Consultoría logística LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[480px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <SlidersHorizontal size={18} />
              Consultoría logística
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Diseño operativo para cadenas de abastecimiento
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              Acompañamos la estructuración de soluciones logísticas a medida,
              conectando procesos, tecnología y operación para mejorar el flujo
              de productos e información.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:px-8">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Enfoque
            </p>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: colors.navy }}
            >
              Logística pensada para su operación
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Cada cliente tiene restricciones, volúmenes, tiempos y prioridades
              distintas. Por eso partimos de la operación real para definir una
              solución que pueda ejecutarse con control.
            </p>
            <Link
              to="/contacto"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Route size={18} />
              Conversar con LogeX
            </Link>
          </div>

          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-1 shrink-0"
                  size={22}
                  color={colors.green}
                />
                <p className="leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultoria;
