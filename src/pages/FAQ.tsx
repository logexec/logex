import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const faqs = [
  {
    question: "¿Cómo puedo contratar los servicios de LogeX?",
    answer:
      "Puedes completar el formulario de contacto o agendar una cita. Nuestro equipo revisará tu necesidad logística y se pondrá en contacto contigo.",
  },
  {
    question: "¿Cuál es el área de cobertura?",
    answer:
      "Los servicios de logística y distribución de LogeX están disponibles en todo el territorio de Ecuador.",
  },
  {
    question: "¿Ofrecen almacenamiento?",
    answer:
      "Sí. LogeX ofrece almacenamiento, gestión de inventarios y manejo de mercancía para operaciones logísticas de gran escala.",
  },
  {
    question: "¿Ofrecen transporte nacional?",
    answer:
      "Sí. LogeX brinda soluciones de transporte y distribución a nivel nacional, integradas con procesos de seguimiento y control.",
  },
  {
    question: "¿Los sistemas de LogeX tienen acceso público?",
    answer:
      "Los sistemas se presentan como parte del ecosistema tecnológico de LogeX. Para información específica sobre soluciones tecnológicas, puedes contactar al equipo comercial.",
  },
  {
    question: "¿Dónde están ubicadas las oficinas?",
    answer:
      "LogeX cuenta con oficinas en Quito y Guayaquil. Las direcciones están disponibles en el pie de página y en la página de contacto.",
  },
];

const FAQ = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              FAQ
            </p>
            <h1
              className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
              style={{ color: colors.navy }}
            >
              Preguntas frecuentes
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Respuestas rápidas sobre servicios, cobertura, almacenamiento,
              transporte y canales de atención.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="rounded-lg border bg-white px-5 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-lg border bg-gray-50 p-6 text-center">
            <h2
              className="text-2xl font-bold"
              style={{ color: colors.navy }}
            >
              ¿Necesitas más información?
            </h2>
            <p className="mt-3 text-gray-600">
              Escríbenos y revisaremos tu solicitud con el equipo adecuado.
            </p>
            <Link
              to="/contacto"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              Contactar a LogeX
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
