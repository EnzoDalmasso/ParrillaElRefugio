import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/menu", "/reservas"];

  return rutas.map((ruta) => ({
    url: `${SITE_URL}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: ruta === "" ? 1 : 0.8,
  }));
}
