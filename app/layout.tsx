import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { restaurante } from "@/data/restaurante";
import { SITE_URL } from "@/lib/site";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const titulo = `${restaurante.nombre} | Parrilla argentina en ${restaurante.localidad}`;
const descripcion = `${restaurante.descripcionCorta} Reservá tu mesa online en ${restaurante.nombre}, ${restaurante.localidad}, ${restaurante.provincia}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titulo,
    template: `%s | ${restaurante.nombre}`,
  },
  description: descripcion,
  keywords: [
    "parrilla",
    "parrillada",
    "asado",
    "restaurante",
    restaurante.localidad,
    restaurante.provincia,
    "reservas online",
  ],
  openGraph: {
    title: titulo,
    description: descripcion,
    url: SITE_URL,
    siteName: restaurante.nombre,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-carbon-950 text-cream-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
