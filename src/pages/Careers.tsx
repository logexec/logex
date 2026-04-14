import {
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Mail,
  MapPin,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const benefits = [
  {
    icon: <Route size={24} />,
    title: "Operaciones planificadas",
    description:
      "Rutas coordinadas con procesos claros para que cada entrega tenga seguimiento y soporte operativo.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Carga con respaldo",
    description:
      "Trabajamos con protocolos de seguridad, trazabilidad y comunicación constante durante el servicio.",
  },
  {
    icon: <Clock3 size={24} />,
    title: "Relación de largo plazo",
    description:
      "Buscamos choferes confiables para construir una red estable en cobertura nacional.",
  },
];

const requirements = [
  "Licencia profesional vigente y documentación personal al día.",
  "Experiencia comprobable en conducción de transporte de carga.",
  "Compromiso con puntualidad, cuidado de la carga y comunicación en ruta.",
  "Disponibilidad para cumplir procesos de seguridad y validación LogeX.",
];

const steps = [
  {
    title: "Envía tus datos",
    description:
      "Cuéntanos tu ciudad base, experiencia conduciendo carga, tipo de licencia y disponibilidad.",
  },
  {
    title: "Validamos documentación",
    description:
      "Revisamos tu perfil, referencias y los documentos necesarios para activar el proceso.",
  },
  {
    title: "Coordinamos rutas",
    description:
      "Si tu perfil calza con nuestras operaciones, avanzamos con inducción y asignación de servicios.",
  },
];

const Careers = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/warehouse.jpg"
          alt="Operación logística LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/70" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-140 max-w-7xl content-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <Truck size={18} />
              Convocatoria para choferes
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Súmate como chofer de LogeX
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100">
              Esta página es únicamente para choferes profesionales que quieran
              operar con estándares de seguridad, trazabilidad y cumplimiento en
              Ecuador. El vehículo se asigna según la operación.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:soporte@logex.ec?subject=Transportista aliado - [Tu nombre]"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
              >
                <Mail size={18} />
                Postular como chofer
              </a>
              <Link
                to="/contacto"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 text-base font-semibold text-white transition-colors hover:bg-white/20"
              >
                Hablar con LogeX
              </Link>
            </div>
          </div>

          <div className="grid content-end gap-4 text-sm text-gray-100 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { value: "Cobertura", label: "rutas nacionales" },
              { value: "Carga", label: "operaciones coordinadas" },
              { value: "Soporte", label: "seguimiento en ruta" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              No es una bolsa de empleo general
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Buscamos aliados de transporte
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Si tienes experiencia movilizando carga, cuidas los tiempos de
              entrega y mantienes tu documentación al día, queremos conocer tu
              perfil profesional.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <span
                  className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {benefit.icon}
                </span>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.navy }}
                >
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Perfil requerido
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Lo que necesitamos validar
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Queremos que el primer contacto sea útil. Incluye la información
              principal de tu operación para acelerar la revisión.
            </p>
          </div>

          <div className="grid gap-4">
            {requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm"
              >
                <BadgeCheck
                  className="mt-1 shrink-0"
                  size={22}
                  color={colors.green}
                />
                <p className="text-gray-700">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: colors.logex }}
              >
                Proceso simple
              </p>
              <h2
                className="mt-3 text-3xl font-bold sm:text-4xl"
                style={{ color: colors.navy }}
              >
                Cómo convertirte en transportista aliado
              </h2>
              <div className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                      style={{ backgroundColor: colors.navy }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: colors.navy }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border bg-white p-8 shadow-sm">
              <ClipboardCheck size={36} color={colors.logex} />
              <h3
                className="mt-5 text-2xl font-bold"
                style={{ color: colors.navy }}
              >
                Incluye estos datos en tu postulación
              </h3>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <FileCheck2
                    className="mt-0.5 shrink-0"
                    size={20}
                    color={colors.logex}
                  />
                  Nombre, teléfono, correo y ciudad base.
                </li>
                <li className="flex gap-3">
                  <Truck
                    className="mt-0.5 shrink-0"
                    size={20}
                    color={colors.logex}
                  />
                  Tipo de licencia, experiencia y disponibilidad.
                </li>
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 shrink-0"
                    size={20}
                    color={colors.logex}
                  />
                  Rutas o provincias donde puedes operar.
                </li>
              </ul>
              <a
                href="mailto:soporte@logex.ec?subject=Transportista aliado - [Tu nombre]"
                className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
              >
                <Mail size={18} />
                Enviar información
              </a>
              <p className="mt-4 text-center text-sm text-gray-500">
                Usa el asunto: Transportista aliado - [Tu nombre]
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
