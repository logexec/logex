import {
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Mail,
  MapPin,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const benefits = [
  {
    icon: <Briefcase size={24} />,
    title: "Trabajo con propósito",
    description:
      "Participa en operaciones que conectan almacenamiento, transporte, tecnología y servicio al cliente.",
  },
  {
    icon: <Users size={24} />,
    title: "Equipos coordinados",
    description:
      "Buscamos personas responsables, colaborativas y orientadas a cumplir procesos con calidad.",
  },
  {
    icon: <Clock3 size={24} />,
    title: "Crecimiento estable",
    description:
      "Valoramos la constancia, el aprendizaje y la capacidad de adaptarse a operaciones dinámicas.",
  },
];

const requirements = [
  "Documentación personal actualizada y disponibilidad para el proceso de selección.",
  "Experiencia o formación relacionada con el área a la que deseas postular.",
  "Responsabilidad, puntualidad y compromiso con el trabajo bien ejecutado.",
  "Apertura para cumplir procesos internos, inducción y estándares de seguridad.",
];

const steps = [
  {
    title: "Envía tus datos",
    description:
      "Cuéntanos tu área de interés, experiencia, ciudad de residencia y datos de contacto.",
  },
  {
    title: "Revisamos tu perfil",
    description:
      "Validamos tu información según las necesidades actuales de nuestras áreas operativas y administrativas.",
  },
  {
    title: "Coordinamos el proceso",
    description:
      "Si tu perfil se ajusta a una vacante, avanzamos con entrevistas, documentación e inducción.",
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
              <Briefcase size={18} />
              Trabaja con nosotros
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Construye tu camino en LogeX
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100">
              Buscamos talento para áreas operativas, administrativas,
              logísticas y de soporte. Si quieres formar parte de una operación
              seria, ordenada y en crecimiento, queremos conocer tu perfil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:soporte@logex.ec?subject=Postulación laboral - [Tu nombre]"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
              >
                <Mail size={18} />
                Enviar postulación
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
              { value: "Operación", label: "logística y almacenes" },
              { value: "Soporte", label: "áreas administrativas" },
              { value: "Servicio", label: "clientes y procesos" },
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
              Talento para distintas áreas
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Buscamos personas que sumen
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Recibimos perfiles para distintas áreas de LogeX. Más que llenar
              una vacante, nos interesa conocer personas responsables, claras en
              su comunicación y comprometidas con el servicio.
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
              principal de tu perfil para acelerar la revisión.
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
                Cómo postular
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
                  Área de interés, experiencia y disponibilidad.
                </li>
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 shrink-0"
                    size={20}
                    color={colors.logex}
                  />
                  Hoja de vida o resumen profesional actualizado.
                </li>
              </ul>
              <a
                href="mailto:soporte@logex.ec?subject=Postulación laboral - [Tu nombre]"
                className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
              >
                <Mail size={18} />
                Enviar información
              </a>
              <p className="mt-4 text-center text-sm text-gray-500">
                Usa el asunto: Postulación laboral - [Tu nombre]
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
