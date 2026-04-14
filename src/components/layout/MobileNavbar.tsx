import { ClipboardClock, Code, Contact, Home, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./MobileNavbar.component.css";

const MobileNavbar = () => {
  const { pathname } = useLocation();
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
      name: "Agendar Turno",
      icon: ClipboardClock,
      url: "/appointments",
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
    <div className="lg:hidden fixed bottom-0 mx-auto flex body z-50">
      <nav className="navigation">
        <ul className="relative flex items-center rounded">
          {links.map((item) => {
            const active = pathname === item.url;
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
    </div>
  );
};

export default MobileNavbar;
