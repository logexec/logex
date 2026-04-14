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
    question: "¿Dónde encuentro información sobre los sistemas LogeX?",
    answer:
      "Puedes revisar la página de Sistemas para conocer el ecosistema tecnológico de LogeX y contactar al equipo comercial si necesitas más información.",
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
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src="/faq-hero.webp"
          alt="Preguntas frecuentes LogeX"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-[480px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              FAQ
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Preguntas frecuentes
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
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
