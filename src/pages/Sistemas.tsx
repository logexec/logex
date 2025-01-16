const Sistemas = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Sistemas y Tecnología
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Nuestras soluciones tecnológicas están diseñadas para optimizar y
            digitalizar toda la cadena de suministro.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WMS",
                description: "Sistema de gestión de almacenes avanzado",
                url: "https://wms1.logex.com.ec/",
              },
              {
                title: "TMS",
                description: "Sistema de gestión de transporte integrado",
                url: "https://tms1.logex.com.ec/",
              },
              {
                title: "LMS",
                description: "Sistema de gestión de LogeX",
                url: "https://glowing-kheer-a0f417.netlify.app/",
              },
            ].map((sistema, index) => (
              <a
                href={sistema.url}
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {sistema.title}
                </h3>
                <p className="text-gray-600">{sistema.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sistemas;
