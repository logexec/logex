import React from "react";
import { motion } from "motion/react";
import { Code, Contact, Home, PackageSearch, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./MobileNavbar.component.css";

const MobileNavbar = () => {
  const links = [
    {
      id: 1,
      name: "Inicio",
      icon: Home,
      url: "/",
    },

    {
      id: 2,
      name: "Contacto",
      icon: Contact,
      url: "/contacto",
    },
    {
      id: 3,
      name: "Tracking",
      icon: PackageSearch,
      url: "/tracking",
    },
    {
      id: 4,
      name: "Servicios",
      icon: Truck,
      url: "/servicios",
    },
    {
      id: 5,
      name: "Sistemas",
      icon: Code,
      url: "/sistemas",
    },
  ];
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="lg:hidden fixed bottom-0 mx-auto flex body z-50"
    >
      <nav className="navigation">
        <ul className="relative flex items-center rounded">
          {links.map((item) => {
            const active = useLocation().pathname === item.url;
            return (
              <li key={item.id} className={`list ${active && "active"}`}>
                <Link to={item.url}>
                  <span className={`icon`}>{<item.icon />}</span>
                  <span className={`text`}>{item.name}</span>
                </Link>
              </li>
            );
          })}
          <div className="indicator" />
        </ul>
      </nav>
    </motion.div>
  );
};

export default MobileNavbar;
