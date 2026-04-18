import { PageSEO } from "@/components/layout/PageSEO";
import {
  ChartBar,
  MonitorCheck,
  Package,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const mainServices = [
  {
    icon: <Package size={22} />,
    title: "Almacenamiento y gestión de inventarios",
    description:
      "Servicios de almacenamiento, control de inventario y manejo de operaciones logísticas de gran escala.",
  },
  {
    icon: <Truck size={22} />,
    title: "Transporte a nivel nacional",
    description:
      "Soluciones de transporte y distribución para movilizar productos con cobertura nacional.",
  },
  {
    icon: <SlidersHorizontal size={22} />,
    title: "Soluciones personalizadas",
    description:
      "Diseño de soluciones logísticas adaptadas a las necesidades y desafíos de cada cliente.",
  },
  {
    icon: <ChartBar size={22} />,
    title: "Optimización de la cadena de suministro",
    description:
      "Gestión eficiente de flujos de productos y materiales para mejorar la operación logística.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Seguimiento en tiempo real",
    description:
      "Visibilidad y control de las operaciones mediante tecnología de monitoreo y trazabilidad.",
  },
  {
    icon: <MonitorCheck size={22} />,
    title: "Torre de Control LogeX",
    description:
      "Paneles, indicadores y monitoreo operativo para prevenir incidencias y reaccionar ante contingencias.",
  },
];

const Servicios = () => {
  return (
    <div>
      <PageSEO
        title="Servicios Logísticos"
        description="Almacenamiento, gestión de inventarios, transporte nacional y seguimiento en tiempo real. Soluciones logísticas para operaciones complejas y de gran escala en Ecuador."
        path="/servicios"
      />
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/servicios-hero.webp"
          alt="Servicios logísticos LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-130 max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <Route size={18} />
              Servicios logísticos
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Soluciones para operaciones complejas y de gran escala
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              En LogeX manejamos almacenamiento, inventarios, transporte
              nacional y seguimiento operativo con procesos y tecnología para
              crear valor en la cadena de suministro.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: colors.logex }}
              >
                Qué hacemos
              </p>
              <h2
                className="mt-3 text-3xl font-bold sm:text-4xl"
                style={{ color: colors.navy }}
              >
                Servicios enfocados en eficiencia y control
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                Nuestro equipo administra operaciones logísticas con soluciones
                personalizadas, procesos definidos y herramientas de control
                para brindar visibilidad durante la operación.
              </p>
              <img
                src="/contenedor-tru.webp"
                alt="Transporte nacional LogeX"
                className="mt-8 max-h-75 w-full rounded-lg object-cover shadow-sm"
                loading="lazy"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {mainServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border bg-white p-5 shadow-sm"
                >
                  <span
                    className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                    style={{ color: colors.logex }}
                  >
                    {service.icon}
                  </span>
                  <h3 className="font-semibold" style={{ color: colors.navy }}>
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
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
              Aliado estratégico
            </p>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: colors.navy }}
            >
              Tecnología y operación conectadas
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Extraemos, transformamos y organizamos información logística para
              configurar paneles e indicadores que permitan supervisar las
              operaciones, prevenir incidencias y responder con agilidad ante
              contingencias.
            </p>
            <Link
              to="/contacto"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              Contactar a LogeX
            </Link>
          </div>

          <img
            src="/hero-banner.webp"
            alt="Operaciones logísticas LogeX"
            className="max-h-110 w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Servicios;
