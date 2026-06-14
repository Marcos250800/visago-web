import { ImageResponse } from "next/og";
import { LogoSvg } from "@/lib/og";

export const alt = "VisaGo — Tu ruta segura";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Tarjeta para compartir (WhatsApp, redes): solo el isotipo sobre fondo oscuro. */
export default function Image() {
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
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 820,
            height: 820,
            borderRadius: 9999,
            background: "radial-gradient(closest-side, rgba(245,245,245,0.12), rgba(10,10,10,0))",
          }}
        />
        <LogoSvg height={340} />
      </div>
    ),
    { ...size },
  );
}
