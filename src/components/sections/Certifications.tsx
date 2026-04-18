import { motion } from "motion/react";
import { colors } from "../../utils/colors";

const certifications = [
  {
    name: "BASC",
    description: "Comercio seguro · desde 2019",
    logo: "/imagenes/logo-BASC.png",
    pdf: "/certificaciones/basc-2025-2026.pdf",
  },
  {
    name: "ISO 9001",
    description: "Gestión de calidad (AENOR) · desde 2017",
    logo: "/imagenes/logo-ISO9001.png",
    pdf: "/certificaciones/iso9001-aenor-er0523.pdf",
  },
  {
    name: "IQNet",
    description: "Red internacional de certificación · desde 2017",
    logo: "/imagenes/logo-AENOR-IQNET.png",
    pdf: "/certificaciones/iqnet-es0523.pdf",
  },
  {
    name: "BPADT",
    description: "Buenas prácticas ARCSA · desde 2020",
    logo: "/imagenes/logo-BPADT.png",
    pdf: "/certificaciones/bpadt-arcsa-2024-2026.pdf",
  },
];

const Certifications = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: colors.navy }}
          >
            Certificaciones vigentes
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colors.gray }}
          >
            Operamos bajo estándares internacionales auditados.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex h-24 items-center justify-center">
                <img
                  src={cert.logo}
                  alt={`Certificación ${cert.name}`}
                  className="max-h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p
                className="mt-4 text-base font-semibold"
                style={{ color: colors.navy }}
              >
                {cert.name}
              </p>
              <p className="mt-1 text-center text-sm text-gray-500">
                {cert.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
