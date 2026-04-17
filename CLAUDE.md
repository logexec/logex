# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
bun run dev        # Start Vite dev server with HMR

# Build
bun run build      # Type-check with tsc, then build with Vite

# Lint
bun run lint       # Run ESLint on all TS/TSX files

# Preview production build
bun run preview
```

No test suite is configured in this project.

## Architecture

This is a **React 19 + TypeScript + Vite** marketing/corporate website for LogeX (a supply chain company in Ecuador). UI is styled with **Tailwind CSS v4** and uses `motion/react` for page transitions.

### Routing

All routes are defined in `src/App.tsx` using React Router v7. Every page is wrapped in `<PageWrapper>`, which applies a fade/slide transition via `AnimatePresence` and renders the mobile bottom nav on small screens.

### Layout structure

- `Navbar` — sticky top bar, hidden on mobile (replaced by `MobileNavbar`)
- `MobileNavbar` — fixed bottom tab bar on `< lg` screens
- `PageWrapper` — wraps each page in a `motion.div` for route transitions and adds `pb-24` padding so content clears the mobile nav
- `Footer` — standard bottom footer

### Pages

| Route | Component |
|---|---|
| `/` | `Home` |
| `/nosotros` | `Nosotros` |
| `/servicios` | `Servicios` |
| `/almacenes` | `Almacenes` |
| `/consultoria` | `Consultoria` |
| `/tecnologia` | `Tecnologia` |
| `/sistemas` | `Sistemas` |
| `/responsabilidad-social` | `RSE` |
| `/contacto` | `Contacto` |
| `/ayuda` | `Ayuda` |
| `/faq` | `FAQ` |
| `/appointments` | `Appointments` |
| `/empleo` | `Careers` |

### Appointments page

The most complex page. It is a 3-step multi-step form for scheduling supplier delivery/pickup appointments at LogeX distribution centers. Key internals:

- **Step 1**: supplier/driver info fields
- **Step 2**: date + time slot picker (`DayPicker` component combining `react-day-picker` calendar with a scroll area of time buttons)
- **Step 3**: reception policy acceptance

Validation uses **Zod** (`src/pages/Appointments.tsx`). The form submits to a backend API configured via env vars. Time slots run 08:30–14:00 in 40-minute intervals, available only days 1–25 of each month.

API URLs are configured via `.env` (see `.env.example`):
- `VITE_APPOINTMENTS_API_URL` — POST to book an appointment
- `VITE_APPOINTMENT_AVAILABILITY_API_URL` — GET to check booked slots by month

### UI components

`src/components/ui/` contains custom primitives built on top of:
- `@base-ui/react` — `Form`, `Field`, `FieldError`, `FieldLabel`, `Autocomplete`, `AlertDialog`, `ScrollArea`, `Checkbox`
- `@radix-ui/react-*` — `Accordion`, `Popover`
- `react-day-picker` — wrapped in `Calendar` and then composed into `DayPicker`

The `Button` component in `src/components/ui/button.tsx` uses `class-variance-authority` for variants. It accepts a `render` prop (renders as a different element) and a `loading` prop.

### Colors

Brand colors are centralized in `src/utils/colors.ts` and used inline via `style={{ color: colors.X }}` rather than Tailwind custom classes:
- `colors.logex` — `#DD1B1B` (LogeX red, maps to Tailwind `primary`)
- `colors.navy` — `#1A1D2C` (dark navy, used for headings)
- `colors.orange` — `#F85E00`

### Path aliases

`@/` is aliased to `src/` (configured in `tsconfig.app.json` and Vite config).
