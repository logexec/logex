import { motion } from "motion/react";
import { colors } from "@/utils/colors";

const Contacto = () => {
  return (
    <div className="min-h-full flex flex-col items-center bg-[#f1f1f1] p-4 py-[10.75rem]">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="text-center text-[#8d8d8d] font-bold text-xl"
      >
        ¿Quejas, dudas, sugerencias?
      </motion.h1>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.75 }}
        action=""
        className="max-w-[800px] grid grid-cols-2 text-center mx-auto my-5 px-3"
      >
        <div className="w-full p-0">
          <input
            type="text"
            id="input-name"
            placeholder="Nombres"
            className="my-2 py-1 px-3 rounded-md outline-none border focus:border-sky-300 transition-all duration-300 min-w-80"
          />
          <input
            type="email"
            id="input-email"
            placeholder="Email"
            className="my-2 py-1 px-3 rounded-md outline-none border focus:border-sky-300 transition-all duration-300 min-w-80"
          />
          <input
            type="text"
            id="input-subject"
            placeholder="Asunto"
            className="my-2 py-1 px-3 rounded-md outline-none border focus:border-sky-300 transition-all duration-300 min-w-80"
          />
        </div>
        <div className="w-full h-full min-h-32">
          <textarea
            name="message"
            id="input-message"
            placeholder="Mensaje"
            className="my-2 py-1 px-3 rounded-md outline-none border focus:border-sky-300 transition-all duration-300 min-w-80 min-h-32"
          ></textarea>
        </div>
        <div className="col-span-2 my-4">
          <input
            type="submit"
            value="Enviar"
            id="input-submit"
            className={`w-11/12 py-2 text-white text-semibold rounded-md outline-none border-2 border-transparent border-spacing-1 focus:border-sky-400 !hover:bg-red-700 cursor-pointer`}
            style={{ background: colors.logex }}
          />
        </div>
      </motion.form>
    </div>
  );
};

export default Contacto;
