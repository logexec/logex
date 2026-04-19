import {
  Construction,
  Factory,
  Globe,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { colors } from "../../utils/colors";

const industries = [
  { icon: <ShoppingBag size={25} />, name: "Consumo masivo" },
  { icon: <UtensilsCrossed size={25} />, name: "Food & Beverage" },
  { icon: <Factory size={25} />, name: "Sector Industrial" },
  { icon: <Globe size={25} />, name: "E-commerce" },
  { icon: <Construction size={25} />, name: "Construcción" },
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: colors.logex }}
          >
            Industrias atendidas
          </p>
          <h2
            className="mt-3 text-3xl font-bold sm:text-4xl"
            style={{ color: colors.navy }}
          >
            Experiencia que respalda múltiples industrias
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            Trabajamos con clientes de distintas industrias, manteniendo altos
            estándares de servicio.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="flex flex-col items-start rounded-lg border bg-white p-5 shadow-sm"
            >
              <span
                className="mb-3 inline-flex size-11 items-center justify-center rounded-lg bg-red-50"
                style={{ color: colors.logex }}
              >
                {industry.icon}
              </span>
              <h3
                className="font-semibold"
                style={{ color: colors.navy }}
              >
                {industry.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
