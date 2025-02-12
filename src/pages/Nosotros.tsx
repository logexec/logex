import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { colors } from "../utils/colors";
import { Card, CardContent, CardDescription } from "@/components/ui/Card";

const Nosotros = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-4xl font-bold mb-6`}
            style={{ color: colors.navy }}
          >
            Experiencia Comprobada en Logística
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con más de{" "}
            <span className="font-semibold text-primary">
              20 años de experiencia
            </span>{" "}
            en Ecuador,{" "}
            <span
              className="font-bold italic text-lg"
              style={{ color: colors.logex }}
            >
              Log
            </span>
            <span className="text-gray-600 font-bold italic text-lg">eX</span>{" "}
            es líder en servicios logísticos, brindando soluciones
            personalizadas y eficientes para grandes empresas.
          </p>
        </div>
      </div>

      {/* Sobre LogeX */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                style={{ color: colors.navy }}
                className="text-3xl font-bold text-secondary mb-6"
              >
                Liderazgo y Especialización
              </h2>
              <p className="text-gray-600 mb-6">
                En LogeX, nos especializamos en administrar y agregar valor a
                las cadenas de abastecimiento de nuestros clientes. Ofrecemos
                soluciones logísticas y tecnológicas a medida, garantizando
                seguridad y eficiencia en cada proceso.
              </p>
              <h2
                style={{ color: colors.navy }}
                className="text-3xl font-bold text-secondary mb-6"
              >
                Compromiso con la Calidad
              </h2>
              <p className="text-gray-600">
                Trabajamos bajo los más altos estándares éticos, operativos y
                comerciales de la industria, asegurando una logística confiable
                y de alto nivel para cada cliente.
              </p>
            </div>
            <div>
              <img
                src="/warehouse.jpg"
                alt="LogeX Operaciones"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            style={{ color: colors.navy }}
            className="text-3xl font-bold text-secondary mb-12 text-center"
          >
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalización",
                description:
                  "Ofrecemos soluciones a medida para cada cliente, optimizando su cadena de abastecimiento.",
              },
              {
                title: "Eficiencia",
                description:
                  "Almacenamos y transportamos productos de manera segura y con máxima optimización.",
              },
              {
                title: "Ética y Calidad",
                description:
                  "Cumplimos con los más altos estándares operativos, comerciales y éticos en cada proceso.",
              },
            ].map((valor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3
                  className="text-xl font-semibold text-secondary mb-4"
                  style={{ color: colors.logex }}
                >
                  {valor.title}
                </h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos Clave */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            style={{ color: colors.navy }}
            className="text-3xl font-bold text-secondary mb-12 text-center"
          >
            Datos Clave de LogeX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                percentage: "50%",
                description: "Almacenamiento y transporte seguro y eficiente.",
              },
              {
                percentage: "50%",
                description:
                  "Cumplimos con los estándares éticos y operativos más altos.",
              },
              {
                percentage: "100+",
                description:
                  "Empresas multinacionales confían en nuestros servicios.",
              },
            ].map((dato, index) => (
              <Card key={index} className="p-5">
                <CardContent>
                  <h3
                    className="text-4xl font-bold text-primary"
                    style={{ color: colors.navy }}
                  >
                    {dato.percentage}
                  </h3>
                </CardContent>
                <CardDescription>
                  <p className="text-gray-600" style={{ color: colors.gray }}>
                    {dato.description}
                  </p>
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 grid place-content-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-4xl mb-12 font-bold text-center"
            style={{ color: colors.navy }}
          >
            Preguntas frecuentes
          </h3>
          <Accordion type="single" collapsible className="w-[56rem] max-w-4xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                ¿Cómo puedo contratar sus servicios?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Para contratar nuestros servicios, simplemente completa el
                formulario de contacto en nuestra página web y uno de nuestros
                representantes se pondrá en contacto contigo para brindarte más
                información.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                ¿Cuál es su área de cobertura?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Nuestros servicios de logística y distribución están disponibles
                en todo el territorio de Ecuador. Trabajamos con una amplia red
                de socios y proveedores para garantizar una cobertura completa y
                eficiente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                ¿Cuáles son sus tarifas?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Nuestras tarifas varían según el tipo de servicio y las
                necesidades específicas de cada cliente. Te recomendamos ponerte
                en contacto con nuestro equipo de ventas para obtener un
                presupuesto personalizado y competitivo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                ¿Ofrecen servicios de almacenamiento?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Sí, ofrecemos servicios de almacenamiento seguro y eficiente ara
                tus productos. Contamos con instalaciones modernas y personal
                capacitado para garantizar la integridad y el cuidado de tus
                mercancías.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">
                ¿Cuál es su tiempo de entrega?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Nuestro tiempo de entrega varía según la ubicación y la
                naturaleza del envío. Trabajamos diligentemente para cumplir con
                los plazos acordados y garantizar la satisfacción de nuestros
                clientes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
