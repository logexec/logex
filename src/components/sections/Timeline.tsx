import { motion } from "motion/react";
import { colors } from "../../utils/colors";

const milestones = [
  {
    year: "2003",
    title: "Fundación",
    description:
      "Nace LogeX con la primera operación de almacenamiento para Edesa en el sur de Quito.",
  },
  {
    year: "2004",
    title: "Primera operación integrada",
    description:
      "Arranca la primera operación combinada de almacenamiento y transporte con Mabe en Guayaquil.",
  },
  {
    year: "2005",
    title: "100 colaboradores",
    description:
      "El equipo crece hasta los 100 colaboradores directos en todo el país.",
  },
  {
    year: "2008",
    title: "Cobertura nacional",
    description:
      "LogeX extiende su operación logística a todo el territorio ecuatoriano.",
  },
  {
    year: "2010",
    title: "WMS propio",
    description:
      "Lanzamiento del sistema de gestión de almacenes desarrollado en casa, implementado en Mabe.",
  },
  {
    year: "2013",
    title: "Última milla",
    description:
      "Inicio de operaciones de distribución de última milla con SABMiller.",
  },
  {
    year: "2015",
    title: "TMS propio",
    description:
      "Lanzamiento del sistema de gestión de transporte desarrollado en casa, implementado en AVON.",
  },
  {
    year: "2018",
    title: "500 colaboradores",
    description:
      "La operación duplica su planta hasta alcanzar los 500 colaboradores directos.",
  },
  {
    year: "2023",
    title: "Centro de Monitoreo 24/7",
    description:
      "Puesta en marcha del centro de monitoreo operativo con cobertura permanente.",
  },
  {
    year: "2024",
    title: "Torre de Control + 1,000 colaboradores",
    description:
      "Inaugura la Torre de Control y el equipo supera los 1,000 colaboradores directos.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: colors.logex }}
          >
            Línea de tiempo
          </p>
          <h2
            className="mt-3 text-3xl font-bold sm:text-4xl"
            style={{ color: colors.navy }}
          >
            Hitos que marcan nuestra trayectoria
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
            De una primera operación de transporte en 2003 a una plataforma
            logística nacional al servicio de 25 multinacionales.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 lg:left-1/2 lg:-translate-x-1/2"
          />

          <ol className="space-y-10 lg:space-y-16">
            {milestones.map((milestone, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.li
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative grid gap-4 pl-16 lg:grid-cols-2 lg:gap-8 lg:pl-0"
                >
                  <span
                    aria-hidden
                    className="absolute left-4 top-2 flex size-5 items-center justify-center rounded-full border-4 border-white shadow-sm lg:left-1/2 lg:-translate-x-1/2"
                    style={{ backgroundColor: colors.logex }}
                  />

                  <div
                    className={`rounded-lg border bg-white p-6 shadow-sm lg:col-start-${
                      isRight ? "2" : "1"
                    } ${isRight ? "lg:ml-8" : "lg:mr-8 lg:text-right"}`}
                  >
                    <p
                      className="text-sm font-bold uppercase tracking-wide"
                      style={{ color: colors.logex }}
                    >
                      {milestone.year}
                    </p>
                    <h3
                      className="mt-1 text-xl font-bold"
                      style={{ color: colors.navy }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
