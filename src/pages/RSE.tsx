import { BookOpen, Leaf, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";
import { colors } from "../utils/colors";

const focusAreas = [
  {
    icon: <Leaf size={22} />,
    title: "Conservación",
    description:
      "Protección del bosque nublado y de la biodiversidad que habita en la Reserva Biológica El Nogal.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Educación ambiental",
    description:
      "Espacios de aprendizaje para promover conciencia sobre el cuidado del entorno natural.",
  },
  {
    icon: <Users size={22} />,
    title: "Comunidad",
    description:
      "Trabajo junto a comunidades locales de Yunguilla para impulsar prácticas responsables y sostenibles.",
  },
];

const RSE = () => {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/rse-hero.webp"
          alt="Reserva Biológica El Nogal"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-130 max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              <Leaf size={18} />
              Responsabilidad social
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Preservando la biodiversidad del bosque nublado
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
              La Reserva Biológica El Nogal, ubicada en la región de Yunguilla
              al noroccidente de Quito, es un espacio natural dedicado a la
              conservación de flora, fauna y ecosistemas de alto valor
              ambiental.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <img
              src="/rse-yunguilla.webp"
              alt="Bosque nublado en Yunguilla"
              className="h-full max-h-130 w-full rounded-lg object-cover shadow-sm"
              loading="lazy"
            />

            <div>
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: colors.logex }}
              >
                El Nogal
              </p>
              <h2
                className="mt-3 text-3xl font-bold sm:text-4xl"
                style={{ color: colors.navy }}
              >
                Conservación con propósito
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                Este ecosistema de bosque nublado es clave para el equilibrio
                ecológico de la zona y para la protección de especies que
                dependen de estos hábitats. Nuestra responsabilidad es cuidar
                este patrimonio natural con una visión de largo plazo.
              </p>

              <div className="mt-8 grid gap-4">
                {focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm"
                  >
                    <span
                      className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-red-50"
                      style={{ color: colors.logex }}
                    >
                      {area.icon}
                    </span>
                    <div>
                      <h3
                        className="font-semibold"
                        style={{ color: colors.navy }}
                      >
                        {area.title}
                      </h3>
                      <p className="mt-1 leading-7 text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
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
                  <ShieldCheck size={24} />
                </span>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Sostenibilidad
                </h2>
              </div>
              <p className="leading-8 text-gray-600">
                La gestión de la reserva se apoya en principios de
                sostenibilidad y colaboración comunitaria. A través de prácticas
                responsables, educación ambiental y actividades vinculadas al
                ecoturismo, buscamos aportar a la protección del entorno y al
                desarrollo local de Yunguilla.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSE;
