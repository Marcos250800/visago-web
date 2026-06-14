"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTheme } from "@/components/theme/ThemeProvider";
import { SITE } from "@/lib/site";

/**
 * Mapa de Berna (Suiza), sede de VisaGo. Estilo monocromo a juego con la web
 * (tiles claros/oscuros según el tema). Se carga solo en cliente (Leaflet usa
 * `window`) — ver ContactMap.
 */
const BERN: [number, number] = [46.948, 7.4474];

export function BernMap() {
  const { theme } = useTheme();
  const dark = theme !== "light";

  const tiles = dark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  const dot = dark ? "#f4f4f3" : "#0a0a0b";
  const ring = dark ? "rgba(244,244,243,0.25)" : "rgba(10,10,11,0.2)";
  const icon = L.divIcon({
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${dot};box-shadow:0 0 0 5px ${ring};"></div>`,
    className: "",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -9],
  });

  return (
    <MapContainer
      key={theme}
      center={BERN}
      zoom={12}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ height: "100%", width: "100%", background: dark ? "#0a0a0b" : "#ffffff" }}
    >
      <TileLayer url={tiles} />
      <Marker position={BERN} icon={icon}>
        <Popup>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">{SITE.name}</span>
          <strong className="mt-0.5 block text-[13px] leading-snug">{SITE.location}</strong>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
