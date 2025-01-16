const RSE = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Responsabilidad Social Empresarial
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Nuestro compromiso con la sociedad y el medio ambiente es parte
            fundamental de nuestra filosofía empresarial.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Compromiso Ambiental
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Reducción de emisiones de CO2 en nuestras operaciones
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Implementación de energías renovables
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Gestión responsable de residuos
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Impacto Social
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Programas de desarrollo comunitario
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">Apoyo a la educación local</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">Fomento del empleo local</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSE;
