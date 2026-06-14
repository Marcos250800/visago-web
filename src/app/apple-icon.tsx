import { ImageResponse } from "next/og";
import { LogoSvg } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icono para "Añadir a pantalla de inicio" en iOS. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <LogoSvg height={120} />
      </div>
    ),
    { ...size },
  );
}
