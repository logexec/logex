import { PageSEO } from "@/components/layout/PageSEO";
import { CalendarCheck, Mail, MessageSquare, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const helpOptions = [
  {
    icon: <MessageSquare size={22} />,
    title: "Escríbenos",
    description:
      "Para información sobre servicios, propuestas comerciales o soporte general.",
    to: "/contacto",
    cta: "Ir a contacto",
  },
  {
    icon: <CalendarCheck size={22} />,
    title: "Agenda una cita",
    description:
      "Coordina una reunión con nuestro equipo para revisar tus necesidades logísticas.",
    to: "/appointments",
    cta: "Agendar",
  },
  {
    icon: <Mail size={22} />,
    title: "Correo de soporte",
    description: "También puedes escribir directamente a soporte@logex.ec.",
    href: "mailto:soporte@logex.ec",
    cta: "Enviar correo",
  },
];

const Ayuda = () => {
  return (
    <div>
      <PageSEO
        title="Ayuda"
        description="Centro de ayuda de LogeX. Encuentra respuestas, canales de contacto y recursos para proveedores y clientes en Ecuador."
        path="/ayuda"
      />
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/ayuda-hero.webp"
          alt="Centro de ayuda LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[480px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <MessageSquare size={18} />
              Centro de ayuda
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Estamos para ayudarte
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              Encuentra el canal adecuado para solicitar información, coordinar
              una cita o contactar al equipo de soporte de LogeX.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {helpOptions.map((option) => {
            const content = (
              <>
                <span
                  className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                  style={{ color: colors.logex }}
                >
                  {option.icon}
                </span>
                <h2 className="text-xl font-semibold" style={{ color: colors.navy }}>
                  {option.title}
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  {option.description}
                </p>
                <span className="mt-5 inline-flex font-semibold text-red-600">
                  {option.cta}
                </span>
              </>
            );

            return option.to ? (
              <Link
                key={option.title}
                to={option.to}
                className="rounded-lg border bg-white p-6 shadow-sm transition-colors hover:border-red-200"
              >
                {content}
              </Link>
            ) : (
              <a
                key={option.title}
                href={option.href}
                className="rounded-lg border bg-white p-6 shadow-sm transition-colors hover:border-red-200"
              >
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50"
                style={{ color: colors.logex }}
              >
                <PhoneCall size={24} />
              </span>
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Atención directa
                </h2>
                <p className="mt-3 leading-8 text-gray-600">
                  Si no estás seguro de qué canal usar, completa el formulario
                  de contacto y nuestro equipo revisará tu solicitud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ayuda;
