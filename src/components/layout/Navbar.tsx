import { motion } from "motion/react";
import NavLink from "../ui/NavLink";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="shrink-0"
          >
            <Link to={"/"} className="block">
              <img
                src="/logex_logo.png"
                alt="LogeX Supply Chain Management"
                className="h-8 w-auto"
              />
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/nosotros">Nosotros</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/sistemas">Sistemas</NavLink>
              <NavLink to="/responsabilidad-social">RSE</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
              <Link to="/appointments">
                <Button
                  variant="ghost"
                  className="bg-slate-700 text-primary-foreground hover:bg-slate-700/90"
                >
                  Agenda una cita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
