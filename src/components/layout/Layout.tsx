import { Outlet } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { colors } from "../../utils/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: colors.light }}
    >
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
