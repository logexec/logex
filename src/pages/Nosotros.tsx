import { PageSEO } from "@/components/layout/PageSEO";
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
      "Vamos más allá del almacenamiento y el transporte: diseñamos soluciones que generan eficiencia, reducen costos operativos y dan visibilidad total a su cadena de abastecimiento.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Eficiencia segura",
    description:
      "Cada operación está respaldada por protocolos de seguridad, estándares de calidad auditables y sistemas de control que minimizan el riesgo operativo.",
  },
];

const stats = [
  {
    value: "+55,000 m2",
    label: "de superficie de almacenamiento bajo gestión",
  },
  {
    value: "650",
    label: "vehículos operando a nivel nacional",
  },
  {
    value: "1,300",
    label: "colaboradores directos",
  },
];

const standards = [
  "Compromiso con estándares éticos y operativos que generan confianza sostenida en el tiempo.",
  "Administración integral de cadenas de abastecimiento para corporaciones multinacionales.",
  "Procesos operativos con trazabilidad end-to-end y métricas de desempeño en tiempo real.",
  "Soluciones logísticas y tecnológicas diseñadas para la escala y complejidad de su operación.",
];

const Nosotros = () => {
  return (
    <div>
      <PageSEO
        title="Nosotros | Empresa Logística en Ecuador"
        description="Más de 20 años de experiencia en logística B2B. +55.000 m² de almacenamiento, 650 vehículos y 1.300 colaboradores gestionando cadenas de abastecimiento en Ecuador."
        path="/nosotros"
      />
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
              Operaciones logísticas robustas para empresas que requieren precisión y escala
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              Apoyamos a empresas exigentes en Ecuador a ejecutar sus operaciones
              logísticas con control, eficiencia y confiabilidad. Integramos
              soluciones a medida que optimizan toda la cadena de suministro.
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
              Experiencia comprobada en entornos logísticos exigentes
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Con más de 23 años de trayectoria en Ecuador, LogeX ha construido
              una capacidad operativa que pocas empresas logísticas de la región
              pueden igualar. Gestionamos operaciones de alta complejidad para
              corporaciones multinacionales con procesos robustos, tecnología
              propia y equipos especializados.
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
              Un modelo operativo diseñado para la exigencia corporativa
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Nuestra propuesta integra infraestructura, tecnología propia y
              gestión operativa especializada para convertir los desafíos de
              abastecimiento en ventajas competitivas medibles.
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
                Nuestros servicios de logística y distribución tienen alcance
                nacional, con una infraestructura diseñada para responder con
                agilidad ante las necesidades operativas de cada cliente, sin
                importar el volumen o la ubicación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
