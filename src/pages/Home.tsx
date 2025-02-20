import Brands from "@/components/sections/Brands";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Brands />
      {/* ... Más secciones */}
    </div>
  );
};

export default Home;
