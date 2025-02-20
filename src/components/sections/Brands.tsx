import { colors } from "@/utils/colors";
import MarqueeCarousel from "../ui/marquee-carousel";

const Brands = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="text-center mb-16">
        <h2
          className="text-4xl font-bold text-secondary mb-4"
          style={{ color: colors.navy }}
        >
          Nuestros Clientes
        </h2>
        <p
          className="text-gray max-w-2xl mx-auto"
          style={{ color: colors.gray }}
        >
          Las marcas que confían en nosotros
        </p>
      </div>
      <MarqueeCarousel />
    </section>
  );
};

export default Brands;
