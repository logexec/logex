import { useState } from "react";
import { motion } from "motion/react";
import { Search, Package, Truck, CheckCircle, AlertCircle } from "lucide-react";
import { colors } from "../utils/colors";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isShown, setIsShown] = useState(false);

  // Data para demostración; - en producción vendría de la API
  const trackingHistory = [
    {
      date: "16 ENE",
      time: "05:25pm",
      status: "Información",
      description:
        "Se ha informado que el paquete está dañado. Si aún no se ha entregado, los artículos que se puedan recuperar se devolverán al remitente.",
      subStatus: "Daño",
      icon: AlertCircle,
      isAlert: true,
    },
    {
      date: "22 DIC",
      time: "07:43am",
      status: "Entregado",
      description: "Paquete entregado",
      icon: CheckCircle,
      isCompleted: true,
    },
    {
      date: "22 DIC",
      time: "06:53am",
      status: "In Tránsito",
      description: "El paquete está cargado para su entrega.",
      icon: Truck,
    },
    {
      date: "21 DIC",
      time: "11:16am",
      status: "Recogido",
      description: "Paquete recogido.",
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: colors.navy }}
          >
            Rastrear Envío
          </motion.h1>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4"
            onSubmit={(e) => {
              e.preventDefault(), console.log("Submitted!");
            }}
          >
            <input
              type="text"
              placeholder="Ingresa el número de tracking"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
            />
            <button
              style={{ backgroundColor: colors.logex }}
              className="px-6 py-3 rounded text-white font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors hover:bg-red-700"
              onClick={() =>
                trackingNumber ? setIsShown(true) : setIsShown(false)
              }
              type="submit"
            >
              <Search size={20} />
              Rastrear
            </button>
          </motion.form>
        </div>
      </motion.div>

      {/* Tracking Timeline */}
      {trackingNumber && isShown && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2
              className="text-xl font-semibold mb-8"
              style={{ color: colors.navy }}
            >
              Historial de Rastreo
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-[28px] top-8 bottom-8 w-px"
                style={{ backgroundColor: `${colors.logex}` }}
              />

              {/* Timeline items */}
              <div className="space-y-8">
                {trackingHistory.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    {/* Icon */}
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center"
                        style={{
                          borderColor: item.isAlert
                            ? colors.orange
                            : item.isCompleted
                            ? colors.green
                            : colors.gray,
                          color: item.isAlert
                            ? colors.orange
                            : item.isCompleted
                            ? colors.logex
                            : colors.gray,
                        }}
                      >
                        <item.icon size={24} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h3
                            className="font-semibold"
                            style={{ color: colors.navy }}
                          >
                            {item.status}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                          {item.subStatus && (
                            <span
                              className="inline-block mt-2 px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor: `${colors.logex}`,
                                color: colors.white,
                              }}
                            >
                              {item.subStatus}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-sm text-gray-900">
                            {item.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Tracking;
