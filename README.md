# Parrilla el Refugio — Demo comercial

Demo de sitio web premium para **Parrilla el Refugio** (Av. Santa Fe 1901, Cañada de Gómez, Santa Fe), pensada para presentarle al dueño el potencial de un sistema propio: web, menú digital, reservas online y confirmación por WhatsApp.

## Origen de los datos

- **Verificado en Google Maps** (18/09/2026): nombre, dirección, teléfono, rating (4.3★) y cantidad de reseñas (659), accesibilidad, horario de apertura nocturna.
- **Contenido de demo** (a reemplazar antes de producción): horario completo de la semana, Instagram, menú y precios, fotografías (stock de Unsplash), textos de marca.

Todo el contenido editable está centralizado en `data/` — ver más abajo.

## Tecnologías utilizadas

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind CSS v4** (tokens de diseño en `app/globals.css`)
- **Motion** (ex Framer Motion) para animaciones
- **Lucide React** para iconografía
- **React Hook Form + Zod** para el formulario de reservas
- **Radix UI** (`Dialog`, `Slot`, `Label`) para accesibilidad (menú mobile, lightbox de galería)
- **class-variance-authority / tailwind-merge / clsx** para variantes de componentes
- Server Actions de Next.js como punto de integración para el backend real

## Estructura del proyecto

```
app/
  page.tsx              → Home
  menu/page.tsx          → Menú digital (pensado para QR de mesa)
  reservas/page.tsx      → Sistema de reservas
  layout.tsx             → Fuentes, metadata, Navbar/Footer/WhatsApp flotante
  sitemap.ts, robots.ts, icon.tsx, opengraph-image.tsx
components/
  ui/                    → Button, SectionTitle, AnimatedSection, WhatsApp, inputs
  navbar/, hero/, experience/, specialty/, menu/, reservas/, galeria/, contacto/, footer/
data/
  restaurante.ts         → Info del local (nombre, dirección, horarios, redes)
  menu.ts                → Categorías y productos (precios demo)
  galeria.ts             → Imágenes de la galería
  reservas.ts            → Configuración y disponibilidad mock
lib/
  utils.ts, motion.ts, whatsapp.ts
  reservas/               → schema (Zod), actions (Server Action mock), fechas, calendar
types/                    → Tipos compartidos
```

## Funcionalidades implementadas

- Landing premium con hero fullscreen, secciones de marca, especialidades, testimonios, menú destacado, galería con lightbox y contacto con mapa embebido.
- Navbar con transición transparente → blur al hacer scroll, menú mobile fullscreen animado.
- Menú digital (`/menu`) con búsqueda, categorías sticky con scroll-spy y grilla de productos.
- Sistema de reservas (`/reservas`) en 4 pasos (fecha, personas, horario, datos) con indicador de progreso, disponibilidad visual mock y confirmación final.
- Generación automática del mensaje de WhatsApp prellenado y botón para agregar el evento a Google Calendar.
- Botón flotante de WhatsApp con aparición al hacer scroll.
- SEO: metadata, Open Graph e ícono generados, `sitemap.xml` y `robots.txt`.
- Accesibilidad: navegación por teclado en diálogos (Radix), `aria-label` en controles icónicos, estados de foco visibles, `prefers-reduced-motion` respetado.

## Qué partes son mock (a reemplazar para producción)

- **Reservas**: `lib/reservas/actions.ts` simula la creación de la reserva (no persiste en ninguna base). La disponibilidad horaria (`data/reservas.ts`) es determinística, no real.
- **Menú y precios**: `data/menu.ts` contiene precios de ejemplo, claramente estructurados para reemplazarse por la carta real.
- **Imágenes**: todas las fotos (hero, especialidades, galería, menú) son stock de Unsplash usado como referencia visual — reemplazar por fotografía propia del local.
- **Horario completo e Instagram**: solo se confirmó que el local abre 20:00; el resto de `data/restaurante.ts` está marcado en comentarios como contenido a confirmar con el dueño.
- La reserva "se confirma" en la UI, pero la confirmación real ocurre cuando el cliente envía el mensaje de WhatsApp — no se simula una persistencia que no existe.

## Qué habría que conectar para producción

1. **Base de datos de reservas**: reemplazar `crearReservaAction` en `lib/reservas/actions.ts` por una escritura real en Supabase/PostgreSQL (tabla `reservas`) y calcular disponibilidad real en `data/reservas.ts` / una Route Handler.
2. **Panel administrativo** (`/admin`): dashboard, gestión de reservas, menú, horarios y configuración — la arquitectura actual (datos centralizados en `data/`, Server Actions) está pensada para soportarlo sin refactors grandes.
3. **Notificación al restaurante**: enviar la reserva al dueño (API de WhatsApp Business, email o notificación push) en el momento en que se guarda, no solo cuando el cliente la reenvía manualmente.
4. **Fotografía real y contenido verificado** (horarios completos, Instagram, redes).
5. Opcional: CMS liviano para que el dueño edite el menú sin tocar código.

## Variables de entorno

Ver `.env.example`.

| Variable | Uso | Obligatoria |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública usada en metadata, sitemap y robots | Recomendada en producción (tiene fallback) |
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` | Futura conexión a Supabase para reservas reales | No (todavía no se usan) |

El número de WhatsApp **no** es una variable de entorno: está centralizado en `data/restaurante.ts` (`whatsappNumero`) y se consume siempre desde `lib/whatsapp.ts`.

## Cómo ejecutar localmente

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run lint    # ESLint
npm run build   # build de producción
npm run start   # sirve el build de producción
```

## Cómo desplegar en Vercel

1. Subir el repositorio a GitHub (u otro proveedor Git).
2. En [vercel.com/new](https://vercel.com/new), importar el repositorio (Vercel detecta Next.js automáticamente, no requiere configuración adicional).
3. Definir la variable de entorno `NEXT_PUBLIC_SITE_URL` con el dominio final que asigne Vercel (o el dominio propio).
4. Deploy. Cada push a la rama principal genera un nuevo deploy automáticamente.
