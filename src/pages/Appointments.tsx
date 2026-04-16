import { z } from "zod";
import { CircleAlert } from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaTrailer,
  FaTruckFieldUn,
  FaTruckFront,
  FaTruckMoving,
  FaTruckRampBox,
} from "react-icons/fa6";
import { addMinutes, format, set, startOfDay } from "date-fns";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { colors } from "../utils/colors";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Division from "@/components/ui/division";
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
import type { ReactNode } from "react";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/components/ui/autocomplete";
import DayPicker from "@/components/ui/day-picker";

const steps = [
  {
    description: "Datos del proveedor",
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

const APPOINTMENTS_API_URL =
  import.meta.env.VITE_APPOINTMENTS_API_URL || "/api/v1/public/appointments";
const APPOINTMENT_AVAILABILITY_API_URL =
  import.meta.env.VITE_APPOINTMENT_AVAILABILITY_API_URL ||
  `${APPOINTMENTS_API_URL}/availability`;
const appointmentProjects = [
  {
    code: "agso",
    locations: [
      {
        code: "tambillo-cd",
        name: "Centro de Distribución Tambillo",
      },
    ],
    name: "AGSO",
    tenantCode: "logex",
  },
] as const;
const FIELD_ORDER = [
  "project_code",
  "location_code",
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
  location_code: "Ubicación",
  project_code: "Proyecto",
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
  location_code: 1,
  order_id: 1,
  parcel_count: 1,
  project_code: 1,
  terms: 3,
  type: 1,
  vehicle_plate: 1,
};

const items = [
  { label: "Entrega de pedido", value: "entrega de pedido" },
  { label: "Retiro de producto", value: "retiro de producto" },
];

const textField = (emptyMessage: string) =>
  z.preprocess(
    (value) => (value == null ? "" : String(value)),
    z.string().trim().min(1, { message: emptyMessage }),
  );

const normalizeVehiclePlate = (value: unknown) => {
  const compactValue = String(value ?? "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
  const plateParts = /^([A-Z]{3})(\d*)$/.exec(compactValue);

  if (!plateParts) return compactValue;

  const [, letters, digits] = plateParts;

  return digits ? `${letters}-${digits}` : letters;
};

const getVehiclePlateIcon = (validation: ValidPlateValidation): IconType => {
  const { secondLetter, numbers } = validation.details;

  if (numbers.length === 3) return FaTrailer;
  if (secondLetter === "E") return FaTruckFieldUn;
  if (secondLetter === "M") return FaTruckRampBox;
  if (["A", "U", "Z"].includes(secondLetter)) return FaTruckMoving;

  return FaTruckFront;
};

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

const schema = z
  .object({
    project_code: textField("Debes escoger un proyecto.").refine(
      (value) => appointmentProjects.some((project) => project.code === value),
      {
        message: "Seleccionaste un proyecto inválido.",
      },
    ),
    location_code: textField("Debes escoger una ubicación.").refine(
      (value) =>
        appointmentProjects.some((project) =>
          project.locations.some((location) => location.code === value),
        ),
      {
        message: "Seleccionaste una ubicación inválida.",
      },
    ),
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
      normalizeVehiclePlate,
      z
        .string()
        .refine((value) => value.length > 0, {
          message: "La placa del vehículo está vacía.",
        })
        .regex(/^[A-Z]{3}-(?:\d{3}|\d{4})$/, {
          message:
            "La placa del vehículo no tiene un formato válido. Ejemplos: ABC-1234 o ABC-123.",
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
        .email({
          message: "El correo electrónico no tiene un formato válido.",
        }),
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
  })
  .superRefine((value, context) => {
    if (
      value.appointment_date &&
      value.appointment_time &&
      availableTimes.includes(value.appointment_time) &&
      !isAppointmentSlotInFuture(value.appointment_date, value.appointment_time)
    ) {
      context.addIssue({
        code: "custom",
        message: "Seleccionaste un horario que ya pasó.",
        path: ["appointment_time"],
      });
    }
  });

type AppointmentPayload = z.infer<typeof schema>;
type PlateValidationResult =
  | {
      isValid: false;
      message: string;
    }
  | {
      details: {
        firstLetter: string;
        numbers: string;
        secondLetter: string;
      };
      isValid: true;
      province: string;
      serviceType: string;
      vehicleType: string;
      vehicleCategory: string;
    };
type ValidPlateValidation = Extract<PlateValidationResult, { isValid: true }>;
type AppointmentFormValues = {
  appointment_date: string;
  appointment_time: string;
  company: string;
  driver_id: string;
  driver_name: string;
  email: string;
  location_code: string;
  order_id: string;
  parcel_count: string;
  project_code: string;
  terms: boolean;
  type: string;
  vehicle_plate: string;
};
type Errors = Record<string, string | string[]>;
type AppointmentAvailability = {
  unavailableTimesByDate: Record<string, string[]>;
};

class AppointmentApiError extends Error {
  constructor(public errors: Errors) {
    super("No fue posible agendar el turno.");
  }
}

const initialFormValues: AppointmentFormValues = {
  appointment_date: "",
  appointment_time: "",
  company: "",
  driver_id: "",
  driver_name: "",
  email: "",
  location_code: appointmentProjects[0].locations[0].code,
  order_id: "",
  parcel_count: "",
  project_code: appointmentProjects[0].code,
  terms: false,
  type: "",
  vehicle_plate: "",
};

const parseAppointmentDate = (value: string) => {
  if (!value) return undefined;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return Number.isNaN(date.getTime()) ? undefined : date;
};

const getAppointmentSlotDate = (dateValue: string, timeValue: string) => {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(dateValue) ||
    !/^\d{2}:\d{2}$/.test(timeValue)
  ) {
    return null;
  }

  const [year, month, day] = dateValue.split("-").map(Number);
  const [hours, minutes] = timeValue.split(":").map(Number);
  const slotDate = new Date(year, month - 1, day, hours, minutes, 0, 0);

  return Number.isNaN(slotDate.getTime()) ? null : slotDate;
};

function isAppointmentSlotInFuture(dateValue: string, timeValue: string) {
  const slotDate = getAppointmentSlotDate(dateValue, timeValue);

  return Boolean(slotDate && slotDate > new Date());
}

function getAvailableTimesForDate(dateValue: string) {
  if (!dateValue) return availableTimes;

  return availableTimes.filter((time) =>
    isAppointmentSlotInFuture(dateValue, time),
  );
}

function getAppointmentMonth(value: Date | string) {
  if (value instanceof Date) {
    return format(value, "yyyy-MM");
  }

  return value.slice(0, 7);
}

function normalizeAppointmentTime(value: unknown) {
  if (typeof value !== "string") return null;

  const timeMatch =
    value.match(/T(\d{2}:\d{2})/) || value.match(/^(\d{2}:\d{2})/);

  return timeMatch?.[1] ?? null;
}

function parseUnavailableTimes(value: unknown) {
  const unavailableTimes = new Set<string>();

  if (!value || typeof value !== "object") {
    return [];
  }

  if ("unavailable_times" in value && Array.isArray(value.unavailable_times)) {
    for (const time of value.unavailable_times) {
      const normalizedTime = normalizeAppointmentTime(time);
      if (normalizedTime) unavailableTimes.add(normalizedTime);
    }
  }

  if ("slots" in value && Array.isArray(value.slots)) {
    for (const slot of value.slots) {
      if (!slot || typeof slot !== "object") continue;
      if ("available" in slot && slot.available === false && "time" in slot) {
        const normalizedTime = normalizeAppointmentTime(slot.time);
        if (normalizedTime) unavailableTimes.add(normalizedTime);
      }
    }
  }

  if ("appointments" in value && Array.isArray(value.appointments)) {
    for (const appointment of value.appointments) {
      if (!appointment || typeof appointment !== "object") continue;
      const scheduledAt =
        "scheduled_at" in appointment ? appointment.scheduled_at : null;
      const time = "time" in appointment ? appointment.time : scheduledAt;
      const normalizedTime = normalizeAppointmentTime(time);
      if (normalizedTime) unavailableTimes.add(normalizedTime);
    }
  }

  return Array.from(unavailableTimes);
}

function parseAppointmentAvailability(
  payload: unknown,
): AppointmentAvailability {
  const data =
    payload && typeof payload === "object" && "data" in payload
      ? payload.data
      : payload;
  const unavailableTimesByDate: Record<string, string[]> = {};

  if (!data || typeof data !== "object") {
    return { unavailableTimesByDate };
  }

  if ("dates" in data && data.dates && typeof data.dates === "object") {
    for (const [date, availabilityForDate] of Object.entries(data.dates)) {
      unavailableTimesByDate[date] = parseUnavailableTimes(availabilityForDate);
    }

    return { unavailableTimesByDate };
  }

  if ("date" in data && typeof data.date === "string") {
    unavailableTimesByDate[data.date] = parseUnavailableTimes(data);
  }

  return { unavailableTimesByDate };
}

async function fetchAppointmentAvailability(params: {
  locationCode: string;
  month: string;
  projectCode: string;
}) {
  const project = getSelectedProject(params.projectCode);
  const query = new URLSearchParams({
    location_code: params.locationCode,
    month: params.month,
    project_code: project.code,
    tenant_code: project.tenantCode,
  });
  const response = await fetch(
    `${APPOINTMENT_AVAILABILITY_API_URL}?${query.toString()}`,
    {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    },
  );

  if (!response.ok) {
    throw new Error("No fue posible consultar la disponibilidad.");
  }

  return parseAppointmentAvailability(await response.json());
}

async function submitForm(formValues: AppointmentFormValues) {
  const result = schema.safeParse(formValues);
  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return { errors: fieldErrors as Errors };
  }

  try {
    await createAppointment(result.data);
  } catch (error) {
    if (error instanceof AppointmentApiError) {
      return { errors: error.errors };
    }

    throw error;
  }

  return {
    errors: {} as Errors,
  };
}

async function createAppointment(payload: AppointmentPayload) {
  const scheduledAt = `${payload.appointment_date}T${payload.appointment_time}:00-05:00`;
  const procedureType = normalizeProcedureType(payload.type);
  const project = getSelectedProject(payload.project_code);

  const response = await fetch(APPOINTMENTS_API_URL, {
    body: JSON.stringify({
      tenant_code: project.tenantCode,
      project_code: payload.project_code,
      location_code: payload.location_code,
      company_name: payload.company,
      procedure_type: procedureType,
      purchase_order_number: payload.order_id,
      driver_name: payload.driver_name,
      driver_identification: payload.driver_id,
      truck_plate: payload.vehicle_plate,
      package_count: payload.parcel_count,
      email: payload.email,
      scheduled_at: scheduledAt,
      policies_accepted: payload.terms,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const apiPayload = await response.json().catch(() => null);
    const apiErrors = mapAppointmentApiErrors(apiPayload);

    if (apiErrors) {
      throw new AppointmentApiError(apiErrors);
    }

    throw new Error("No fue posible agendar el turno.");
  }

  return response.json();
}

function getSelectedProject(projectCode: string) {
  return (
    appointmentProjects.find((project) => project.code === projectCode) ||
    appointmentProjects[0]
  );
}

function normalizeProcedureType(value: string) {
  const normalized = value.trim().toLowerCase();

  if (normalized === "delivery" || normalized.includes("entrega")) {
    return "delivery";
  }

  if (normalized === "pickup" || normalized.includes("retiro")) {
    return "pickup";
  }

  return "other";
}

function mapAppointmentApiErrors(payload: unknown): Errors | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const rawErrors = "errors" in payload ? payload.errors : null;

  if (!rawErrors || typeof rawErrors !== "object") {
    return null;
  }

  const fieldMap: Record<string, keyof AppointmentFormValues> = {
    company_name: "company",
    driver_identification: "driver_id",
    driver_name: "driver_name",
    email: "email",
    location_code: "location_code",
    package_count: "parcel_count",
    policies_accepted: "terms",
    procedure_type: "type",
    project_code: "project_code",
    purchase_order_number: "order_id",
    scheduled_at: "appointment_time",
    truck_plate: "vehicle_plate",
  };
  const mappedErrors: Errors = {};

  for (const [apiField, messages] of Object.entries(rawErrors)) {
    const formField = fieldMap[apiField];
    if (!formField) continue;

    mappedErrors[formField] = Array.isArray(messages)
      ? messages.map(String)
      : [String(messages)];
  }

  return Object.keys(mappedErrors).length > 0 ? mappedErrors : null;
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
  slot < appointmentEnd;
  slot = addMinutes(slot, 40)
) {
  availableTimes.push(format(slot, "HH:mm"));
}

const Appointments = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] =
    useState<AppointmentFormValues>(initialFormValues);
  const [confirmation, setConfirmation] = useState({
    body: null as ReactNode,
    description: "",
    open: false,
    title: "",
  });
  const [availability, setAvailability] = useState<AppointmentAvailability>({
    unavailableTimesByDate: {},
  });
  const [availabilityMonth, setAvailabilityMonth] = useState(() =>
    getAppointmentMonth(new Date()),
  );
  const [availabilityLoadedMonth, setAvailabilityLoadedMonth] = useState("");
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [availabilityError, setAvailabilityError] = useState("");
  const selectedDate = parseAppointmentDate(formValues.appointment_date);
  const selectedMonth = formValues.appointment_date
    ? getAppointmentMonth(formValues.appointment_date)
    : "";
  const isSelectedMonthLoaded =
    selectedMonth && availabilityLoadedMonth === selectedMonth;
  const selectedDateUnavailableTimes = isSelectedMonthLoaded
    ? (availability.unavailableTimesByDate[formValues.appointment_date] ?? [])
    : [];
  const availableAppointmentTimes = getAvailableTimesForDate(
    formValues.appointment_date,
  ).filter((time) => !selectedDateUnavailableTimes.includes(time));
  const appointmentMonthDate =
    parseAppointmentDate(`${availabilityMonth}-01`) ?? new Date();
  const appointmentTimeSlots = availableTimes.map((time) => {
    const isUnavailable = selectedDateUnavailableTimes.includes(time);
    const isAvailable =
      Boolean(formValues.appointment_date) &&
      Boolean(isSelectedMonthLoaded) &&
      isAppointmentSlotInFuture(formValues.appointment_date, time) &&
      !isUnavailable;

    return {
      available: isAvailable,
      time,
    };
  });
  // const appointmentDateHelperMessage = !formValues.appointment_date
  //   ? "Escoge una fecha para ver qué horarios están disponibles."
  //   : "";
  const appointmentDateEmptyMessage =
    formValues.appointment_date && availableAppointmentTimes.length === 0
      ? "No quedan horarios disponibles para esta fecha. Escoge otra fecha para continuar."
      : "";

  const updateField = <K extends keyof AppointmentFormValues>(
    field: K,
    value: AppointmentFormValues[K],
  ) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  };
  const selectedProject = getSelectedProject(formValues.project_code);

  useEffect(() => {
    const abortController = new AbortController();
    setAvailabilityLoading(true);
    setAvailabilityError("");
    setAvailabilityLoadedMonth("");

    fetchAppointmentAvailability({
      locationCode: formValues.location_code,
      month: availabilityMonth,
      projectCode: formValues.project_code,
    })
      .then((nextAvailability) => {
        if (abortController.signal.aborted) return;

        setAvailability(nextAvailability);
        setAvailabilityLoadedMonth(availabilityMonth);
        setFormValues((current) =>
          current.appointment_time &&
          nextAvailability.unavailableTimesByDate[
            current.appointment_date
          ]?.includes(current.appointment_time)
            ? { ...current, appointment_time: "" }
            : current,
        );
      })
      .catch(() => {
        if (abortController.signal.aborted) return;

        setAvailability({ unavailableTimesByDate: {} });
        setAvailabilityLoadedMonth("");
        setAvailabilityError(
          "No fue posible consultar los turnos ya agendados. Intenta nuevamente.",
        );
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setAvailabilityLoading(false);
        }
      });

    return () => abortController.abort();
  }, [availabilityMonth, formValues.location_code, formValues.project_code]);

  const goToPreviousStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };
  const goToNextStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentStep((prev) => Math.min(steps.length, prev + 1));
  };
  const isAppointmentDateDisabled = (date: Date) => {
    const dateValue = format(date, "yyyy-MM-dd");
    const dateUnavailableTimes =
      availability.unavailableTimesByDate[dateValue] ?? [];

    return (
      startOfDay(date) < startOfDay(new Date()) ||
      date.getDate() > 25 ||
      !getAvailableTimesForDate(dateValue).some(
        (time) => !dateUnavailableTimes.includes(time),
      )
    );
  };
  const handleAppointmentDateSelect = (date: Date | undefined) => {
    const nextDate = date ? format(date, "yyyy-MM-dd") : "";

    updateField("appointment_date", nextDate);
    if (nextDate) {
      setAvailabilityMonth(getAppointmentMonth(nextDate));
    }

    const nextDateUnavailableTimes =
      availability.unavailableTimesByDate[nextDate] ?? [];

    if (
      formValues.appointment_time &&
      (!getAvailableTimesForDate(nextDate).includes(
        formValues.appointment_time,
      ) ||
        nextDateUnavailableTimes.includes(formValues.appointment_time))
    ) {
      updateField("appointment_time", "");
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currentStep !== steps.length) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await submitForm(formValues);
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

  const validateEcuadorianPlate = (plate: string): PlateValidationResult => {
    // Limpiar la placa (quitar espacios y guiones, pasar a mayúsculas)
    const cleanPlate = plate.replace(/[-\s]/g, "").toUpperCase();

    // Regex para Camiones/Vehículos (3 letras - 4 números) y Remolques (3 letras - 3 números)
    const plateRegex = /^([A-Z])([A-Z])([A-Z])(\d{3,4})$/;
    const match = cleanPlate.match(plateRegex);

    if (!match) return { isValid: false, message: "Formato de placa inválido" };

    const [, firstLetter, secondLetter, , numbers] = match;

    // Mapa de Provincias (Primera Letra)
    const provinces: Record<string, string> = {
      A: "Azuay",
      B: "Bolívar",
      U: "Cañar",
      C: "Carchi",
      X: "Cotopaxi",
      H: "Chimborazo",
      O: "El Oro",
      E: "Esmeraldas",
      W: "Galápagos",
      G: "Guayas",
      I: "Imbabura",
      L: "Loja",
      R: "Los Ríos",
      M: "Manabí",
      V: "Morona Santiago",
      N: "Napo",
      S: "Pastaza",
      P: "Pichincha",
      Y: "Santa Elena",
      J: "Santo Domingo de los Tsáchilas",
      Q: "Orellana",
      T: "Tungurahua",
      Z: "Zamora Chinchipe",
      K: "Sucumbíos",
    };

    // Identificación del Tipo de Servicio (Segunda Letra)
    let serviceType = "particular";
    if (["A", "U", "Z"].includes(secondLetter)) {
      serviceType = "público/comercial";
    } else if (["E"].includes(secondLetter)) {
      serviceType = "gubernamental";
    } else if (["X"].includes(secondLetter)) {
      serviceType = "oficial";
    } else if (["M"].includes(secondLetter)) {
      serviceType = "municipal";
    }

    // Identificación del Vehículo por longitud de números
    const vehicleCategory =
      numbers.length === 3 ? "unidad de carga" : "vehículo motorizado";
    let vehicleType = "Cabezal particular";

    if (numbers.length === 3) {
      vehicleType = "Remolque/plataforma";
    } else if (secondLetter === "E") {
      vehicleType = "Camión del Estado";
    } else if (secondLetter === "M") {
      vehicleType = "Camión municipal";
    } else if (["A", "U", "Z"].includes(secondLetter)) {
      vehicleType = "Camión de carga público";
    }

    return {
      isValid: true,
      province: provinces[firstLetter] || "Provincia Desconocida",
      serviceType,
      vehicleType,
      vehicleCategory,
      details: { firstLetter, secondLetter, numbers },
    };
  };

  const vehiclePlateValidation = formValues.vehicle_plate
    ? validateEcuadorianPlate(formValues.vehicle_plate)
    : null;
  const VehiclePlateIcon = vehiclePlateValidation?.isValid
    ? getVehiclePlateIcon(vehiclePlateValidation)
    : null;

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
                    <Field name="project_code">
                      <FieldLabel>
                        Proyecto <Required />
                      </FieldLabel>
                      <select
                        className="h-9 w-full rounded-lg border bg-white px-3 text-sm outline-none transition-colors focus:border-red-500"
                        name="project_code"
                        onChange={(event) => {
                          const nextProject = getSelectedProject(
                            event.target.value,
                          );

                          updateField("project_code", nextProject.code);
                          updateField(
                            "location_code",
                            nextProject.locations[0].code,
                          );
                        }}
                        value={formValues.project_code}
                      >
                        {appointmentProjects.map((project) => (
                          <option key={project.code} value={project.code}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                      <FieldError />
                    </Field>
                    <Field name="location_code">
                      <FieldLabel>
                        Ubicación <Required />
                      </FieldLabel>
                      <select
                        className="h-9 w-full rounded-lg border bg-white px-3 text-sm outline-none transition-colors focus:border-red-500"
                        name="location_code"
                        onChange={(event) =>
                          updateField("location_code", event.target.value)
                        }
                        value={formValues.location_code}
                      >
                        {selectedProject.locations.map((location) => (
                          <option key={location.code} value={location.code}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                      <FieldError />
                    </Field>
                    <Field name="company">
                      <FieldLabel>
                        Casa comercial / empresa <Required />
                      </FieldLabel>
                      <Input
                        name="company"
                        onChange={(event) =>
                          updateField("company", event.target.value)
                        }
                        placeholder="Ej: Juan Pérez"
                        value={formValues.company}
                      />
                      <FieldError />
                    </Field>
                    <Field name="type">
                      <FieldLabel>
                        Tipo de trámite <Required />
                      </FieldLabel>
                      {/* <Input
                        name="type"
                        onChange={(event) =>
                          updateField("type", event.target.value)
                        }
                        placeholder="Entrega, retiro, otro..."
                        value={formValues.type}
                      /> */}
                      <Autocomplete
                        items={items}
                        onValueChange={(value) => updateField("type", value)}
                        value={formValues.type}
                      >
                        <AutocompleteInput
                          name="type"
                          placeholder="Retiro, entrega, otro…"
                        />
                        <AutocompletePopup>
                          <AutocompleteEmpty>
                            Escribe el trámite a realizar...
                          </AutocompleteEmpty>
                          <AutocompleteList>
                            {(item) => (
                              <AutocompleteItem
                                key={item.value}
                                value={item.value}
                              >
                                {item.label}
                              </AutocompleteItem>
                            )}
                          </AutocompleteList>
                        </AutocompletePopup>
                      </Autocomplete>
                      <FieldError />
                    </Field>
                    <Field name="order_id">
                      <FieldLabel>
                        Número de orden de compra <Required />
                      </FieldLabel>
                      <Input
                        name="order_id"
                        onChange={(event) =>
                          updateField("order_id", event.target.value)
                        }
                        placeholder="Ej: 12345"
                        value={formValues.order_id}
                      />
                      <FieldError />
                    </Field>
                    <Field name="driver_name">
                      <FieldLabel>
                        Nombre del conductor <Required />
                      </FieldLabel>
                      <Input
                        name="driver_name"
                        onChange={(event) =>
                          updateField("driver_name", event.target.value)
                        }
                        placeholder="Ej: Gabriel Herrera"
                        value={formValues.driver_name}
                      />
                      <FieldError />
                    </Field>
                    <Field name="driver_id">
                      <FieldLabel>
                        Número de cédula <Required />
                      </FieldLabel>
                      <Input
                        name="driver_id"
                        onChange={(event) =>
                          updateField("driver_id", event.target.value)
                        }
                        placeholder="Ej: 1234567890"
                        value={formValues.driver_id}
                      />
                      <FieldError />
                    </Field>
                    <Field name="vehicle_plate">
                      <FieldLabel>
                        Placa del vehículo <Required />
                      </FieldLabel>
                      <Input
                        name="vehicle_plate"
                        onChange={(event) =>
                          updateField(
                            "vehicle_plate",
                            normalizeVehiclePlate(event.target.value),
                          )
                        }
                        placeholder="Ej: ABC-1234"
                        value={formValues.vehicle_plate}
                      />
                      {vehiclePlateValidation?.isValid && (
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-600">
                          {VehiclePlateIcon && (
                            <VehiclePlateIcon className="size-3.5 shrink-0 text-primary" />
                          )}
                          <span>
                            Estás registrando un{" "}
                            <strong className="font-medium text-gray-800">
                              {vehiclePlateValidation.vehicleType}
                            </strong>{" "}
                            de {vehiclePlateValidation.province}. Categoría:{" "}
                            {vehiclePlateValidation.vehicleCategory},{" "}
                            {vehiclePlateValidation.serviceType}.
                          </span>
                        </p>
                      )}
                      {vehiclePlateValidation &&
                        !vehiclePlateValidation.isValid && (
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-sky-700">
                            <CircleAlert className="size-3.5 shrink-0" />
                            <span>
                              Asegúrate de que la placa ingresada es correcta.
                            </span>
                          </p>
                        )}
                      <FieldError />
                    </Field>
                    <Field name="parcel_count">
                      <FieldLabel>
                        Número de paquetes/bultos <Required />
                      </FieldLabel>
                      <Input
                        name="parcel_count"
                        onChange={(event) =>
                          updateField("parcel_count", event.target.value)
                        }
                        placeholder="Ej: 5"
                        value={formValues.parcel_count}
                      />
                      <FieldError />
                    </Field>
                    <Field name="email">
                      <FieldLabel>
                        Email <Required />
                      </FieldLabel>
                      <Input
                        name="email"
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder="Ej: correo@dominio.com"
                        value={formValues.email}
                      />
                      <FieldError />
                    </Field>
                  </>
                )}

                {/* Paso 2 */}

                {currentStep === 2 && (
                  <section className="grid grid-cols-4 w-screen max-w-3xl gap-4 justify-center">
                    <Field name="appointment_date" className="col-span-4 w-full">
                      <FieldLabel>
                        Fecha y horario del turno <Required />
                      </FieldLabel>
                      <DayPicker
                        disabledDate={isAppointmentDateDisabled}
                        loading={availabilityLoading}
                        month={appointmentMonthDate}
                        onDateSelect={handleAppointmentDateSelect}
                        onMonthChange={(month) =>
                          setAvailabilityMonth(getAppointmentMonth(month))
                        }
                        onTimeSelect={(time) =>
                          updateField("appointment_time", time)
                        }
                        selectedDate={selectedDate}
                        selectedTime={formValues.appointment_time}
                        timeSlots={appointmentTimeSlots}
                        className="max-w-xl justify-self-center mx-auto"
                      />
                      <FieldError />
                    </Field>
                    <Field name="appointment_time" className="col-span-1">
                      <FieldError />
                    </Field>
                    {availabilityLoading && (
                      <p className="text-xs text-gray-500 col-span-4">
                        Consultando turnos ya agendados...
                      </p>
                    )}
                    {availabilityError && (
                      <p className="text-xs text-sky-700 col-span-4">
                        {availabilityError}
                      </p>
                    )}
                    {/* {appointmentDateHelperMessage && (
                      <p className="text-xs text-gray-500 col-span-1">
                        {appointmentDateHelperMessage}
                      </p>
                    )} */}
                    {appointmentDateEmptyMessage && (
                      <p className="text-xs text-sky-700 col-span-1">
                        {appointmentDateEmptyMessage}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 col-span-4">
                      * La disponibilidad de turnos es únicamente del día 01 al
                      25 de cada mes, en horarios de 08:30 a 14:00.
                    </p>
                  </section>
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
                        <Checkbox
                          checked={formValues.terms}
                          name="terms"
                          onCheckedChange={(checked) =>
                            updateField("terms", checked)
                          }
                        />
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
                    onClick={goToPreviousStep}
                    type="button"
                    variant="outline"
                  >
                    Anterior
                  </Button>
                  {currentStep < steps.length ? (
                    <Button
                      className="w-32 hover:bg-primary/10"
                      disabled={currentStep >= steps.length}
                      onClick={goToNextStep}
                      type="button"
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
