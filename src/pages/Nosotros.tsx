import {
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const highlights = [
  {
    icon: <Boxes size={22} />,
    title: "Valor agregado",
    description:
      "Administramos y optimizamos cadenas de abastecimiento con soluciones personalizadas y eficientes.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Eficiencia segura",
    description:
      "Almacenamos y transportamos productos con procesos orientados a seguridad, calidad y control.",
  },
];

const stats = [
  {
    value: "+55,000 m2",
    label: "superficie de almacenamiento administrada",
  },
  {
    value: "650",
    label: "vehículos en ruta en todo el país",
  },
  {
    value: "1,300",
    label: "colaboradores directos en nómina",
  },
];

const standards = [
  "Soluciones logísticas y tecnológicas a medida.",
  "Administración de cadenas de abastecimiento para grandes empresas.",
  "Procesos operativos enfocados en eficiencia y trazabilidad.",
  "Altos estándares éticos, operativos y comerciales.",
];

const Nosotros = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/nosotros-hero.webp"
          alt="Equipo y operación logística LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[520px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <BadgeCheck size={18} />
              Nosotros
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Experiencia comprobada en logística
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              LogeX es una empresa especializada en servicios logísticos en
              Ecuador. Administramos y agregamos valor a las cadenas de
              abastecimiento de nuestros clientes con soluciones a medida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Trayectoria
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Especialización en operaciones de gran escala
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Con más de 20 años de experiencia en el Ecuador, nos hemos
              consolidado como un aliado logístico para grandes empresas.
              Trabajamos con procesos, tecnología y equipos especializados para
              almacenar y transportar productos de forma eficiente y segura.
            </p>

            <div className="mt-8 grid gap-4">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm"
                >
                  <span
                    className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-red-50"
                    style={{ color: colors.logex }}
                  >
                    {highlight.icon}
                  </span>
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: colors.navy }}
                    >
                      {highlight.title}
                    </h3>
                    <p className="mt-1 leading-7 text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <img
            src="/nosotros-operacion.webp"
            alt="Operación logística LogeX"
            className="h-full max-h-[520px] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.value}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <p
                  className="text-3xl font-bold"
                  style={{ color: colors.navy }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 leading-7 text-gray-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:px-8">
          <img
            src="/nosotros-logistica.webp"
            alt="Logística LogeX"
            className="max-h-[420px] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />

          <div>
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Cómo trabajamos
            </p>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: colors.navy }}
            >
              Estándares claros para operar mejor
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Nuestra propuesta combina logística, tecnología y gestión
              operativa para convertir los desafíos de abastecimiento en
              procesos más eficientes y controlados.
            </p>

            <div className="mt-7 grid gap-3">
              {standards.map((standard) => (
                <div key={standard} className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={20}
                    color={colors.green}
                  />
                  <p className="leading-7 text-gray-700">{standard}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/servicios"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
              >
                <Warehouse size={18} />
                Ver servicios
              </Link>
              <Link
                to="/contacto"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border bg-white px-5 text-base font-semibold text-gray-800 transition-colors hover:border-red-200"
              >
                <Users size={18} />
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-start">
              <div className="flex items-center gap-4">
                <span
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  <Truck size={24} />
                </span>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Cobertura
                </h2>
              </div>
              <p className="leading-8 text-gray-600">
                Nuestros servicios de logística y distribución están disponibles
                en todo el territorio de Ecuador, con una operación diseñada
                para brindar cobertura, trazabilidad y respuesta ante las
                necesidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
