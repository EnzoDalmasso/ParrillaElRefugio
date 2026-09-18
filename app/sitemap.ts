import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://parrilla-el-refugio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/menu", "/reservas"];

  return rutas.map((ruta) => ({
    url: `${siteUrl}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: ruta === "" ? 1 : 0.8,
  }));
}
