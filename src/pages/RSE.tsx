import { motion } from "motion/react";

const RSE = () => {
  return (
    <div className="pt-16">
      {/* Sección Principal */}
      <div className="bg-primary/5 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Responsabilidad Social Empresarial
          </h1>
          <p className="text-xl text-gray-600">
            En LogeX, nos comprometemos con la sostenibilidad y el desarrollo
            comunitario, promoviendo prácticas responsables que contribuyen al
            bienestar social y ambiental.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0"
        >
          <img
            src="/leaf.png"
            alt="Hoja verde"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Sección de Compromisos */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Nuestro Compromiso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Compromiso Ambiental */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Preservación del Medio Ambiente
              </h3>
              <ul className="space-y-4">
                {[
                  "Reducción de emisiones de CO2 en nuestras operaciones.",
                  "Implementación de energías renovables.",
                  "Gestión responsable de residuos.",
                  "Protección de la biodiversidad en la Reserva Biológica El Nogal.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    <p className="text-gray-600">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Impacto Social */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Desarrollo Comunitario
              </h3>
              <ul className="space-y-4">
                {[
                  "Programas de desarrollo comunitario.",
                  "Apoyo a la educación local.",
                  "Fomento del empleo en comunidades cercanas.",
                  "Promoción de prácticas de turismo sostenible en Yunguilla.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    <p className="text-gray-600">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSE;
