import { motion } from "motion/react";
import { colors } from "../../utils/colors";

const industries = [
  { name: "Consumo masivo", highlighted: true },
  { name: "Food & Beverage", highlighted: true },
  { name: "Retail", highlighted: false },
  { name: "E-commerce", highlighted: false },
  { name: "Industrial", highlighted: false },
  { name: "Construcción", highlighted: false },
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: colors.navy }}
          >
            Industrias que atendemos
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colors.gray }}
          >
            Experiencia comprobada en sectores con alta exigencia operativa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, index) => (
            <motion.span
              key={industry.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`inline-flex items-center rounded-full border px-5 py-2.5 text-base font-semibold shadow-sm ${
                industry.highlighted
                  ? "border-red-200 bg-white text-gray-900"
                  : "border-gray-200 bg-white text-gray-700"
              }`}
              style={
                industry.highlighted
                  ? { borderColor: colors.logex, color: colors.navy }
                  : undefined
              }
            >
              {industry.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
