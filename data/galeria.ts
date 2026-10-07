import type { ImagenGaleria } from "@/types";

// Fotos de Unsplash hasta tener fotos del local
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const galeria: ImagenGaleria[] = [
  {
    id: "g1",
    src: unsplash("1529193591184-b1d58069ecdd"),
    alt: "Costillas a las brasas sobre la parrilla",
    categoria: "parrilla",
    ancho: 1200,
    alto: 1500,
  },
  {
    id: "g2",
    src: unsplash("1544025162-d76694265947"),
    alt: "Tabla de embutidos y achuras para compartir",
    categoria: "platos",
    ancho: 1200,
    alto: 900,
  },
  {
    id: "g3",
    src: unsplash("1467003909585-2f8a72700288"),
    alt: "Mesa servida con copas de vino en ambiente cálido",
    categoria: "ambiente",
    ancho: 1200,
    alto: 1500,
  },
  {
    id: "g4",
    src: unsplash("1414235077428-338989a2e8c0"),
    alt: "Plato de autor sobre mesa de madera oscura",
    categoria: "platos",
    ancho: 1200,
    alto: 800,
  },
  {
    id: "g5",
    src: unsplash("1517248135467-4c7edcad34c4"),
    alt: "Salón principal con mesas de madera e iluminación cálida",
    categoria: "ambiente",
    ancho: 1200,
    alto: 900,
  },
  {
    id: "g6",
    src: unsplash("1555939594-58d7cb561ad1"),
    alt: "Parrillada mixta servida para compartir",
    categoria: "parrilla",
    ancho: 1200,
    alto: 900,
  },
  {
    id: "g7",
    src: unsplash("1551218808-94e220e084d2"),
    alt: "Manos de un parrillero terminando de emplatar",
    categoria: "equipo",
    ancho: 1200,
    alto: 1500,
  },
  {
    id: "g8",
    src: unsplash("1544148103-0773bf10d330"),
    alt: "Comensales disfrutando de la terraza",
    categoria: "ambiente",
    ancho: 1200,
    alto: 900,
  },
  {
    id: "g9",
    src: unsplash("1552566626-52f8b828add9"),
    alt: "Pasillo del salón con mesas de madera vacías",
    categoria: "ambiente",
    ancho: 1200,
    alto: 1500,
  },
  {
    id: "g10",
    src: unsplash("1550966871-3ed3cdb5ed0c"),
    alt: "Interior en penumbra con mesas de madera",
    categoria: "ambiente",
    ancho: 1200,
    alto: 900,
  },
  {
    id: "g11",
    src: unsplash("1571877227200-a0d98ea607e9"),
    alt: "Porción de tiramisú de la casa",
    categoria: "platos",
    ancho: 1200,
    alto: 1500,
  },
  {
    id: "g12",
    src: unsplash("1432139555190-58524dae6a55"),
    alt: "Pollo al asador recién salido de la parrilla",
    categoria: "parrilla",
    ancho: 1200,
    alto: 900,
  },
];
