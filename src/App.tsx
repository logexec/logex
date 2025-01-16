import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { colors } from "./utils/colors";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { PageWrapper } from "./components/layout/PageWrapper";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Sistemas from "./pages/Sistemas";
import RSE from "./pages/RSE";
import Contacto from "./pages/Contacto";
import Tracking from "./pages/Tracking";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        }
      />
      <Route
        path="nosotros"
        element={
          <PageWrapper>
            <Nosotros />
          </PageWrapper>
        }
      />
      <Route
        path="servicios"
        element={
          <PageWrapper>
            <Servicios />
          </PageWrapper>
        }
      />
      <Route
        path="sistemas"
        element={
          <PageWrapper>
            <Sistemas />
          </PageWrapper>
        }
      />
      <Route
        path="responsabilidad-social"
        element={
          <PageWrapper>
            <RSE />
          </PageWrapper>
        }
      />
      <Route
        path="contacto"
        element={
          <PageWrapper>
            <Contacto />
          </PageWrapper>
        }
      />
      <Route
        path="tracking"
        element={
          <PageWrapper>
            <Tracking />
          </PageWrapper>
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
