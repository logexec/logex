/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPOINTMENT_AVAILABILITY_API_URL?: string;
  readonly VITE_APPOINTMENTS_API_URL?: string;
  readonly VITE_CONTACT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
