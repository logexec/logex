import { ChartBar, Globe, Package, Shield, Truck, Users } from "lucide-react";
import { colors } from "../utils/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <Package size={24} />,
    title: "Almacenamiento Inteligente & Gestión de Inventarios",
    description:
      "Optimiza tu inventario con nuestras estrategias avanzadas y tecnología de última generación. Tu stock, siempre bajo control.",
  },
  {
    icon: <Truck size={24} />,
    title: "Transporte Nacional Eficiente",
    description:
      "Llevamos tus productos a donde los necesites, con cobertura total y tiempos de entrega optimizados.",
  },
  {
    icon: <Users size={24} />,
    title: "Consultoría Logística",
    description:
      "Estrategias diseñadas para que tu operación sea más ágil, eficiente y rentable.",
  },
  {
    icon: <ChartBar size={24} />,
    title: "Analítica y Optimización de la Supply Ch",
    description:
      "Tomamos decisiones basadas en datos para hacer tu cadena de suministro más eficiente y predecible.",
  },
  {
    icon: <Globe size={24} />,
    title: "Logística Nacional",
    description: "Gestión de logística con cobertura en todo el país.",
  },
  {
    icon: <Shield size={24} />,
    title: "Seguridad y Seguimiento en Tiempo Real",
    description:
      "Garantizamos trazabilidad total con tecnología de monitoreo 24/7. Seguridad y visibilidad en cada paso.",
  },
];

const Servicios = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold mb-6"
            style={{ color: colors.navy }}
          >
            Soluciones Logísticas a la Medida
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            En{" "}
            <span
              className="font-bold italic text-lg"
              style={{ color: colors.logex }}
            >
              Log
            </span>
            <span className="text-gray-600 font-bold italic text-lg">eX</span>,
            transformamos la logística en una ventaja competitiva para tu
            empresa. Desde la gestión de almacenes hasta el transporte a nivel
            nacional, ofrecemos soluciones personalizadas con tecnología de
            vanguardia.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card key={index} className="p-2">
                <CardHeader>
                  <span style={{ color: colors.logex }}>{service.icon}</span>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
