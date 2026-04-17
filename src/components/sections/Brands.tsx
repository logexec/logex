import { colors } from "@/utils/colors";
import MarqueeCarousel from "../ui/marquee-carousel";

const Brands = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold text-secondary mb-4"
          style={{ color: colors.navy }}
        >
          Nuestros Clientes
        </h2>
        <p
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: colors.gray }}
        >
          Multinacionales líderes en consumo masivo, industria y retail que han elegido a LogeX como su operador logístico en Ecuador.
        </p>
      </div>
      <MarqueeCarousel />
    </section>
  );
};

export default Brands;
