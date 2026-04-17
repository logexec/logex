import { MonitorCheck, Package, SlidersHorizontal, Truck } from "lucide-react";
import { motion } from "motion/react";
import { colors } from "../../utils/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: <Package size={24} />,
    title: "Almacenamiento e inventarios",
    description:
      "Administramos más de 55.000 m² de infraestructura de almacenamiento con control de inventarios en tiempo real y trazabilidad completa.",
  },
  {
    icon: <Truck size={24} />,
    title: "Transporte nacional",
    description:
      "Operamos una flota de más de 600 vehículos para distribución y transporte a nivel nacional, con seguimiento GPS, monitoreo en tiempo real y gestión de rutas.",
  },
  {
    icon: <SlidersHorizontal size={24} />,
    title: "Soluciones personalizadas",
    description:
      "Estructuramos modelos logísticos a medida para cada industria, volumen y nivel de complejidad operativa.",
  },
  {
    icon: <MonitorCheck size={24} />,
    title: "Torre de control",
    description:
      "Visibilidad centralizada de sus operaciones con indicadores clave, alertas en tiempo real y capacidad de respuesta ante contingencias.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-4xl font-bold text-secondary mb-4"
            style={{ color: colors.navy }}
          >
            Una propuesta integral para operaciones que no admiten errores
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: colors.gray }}
          >
            Diseñamos, implementamos y monitoreamos cada eslabón de su cadena de abastecimiento — desde el almacén hasta la entrega final.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white p-2">
                <CardHeader>
                  <span style={{ color: colors.logex }}>{service.icon}</span>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/servicios"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
