import { Bot, Globe, MapPin, Package, Shield, Truck } from "lucide-react";
import { motion } from "motion/react";
import { colors } from "../../utils/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <MapPin size={24} />,
    title: "Última Milla",
    description:
      "Rastreo de envíos en tiempo real con IoT y sensores para mayor visibilidad y control de entregas.",
  },
  {
    icon: <Package size={24} />,
    title: "Almacenamiento",
    description:
      "Administración de bodegas, análisis de stock y técnicas de almacenamiento que optimizan su operación.",
  },
  {
    icon: <Truck size={24} />,
    title: "Transporte",
    description:
      "Gestión de entregas y procesos logísticos orientada a plazos confiables y satisfacción del cliente final.",
  },
  {
    icon: <Globe size={24} />,
    title: "Logística Nacional",
    description: "Cobertura logística en todo el país con estándares uniformes de servicio.",
  },
  {
    icon: <Shield size={24} />,
    title: "Seguridad y Trazabilidad",
    description:
      "Seguimiento en tiempo real y seguridad en toda la cadena de suministro.",
  },
  {
    icon: <Bot size={24} />,
    title: "Automatización de Procesos",
    description:
      "Creamos un centro de decisión virtual que proporciona visibilidad de extremo a extremo, en tiempo real, de tu cadena de suministro.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-secondary mb-4"
            style={{ color: colors.navy }}
          >
            Nuestros Servicios
          </h2>
          <p
            className="text-gray max-w-2xl mx-auto"
            style={{ color: colors.gray }}
          >
            Soluciones integrales para optimizar su cadena de suministro
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
              <Card className="p-2 bg-white h-56">
                <CardHeader>
                  <span style={{ color: colors.logex }}>{service.icon}</span>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
