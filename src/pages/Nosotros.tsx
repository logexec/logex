const Nosotros = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            LogeX es líder en soluciones integrales de cadena de suministro,
            enfocados en optimizar y transformar las operaciones logísticas de
            nuestros clientes con 20 años de experiencia en el Ecuador.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 mb-6">
                Transformar la logística empresarial mediante soluciones
                innovadoras y sostenibles que impulsen el éxito de nuestros
                clientes.
              </p>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Nuestra Visión
              </h2>
              <p className="text-gray-600">
                Ser el referente global en soluciones logísticas integrales,
                reconocidos por nuestra excelencia operativa y compromiso con la
                innovación.
              </p>
            </div>
            <div>
              {/* imagen about */}
              <img
                src="/warehouse.jpg"
                alt="LogeX Operaciones"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de mejorar y optimizar procesos.",
              },
              {
                title: "Excelencia",
                description:
                  "Nos comprometemos con los más altos estándares de calidad en cada operación.",
              },
              {
                title: "Sostenibilidad",
                description:
                  "Desarrollamos soluciones que respetan y protegen el medio ambiente.",
              },
            ].map((valor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {valor.title}
                </h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
