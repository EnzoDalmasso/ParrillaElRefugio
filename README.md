# Parrilla el Refugio

Sitio web para Parrilla el Refugio, una parrilla de Cañada de Gómez (Av. Santa Fe 1901). Lo armé como demo para mostrarle al dueño cómo podría funcionar una web propia con menú digital y reservas, en lugar de depender solo de Google Maps y WhatsApp.

Los datos del local (dirección, teléfono, rating y cantidad de reseñas) los saqué de la ficha de Google Maps en septiembre de 2026. El resto (horarios completos, precios del menú, fotos) es contenido de prueba hasta que el restaurante me pase lo real; las fotos son de Unsplash.

## Stack

Next.js 16 con App Router, React 19 y TypeScript. Estilos con Tailwind v4, animaciones con Motion y el formulario de reservas con React Hook Form + Zod. Para el menú mobile y el lightbox de la galería usé Radix, más que nada por el manejo de foco y teclado.

## Qué tiene

- Home con hero, especialidades de la casa, reseñas, galería y un mapa embebido en la sección de contacto.
- `/menu`: carta con buscador y categorías que se marcan solas a medida que scrolleás. La idea es que sea lo que abre el QR de cada mesa.
- `/reservas`: un formulario en 4 pasos (fecha, cantidad de personas, horario y datos). Al final arma el mensaje de WhatsApp con todo cargado y ofrece agregar la reserva a Google Calendar.
- Botón flotante de WhatsApp, sitemap, robots y la imagen de Open Graph generada con `next/og`.

## Lo que todavía no es real

Las reservas no se guardan en ningún lado. `lib/reservas/actions.ts` valida los datos y simula la respuesta, y la disponibilidad de horarios en `data/reservas.ts` se calcula a partir de la fecha para que no se vea siempre igual, pero no refleja mesas reales. Por ahora la reserva se confirma cuando el cliente manda el WhatsApp.

Si el proyecto avanza, lo siguiente sería:

1. Guardar las reservas en una base (pensaba en Supabase/Postgres) y calcular la disponibilidad desde ahí.
2. Un panel `/admin` para que el dueño vea las reservas y pueda cambiar menú y horarios sin tocar código.
3. Avisarle al restaurante cuando entra una reserva, sin esperar a que el cliente mande el mensaje.
4. Fotos propias del local.

## Estructura

Todo el contenido editable (info del local, menú, galería, configuración de reservas) está en `data/`, así cambiar un precio o un horario no implica tocar componentes.

```
app/          páginas, layout, sitemap, robots, ícono y OG image
components/   componentes agrupados por sección
data/         contenido del sitio
lib/          helpers, armado de links de WhatsApp y lógica de reservas
types/        tipos compartidos
```

## Correrlo localmente

```bash
npm install
npm run dev
```

Queda en http://localhost:3000. También están `npm run lint`, `npm run build` y `npm run start`.

La única variable de entorno es `NEXT_PUBLIC_SITE_URL`, que se usa en la metadata y el sitemap. Si no está definida toma `http://localhost:3000`. Hay un `.env.example` de referencia; el `.env` real no se sube al repo.
