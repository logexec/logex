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
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
    description: "Políticas de recepción",
    step: 3,
    title: "Tercer paso",
  },
];

const APPOINTMENTS_API_URL = "https://httpbin.org/post";
const FIELD_ORDER = [
  "company",
  "type",
  "order_id",
  "driver_name",
  "driver_id",
  "vehicle_plate",
  "parcel_count",
  "email",
  "appointment_date",
  "appointment_time",
  "terms",
] as const;

const FIELD_LABELS: Record<(typeof FIELD_ORDER)[number], string> = {
  appointment_date: "Fecha del turno",
  appointment_time: "Horario disponible",
  company: "Casa comercial / empresa",
  driver_id: "Número de cédula",
  driver_name: "Nombre del conductor",
  email: "Email",
  order_id: "Número de orden de compra",
  parcel_count: "Número de paquetes/bultos",
  terms: "Políticas de recepción",
  type: "Tipo de trámite",
  vehicle_plate: "Placa del vehículo",
};

const FIELD_STEPS: Record<(typeof FIELD_ORDER)[number], number> = {
  appointment_date: 2,
  appointment_time: 2,
  company: 1,
  driver_id: 1,
  driver_name: 1,
  email: 1,
  order_id: 1,
  parcel_count: 1,
  terms: 3,
  type: 1,
  vehicle_plate: 1,
};

const textField = (emptyMessage: string) =>
  z.preprocess(
    (value) => (value == null ? "" : String(value)),
    z.string().trim().min(1, { message: emptyMessage }),
  );

const isValidAppointmentDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return (
    !Number.isNaN(date.getTime()) &&
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    startOfDay(date) >= startOfDay(new Date()) &&
    day <= 25
  );
};

const schema = z.object({
  company: textField("La casa comercial o empresa está vacía."),
  type: textField("El tipo de trámite está vacío."),
  order_id: textField("El número de orden de compra está vacío."),
  driver_name: textField("El nombre del conductor está vacío."),
  driver_id: z.preprocess(
    (value) => (value == null ? "" : String(value).trim()),
    z
      .string()
      .refine((value) => value.length > 0, {
        message: "El número de cédula está vacío.",
      })
      .regex(/^\d{10}$/, {
        message: "El número de cédula debe tener 10 dígitos.",
      }),
  ),
  vehicle_plate: z.preprocess(
    (value) => (value == null ? "" : String(value).trim().toUpperCase()),
    z
      .string()
      .refine((value) => value.length > 0, {
        message: "La placa del vehículo está vacía.",
      })
      .regex(/^[A-Z]{2,3}-\d{3,4}$/, {
        message:
          "La placa del vehículo no tiene un formato válido. Ejemplo: ABC-1234.",
      }),
  ),
  parcel_count: z
    .preprocess(
      (value) => (value == null ? "" : String(value).trim()),
      z
        .string()
        .min(1, {
          message: "El número de paquetes o bultos está vacío.",
        })
        .refine((value) => !Number.isNaN(Number(value)), {
          message: "El número de paquetes o bultos debe ser numérico.",
        })
        .refine((value) => Number.isInteger(Number(value)), {
          message: "El número de paquetes o bultos debe ser entero.",
        })
        .refine((value) => Number(value) > 0, {
          message: "El número de paquetes o bultos debe ser mayor a cero.",
        }),
    )
    .transform((value) => Number(value)),
  email: z.preprocess(
    (value) => (value == null ? "" : String(value).trim()),
    z
      .string()
      .refine((value) => value.length > 0, {
        message: "El correo electrónico está vacío.",
      })
      .email({ message: "El correo electrónico no tiene un formato válido." }),
  ),
  appointment_date: z.preprocess(
    (value) => (value == null ? "" : String(value).trim()),
    z
      .string()
      .refine((value) => value.length > 0, {
        message: "La fecha del turno está vacía.",
      })
      .refine(isValidAppointmentDate, {
        message: "Ingresaste una fecha inválida.",
      }),
  ),
  appointment_time: z.preprocess(
    (value) => (value == null ? "" : String(value).trim()),
    z
      .string()
      .refine((value) => value.length > 0, {
        message: "Debes escoger un horario.",
      })
      .refine((value) => availableTimes.includes(value), {
        message: "Seleccionaste un horario inválido.",
      }),
  ),
  terms: z.preprocess(
    (value) => value === "on" || value === true,
    z.boolean().refine((value) => value, {
      message: "Debes aceptar las políticas de recepción.",
    }),
  ),
});

type AppointmentPayload = z.infer<typeof schema>;
type Errors = Record<string, string | string[]>;

async function submitForm(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return { errors: fieldErrors as Errors };
  }

  await createAppointment(result.data);

  return {
    errors: {} as Errors,
  };
}

async function createAppointment(payload: AppointmentPayload) {
  const response = await fetch(APPOINTMENTS_API_URL, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("No fue posible agendar el turno.");
  }

  return response.json();
}

function getFirstErrorStep(errors: Errors) {
  for (const fieldName of FIELD_ORDER) {
    if (errors[fieldName]?.length) {
      return FIELD_STEPS[fieldName];
    }
  }

  return 1;
}

function buildErrorAlertItems(errors: Errors) {
  const items: Array<{ field: string; message: string }> = [];

  for (const fieldName of FIELD_ORDER) {
    const fieldErrors = errors[fieldName];
    if (!fieldErrors?.length) continue;

    const messages = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
    items.push({
      field: FIELD_LABELS[fieldName],
      message: messages[0],
    });
  }

  return items;
}

function Confirmation({
  body,
  description,
  onClose,
  open,
  title,
}: {
  body: ReactNode;
  description?: string;
  onClose: () => void;
  open: boolean;
  title: string;
}) {
  return (
    <AlertDialog
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
      open={open}
    >
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description ? (
            <p className="text-muted-foreground text-sm">{description}</p>
          ) : null}
          <div className="text-sm text-muted-foreground">{body}</div>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-transparent border-0 pt-1.5">
          <AlertDialogClose
            onClick={onClose}
            render={<Button variant="ghost" className="hover:bg-gray-200" />}
          >
            Entendido
          </AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
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
  const [confirmation, setConfirmation] = useState({
    body: null as ReactNode,
    description: "",
    open: false,
    title: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    setErrors({});

    try {
      const response = await submitForm(formData);
      setErrors(response.errors);

      if (Object.keys(response.errors).length > 0) {
        setCurrentStep(getFirstErrorStep(response.errors));
        const errorItems = buildErrorAlertItems(response.errors);
        setConfirmation({
          body: (
            <div className="space-y-2">
              {errorItems.map(({ field, message }) => (
                <p key={field}>
                  <strong className="font-semibold text-foreground">
                    {field}:
                  </strong>{" "}
                  <span>{message}</span>
                </p>
              ))}
            </div>
          ),
          description: "Revisa estos campos antes de continuar:",
          open: true,
          title: "Corrige los campos del formulario",
        });
        return;
      }

      setConfirmation({
        body: "Tu turno ha sido agendado exitosamente.",
        description: "",
        open: true,
        title: "Turno agendado",
      });
    } catch {
      setConfirmation({
        body: "No fue posible agendar tu turno. Intenta nuevamente.",
        description: "",
        open: true,
        title: "Error al agendar turno",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Confirmation
        body={confirmation.body}
        description={confirmation.description}
        onClose={() =>
          setConfirmation((current) => ({
            ...current,
            open: false,
          }))
        }
        open={confirmation.open}
        title={confirmation.title}
      />
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
                      * La disponibilidad de turnos es únicamente del día 01 al
                      25 de cada mes, en horarios de 08:30 a 14:00.
                    </p>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200 text-xl">
                        Política de agendamiento
                      </p>
                      <p className="mt-1 text-sm">
                        El proveedor deberá aceptar las siguientes condiciones:
                      </p>
                    </div>
                    <Field name="terms" className="col-span-2">
                      <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            1. Para ingresar al CD, el proveedor deberá portar
                            (EPP):
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            <li>Casco</li>
                            <li>Chaleco reflectivo</li>
                            <li>Botas con punta de acero</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            2. Deberá presentar:
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            <li>Documento de identificación</li>
                            <li>Turno</li>
                            <li>Orden de compra</li>
                            <li>Factura o acta de consignación</li>
                            <li>Anexo de lotes</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            3. La factura debe tener fecha de emisión:
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            <li>Mínimo un día antes de la entrega.</li>
                            <li>
                              No mayor a tres días posteriores a su emisión.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            4. El producto deberá llegar listo para entrega.
                          </p>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            <li>
                              No se permitirá realizar reprocesos en el andén
                              asignado (limpieza, etiquetado,
                              reacondicionamiento, etc.).
                            </li>
                          </ul>
                        </div>
                      </div>
                      <FieldLabel className="mt-1">
                        <Checkbox name="terms" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                          Acepto las políticas de recepción. <Required />
                        </span>
                      </FieldLabel>
                      <FieldError />
                    </Field>
                  </>
                )}

                <Division className="col-span-2 mt-4 mb-1" />

                <div className="flex justify-center space-x-4 mx-auto col-span-2">
                  <Button
                    className="w-32 hover:bg-primary/10"
                    disabled={currentStep === 1}
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    variant="outline"
                  >
                    Anterior
                  </Button>
                  {currentStep < steps.length ? (
                    <Button
                      className="w-32 hover:bg-primary/10"
                      disabled={currentStep >= steps.length}
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      variant="outline"
                    >
                      Siguiente
                    </Button>
                  ) : (
                    <Button
                      loading={loading}
                      type="submit"
                      variant={"outline"}
                      className="w-32 bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={loading || currentStep !== steps.length}
                    >
                      Agendar cita
                    </Button>
                  )}
                </div>
              </Form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
