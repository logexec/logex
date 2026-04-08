import { z } from "zod";
import { FormEvent, useState } from "react";
import { Form } from "@/components/ui/form";
import { colors } from "../utils/colors";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Division from "@/components/ui/division";

const schema = z.object({
  age: z.coerce
    .number({ message: "Por favor, ingresa un número." })
    .positive({ message: "El número debe ser positivo." }),
  company: z.string().min(1, { message: "Por favor, ingresa un nombre." }),
  type: z
    .string()
    .min(1, { message: "Por favor, ingresa un tipo de trámite." }),
  driver_name: z
    .string()
    .min(1, {
      message:
        "Por favor, ingresa el nombre del conductor que realizará el trámite.",
    }),
});
type Errors = Record<string, string | string[]>;
async function submitForm(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const result = schema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return { errors: fieldErrors as Errors };
  }
  return {
    errors: {} as Errors,
  };
}

const Appointments = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    const response = await submitForm(event);
    await new Promise((r) => setTimeout(r, 800));
    setErrors(response.errors);
    setLoading(false);
    if (Object.keys(response.errors).length === 0) {
      alert(
        `Name: ${String(formData.get("name") || "")}\nAge: ${String(
          formData.get("age") || "",
        )}`,
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Search Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: colors.navy }}
          >
            Agenda tu turno para la recepción de proveedores
          </h1>

          <section>
            <Form
              className="max-w-5xl grid grid-cols-2"
              errors={errors}
              onSubmit={onSubmit}
            >
              <Field name="company">
                <FieldLabel>Casa comercial / empresa</FieldLabel>
                <Input placeholder="Ej: Juan Pérez" />
                <FieldError />
              </Field>
              <Field name="type">
                <FieldLabel>Tipo de trámite</FieldLabel>
                <Input placeholder="Entrega, retiro, otro..." />
                <FieldError />
              </Field>
              <Field name="order_id">
                <FieldLabel>N&uacute;mero de orden de compra</FieldLabel>
                <Input placeholder="Ej: 12345" />
                <FieldError />
              </Field>
              <Field name="driver_name">
                <FieldLabel>Nombre del conductor</FieldLabel>
                <Input placeholder="Ej: Gabriel Herrera" />
                <FieldError />
              </Field>
              <Field name="driver_id">
                <FieldLabel>N&uacute;mero de c&eacute;dula</FieldLabel>
                <Input placeholder="Ej: 1234567890" />
                <FieldError />
              </Field>
              <Field name="vehicle_plate">
                <FieldLabel>Placa del vehículo</FieldLabel>
                <Input placeholder="Ej: ABC-1234" />
                <FieldError />
              </Field>
              <Field name="parcel_count">
                <FieldLabel>N&uacute;mero de paquetes/bultos</FieldLabel>
                <Input placeholder="Ej: 5" />
                <FieldError />
              </Field>
              <Field name="email">
                <FieldLabel>Email</FieldLabel>
                <Input placeholder="Ej: correo@dominio.com" />
                <FieldError />
              </Field>
              <Division className="col-span-2" />
              <Field name="terms" className="col-span-2">
                <FieldLabel>
                  <Checkbox name="terms" />
                  <span className="ml-2 text-sm text-gray-600">
                    Acepto los términos y condiciones
                  </span>
                </FieldLabel>
              </Field>
              <Button loading={loading} type="submit">
                Agendar cita
              </Button>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
