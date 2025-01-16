import { ChartBar, Globe, Package, Shield, Truck, Users } from "lucide-react";
import { motion } from "motion/react";
import Card from "../ui/Card";

const servicesData = [
  {
    icon: <Truck size={24} />,
    title: "Logística Integral",
    description:
      "Soluciones completas de transporte y distribución adaptadas a tus necesidades empresariales.",
  },
  {
    icon: <Package size={24} />,
    title: "Gestión de Almacenes",
    description:
      "Optimización de inventario y almacenamiento con tecnología de punta.",
  },
  {
    icon: <ChartBar size={24} />,
    title: "Analítica Supply Chain",
    description:
      "Análisis de datos y KPIs para mejorar la eficiencia de tu cadena de suministro.",
  },
  {
    icon: <Users size={24} />,
    title: "Consultoría Logística",
    description:
      "Asesoramiento experto para optimizar tus procesos logísticos.",
  },
  {
    icon: <Globe size={24} />,
    title: "Logística Nacional",
    description: "Gestión de logística con cobertura nacional.",
  },
  {
    icon: <Shield size={24} />,
    title: "Seguridad y Trazabilidad",
    description:
      "Seguimiento en tiempo real y seguridad en toda la cadena de suministro.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Soluciones integrales para optimizar tu cadena de suministro
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
