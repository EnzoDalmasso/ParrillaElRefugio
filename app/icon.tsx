import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110f",
          borderRadius: 16,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c-.3 3-2.5 4-2.5 7a2.5 2.5 0 0 0 5 0c0-.6-.2-1-.4-1.5.9.6 1.9 2 1.9 4a4.5 4.5 0 1 1-9 0C7 7.5 10 6 12 2Z"
            fill="#db8a3f"
          />
        </svg>
      </div>
    ),
    size
  );
}
