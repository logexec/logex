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
import { ScrollToTop } from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Sistemas from "./pages/Sistemas";
import RSE from "./pages/RSE";
import Contacto from "./pages/Contacto";
import Appointments from "./pages/Appointments";
import Careers from "./pages/Careers";
import Almacenes from "./pages/Almacenes";
import Consultoria from "./pages/Consultoria";
import Tecnologia from "./pages/Tecnologia";
import Ayuda from "./pages/Ayuda";
import FAQ from "./pages/FAQ";

const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: colors.light }}
    >
      <ScrollToTop />
      <Navbar />
      <main className="grow">
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
        path="almacenes"
        element={
          <PageWrapper>
            <Almacenes />
          </PageWrapper>
        }
      />
      <Route
        path="consultoria"
        element={
          <PageWrapper>
            <Consultoria />
          </PageWrapper>
        }
      />
      <Route
        path="tecnologia"
        element={
          <PageWrapper>
            <Tecnologia />
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
        path="ayuda"
        element={
          <PageWrapper>
            <Ayuda />
          </PageWrapper>
        }
      />
      <Route
        path="faq"
        element={
          <PageWrapper>
            <FAQ />
          </PageWrapper>
        }
      />
      <Route
        path="appointments"
        element={
          <PageWrapper>
            <Appointments />
          </PageWrapper>
        }
      />
      <Route
        path="empleo"
        element={
          <PageWrapper>
            <Careers />
          </PageWrapper>
        }
      />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
