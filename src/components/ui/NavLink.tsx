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
  const isActive = location.pathname === to && to !== "/tracking";

  const baseClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const defaultClasses =
    "text-gray-600 hover:text-slate-700 hover:bg-slate-400/15";
  const activeClasses =
    "bg-slate-100 text-slate-600 hover:bg-red-100 hover:text-red-900";

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
