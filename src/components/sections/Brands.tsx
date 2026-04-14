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
          className="text-gray max-w-2xl mx-auto"
          style={{ color: colors.gray }}
        >
          Empresas que confían en nosotros
        </p>
      </div>
      <MarqueeCarousel />
    </section>
  );
};

export default Brands;
