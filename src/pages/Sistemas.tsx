import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { colors } from "../utils/colors";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Sistemas = () => {
  const systems = [
    {
      title: "WMS",
      description:
        "Sistema avanzado de gestión de almacenes que optimiza el almacenamiento, inventario y movimiento de mercancía.",
    },
    {
      title: "TMS",
      description:
        "Plataforma integral para la planificación, ejecución y optimización del transporte y distribución.",
    },
    {
      title: "CGI",
      description:
        "Sistema para la gestión centralizada de información logística y operativa.",
    },
    {
      title: "SAR",
      description:
        "Plataforma para la asignación eficiente de recursos logísticos y operacionales.",
    },
    {
      title: "LogeX GPS",
      description:
        "Sistema de rastreo y monitoreo en tiempo real para la optimización de rutas y flotas.",
    },
    {
      title: "LogeX Compras",
      description:
        "Plataforma para la gestión de adquisiciones y proveedores en la cadena logística.",
    },
    {
      title: "LogeX Onix",
      description:
        "Sistema de administración de personal y asignación de roles en LogeX.",
    },
    {
      title: "DePrati x LogeX",
      description:
        "Sistema personalizado de LogeX para la gestión logística del cliente DePrati.",
    },
    {
      title: "SGE",
      description:
        "Sistema especializado en la gestión y optimización de entregas.",
    },
    {
      title: "LogeX Portal",
      description: "Portal de acceso a los servicios y herramientas de LogeX.",
    },
    {
      title: "Traccar",
      description:
        "Plataforma moderna de rastreo GPS para la gestión de flotas y activos.",
    },
    {
      title: "Torre de Control LogeX",
      description:
        "Centro de monitoreo en tiempo real con paneles de control e indicadores clave para la toma de decisiones estratégicas.",
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
          <div className="grid place-content-center max-w-xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnMouseEnter: true,
                }),
              ]}
            >
              <CarouselContent>
                {systems.map((sistema, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1 mx-1"
                  >
                    <Card key={index} className="p-4 bg-white h-36">
                      <CardTitle
                        className="text-xl font-semibold"
                        style={{ color: colors.navy }}
                      >
                        {sistema.title}
                      </CardTitle>
                      <CardDescription>
                        <p className="text-gray-700 my-3 text-base select-none">
                          {sistema.description}
                        </p>
                      </CardDescription>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sistemas;
