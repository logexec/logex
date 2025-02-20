import { motion } from "motion/react";
import { colors } from "../../utils/colors";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

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
              className="text-5xl font-bold text-secondary mb-6"
              style={{ color: colors.navy }}
            >
              Especialistas en servicios logísticos
            </motion.h1>
            <p className="text-xl mb-8" style={{ color: colors.gray }}>
              Nuestro objetivo principal es ofrecer soluciones para optimizar la
              Cadena de Abastecimiento de nuestros clientes.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-3 lg:flex-row"
            >
              <motion.button
                whileHover={{ scale: 0.99 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 rounded text-lg font-medium text-white shadow"
                style={{ backgroundColor: colors.logex }}
              >
                <Link to="/servicios" className="block h-full w-full">
                  Conoce nuestros servicios
                </Link>
              </motion.button>

              <AlertDialog>
                <AlertDialogTrigger className="border border-slate-400 px-4 py-2 rounded text-lg font-semibold shadow hover:shadow-none hover:scale-[.99] transition-all duration-200 active:scale-95">
                  Lee nuestra Política Integrada
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white max-h-[90vh] max-w-6xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Política Integrada de LogeX
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="relative w-full aspect-[9/16] lg:aspect-[16/9] h-[60vh] md:h-auto">
                        <object
                          data="/politicas/Política Integrada.pdf"
                          type="application/pdf"
                          className="absolute inset-0 w-full h-full"
                        >
                          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
                            <p className="text-center mb-4">
                              No se puede mostrar el PDF directamente.
                            </p>
                            <a
                              href="/politicas/Política Integrada.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-red-600 text-white rounded-md"
                            >
                              Abrir PDF
                            </a>
                          </div>
                        </object>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cerrar</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </motion.div>
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
            {/* <p className="text-sm text-center mx-auto mt-8 text-slate-500">
              La idea es poner un camión aquí con el logo
            </p> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
