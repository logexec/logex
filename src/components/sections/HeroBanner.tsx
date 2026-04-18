import { Truck } from "lucide-react";
import { motion } from "motion/react";

const HeroBanner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <img
        src="/hero-banner.webp"
        alt="Operación logística nacional LogeX"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-neutral-950/65" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

      <div className="mx-auto grid min-h-[420px] max-w-6xl content-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white">
            <Truck size={18} />
            Infraestructura nacional
          </p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Operaciones que escalan con su negocio
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
            23 centros de distribución en 15 ciudades, 650 vehículos y
            tecnología propia integrada extremo a extremo — respaldando la
            operación de 25 multinacionales en Ecuador.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
