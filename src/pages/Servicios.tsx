import Card from "../components/ui/Card";
import { ChartBar, Globe, Package, Shield, Truck, Users } from "lucide-react";

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
    title: "Logística Internacional",
    description:
      "Gestión de importaciones y exportaciones con cobertura global.",
  },
  {
    icon: <Shield size={24} />,
    title: "Seguridad y Trazabilidad",
    description:
      "Seguimiento en tiempo real y seguridad en toda la cadena de suministro.",
  },
];

const Servicios = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            En{" "}
            <span className="text-primary font-bold italic text-lg">Log</span>
            <span className="text-gray-600 font-bold italic text-lg">eX</span>,
            nos especializamos en brindar soluciones logísticas de calidad a
            emrpresas exitosas. Nuestro enfoque se basa en la eficiencia y la
            utilización de procesos y tecnología de vanguardia. Trabajamos en
            estrecha colaboración con nuestros clientes para convertirnos en su
            aliado estratégico y crear valor en sus operaciones.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
