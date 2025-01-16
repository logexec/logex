import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Compañía",
    links: [
      { text: "Sobre Nosotros", href: "/nosotros" },
      { text: "Responsabilidad Social", href: "/responsabilidad" },
      { text: "Certificaciones", href: "/certificaciones" },
      { text: "Trabaja con Nosotros", href: "/careers" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { text: "Logística Integral", href: "/servicios" },
      { text: "Gestión de Almacenes", href: "/almacenes" },
      { text: "Consultoría", href: "/consultoria" },
      { text: "Tecnología", href: "/tecnologia" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { text: "Centro de Ayuda", href: "/ayuda" },
      { text: "Tracking", href: "/tracking" },
      { text: "Contacto", href: "/contacto" },
      { text: "FAQ", href: "/faq" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo_transparent.png"
              alt="LogeX"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400">
              Excelencia en gestión de cadena de suministro
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 text-center text-gray-400 flex flex-col gap-6 lg:flex-row lg:gap-0 items-center justify-around select-text">
          <div className="font-thin max-w-56">
            <p className="font-semibold">Quito</p>
            <a
              href="https://www.google.com/maps/place/LogeX/@-0.1857913,-78.4823027,3a,75y,194.13h,125.65t/data=!3m7!1e1!3m5!1s8_PrS3_KsUM5kS8gUIV7MA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-35.64669284339608%26panoid%3D8_PrS3_KsUM5kS8gUIV7MA%26yaw%3D194.1253557243054!7i16384!8i8192!4m14!1m7!3m6!1s0x91d59a7c4a2084c3:0x1d6dbfdef0c0683a!2sLogeX!8m2!3d-0.1856102!4d-78.4823629!16s%2Fg%2F11gbf9_cbp!3m5!1s0x91d59a7c4a2084c3:0x1d6dbfdef0c0683a!8m2!3d-0.1856102!4d-78.4823629!16s%2Fg%2F11gbf9_cbp?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Av. República del Salvador E9-10 y Av. Shyris, Edif. ONIX, PH.
            </a>
          </div>
          <div className="font-thin max-w-56">
            <p className="font-semibold">Guayaquil</p>
            <p>Av. Juan Tanaca Marengo y Ma. Piedad Castillo de Levi.</p>
          </div>
        </div>
        {/* Accent line */}
        <div className="mt-8 pt-8 text-center text-gray-400 border-t border-t-accent">
          <p>
            © {new Date().getFullYear()} LogeX. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
