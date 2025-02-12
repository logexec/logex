import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { colors } from "../utils/colors";

const Sistemas = () => {
  const systems = [
    {
      title: "WMS",
      description:
        "Sistema avanzado de gestión de almacenes que optimiza el almacenamiento y movimiento de mercancía.",
    },
    {
      title: "TMS",
      description:
        "Plataforma integral para la gestión eficiente del transporte y la distribución.",
    },
    {
      title: "CGI",
      description:
        "Plataforma integral para la gestión eficiente del transporte y la distribución.",
    },
    {
      title: "SAR",
      description: "Plataforma integral para la asignación de recursos.",
    },
    {
      title: "LogeX GPS",
      description:
        "Sistema de gestión de operaciones de LogeX, diseñado para maximizar la eficiencia logística.",
    },
    {
      title: "LogeX Compras",
      description:
        "Sistema de gestión de operaciones de LogeX, diseñado para maximizar la eficiencia logística.",
    },
    {
      title: "LogeX Onix",
      description: "Sistema de gestión de personal de LogeX.",
    },
    {
      title: "DePrati x LogeX",
      description: "Sistema de gestión de LogeX para nuestro cliente DePrati.",
    },
    {
      title: "SGE",
      description: "Sistema de gestión de Entregas de LogeX.",
    },
    {
      title: "LogeX Portal",
      description: "Portal de LogeX.",
    },
    {
      title: "Traccar",
      description: "Modern GPS Tracking Platform",
    },
    {
      title: "Torre de Control LogeX",
      description:
        "Monitoreo en tiempo real de las operaciones logísticas con paneles e indicadores clave para la toma de decisiones.",
    },
  ];

  return (
    <div className="pt-16">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold text-secondary mb-6"
            style={{ color: colors.navy }}
          >
            Sistemas y Tecnología
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
            utilizamos tecnología de vanguardia para optimizar la logística,
            garantizar eficiencia operativa y brindar soluciones personalizadas
            a nuestros clientes.
          </p>
        </div>
      </div>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-secondary mb-12 text-center"
            style={{ color: colors.navy }}
          >
            Nuestras Soluciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 xl:gap-6">
            {systems.map((sistema, index) => (
              <Card key={index} className="p-4 bg-white">
                <CardTitle
                  className="text-xl font-semibold"
                  style={{ color: colors.navy }}
                >
                  {sistema.title}
                </CardTitle>
                <CardDescription>
                  <p className="text-gray-700 my-3 text-base">
                    {sistema.description}
                  </p>
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sistemas;
