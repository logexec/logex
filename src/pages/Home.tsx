import Brands from "@/components/sections/Brands";
import Certifications from "@/components/sections/Certifications";
import Hero from "../components/sections/Hero";
import HeroBanner from "@/components/sections/HeroBanner";
import Industries from "@/components/sections/Industries";
import ServicesSection from "../components/sections/Services";
import Stats from "@/components/sections/Stats";
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
      <Stats />
      <ServicesSection />
      <Industries />
      <HeroBanner />
      <Brands />
      <Certifications />
    </div>
  );
};

export default Home;
