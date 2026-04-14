import { motion } from "motion/react";
import NavLink from "../ui/NavLink";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-xs shadow-sm z-50 sticky top-0">
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
                className="h-12 w-auto"
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
              <Button
                variant="ghost"
                className="bg-slate-600 text-primary-foreground hover:bg-slate-600/90"
                render={<Link to="/appointments">Agenda una cita</Link>}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
