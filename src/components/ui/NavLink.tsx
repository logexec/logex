import React, { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  className = "",
  style,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to && to !== "/appointments";

  const baseClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const defaultClasses =
    "text-white/80 hover:text-white hover:bg-white/10";
  const activeClasses =
    "bg-white text-[#1A1D2C] hover:bg-white/90";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${
        isActive ? activeClasses : defaultClasses
      } ${className}`}
      style={style}
    >
      {children}
    </Link>
  );
};

export default NavLink;
