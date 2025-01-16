const Contacto = () => {
  return (
    <div className="min-h-full flex flex-col items-center bg-[#f1f1f1] p-4 py-[10.75rem]">
      <h1 className="text-center text-[#a8a8a8] font-bold text-xl">
        ¿Quejas, dudas, sugerencias?
      </h1>
      <form
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
            value="Submit"
            id="input-submit"
            className="w-11/12 py-2 text-white bg-primary text-semibold rounded-md outline-none border-2 border-transparent border-spacing-1 focus:border-sky-400"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacto;
