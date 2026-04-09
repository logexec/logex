import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { addMinutes, format, set, startOfDay } from "date-fns";
import { FormEvent, useState } from "react";
import { Form } from "@/components/ui/form";
import { colors } from "../utils/colors";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import Division from "@/components/ui/division";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { cn } from "@/lib/utils";

const steps = [
  {
    description: "Registro del turno",
    step: 1,
    title: "Primer paso",
  },
  {
    description: "Selección del turno",
    step: 2,
    title: "Segundo paso",
  },
  {
    description: "Disponibilidad",
    step: 3,
    title: "Tercer paso",
  },
];

const schema = z.object({
  age: z.coerce
    .number({ message: "Por favor, ingresa un número." })
    .positive({ message: "El número debe ser positivo." }),
  company: z.string().min(1, { message: "Por favor, ingresa un nombre." }),
  type: z
    .string()
    .min(1, { message: "Por favor, ingresa un tipo de trámite." }),
  driver_name: z.string().min(1, {
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

const Required = () => (
  <span className="text-red-500" title="Campo obligatorio">
    *
  </span>
);

const appointmentStart = set(new Date(), {
  hours: 8,
  milliseconds: 0,
  minutes: 30,
  seconds: 0,
});
const appointmentEnd = set(new Date(), {
  hours: 14,
  milliseconds: 0,
  minutes: 0,
  seconds: 0,
});
const availableTimes: string[] = [];

for (
  let slot = appointmentStart;
  slot <= appointmentEnd;
  slot = addMinutes(slot, 40)
) {
  availableTimes.push(format(slot, "HH:mm"));
}

const Appointments = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

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
            <div className="mx-auto max-w-xl space-y-8 text-center">
              <Stepper onValueChange={setCurrentStep} value={currentStep}>
                {steps.map(({ step, title, description }) => (
                  <StepperItem
                    className="not-last:flex-1"
                    key={step}
                    step={step}
                  >
                    <StepperTrigger className="flex-col gap-3 rounded">
                      <StepperIndicator />
                      <div className="space-y-0.5 px-2">
                        <StepperTitle>{title}</StepperTitle>
                        <StepperDescription className="max-sm:hidden">
                          {description}
                        </StepperDescription>
                      </div>
                    </StepperTrigger>
                    {step < steps.length && <StepperSeparator />}
                  </StepperItem>
                ))}
              </Stepper>
            </div>
          </section>

          <section>
            <Form
              className="max-w-5xl grid grid-cols-2 mt-8"
              errors={errors}
              onSubmit={onSubmit}
            >
              {currentStep === 1 && (
                <>
                  <Field name="company">
                    <FieldLabel>
                      Casa comercial / empresa <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: Juan Pérez" />
                    <FieldError />
                  </Field>
                  <Field name="type">
                    <FieldLabel>
                      Tipo de trámite <Required />
                    </FieldLabel>
                    <Input placeholder="Entrega, retiro, otro..." />
                    <FieldError />
                  </Field>
                  <Field name="order_id">
                    <FieldLabel>
                      N&uacute;mero de orden de compra <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: 12345" />
                    <FieldError />
                  </Field>
                  <Field name="driver_name">
                    <FieldLabel>
                      Nombre del conductor <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: Gabriel Herrera" />
                    <FieldError />
                  </Field>
                  <Field name="driver_id">
                    <FieldLabel>
                      N&uacute;mero de c&eacute;dula <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: 1234567890" />
                    <FieldError />
                  </Field>
                  <Field name="vehicle_plate">
                    <FieldLabel>
                      Placa del vehículo <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: ABC-1234" />
                    <FieldError />
                  </Field>
                  <Field name="parcel_count">
                    <FieldLabel>
                      N&uacute;mero de paquetes/bultos <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: 5" />
                    <FieldError />
                  </Field>
                  <Field name="email">
                    <FieldLabel>
                      Email <Required />
                    </FieldLabel>
                    <Input placeholder="Ej: correo@dominio.com" />
                    <FieldError />
                  </Field>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Field name="appointment_date">
                    <FieldLabel>
                      Fecha del turno <Required />
                    </FieldLabel>
                    <input
                      name="appointment_date"
                      type="hidden"
                      value={
                        selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""
                      }
                    />
                    <Popover>
                      <PopoverTrigger>
                        <Button
                          className={cn(
                            "w-full justify-between font-normal",
                            !selectedDate && "text-muted-foreground",
                          )}
                          variant="outline"
                        >
                          {selectedDate
                            ? selectedDate.toLocaleDateString("es-EC", {
                                dateStyle: "long",
                              })
                            : "Selecciona una fecha"}
                          <CalendarIcon className="size-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            startOfDay(date) < startOfDay(new Date()) ||
                            date.getDate() > 25
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FieldError />
                  </Field>
                  <Field name="appointment_time">
                    <FieldLabel>
                      Horario disponible <Required />
                    </FieldLabel>
                    <input
                      name="appointment_time"
                      type="hidden"
                      value={selectedTime}
                    />
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          className="w-full"
                          name="appointment_time_option"
                          onClick={() => setSelectedTime(time)}
                          type="button"
                          variant={
                            selectedTime === time ? "default" : "outline"
                          }
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    <FieldError />
                  </Field>
                  <p className="text-xs text-gray-500 col-span-2">
                    * La disponibilidad de turnos es únicamente del día 01 al 25 de cada mes, en horarios de 08:30 a 14:00.
                  </p>
                </>
              )}
              {currentStep === 3 && (
                <>
                  {/* TODO: Implementar un informativo ligado al checkbox implementado en el que explique la política de agendamiento: 
                  El proveedor deberá aceptar las siguientes condiciones:
1. Para ingresar al CD, el proveedor deberá portar (EPP):
• Casco
• Chaleco reflectivo
• Botas con punta de acero
2. Deberá presentar:
• Documento de identificación
• Turno
• Orden de compra
• Factura o acta de consignación
• Anexo de lotes
3. La factura debe tener fecha de emisión:
• Mínimo un día antes de la entrega.
• No mayor a tres días posteriores a su emisión.
4. El producto deberá llegar listo para entrega.
• No se permitirá realizar reprocesos en el andén asignado (limpieza,
etiquetado, reacondicionamiento, etc.).
                   */}
                  <Field name="terms" className="col-span-2">
                    <FieldLabel>
                      <Checkbox name="terms" />
                      <span className="ml-2 text-sm text-gray-600">
                        Acepto las políticas de recepción. <Required />
                      </span>
                    </FieldLabel>
                  </Field>
                </>
              )}

              <Division className="col-span-2 my-4" />

              <div className="flex justify-center space-x-4 mx-auto col-span-2">
                <Button
                  className="w-32"
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  variant="outline"
                >
                  Anterior
                </Button>
                <Button
                  className="w-32"
                  disabled={currentStep > steps.length}
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  variant="outline"
                >
                  Siguiente
                </Button>
              </div>

              <Button
                loading={loading}
                type="submit"
                className="col-span-2"
                disabled={
                  loading ||
                  Object.keys(errors).length > 0 ||
                  currentStep !== steps.length
                }
              >
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
