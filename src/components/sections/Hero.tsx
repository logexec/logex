import { motion } from "motion/react";
import { colors } from "../../utils/colors";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16">
          <div>
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-5xl md:text-6xl font-bold text-secondary mb-6"
              style={{ color: colors.secondary }}
            >
              Optimiza tu cadena de suministro
            </motion.h1>
            <p className="text-xl mb-8" style={{ color: colors.gray }}>
              Soluciones integrales de logística y gestión de cadena de
              suministro para empresas B2B
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md text-lg font-medium text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <Link to="/nosotros" className="block h-full w-full">
                Conoce nuestros servicios
              </Link>
            </motion.button>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="hidden md:block"
          >
            {/* Poner un camion */}
            <img
              src="/logex_logo.png"
              alt="LogeX Supply Chain Solutions"
              className="w-full h-auto"
            />
            <p className="text-sm text-center mx-auto mt-8 text-slate-500">
              La idea es poner un camión aquí con el logo
            </p>
          </motion.div>
        </div>
      </div>

      {/* Accent decorator */}
      <div className="absolute right-0 top-1/4 w-1/3 h-64 -z-10 rounded-l-full opacity-10 bg-accent" />
    </motion.section>
  );
};

export default Hero;
