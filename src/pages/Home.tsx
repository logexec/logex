import Brands from "@/components/sections/Brands";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/Services";
import { PageSEO } from "@/components/layout/PageSEO";

const Home = () => {
  return (
    <div>
      <PageSEO
        title="Gestión de Cadena de Suministro en Ecuador"
        description="LogeX optimiza la cadena de suministro de empresas en Ecuador con soluciones de almacenamiento, transporte nacional, tecnología logística y consultoría a medida."
        path="/"
      />
      <Hero />
      <ServicesSection />
      <Brands />
      {/* ... Más secciones */}
    </div>
  );
};

export default Home;
