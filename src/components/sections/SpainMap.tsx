"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTheme } from "@/components/theme/ThemeProvider";
import type { Universidad } from "@/lib/universidades";

/**
 * Mapa de España (Leaflet) con un punto por universidad pública. Estilo
 * monocromo a juego con la web (tiles claros/oscuros según el tema). Al pulsar
 * un punto, su popup enlaza a la web oficial. Se carga solo en cliente.
 */
export function SpainMap({ universities }: { universities: Universidad[] }) {
  const { theme } = useTheme();
  const dark = theme !== "light";

  const tiles = dark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  const dot = dark ? "#f4f4f3" : "#0a0a0b";
  const ring = dark ? "rgba(244,244,243,0.25)" : "rgba(10,10,11,0.2)";
  const icon = L.divIcon({
    html: `<div style="width:12px;height:12px;border-radius:50%;background:${dot};box-shadow:0 0 0 4px ${ring};"></div>`,
    className: "",
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    popupAnchor: [0, -8],
  });

  return (
    <MapContainer
      key={theme}
      center={[40, -3.7]}
      zoom={5}
      scrollWheelZoom={true}
      attributionControl={false}
      style={{ height: "70vh", minHeight: "440px", width: "100%", background: dark ? "#0a0a0b" : "#ffffff" }}
    >
      <TileLayer url={tiles} />
      {universities.map((u) => (
        <Marker key={u.url} position={[u.lat, u.lng]} icon={icon}>
          <Popup>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">{u.city}</span>
            <strong className="mt-0.5 block text-[13px] leading-snug">{u.name}</strong>
            <span className="mt-1 block text-[11px] leading-snug opacity-70">{u.description}</span>
            <a href={u.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[11px] font-semibold">
              Visitar web oficial ↗
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
