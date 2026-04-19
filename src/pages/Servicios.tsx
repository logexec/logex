import { PageSEO } from "@/components/layout/PageSEO";
import {
  Apple,
  ChartBar,
  ClipboardList,
  Construction,
  Database,
  Factory,
  FileBarChart,
  FileSignature,
  FlaskConical,
  Globe,
  LineChart,
  Lock,
  MonitorCheck,
  Package,
  Plug,
  Rocket,
  Route,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Truck,
  UtensilsCrossed,
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

const industries = [
  { icon: <ShoppingBag size={25} />, name: "Consumo masivo" },
  { icon: <UtensilsCrossed size={25} />, name: "Food & Beverage" },
  { icon: <Factory size={25} />, name: "Sector Industrial" },
  { icon: <Globe size={25} />, name: "E-commerce" },
  { icon: <Construction size={25} />, name: "Construcción" },
];

const specializedCargo = [
  {
    icon: <Apple size={22} />,
    title: "Alimentos",
    description:
      "Manejo con estándares de inocuidad y condiciones de almacenamiento según tipo de producto.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Maeriales Químicos Peligrosos",
    description:
      "Operación bajo normativa INEN 2266, con personal capacitado y áreas segregadas para mercancía peligrosa.",
  },
  {
    icon: <Lock size={22} />,
    title: "Carga de alto valor",
    description:
      "Protocolos de seguridad reforzados, custodia y trazabilidad completa en todo el ciclo logístico.",
  },
];

const integrations = [
  {
    icon: <Plug size={22} />,
    title: "EDI estándar",
    description:
      "Intercambio electrónico de datos con los formatos más utilizados en cadenas de suministro.",
  },
  {
    icon: <Database size={22} />,
    title: "Integración con ERPs y WMS",
    description:
      "Conexión con los sistemas del cliente mediante APIs e interfaces a medida.",
  },
  {
    icon: <LineChart size={22} />,
    title: "Dashboards en vivo",
    description:
      "Paneles operativos con indicadores en tiempo real para supervisión y toma de decisiones.",
  },
  {
    icon: <FileBarChart size={22} />,
    title: "Reportes a medida",
    description:
      "Reportería configurada según los KPIs y periodicidad que requiera cada operación.",
  },
];

const onboardingSteps = [
  {
    step: "01",
    icon: <FileSignature size={22} />,
    title: "NDA + RFI",
    duration: "1 semana",
    description:
      "Firmamos un acuerdo de confidencialidad y recopilamos la información necesaria para entender su operación.",
  },
  {
    step: "02",
    icon: <ClipboardList size={22} />,
    title: "Propuesta",
    duration: "2 semanas",
    description:
      "Diseñamos una propuesta técnica y comercial alineada con los volúmenes, servicios y niveles de servicio requeridos.",
  },
  {
    step: "03",
    icon: <Rocket size={22} />,
    title: "Implementación",
    duration: "Personalizada",
    description:
      "Planificamos e implementamos la operación con un cronograma adaptado a la complejidad y alcance del proyecto.",
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
          src="/cngy.webp"
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Industrias atendidas
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Experiencia que respalda múltiples industrias
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
            Trabajamos con clientes de distintas industrias, manteniendo altos estándares de servicio.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="flex flex-col items-start rounded-lg border bg-white p-5 shadow-sm"
              >
                <span
                  className="mb-3 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {industry.icon}
                </span>
                <h3
                  className="font-semibold"
                  style={{ color: colors.navy }}
                >
                  {industry.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Mercancía especializada
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Capacidad para manejo de mercancías con requisitos especiales
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Contamos con infraestructura, protocolos y personal capacitado
              para manejar mercancía con requerimientos particulares.
            </p>
          </div>
          <img
            src="/quimicos.webp"
            alt="Manejo de mercancía especializada LogeX"
            className="mt-10 max-h-80 w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {specializedCargo.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border bg-white p-5 shadow-sm"
              >
                <span
                  className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {item.icon}
                </span>
                <h3
                  className="font-semibold"
                  style={{ color: colors.navy }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {item.description}
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
              Integraciones y reportería
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Conectividad e integración para toma de decisiones
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
            Integramos nuestras plataformas con los sistemas del cliente para garantizar visibilidad en tiempo real y entrega de datos estructurados según sus necesidades.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border bg-white p-5 shadow-sm"
              >
                <span
                  className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {item.icon}
                </span>
                <h3
                  className="font-semibold"
                  style={{ color: colors.navy }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Cómo trabajamos
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Un proceso claro para nuevos clientes
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Desde el primer contacto hasta el arranque de operación, seguimos
              un proceso estructurado con tiempos definidos.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {onboardingSteps.map((step, i) => (
              <article
                key={step.step}
                className="relative overflow-hidden rounded-xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: colors.logex }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none text-[8rem] font-black leading-none opacity-10"
                  style={{ color: colors.logex }}
                >
                  {step.step}
                </span>
                <div className="relative flex items-center gap-4">
                  <span
                    className="inline-flex size-14 items-center justify-center rounded-lg text-white shadow-sm"
                    style={{ background: colors.logex }}
                  >
                    {step.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Paso {i + 1}
                    </p>
                    <p
                      className="mt-0.5 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: colors.logex }}
                    >
                      {step.duration}
                    </p>
                  </div>
                </div>
                <h3
                  className="relative mt-5 text-xl font-semibold"
                  style={{ color: colors.navy }}
                >
                  {step.title}
                </h3>
                <p className="relative mt-3 leading-7 text-gray-600">
                  {step.description}
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
            <p className="mt-4 text-sm italic text-gray-500">
              Niveles de servicio acordados contractualmente según industria y
              operación.
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
