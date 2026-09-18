import { ImageResponse } from "next/og";

import { restaurante } from "@/data/restaurante";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #14110f 0%, #1e1916 55%, #3a3128 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#eeae64",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {restaurante.localidad}, {restaurante.provincia}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 600,
            color: "#faf6ee",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          {restaurante.nombre}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#cbc0b2",
            maxWidth: 820,
          }}
        >
          {restaurante.eslogan}
        </div>
      </div>
    ),
    size
  );
}
