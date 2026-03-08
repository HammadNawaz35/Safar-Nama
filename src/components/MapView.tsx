import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { DESTINATIONS } from "@/data/destinations";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default icon
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapView() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div ref={containerRef} className="w-full h-[400px] md:h-[500px] bg-card rounded-sm" />;

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-border">
      <MapContainer
        center={[34.5, 73.5]}
        zoom={6}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {DESTINATIONS.map((d) => (
          <Marker key={d.id} position={[d.lat, d.lng]} icon={icon}>
            <Popup>
              <div className="text-center">
                <strong className="text-sm">{d.name}</strong>
                <br />
                <span className="text-xs text-gray-600">{d.province}</span>
                <br />
                <Link to={`/booking?dest=${encodeURIComponent(d.name)}`} className="text-xs text-blue-600 underline">
                  Book Now →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
