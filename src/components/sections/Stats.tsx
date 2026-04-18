import { Globe2, Layers, Package, Warehouse } from "lucide-react";
import { motion } from "motion/react";
import { colors } from "../../utils/colors";

const stats = [
  {
    icon: <Package size={28} />,
    value: "260,000",
    label: "pedidos despachados al mes",
  },
  {
    icon: <Layers size={28} />,
    value: "46,000",
    label: "SKUs bajo administración",
  },
  {
    icon: <Warehouse size={28} />,
    value: "23",
    label: "centros de distribución en 15 ciudades",
  },
  {
    icon: <Globe2 size={28} />,
    value: "28",
    label: "clientes activos · 25 multinacionales",
  },
];

const Stats = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center rounded-lg border bg-white px-6 py-10 text-center shadow-sm"
            >
              <span
                className="mb-4 inline-flex size-14 items-center justify-center rounded-lg bg-red-50"
                style={{ color: colors.logex }}
              >
                {stat.icon}
              </span>
              <p
                className="text-4xl font-bold sm:text-5xl"
                style={{ color: colors.navy }}
              >
                {stat.value}
              </p>
              <p
                className="mt-3 text-sm leading-6 sm:text-base"
                style={{ color: colors.gray }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          Datos a 2026
        </p>
      </div>
    </section>
  );
};

export default Stats;
