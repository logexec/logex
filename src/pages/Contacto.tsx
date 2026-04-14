import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { colors } from "@/utils/colors";

const supportEmail = "soporte@logex.ec";
const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

const Contacto = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "Contacto web").trim();
    const message = String(formData.get("message") || "").trim();
    const companyWebsite = String(
      formData.get("company_website") || "",
    ).trim();

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          subject,
          message,
          source: "logex-web",
          company_website: companyWebsite || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Mensaje enviado correctamente. Te contactaremos pronto.");
    } catch {
      setStatus("error");
      setFeedback(
        `No se pudo enviar el mensaje. Escríbenos directamente a ${supportEmail}.`,
      );
    }
  };

  return (
    <div className="pt-16">
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pt-2"
          >
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.logex }}
            >
              Contacto
            </p>
            <h1
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
              style={{ color: colors.navy }}
            >
              Hablemos de logística
            </h1>
            <p className="mt-5 max-w-md leading-7 text-gray-600">
              Escríbenos para propuestas comerciales, información sobre
              servicios, coordinación de citas o soporte general.
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-red-600"
            >
              <Mail size={18} color={colors.logex} />
              {supportEmail}
            </a>
          </motion.div>

          <motion.form
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-lg border bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6 flex items-start gap-4">
              <span
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50"
                style={{ color: colors.logex }}
              >
                <MessageSquare size={24} />
              </span>
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Envíanos un mensaje
                </h2>
                <p className="mt-1 text-gray-600">
                  Completa los datos y nuestro equipo recibirá tu solicitud.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Nombre
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="h-11 rounded-lg border px-3 font-normal outline-none transition-colors focus:border-red-500"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Correo
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="correo@empresa.com"
                  className="h-11 rounded-lg border px-3 font-normal outline-none transition-colors focus:border-red-500"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Teléfono
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Opcional"
                  className="h-11 rounded-lg border px-3 font-normal outline-none transition-colors focus:border-red-500"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Asunto
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="¿Cómo podemos ayudarte?"
                  className="h-11 rounded-lg border px-3 font-normal outline-none transition-colors focus:border-red-500"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-gray-700 sm:col-span-2">
                Mensaje
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Cuéntanos brevemente lo que necesitas."
                  className="resize-none rounded-lg border px-3 py-3 font-normal outline-none transition-colors focus:border-red-500"
                />
              </label>

              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Send size={18} />
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {feedback ? (
              <p
                className={`mt-4 rounded-lg px-4 py-3 text-sm leading-6 ${
                  status === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {feedback}
              </p>
            ) : null}

            <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-gray-500">
              <Phone
                className="mt-0.5 shrink-0"
                size={16}
                color={colors.logex}
              />
              También puedes escribirnos directamente a {supportEmail}.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
